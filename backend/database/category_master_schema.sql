-- Category Master Table
-- This table stores task categories with their icons

CREATE TABLE IF NOT EXISTS category_master (
    id SERIAL PRIMARY KEY,
    category VARCHAR(100) NOT NULL UNIQUE,
    icon VARCHAR(10) NOT NULL DEFAULT '',
    created_by INTEGER NOT NULL,
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_modified_by INTEGER NOT NULL,
    last_modified_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN NOT NULL DEFAULT true,
    is_deleted BOOLEAN NOT NULL DEFAULT false
);

-- Create index on category for faster lookups
CREATE INDEX IF NOT EXISTS idx_category_master_category ON category_master(category);
CREATE INDEX IF NOT EXISTS idx_category_master_is_deleted ON category_master(is_deleted);

-- Insert some default categories
INSERT INTO category_master (category, icon, created_by, last_modified_by, is_active, is_deleted)
VALUES 
    ('Development', '🚀', 1, 1, true, false),
    ('Design', '🎨', 1, 1, true, false),
    ('Marketing', '📈', 1, 1, true, false),
    ('Operations', '⚙️', 1, 1, true, false),
    ('Research', '📚', 1, 1, true, false)
ON CONFLICT (category) DO NOTHING;

