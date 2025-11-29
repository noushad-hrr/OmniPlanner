-- Migration Script: Update Uniqueness Constraints for Master Tables
-- This script replaces existing UNIQUE constraints with partial unique indexes
-- that allow duplicates when is_deleted = true

-- ============================================
-- Category Master
-- ============================================
-- Drop existing unique constraint
ALTER TABLE category_master DROP CONSTRAINT IF EXISTS category_master_category_key;

-- Create partial unique index (only applies to non-deleted records)
CREATE UNIQUE INDEX IF NOT EXISTS idx_category_master_category_unique 
ON category_master (LOWER(category)) 
WHERE is_deleted = false;

-- ============================================
-- Status Master
-- ============================================
-- Drop existing unique constraint
ALTER TABLE status_master DROP CONSTRAINT IF EXISTS status_master_status_key;

-- Create partial unique index (only applies to non-deleted records)
CREATE UNIQUE INDEX IF NOT EXISTS idx_status_master_status_unique 
ON status_master (LOWER(status)) 
WHERE is_deleted = false;

-- ============================================
-- Priority Master
-- ============================================
-- Drop existing unique constraint
ALTER TABLE priority_master DROP CONSTRAINT IF EXISTS priority_master_priority_key;

-- Create partial unique index (only applies to non-deleted records)
CREATE UNIQUE INDEX IF NOT EXISTS idx_priority_master_priority_unique 
ON priority_master (LOWER(priority)) 
WHERE is_deleted = false;

-- ============================================
-- URLs Master
-- ============================================
-- Add partial unique indexes for label and url (separately)
-- Label uniqueness
CREATE UNIQUE INDEX IF NOT EXISTS idx_urls_master_label_unique 
ON urls_master (LOWER(label)) 
WHERE is_deleted = false;

-- URL uniqueness
CREATE UNIQUE INDEX IF NOT EXISTS idx_urls_master_url_unique 
ON urls_master (LOWER(url)) 
WHERE is_deleted = false;

-- ============================================
-- Verification Queries (Optional - can be run separately)
-- ============================================
-- Verify indexes were created:
-- SELECT indexname, indexdef 
-- FROM pg_indexes 
-- WHERE tablename IN ('category_master', 'status_master', 'priority_master', 'urls_master')
-- AND indexname LIKE '%_unique';

