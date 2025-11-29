# Uniqueness Validation Implementation

## Overview
This document describes the backend and database changes for implementing uniqueness validation on master tables that allows duplicates when `is_deleted = true`.

## Database Changes Required

### Step 1: Run the Migration Script
**File:** `backend/database/migration_uniqueness_constraints.sql`

**What it does:**
- Removes existing UNIQUE constraints that prevent duplicates even for deleted records
- Creates partial unique indexes that only enforce uniqueness for non-deleted records (`is_deleted = false`)
- Uses case-insensitive comparison (`LOWER()`)
- Adds unique indexes for URLs master (label and url separately)

**To run:**
```sql
-- Execute the entire script in your PostgreSQL database
\i backend/database/migration_uniqueness_constraints.sql
```

Or copy and paste the contents into your PostgreSQL client (pgAdmin, DBeaver, etc.)

## What Changed

### 1. Database Schema
- **Category Master**: Replaced `category_master_category_key` constraint with partial unique index
- **Status Master**: Replaced `status_master_status_key` constraint with partial unique index  
- **Priority Master**: Replaced `priority_master_priority_key` constraint with partial unique index
- **URLs Master**: Added partial unique indexes for both `label` and `url` columns

### 2. Backend Validation
- **Queries**: Added validation queries to check for duplicates before insert/update
- **Repositories**: Added validation methods that check for duplicates (case-insensitive, excluding deleted records and current record)
- **Error Handling**: Validation errors are thrown as exceptions and caught by controllers

### 3. Validation Logic
All validation checks:
- Case-insensitive comparison (using `LOWER()`)
- Exclude records where `is_deleted = true`
- Exclude the current record when editing (using `id` parameter)

## Verification

After running the migration, verify the indexes were created:

```sql
SELECT indexname, indexdef 
FROM pg_indexes 
WHERE tablename IN ('category_master', 'status_master', 'priority_master', 'urls_master')
AND indexname LIKE '%_unique';
```

You should see:
- `idx_category_master_category_unique`
- `idx_status_master_status_unique`
- `idx_priority_master_priority_unique`
- `idx_urls_master_label_unique`
- `idx_urls_master_url_unique`

## Testing

1. **Test Duplicate Prevention:**
   - Try to add a category/status/priority/url that already exists (non-deleted)
   - Should get error: "Category name already exists" (or similar)

2. **Test Allow Duplicates for Deleted Records:**
   - Delete a category (soft delete)
   - Try to add the same category name again
   - Should succeed

3. **Test Case Insensitivity:**
   - Add category "Test"
   - Try to add "test" or "TEST"
   - Should get duplicate error

4. **Test Edit Mode:**
   - Edit an existing category
   - Change name to something else
   - Should succeed (doesn't conflict with itself)

## Notes

- The database constraints act as a safety net, but the primary validation happens in the application layer
- Partial unique indexes in PostgreSQL only enforce uniqueness when the condition (`is_deleted = false`) is met
- If a record is deleted (`is_deleted = true`), the index allows another record with the same value

