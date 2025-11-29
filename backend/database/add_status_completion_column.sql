-- Migration Script: Add is_completion_status column to status_master table
-- This script adds the is_completion_status column to allow marking one status as the completion status
-- Only one status should be set as completion status at any given time

-- ============================================
-- Step 1: Add is_completion_status column
-- ============================================
ALTER TABLE status_master 
ADD COLUMN IF NOT EXISTS is_completion_status BOOLEAN NOT NULL DEFAULT false;

-- ============================================
-- Step 2: Create index for better query performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_status_master_is_completion_status ON status_master(is_completion_status) 
WHERE is_completion_status = true;

-- ============================================
-- Step 3: Add partial unique index to ensure only one completion status
-- ============================================
-- This ensures that only one status can have is_completion_status = true at a time
-- (only applies to non-deleted records)
CREATE UNIQUE INDEX IF NOT EXISTS idx_status_master_completion_unique 
ON status_master (is_completion_status) 
WHERE is_completion_status = true AND is_deleted = false;

-- ============================================
-- Verification Query
-- ============================================
-- Run this to verify the column was added and check current completion statuses:
-- SELECT id, status, color, is_default, is_completion_status, is_active, is_deleted 
-- FROM status_master 
-- ORDER BY is_completion_status DESC, status ASC;

