namespace OmniPlanner_API.Queries.Auth
{
    public static class RoleQueries
    {
        public static string GetById = @"
            SELECT id, name, description, is_active, is_deleted, created_by, created_on, 
                   last_modified_by, last_modified_on
            FROM roles 
            WHERE id = @id AND is_deleted = FALSE";

        public static string GetByName = @"
            SELECT id, name, description, is_active, is_deleted, created_by, created_on, 
                   last_modified_by, last_modified_on
            FROM roles 
            WHERE name = @name AND is_deleted = FALSE";

        public static string GetAll = @"
            SELECT r.id, r.name, r.description, r.is_active, r.created_on, r.last_modified_on,
                   creator.first_name || ' ' || creator.last_name as created_by_name,
                   modifier.first_name || ' ' || modifier.last_name as last_modified_by_name
            FROM roles r
            LEFT JOIN users creator ON r.created_by = creator.id
            LEFT JOIN users modifier ON r.last_modified_by = modifier.id
            WHERE r.is_deleted = FALSE
            ORDER BY r.created_on DESC";

        public static string Create = @"
            INSERT INTO roles (name, description, is_active, created_by, created_on, last_modified_by, last_modified_on)
            VALUES (@name, @description, @is_active, @created_by, CURRENT_TIMESTAMP, @created_by, CURRENT_TIMESTAMP)
            RETURNING id, name, description, is_active, is_deleted, created_by, created_on, 
                     last_modified_by, last_modified_on";

        public static string Update = @"
            UPDATE roles 
            SET name = @name, description = @description, is_active = @is_active, 
                last_modified_by = @last_modified_by, last_modified_on = CURRENT_TIMESTAMP
            WHERE id = @id AND is_deleted = FALSE
            RETURNING id, name, description, is_active, is_deleted, created_by, created_on, 
                     last_modified_by, last_modified_on";

        public static string Delete = @"
            UPDATE roles 
            SET is_deleted = TRUE, last_modified_by = @last_modified_by, 
                last_modified_on = CURRENT_TIMESTAMP
            WHERE id = @id AND is_deleted = FALSE";

        public static string HardDelete = @"
            DELETE FROM roles WHERE id = @id";

        public static string GetRolePermissions = @"
            SELECT p.id, p.name, p.code, p.description, p.module, p.is_active
            FROM role_permissions rp
            INNER JOIN permissions p ON rp.permission_id = p.id
            WHERE rp.role_id = @roleId AND p.is_deleted = FALSE";

        public static string AssignPermission = @"
            INSERT INTO role_permissions (role_id, permission_id, assigned_by, assigned_on)
            VALUES (@roleId, @permissionId, @assignedBy, CURRENT_TIMESTAMP)
            ON CONFLICT (role_id, permission_id) DO NOTHING";

        public static string RemovePermission = @"
            DELETE FROM role_permissions 
            WHERE role_id = @roleId AND permission_id = @permissionId";

        public static string RemoveAllRolePermissions = @"
            DELETE FROM role_permissions WHERE role_id = @roleId";

        public static string CheckNameExists = @"
            SELECT COUNT(*) > 0 
            FROM roles 
            WHERE name = @name AND is_deleted = FALSE";

        public static string CheckNameExistsExcludingId = @"
            SELECT COUNT(*) > 0 
            FROM roles 
            WHERE name = @name AND id != @excludeId AND is_deleted = FALSE";
    }
}

