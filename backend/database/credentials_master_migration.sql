-- Migration script to rename columns in credentials_master table
-- Run this script to update existing database schema

-- Rename platform to provider
ALTER TABLE credentials_master RENAME COLUMN platform TO provider;

-- Rename title to credential_name
ALTER TABLE credentials_master RENAME COLUMN title TO credential_name;

-- Rename description to notes
ALTER TABLE credentials_master RENAME COLUMN description TO notes;

-- Update index name to match new column name
DROP INDEX IF EXISTS idx_credentials_master_platform;
CREATE INDEX IF NOT EXISTS idx_credentials_master_provider ON credentials_master(provider);

