-- Migration Script: Add is_default column to priority_master table
-- This script adds the is_default column to allow marking one priority as the default priority
-- Only one priority should be set as default at any given time

-- ============================================
-- Step 1: Add is_default column
-- ============================================
ALTER TABLE priority_master 
ADD COLUMN IF NOT EXISTS is_default BOOLEAN NOT NULL DEFAULT false;

-- ============================================
-- Step 2: Create index for better query performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_priority_master_is_default ON priority_master(is_default) 
WHERE is_default = true;

-- ============================================
-- Step 3: Add partial unique index to ensure only one default priority
-- ============================================
-- This ensures that only one priority can have is_default = true at a time
-- (only applies to non-deleted records)
CREATE UNIQUE INDEX IF NOT EXISTS idx_priority_master_default_unique 
ON priority_master (is_default) 
WHERE is_default = true AND is_deleted = false;

-- ============================================
-- Step 4: Optional - Set an existing priority as default if none exists
-- ============================================
-- Uncomment the following if you want to set the first active priority as default
-- UPDATE priority_master 
-- SET is_default = true 
-- WHERE id = (
--     SELECT id FROM priority_master 
--     WHERE is_deleted = false AND is_active = true 
--     ORDER BY id ASC 
--     LIMIT 1
-- )
-- AND NOT EXISTS (SELECT 1 FROM priority_master WHERE is_default = true AND is_deleted = false);

-- ============================================
-- Verification Query
-- ============================================
-- Run this to verify the column was added and check current defaults:
-- SELECT id, priority, color, is_default, is_active, is_deleted 
-- FROM priority_master 
-- ORDER BY is_default DESC, priority ASC;

