-- Status Master Table
-- This table stores task statuses with their display colors

CREATE TABLE IF NOT EXISTS status_master (
    id SERIAL PRIMARY KEY,
    status VARCHAR(100) NOT NULL UNIQUE,
    color VARCHAR(7) NOT NULL DEFAULT '#64748B', -- hex like #2563EB
    created_by INTEGER NOT NULL,
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_modified_by INTEGER NOT NULL,
    last_modified_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN NOT NULL DEFAULT true,
    is_deleted BOOLEAN NOT NULL DEFAULT false,
    is_default BOOLEAN NOT NULL DEFAULT false,
    is_completion_status BOOLEAN NOT NULL DEFAULT false
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_status_master_status ON status_master(status);
CREATE INDEX IF NOT EXISTS idx_status_master_is_deleted ON status_master(is_deleted);
CREATE INDEX IF NOT EXISTS idx_status_master_is_default ON status_master(is_default) WHERE is_default = true;

-- Unique constraint: Only one status can be default at a time (for non-deleted records)
CREATE UNIQUE INDEX IF NOT EXISTS idx_status_master_default_unique 
ON status_master (is_default) 
WHERE is_default = true AND is_deleted = false;

-- Index for completion status
CREATE INDEX IF NOT EXISTS idx_status_master_is_completion_status ON status_master(is_completion_status) WHERE is_completion_status = true;

-- Unique constraint: Only one status can be completion status at a time (for non-deleted records)
CREATE UNIQUE INDEX IF NOT EXISTS idx_status_master_completion_unique 
ON status_master (is_completion_status) 
WHERE is_completion_status = true AND is_deleted = false;

-- Seed reference data
INSERT INTO status_master (status, color, created_by, last_modified_by, is_active, is_deleted, is_default, is_completion_status)
VALUES ('in-progress', '#2563EB', 1, 1, true, false, false, false)
ON CONFLICT (status) DO NOTHING;


