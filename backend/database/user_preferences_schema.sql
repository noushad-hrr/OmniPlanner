-- =============================================
-- User Preferences Schema
-- Created for OmniPlanner Settings Management
-- =============================================

-- Drop table if exists (for clean setup)
DROP TABLE IF EXISTS user_preferences CASCADE;

-- Create user_preferences table
CREATE TABLE IF NOT EXISTS user_preferences (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    theme VARCHAR(20) NOT NULL DEFAULT 'dark' CHECK (theme IN ('dark', 'light')),
    app_theme_id VARCHAR(50) NOT NULL DEFAULT 'theme1',
    icon_theme_id VARCHAR(50) NOT NULL DEFAULT 'default',
    icon_name VARCHAR(100) NOT NULL DEFAULT 'layer-group',
    sidebar_collapsed BOOLEAN NOT NULL DEFAULT true,
    language VARCHAR(10) NULL,
    timezone VARCHAR(50) NULL,
    
    -- Common fields from CommonModel
    created_by INTEGER NOT NULL,
    created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by_name VARCHAR(255) NULL,
    last_modified_by INTEGER NOT NULL,
    last_modified_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_modified_by_name VARCHAR(255) NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    is_deleted BOOLEAN NOT NULL DEFAULT false,
    
    -- Foreign key constraint (assuming users table exists)
    -- CONSTRAINT fk_user_preferences_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    
    -- Unique constraint to ensure one active preference record per user
    CONSTRAINT uq_user_preferences_user UNIQUE (user_id, is_active, is_deleted)
);

-- Create index for faster lookups
CREATE INDEX idx_user_preferences_user_id ON user_preferences(user_id);
CREATE INDEX idx_user_preferences_active ON user_preferences(user_id, is_active, is_deleted) 
    WHERE is_active = true AND is_deleted = false;

-- Add comments for documentation
COMMENT ON TABLE user_preferences IS 'Stores user-specific application preferences and settings';
COMMENT ON COLUMN user_preferences.theme IS 'Color theme: dark or light';
COMMENT ON COLUMN user_preferences.app_theme_id IS 'Application theme identifier (e.g., theme1, theme2)';
COMMENT ON COLUMN user_preferences.icon_theme_id IS 'Icon theme identifier (e.g., default, modern)';
COMMENT ON COLUMN user_preferences.icon_name IS 'Name of the FontAwesome icon for the application logo';
COMMENT ON COLUMN user_preferences.sidebar_collapsed IS 'Default sidebar state: true = collapsed, false = expanded';

-- =============================================
-- Sample Data (Optional - for testing)
-- =============================================

-- Insert sample preferences for a user (replace user_id with actual user ID)
-- INSERT INTO user_preferences (
--     user_id,
--     theme,
--     app_theme_id,
--     icon_theme_id,
--     icon_name,
--     sidebar_collapsed,
--     language,
--     timezone,
--     created_by,
--     created_on,
--     created_by_name,
--     last_modified_by,
--     last_modified_on,
--     last_modified_by_name,
--     is_active,
--     is_deleted
-- ) VALUES (
--     1, -- Replace with actual user_id
--     'dark',
--     'theme1',
--     'default',
--     'layer-group',
--     true,
--     'en',
--     'UTC',
--     1,
--     CURRENT_TIMESTAMP,
--     'System',
--     1,
--     CURRENT_TIMESTAMP,
--     'System',
--     true,
--     false
-- );

-- =============================================
-- Useful Queries
-- =============================================

-- Get user preferences:
-- SELECT * FROM user_preferences 
-- WHERE user_id = 1 AND is_active = true AND is_deleted = false;

-- Update user preferences:
-- UPDATE user_preferences
-- SET 
--     theme = 'light',
--     icon_name = 'project-diagram',
--     sidebar_collapsed = false,
--     last_modified_by = 1,
--     last_modified_on = CURRENT_TIMESTAMP
-- WHERE user_id = 1 AND is_active = true AND is_deleted = false;

-- =============================================
-- Notes
-- =============================================
-- 1. The table uses a soft delete pattern (is_deleted flag) for data retention
-- 2. The unique constraint ensures only one active preference per user
-- 3. Foreign key to users table is commented out - uncomment if users table exists
-- 4. Replace sample data user_id with actual user IDs from your users table
-- 5. The theme field uses CHECK constraint to ensure only 'dark' or 'light' values

