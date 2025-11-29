# Status Master - Default Column Implementation

## Overview
This document describes the database and backend changes for adding the `is_default` column to the `status_master` table. This allows marking one status as the default status, which can be used when creating new tasks or subtasks.

## Database Changes Required

### Step 1: Run the Migration Script
**File:** `backend/database/add_status_default_column.sql`

**What it does:**
- Adds `is_default` column to `status_master` table (default: `false`)
- Creates an index on `is_default` for better query performance
- Creates a unique partial index to ensure only one status can be default at a time
- All existing statuses will have `is_default = false` after migration

**To run:**
```sql
-- Execute the migration script in your PostgreSQL database
\i backend/database/add_status_default_column.sql
```

Or copy and paste the contents into your PostgreSQL client (pgAdmin, DBeaver, etc.)

### Step 2: Verify the Migration
Run this query to verify the column was added:
```sql
SELECT id, status, color, is_default, is_active, is_deleted 
FROM status_master 
ORDER BY is_default DESC, status ASC;
```

## What Changed

### 1. Database Schema
- **Column Added**: `is_default BOOLEAN NOT NULL DEFAULT false`
- **Index Created**: `idx_status_master_is_default` (partial index for `is_default = true`)
- **Unique Constraint**: `idx_status_master_default_unique` (ensures only one default status)

### 2. Backend Model
- **Status.cs**: Added `public bool is_default { get; set; } = false;`

### 3. SQL Queries
- **Insert Query**: Now includes `is_default` column
- **Update Query**: Now includes `is_default` column
- **New Query**: `UnsetOtherDefaults` - Unsets all other defaults when setting a new default

### 4. Repository Logic
- **StatusMasterRepository.AddUpdateStatus()**: 
  - Automatically unsets all other defaults when setting a status as default
  - Ensures only one status can be default at any time

## Business Logic

### Default Status Rules:
1. **Only one default**: At most one status can have `is_default = true` at any time
2. **Database constraint**: The unique partial index enforces this at the database level
3. **Automatic unset**: When setting a status as default, all other defaults are automatically unset
4. **Default value**: New statuses default to `is_default = false`

### How It Works:
1. When a user sets a status as default (`is_default = true`):
   - The repository first unsets all other default statuses
   - Then sets the current status as default
   - This happens in a single transaction

2. The unique partial index ensures database-level integrity:
   - If somehow multiple defaults exist, the database will prevent it
   - Only applies to non-deleted records (`is_deleted = false`)

## Frontend Integration

The frontend has been updated to:
- Display the "Default" column in the status master table
- Show a checkbox in the add/edit form
- Display a hint message when setting a status as default

## Testing Checklist

- [ ] Run the migration script successfully
- [ ] Verify the column exists: `SELECT column_name FROM information_schema.columns WHERE table_name = 'status_master' AND column_name = 'is_default';`
- [ ] Test creating a new status with `is_default = true`
- [ ] Test creating another status with `is_default = true` (should unset the previous one)
- [ ] Test editing an existing status to set it as default
- [ ] Verify only one status can be default at a time
- [ ] Test the frontend displays the default column correctly
- [ ] Test the frontend form allows setting/unsetting default

## Rollback (if needed)

If you need to rollback this change:
```sql
-- Remove the unique constraint
DROP INDEX IF EXISTS idx_status_master_default_unique;
DROP INDEX IF EXISTS idx_status_master_is_default;

-- Remove the column
ALTER TABLE status_master DROP COLUMN IF EXISTS is_default;
```

## Notes

- The unique partial index is the key to ensuring data integrity
- The repository logic provides a user-friendly experience by automatically handling the unset operation
- All existing statuses will have `is_default = false` after migration
- You can optionally set one status as default after migration (see commented section in migration script)

