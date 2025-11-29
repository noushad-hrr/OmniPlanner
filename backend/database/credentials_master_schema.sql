-- Credentials Master Table
-- This table stores credentials (email addresses, usernames, etc.) needed to access various platforms
-- Each credential can be associated with multiple URLs

CREATE TABLE IF NOT EXISTS credentials_master (
    id SERIAL PRIMARY KEY,
    provider VARCHAR(200) NOT NULL,
    credential_name VARCHAR(200) NOT NULL,
    credential_id VARCHAR(500) NOT NULL,
    credential_password TEXT NOT NULL,
    additional_fields JSONB DEFAULT '{}'::jsonb,
    notes TEXT,
    created_by INTEGER NOT NULL,
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_modified_by INTEGER NOT NULL,
    last_modified_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN NOT NULL DEFAULT true,
    is_deleted BOOLEAN NOT NULL DEFAULT false
);

-- Create indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_credentials_master_provider ON credentials_master(provider);
CREATE INDEX IF NOT EXISTS idx_credentials_master_is_deleted ON credentials_master(is_deleted);
CREATE INDEX IF NOT EXISTS idx_credentials_master_additional_fields ON credentials_master USING GIN(additional_fields);

-- Create unique index on credential_id + credential_password (case-insensitive, only for non-deleted records)
CREATE UNIQUE INDEX IF NOT EXISTS idx_credentials_master_credential_unique 
ON credentials_master (LOWER(TRIM(credential_id)), credential_password) 
WHERE is_deleted = false;

-- Insert some default credentials (optional - remove if not needed)
-- INSERT INTO credentials_master (provider, credential_name, credential_id, credential_password, created_by, last_modified_by, is_active, is_deleted)
-- VALUES 
--     ('Google Drive', 'Personal Gmail', 'user@gmail.com', 'encrypted_password', 1, 1, true, false),
--     ('Google Drive', 'Work Gmail', 'work@company.com', 'encrypted_password', 1, 1, true, false)
-- ON CONFLICT DO NOTHING;

