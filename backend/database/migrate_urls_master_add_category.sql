-- Migration Script: Add category_id to urls_master table
-- This script adds category_id column and updates uniqueness constraints to be category-level

-- ============================================
-- Step 1: Add category_id column
-- ============================================
ALTER TABLE urls_master 
ADD COLUMN IF NOT EXISTS category_id INTEGER;

-- ============================================
-- Step 2: Add foreign key constraint to category_master
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
            AND tc.table_name = 'urls_master'
            AND kcu.column_name = 'category_id'
            AND ccu.table_name = 'category_master'
    ) THEN
        ALTER TABLE urls_master 
        ADD CONSTRAINT urls_master_category_id_fkey 
        FOREIGN KEY (category_id) 
        REFERENCES category_master(id) 
        ON DELETE SET NULL;
        
        RAISE NOTICE 'Added foreign key constraint to category_master';
    ELSE
        RAISE NOTICE 'Foreign key constraint to category_master already exists';
    END IF;
END $$;

-- ============================================
-- Step 3: Create index on category_id for better query performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_urls_master_category_id ON urls_master(category_id);

-- ============================================
-- Step 4: Drop old global uniqueness constraints/indexes
-- ============================================
-- Drop old unique indexes if they exist
DROP INDEX IF EXISTS idx_urls_master_label_unique;
DROP INDEX IF EXISTS idx_urls_master_url_unique;

-- Also drop any unique constraints if they exist
DO $$
DECLARE
    constraint_name TEXT;
BEGIN
    -- Drop label unique constraint
    SELECT conname INTO constraint_name
    FROM pg_constraint
    WHERE conrelid = 'urls_master'::regclass
      AND contype = 'u'
      AND conkey::int[] = (SELECT array_agg(attnum) FROM pg_attribute WHERE attrelid = 'urls_master'::regclass AND attname = 'label');
    
    IF constraint_name IS NOT NULL THEN
        EXECUTE format('ALTER TABLE urls_master DROP CONSTRAINT IF EXISTS %I', constraint_name);
        RAISE NOTICE 'Dropped label unique constraint: %', constraint_name;
    END IF;
    
    -- Drop url unique constraint
    SELECT conname INTO constraint_name
    FROM pg_constraint
    WHERE conrelid = 'urls_master'::regclass
      AND contype = 'u'
      AND conkey::int[] = (SELECT array_agg(attnum) FROM pg_attribute WHERE attrelid = 'urls_master'::regclass AND attname = 'url');
    
    IF constraint_name IS NOT NULL THEN
        EXECUTE format('ALTER TABLE urls_master DROP CONSTRAINT IF EXISTS %I', constraint_name);
        RAISE NOTICE 'Dropped url unique constraint: %', constraint_name;
    END IF;
END $$;

-- ============================================
-- Step 5: Create category-level unique indexes
-- ============================================
-- Label uniqueness per category (null category treated as its own group)
CREATE UNIQUE INDEX IF NOT EXISTS idx_urls_master_category_label_unique 
ON urls_master (COALESCE(category_id, -1), LOWER(TRIM(label))) 
WHERE is_deleted = false;

-- URL uniqueness per category (null category treated as its own group)
CREATE UNIQUE INDEX IF NOT EXISTS idx_urls_master_category_url_unique 
ON urls_master (COALESCE(category_id, -1), LOWER(TRIM(url))) 
WHERE is_deleted = false;

-- ============================================
-- Step 6: Optional - Set default category_id for existing records
-- ============================================
-- If you want to set all existing records to a default category (e.g., category with id=1)
-- Uncomment and modify the following:
-- UPDATE urls_master 
-- SET category_id = 1 
-- WHERE category_id IS NULL 
--   AND EXISTS (SELECT 1 FROM category_master WHERE id = 1);

-- ============================================
-- Step 7: Verify the migration
-- ============================================
-- Verify foreign key constraint exists
SELECT 
    tc.constraint_name, 
    tc.table_name, 
    kcu.column_name,
    ccu.table_name AS foreign_table_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
    AND tc.table_schema = kcu.table_schema
JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
    AND ccu.table_schema = tc.table_schema
WHERE tc.constraint_type = 'FOREIGN KEY'
    AND tc.table_name = 'urls_master'
    AND kcu.column_name = 'category_id';

-- Verify unique indexes exist
SELECT 
    indexname, 
    indexdef 
FROM pg_indexes 
WHERE tablename = 'urls_master'
  AND indexname LIKE '%_unique'
ORDER BY indexname;

