-- Simple Migration: Update Notes FK from master_categories to category_master
-- Run these commands in order

-- Step 1: Drop old foreign key constraint (if exists)
-- Replace 'notes_category_id_fkey' with your actual constraint name
-- To find it, run: \d notes in psql or check the detailed migration script
ALTER TABLE notes DROP CONSTRAINT IF EXISTS notes_category_id_fkey;
ALTER TABLE notes DROP CONSTRAINT IF EXISTS notes_category_id_fk;
ALTER TABLE notes DROP CONSTRAINT IF EXISTS fk_notes_category;

-- Step 2: Set orphaned category_ids to NULL (if any notes reference non-existent categories)
UPDATE notes 
SET category_id = NULL 
WHERE category_id IS NOT NULL 
  AND category_id NOT IN (SELECT id FROM category_master WHERE is_deleted = false);

-- Step 3: Add new foreign key constraint to category_master
ALTER TABLE notes 
ADD CONSTRAINT notes_category_id_fkey 
FOREIGN KEY (category_id) 
REFERENCES category_master(id) 
ON DELETE SET NULL;

-- Step 4: Verify
SELECT 
    tc.constraint_name, 
    ccu.table_name AS references_table
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
WHERE tc.table_name = 'notes' 
  AND kcu.column_name = 'category_id'
  AND tc.constraint_type = 'FOREIGN KEY';

