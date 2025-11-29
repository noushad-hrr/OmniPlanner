-- Migration Script: Update Notes table to use category_master instead of master_categories
-- Run this script after master_categories table has been deleted

-- ============================================
-- Step 1: Check for orphaned category references
-- ============================================
-- This query shows any notes that have category_id values that don't exist in category_master
-- Run this first to see if there are any orphaned references
SELECT 
    n.id as note_id,
    n.title,
    n.category_id,
    COUNT(*) OVER() as total_orphaned_notes
FROM notes n
WHERE n.category_id IS NOT NULL 
  AND n.category_id NOT IN (SELECT id FROM category_master WHERE is_deleted = false)
ORDER BY n.id;

-- ============================================
-- Step 2: Handle orphaned references (OPTIONAL)
-- ============================================
-- If you have orphaned references and want to set them to NULL:
-- Uncomment the following line:
-- UPDATE notes SET category_id = NULL 
-- WHERE category_id IS NOT NULL 
--   AND category_id NOT IN (SELECT id FROM category_master WHERE is_deleted = false);

-- OR if you want to keep them for manual review:
-- Leave them as is (the FK constraint will allow NULL values)

-- ============================================
-- Step 3: Find and drop the old foreign key constraint
-- ============================================
-- Find the constraint name (if it exists)
SELECT 
    tc.constraint_name, 
    tc.table_name, 
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
    AND tc.table_schema = kcu.table_schema
JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
    AND ccu.table_schema = tc.table_schema
WHERE tc.constraint_type = 'FOREIGN KEY'
    AND tc.table_name = 'notes'
    AND ccu.table_name = 'master_categories';

-- Drop the old foreign key constraint (replace 'notes_category_id_fkey' with actual constraint name from above)
-- Common constraint names might be: notes_category_id_fkey, notes_category_id_fk, etc.
DO $$
DECLARE
    constraint_name TEXT;
BEGIN
    -- Find the constraint name
    SELECT tc.constraint_name INTO constraint_name
    FROM information_schema.table_constraints AS tc
    JOIN information_schema.key_column_usage AS kcu
        ON tc.constraint_name = kcu.constraint_name
        AND tc.table_schema = kcu.table_schema
    JOIN information_schema.constraint_column_usage AS ccu
        ON ccu.constraint_name = tc.constraint_name
        AND ccu.table_schema = tc.table_schema
    WHERE tc.constraint_type = 'FOREIGN KEY'
        AND tc.table_name = 'notes'
        AND ccu.table_name = 'master_categories'
    LIMIT 1;
    
    -- Drop if found
    IF constraint_name IS NOT NULL THEN
        EXECUTE format('ALTER TABLE notes DROP CONSTRAINT IF EXISTS %I', constraint_name);
        RAISE NOTICE 'Dropped foreign key constraint: %', constraint_name;
    ELSE
        RAISE NOTICE 'No foreign key constraint found pointing to master_categories';
    END IF;
END $$;

-- ============================================
-- Step 4: Add new foreign key constraint to category_master
-- ============================================
-- Add foreign key constraint if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.table_constraints AS tc
        JOIN information_schema.key_column_usage AS kcu
            ON tc.constraint_name = kcu.constraint_name
            AND tc.table_schema = kcu.table_schema
        JOIN information_schema.constraint_column_usage AS ccu
            ON ccu.constraint_name = tc.constraint_name
            AND ccu.table_schema = tc.table_schema
        WHERE tc.constraint_type = 'FOREIGN KEY'
            AND tc.table_name = 'notes'
            AND kcu.column_name = 'category_id'
            AND ccu.table_name = 'category_master'
    ) THEN
        ALTER TABLE notes 
        ADD CONSTRAINT notes_category_id_fkey 
        FOREIGN KEY (category_id) 
        REFERENCES category_master(id) 
        ON DELETE SET NULL;
        
        RAISE NOTICE 'Added foreign key constraint to category_master';
    ELSE
        RAISE NOTICE 'Foreign key constraint to category_master already exists';
    END IF;
END $$;

-- ============================================
-- Step 5: Verify the migration
-- ============================================
-- Verify the constraint exists and points to category_master
SELECT 
    tc.constraint_name, 
    tc.table_name, 
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
    AND tc.table_schema = kcu.table_schema
JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
    AND ccu.table_schema = tc.table_schema
WHERE tc.constraint_type = 'FOREIGN KEY'
    AND tc.table_name = 'notes'
    AND kcu.column_name = 'category_id';

-- Count notes with valid category references
SELECT 
    COUNT(*) as total_notes,
    COUNT(category_id) as notes_with_category,
    COUNT(*) - COUNT(category_id) as notes_without_category
FROM notes n
LEFT JOIN category_master cm ON n.category_id = cm.id AND cm.is_deleted = false
WHERE n.category_id IS NULL OR cm.id IS NOT NULL;

