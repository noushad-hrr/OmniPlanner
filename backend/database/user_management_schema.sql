-- ============================================
-- User Management System Schema
-- PostgreSQL Database Schema
-- ============================================

-- ============================================
-- 1. USERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(500) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    is_active BOOLEAN DEFAULT TRUE,
    is_deleted BOOLEAN DEFAULT FALSE,
    email_verified BOOLEAN DEFAULT FALSE,
    last_login TIMESTAMP,
    password_reset_token VARCHAR(500),
    password_reset_expires TIMESTAMP,
    created_by INTEGER REFERENCES users(id),
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_modified_by INTEGER REFERENCES users(id),
    last_modified_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT users_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Indexes for Users
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email) WHERE is_deleted = FALSE;
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username) WHERE is_deleted = FALSE;
CREATE INDEX IF NOT EXISTS idx_users_active ON users(is_active) WHERE is_deleted = FALSE;

-- ============================================
-- 2. ROLES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    is_deleted BOOLEAN DEFAULT FALSE,
    created_by INTEGER REFERENCES users(id),
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_modified_by INTEGER REFERENCES users(id),
    last_modified_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for Roles
CREATE INDEX IF NOT EXISTS idx_roles_name ON roles(name) WHERE is_deleted = FALSE;
CREATE INDEX IF NOT EXISTS idx_roles_active ON roles(is_active) WHERE is_deleted = FALSE;

-- ============================================
-- 3. PERMISSIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS permissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    code VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    module VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    is_deleted BOOLEAN DEFAULT FALSE,
    created_by INTEGER REFERENCES users(id),
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_modified_by INTEGER REFERENCES users(id),
    last_modified_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for Permissions
CREATE INDEX IF NOT EXISTS idx_permissions_code ON permissions(code) WHERE is_deleted = FALSE;
CREATE INDEX IF NOT EXISTS idx_permissions_module ON permissions(module) WHERE is_deleted = FALSE;
CREATE INDEX IF NOT EXISTS idx_permissions_active ON permissions(is_active) WHERE is_deleted = FALSE;

-- ============================================
-- 4. USER_ROLES TABLE (Many-to-Many)
-- ============================================
CREATE TABLE IF NOT EXISTS user_roles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role_id INTEGER NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    assigned_by INTEGER REFERENCES users(id),
    assigned_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, role_id)
);

-- Indexes for User_Roles
CREATE INDEX IF NOT EXISTS idx_user_roles_user_id ON user_roles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_role_id ON user_roles(role_id);

-- ============================================
-- 5. ROLE_PERMISSIONS TABLE (Many-to-Many)
-- ============================================
CREATE TABLE IF NOT EXISTS role_permissions (
    id SERIAL PRIMARY KEY,
    role_id INTEGER NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    permission_id INTEGER NOT NULL REFERENCES permissions(id) ON DELETE CASCADE,
    assigned_by INTEGER REFERENCES users(id),
    assigned_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(role_id, permission_id)
);

-- Indexes for Role_Permissions
CREATE INDEX IF NOT EXISTS idx_role_permissions_role_id ON role_permissions(role_id);
CREATE INDEX IF NOT EXISTS idx_role_permissions_permission_id ON role_permissions(permission_id);

-- ============================================
-- 6. REFRESH TOKENS TABLE (For JWT Refresh Token Support)
-- ============================================
CREATE TABLE IF NOT EXISTS refresh_tokens (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    token VARCHAR(500) NOT NULL UNIQUE,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    revoked_at TIMESTAMP,
    replaced_by_token VARCHAR(500),
    is_revoked BOOLEAN DEFAULT FALSE,
    ip_address VARCHAR(45),
    user_agent TEXT
);

-- Indexes for Refresh Tokens
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_user_id ON refresh_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_token ON refresh_tokens(token);
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_expires ON refresh_tokens(expires_at) WHERE is_revoked = FALSE;

-- ============================================
-- 7. AUDIT LOG TABLE (Optional - for tracking changes)
-- ============================================
CREATE TABLE IF NOT EXISTS audit_logs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    action VARCHAR(50) NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id INTEGER,
    old_values JSONB,
    new_values JSONB,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for Audit Logs
CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created ON audit_logs(created_on);

-- ============================================
-- 8. INSERT DEFAULT DATA
-- ============================================

-- Insert default admin user (password: Admin@123 - will be hashed by application)
-- Note: Replace the password_hash with actual hashed password from application
INSERT INTO users (email, username, password_hash, first_name, last_name, is_active, email_verified)
VALUES ('admin@omniplanner.com', 'admin', 'PLACEHOLDER_HASH_REPLACE_WITH_ACTUAL_HASH', 'System', 'Administrator', TRUE, TRUE)
ON CONFLICT (email) DO NOTHING;

-- Insert default roles
INSERT INTO roles (name, description, is_active) VALUES
('Super Admin', 'Super Administrator with all permissions', TRUE),
('Admin', 'Administrator with most permissions', TRUE),
('Manager', 'Manager with limited administrative permissions', TRUE),
('User', 'Standard user with basic permissions', TRUE)
ON CONFLICT (name) DO NOTHING;

-- Insert default permissions (common permissions)
INSERT INTO permissions (name, code, description, module, is_active) VALUES
-- User Management
('View Users', 'users.view', 'View user list and details', 'Users', TRUE),
('Create Users', 'users.create', 'Create new users', 'Users', TRUE),
('Edit Users', 'users.edit', 'Edit existing users', 'Users', TRUE),
('Delete Users', 'users.delete', 'Delete users', 'Users', TRUE),
-- Role Management
('View Roles', 'roles.view', 'View role list and details', 'Roles', TRUE),
('Create Roles', 'roles.create', 'Create new roles', 'Roles', TRUE),
('Edit Roles', 'roles.edit', 'Edit existing roles', 'Roles', TRUE),
('Delete Roles', 'roles.delete', 'Delete roles', 'Roles', TRUE),
-- Permission Management
('View Permissions', 'permissions.view', 'View permission list', 'Permissions', TRUE),
('Manage Permissions', 'permissions.manage', 'Manage permissions', 'Permissions', TRUE),
-- Tasks Management
('View Tasks', 'tasks.view', 'View tasks', 'Tasks', TRUE),
('Create Tasks', 'tasks.create', 'Create tasks', 'Tasks', TRUE),
('Edit Tasks', 'tasks.edit', 'Edit tasks', 'Tasks', TRUE),
('Delete Tasks', 'tasks.delete', 'Delete tasks', 'Tasks', TRUE),
-- Notes Management
('View Notes', 'notes.view', 'View notes', 'Notes', TRUE),
('Create Notes', 'notes.create', 'Create notes', 'Notes', TRUE),
('Edit Notes', 'notes.edit', 'Edit notes', 'Notes', TRUE),
('Delete Notes', 'notes.delete', 'Delete notes', 'Notes', TRUE),
-- Budget Management
('View Budget', 'budget.view', 'View budget', 'Budget', TRUE),
('Create Budget', 'budget.create', 'Create budget', 'Budget', TRUE),
('Edit Budget', 'budget.edit', 'Edit budget', 'Budget', TRUE),
('Delete Budget', 'budget.delete', 'Delete budget', 'Budget', TRUE),
-- Settings
('View Settings', 'settings.view', 'View settings', 'Settings', TRUE),
('Manage Settings', 'settings.manage', 'Manage settings', 'Settings', TRUE)
ON CONFLICT (code) DO NOTHING;

-- Assign Super Admin role to admin user
INSERT INTO user_roles (user_id, role_id)
SELECT u.id, r.id
FROM users u, roles r
WHERE u.email = 'admin@omniplanner.com' AND r.name = 'Super Admin'
ON CONFLICT (user_id, role_id) DO NOTHING;

-- Assign all permissions to Super Admin role
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM roles r, permissions p
WHERE r.name = 'Super Admin'
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- ============================================
-- 9. VIEWS FOR EASY QUERYING
-- ============================================

-- View: User with Roles
CREATE OR REPLACE VIEW vw_user_roles AS
SELECT 
    u.id as user_id,
    u.email,
    u.username,
    u.first_name,
    u.last_name,
    u.is_active as user_active,
    r.id as role_id,
    r.name as role_name,
    r.description as role_description,
    r.is_active as role_active
FROM users u
INNER JOIN user_roles ur ON u.id = ur.user_id
INNER JOIN roles r ON ur.role_id = r.id
WHERE u.is_deleted = FALSE AND r.is_deleted = FALSE;

-- View: Role with Permissions
CREATE OR REPLACE VIEW vw_role_permissions AS
SELECT 
    r.id as role_id,
    r.name as role_name,
    r.description as role_description,
    p.id as permission_id,
    p.name as permission_name,
    p.code as permission_code,
    p.module as permission_module
FROM roles r
INNER JOIN role_permissions rp ON r.id = rp.role_id
INNER JOIN permissions p ON rp.permission_id = p.id
WHERE r.is_deleted = FALSE AND p.is_deleted = FALSE;

-- View: User with All Permissions (through roles)
CREATE OR REPLACE VIEW vw_user_permissions AS
SELECT DISTINCT
    u.id as user_id,
    u.email,
    u.username,
    p.id as permission_id,
    p.code as permission_code,
    p.name as permission_name,
    p.module as permission_module
FROM users u
INNER JOIN user_roles ur ON u.id = ur.user_id
INNER JOIN roles r ON ur.role_id = r.id
INNER JOIN role_permissions rp ON r.id = rp.role_id
INNER JOIN permissions p ON rp.permission_id = p.id
WHERE u.is_deleted = FALSE 
  AND r.is_deleted = FALSE 
  AND r.is_active = TRUE
  AND p.is_deleted = FALSE
  AND p.is_active = TRUE;

-- ============================================
-- 10. FUNCTIONS
-- ============================================

-- Function: Update last_modified_on timestamp
CREATE OR REPLACE FUNCTION update_last_modified_on()
RETURNS TRIGGER AS $$
BEGIN
    NEW.last_modified_on = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for auto-updating last_modified_on
CREATE TRIGGER trigger_users_update_timestamp
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_last_modified_on();

CREATE TRIGGER trigger_roles_update_timestamp
    BEFORE UPDATE ON roles
    FOR EACH ROW
    EXECUTE FUNCTION update_last_modified_on();

CREATE TRIGGER trigger_permissions_update_timestamp
    BEFORE UPDATE ON permissions
    FOR EACH ROW
    EXECUTE FUNCTION update_last_modified_on();

-- ============================================
-- END OF SCHEMA
-- ============================================

