-- URLs Credentials Mapping Table
-- This table creates a many-to-many relationship between URLs and Credentials
-- A URL can be accessible via multiple credentials (email addresses)
-- A credential can be used to access multiple URLs

CREATE TABLE IF NOT EXISTS urls_credentials_mapping (
    id SERIAL PRIMARY KEY,
    url_id INTEGER NOT NULL REFERENCES urls_master(id) ON DELETE CASCADE,
    credential_id INTEGER NOT NULL REFERENCES credentials_master(id) ON DELETE CASCADE,
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT urls_credentials_mapping_url_credential_unique UNIQUE (url_id, credential_id)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_urls_credentials_mapping_url_id ON urls_credentials_mapping(url_id);
CREATE INDEX IF NOT EXISTS idx_urls_credentials_mapping_credential_id ON urls_credentials_mapping(credential_id);
CREATE INDEX IF NOT EXISTS idx_urls_credentials_mapping_created_on ON urls_credentials_mapping(created_on DESC);

