-- Urls/Docs Master Table
-- Note: category_id references category_master table
-- Uniqueness of label and url is enforced at category level

CREATE TABLE IF NOT EXISTS urls_master (
    id SERIAL PRIMARY KEY,
    label VARCHAR(200) NOT NULL,
    url TEXT NOT NULL,
    category_id INTEGER REFERENCES category_master(id) ON DELETE SET NULL,
    created_by INTEGER NOT NULL,
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_modified_by INTEGER NOT NULL,
    last_modified_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN NOT NULL DEFAULT true,
    is_deleted BOOLEAN NOT NULL DEFAULT false
);

CREATE INDEX IF NOT EXISTS idx_urls_master_label ON urls_master(label);
CREATE INDEX IF NOT EXISTS idx_urls_master_is_deleted ON urls_master(is_deleted);
CREATE INDEX IF NOT EXISTS idx_urls_master_category_id ON urls_master(category_id);

-- Category-level unique indexes (label and url must be unique within each category)
CREATE UNIQUE INDEX IF NOT EXISTS idx_urls_master_category_label_unique 
ON urls_master (COALESCE(category_id, -1), LOWER(TRIM(label))) 
WHERE is_deleted = false;

CREATE UNIQUE INDEX IF NOT EXISTS idx_urls_master_category_url_unique 
ON urls_master (COALESCE(category_id, -1), LOWER(TRIM(url))) 
WHERE is_deleted = false;

-- Seed reference data
INSERT INTO urls_master (label, url, created_by, last_modified_by, is_active, is_deleted)
VALUES ('JWT Documentation', 'https://jwt.io', 1, 1, true, false)
ON CONFLICT DO NOTHING;


