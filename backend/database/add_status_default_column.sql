-- Migration Script: Add is_default column to status_master table
-- This script adds the is_default column to allow marking one status as the default status
-- Only one status should be set as default at any given time

-- ============================================
-- Step 1: Add is_default column
-- ============================================
ALTER TABLE status_master 
ADD COLUMN IF NOT EXISTS is_default BOOLEAN NOT NULL DEFAULT false;

-- ============================================
-- Step 2: Create index for better query performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_status_master_is_default ON status_master(is_default) 
WHERE is_default = true;

-- ============================================
-- Step 3: Add partial unique index to ensure only one default status
-- ============================================
-- This ensures that only one status can have is_default = true at a time
-- (only applies to non-deleted records)
CREATE UNIQUE INDEX IF NOT EXISTS idx_status_master_default_unique 
ON status_master (is_default) 
WHERE is_default = true AND is_deleted = false;

-- ============================================
-- Step 4: Optional - Set an existing status as default if none exists
-- ============================================
-- Uncomment the following if you want to set the first active status as default
-- UPDATE status_master 
-- SET is_default = true 
-- WHERE id = (
--     SELECT id FROM status_master 
--     WHERE is_deleted = false AND is_active = true 
--     ORDER BY id ASC 
--     LIMIT 1
-- )
-- AND NOT EXISTS (SELECT 1 FROM status_master WHERE is_default = true AND is_deleted = false);

-- ============================================
-- Verification Query
-- ============================================
-- Run this to verify the column was added and check current defaults:
-- SELECT id, status, color, is_default, is_active, is_deleted 
-- FROM status_master 
-- ORDER BY is_default DESC, status ASC;

