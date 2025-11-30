-- Budget Management System - Add Status Columns Migration
-- Execute these queries in your PostgreSQL database

-- 1. Add is_credited column to budget_credits table
ALTER TABLE budget_credits 
ADD COLUMN IF NOT EXISTS is_credited BOOLEAN DEFAULT FALSE;

-- 2. Add is_debited column to budget_debits table
ALTER TABLE budget_debits 
ADD COLUMN IF NOT EXISTS is_debited BOOLEAN DEFAULT FALSE;

-- 3. Update existing records to set default values (optional - if you want existing records to be marked as credited/debited)
-- Uncomment the following lines if you want to mark all existing records as credited/debited:

-- UPDATE budget_credits SET is_credited = TRUE WHERE is_credited IS NULL;
-- UPDATE budget_debits SET is_debited = TRUE WHERE is_debited IS NULL;

-- 4. Verify the changes
SELECT column_name, data_type, column_default 
FROM information_schema.columns 
WHERE table_name = 'budget_credits' AND column_name = 'is_credited';

SELECT column_name, data_type, column_default 
FROM information_schema.columns 
WHERE table_name = 'budget_debits' AND column_name = 'is_debited';
