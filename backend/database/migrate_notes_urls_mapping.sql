-- Migration Script: Create notes_urls_mapping junction table
-- This enables many-to-many relationship between notes and urls_master
-- URLs can be added to notes, filtered by the note's category

-- ============================================
-- Step 1: Create notes_urls_mapping junction table
-- ============================================
CREATE TABLE IF NOT EXISTS notes_urls_mapping (
    id SERIAL PRIMARY KEY,
    note_id INTEGER NOT NULL REFERENCES notes(id) ON DELETE CASCADE,
    url_id INTEGER NOT NULL REFERENCES urls_master(id) ON DELETE CASCADE,
    created_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT notes_urls_mapping_note_url_unique UNIQUE (note_id, url_id)
);

-- ============================================
-- Step 2: Create indexes for better query performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_notes_urls_mapping_note_id ON notes_urls_mapping(note_id);
CREATE INDEX IF NOT EXISTS idx_notes_urls_mapping_url_id ON notes_urls_mapping(url_id);
CREATE INDEX IF NOT EXISTS idx_notes_urls_mapping_created_on ON notes_urls_mapping(created_on DESC);

-- ============================================
-- Step 3: Verify the migration
-- ============================================
-- Verify table exists
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_name = 'notes_urls_mapping'
ORDER BY ordinal_position;

-- Verify indexes exist
SELECT 
    indexname, 
    indexdef 
FROM pg_indexes 
WHERE tablename = 'notes_urls_mapping'
ORDER BY indexname;

-- Verify foreign key constraints
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
    AND tc.table_name = 'notes_urls_mapping';

