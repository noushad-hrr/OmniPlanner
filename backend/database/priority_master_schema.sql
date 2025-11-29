-- Priority Master Table
-- Stores priority levels with display colors

CREATE TABLE IF NOT EXISTS priority_master (
    id SERIAL PRIMARY KEY,
    priority VARCHAR(100) NOT NULL UNIQUE,
    color VARCHAR(7) NOT NULL DEFAULT '#6B7280',
    created_by INTEGER NOT NULL,
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_modified_by INTEGER NOT NULL,
    last_modified_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN NOT NULL DEFAULT true,
    is_deleted BOOLEAN NOT NULL DEFAULT false,
    is_default BOOLEAN NOT NULL DEFAULT false
);

CREATE INDEX IF NOT EXISTS idx_priority_master_priority ON priority_master(priority);
CREATE INDEX IF NOT EXISTS idx_priority_master_is_deleted ON priority_master(is_deleted);
CREATE INDEX IF NOT EXISTS idx_priority_master_is_default ON priority_master(is_default) WHERE is_default = true;

-- Unique constraint: Only one priority can be default at a time (for non-deleted records)
CREATE UNIQUE INDEX IF NOT EXISTS idx_priority_master_default_unique 
ON priority_master (is_default) 
WHERE is_default = true AND is_deleted = false;

-- Seed reference data
INSERT INTO priority_master (priority, color, created_by, last_modified_by, is_active, is_deleted, is_default)
VALUES ('high', '#DC2626', 1, 1, true, false, false)
ON CONFLICT (priority) DO NOTHING;


