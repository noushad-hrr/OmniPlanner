namespace OmniPlanner_API.Queries.Auth
{
    public static class UserQueries
    {
        public static string GetByEmail = @"
            SELECT id, email, username, password_hash, first_name, last_name, phone, 
                   is_active, is_deleted, email_verified, last_login, password_reset_token, 
                   password_reset_expires, created_by, created_on, last_modified_by, last_modified_on
            FROM users 
            WHERE email = @email AND is_deleted = FALSE";

        public static string GetByUsername = @"
            SELECT id, email, username, password_hash, first_name, last_name, phone, 
                   is_active, is_deleted, email_verified, last_login, password_reset_token, 
                   password_reset_expires, created_by, created_on, last_modified_by, last_modified_on
            FROM users 
            WHERE username = @username AND is_deleted = FALSE";

        public static string GetById = @"
            SELECT id, email, username, password_hash, first_name, last_name, phone, 
                   is_active, is_deleted, email_verified, last_login, password_reset_token, 
                   password_reset_expires, created_by, created_on, last_modified_by, last_modified_on
            FROM users 
            WHERE id = @id AND is_deleted = FALSE";

        public static string GetAll = @"
            SELECT u.id, u.email, u.username, u.first_name, u.last_name, u.phone, 
                   u.is_active, u.email_verified, u.last_login, u.created_on, u.last_modified_on,
                   creator.first_name || ' ' || creator.last_name as created_by_name,
                   modifier.first_name || ' ' || modifier.last_name as last_modified_by_name
            FROM users u
            LEFT JOIN users creator ON u.created_by = creator.id
            LEFT JOIN users modifier ON u.last_modified_by = modifier.id
            WHERE u.is_deleted = FALSE
            ORDER BY u.created_on DESC";

        public static string Create = @"
            INSERT INTO users (email, username, password_hash, first_name, last_name, phone, 
                             is_active, email_verified, created_by, created_on, last_modified_by, last_modified_on)
            VALUES (@email, @username, @password_hash, @first_name, @last_name, @phone, 
                   @is_active, @email_verified, @created_by, CURRENT_TIMESTAMP, @created_by, CURRENT_TIMESTAMP)
            RETURNING id, email, username, password_hash, first_name, last_name, phone, 
                     is_active, is_deleted, email_verified, last_login, password_reset_token, 
                     password_reset_expires, created_by, created_on, last_modified_by, last_modified_on";

        public static string Update = @"
            UPDATE users 
            SET email = @email, username = @username, first_name = @first_name, last_name = @last_name, 
                phone = @phone, is_active = @is_active, last_modified_by = @last_modified_by, 
                last_modified_on = CURRENT_TIMESTAMP
            WHERE id = @id AND is_deleted = FALSE
            RETURNING id, email, username, password_hash, first_name, last_name, phone, 
                     is_active, is_deleted, email_verified, last_login, password_reset_token, 
                     password_reset_expires, created_by, created_on, last_modified_by, last_modified_on";

        public static string UpdatePassword = @"
            UPDATE users 
            SET password_hash = @password_hash, last_modified_by = @last_modified_by, 
                last_modified_on = CURRENT_TIMESTAMP
            WHERE id = @id AND is_deleted = FALSE";

        public static string UpdateLastLogin = @"
            UPDATE users 
            SET last_login = CURRENT_TIMESTAMP
            WHERE id = @id AND is_deleted = FALSE";

        public static string Delete = @"
            UPDATE users 
            SET is_deleted = TRUE, last_modified_by = @last_modified_by, 
                last_modified_on = CURRENT_TIMESTAMP
            WHERE id = @id AND is_deleted = FALSE";

        public static string HardDelete = @"
            DELETE FROM users WHERE id = @id";

        public static string GetUserRoles = @"
            SELECT r.id, r.name, r.description, r.is_active
            FROM user_roles ur
            INNER JOIN roles r ON ur.role_id = r.id
            WHERE ur.user_id = @userId AND r.is_deleted = FALSE";

        public static string GetUserPermissions = @"
            SELECT DISTINCT p.code
            FROM users u
            INNER JOIN user_roles ur ON u.id = ur.user_id
            INNER JOIN roles r ON ur.role_id = r.id
            INNER JOIN role_permissions rp ON r.id = rp.role_id
            INNER JOIN permissions p ON rp.permission_id = p.id
            WHERE u.id = @userId 
              AND u.is_deleted = FALSE 
              AND r.is_deleted = FALSE 
              AND r.is_active = TRUE
              AND p.is_deleted = FALSE
              AND p.is_active = TRUE";

        public static string AssignRoles = @"
            INSERT INTO user_roles (user_id, role_id, assigned_by, assigned_on)
            VALUES (@userId, @roleId, @assignedBy, CURRENT_TIMESTAMP)
            ON CONFLICT (user_id, role_id) DO NOTHING";

        public static string RemoveRoles = @"
            DELETE FROM user_roles 
            WHERE user_id = @userId AND role_id = @roleId";

        public static string RemoveAllUserRoles = @"
            DELETE FROM user_roles WHERE user_id = @userId";

        public static string CheckEmailExists = @"
            SELECT COUNT(*) > 0 
            FROM users 
            WHERE email = @email AND is_deleted = FALSE";

        public static string CheckUsernameExists = @"
            SELECT COUNT(*) > 0 
            FROM users 
            WHERE username = @username AND is_deleted = FALSE";

        public static string CheckEmailExistsExcludingId = @"
            SELECT COUNT(*) > 0 
            FROM users 
            WHERE email = @email AND id != @excludeId AND is_deleted = FALSE";

        public static string CheckUsernameExistsExcludingId = @"
            SELECT COUNT(*) > 0 
            FROM users 
            WHERE username = @username AND id != @excludeId AND is_deleted = FALSE";
    }
}

