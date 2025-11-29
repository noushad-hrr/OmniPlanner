using System.Text.RegularExpressions;

namespace OmniPlanner_API.Queries.System
{
    public static class RoleQueries
    {
        public const string GetAll = @"SELECT 
                r.*,
                CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name,
                COALESCE(ARRAY_AGG(rp.permission_id) FILTER(WHERE rp.permission_id IS NOT NULL), '{}') AS permissionIDs
                FROM roles r
                LEFT JOIN users u1 ON r.created_by = u1.id
                LEFT JOIN users u2 ON r.last_modified_by = u2.id
                LEFT JOIN role_permission_mapping rp ON r.id = rp.role_id
                WHERE r.is_deleted = false
                GROUP BY r.id, u1.first_name, u1.last_name, u2.first_name, u2.last_name";

        public const string GetAllPermissions = @"SELECT
    p.*,
    CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
    CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
FROM permissions p
LEFT JOIN users u1 ON p.created_by = u1.id
LEFT JOIN users u2 ON p.last_modified_by = u2.id
ORDER BY
    CASE 
        WHEN UPPER(p.permission_name) LIKE 'DA%' THEN 1
        WHEN UPPER(p.permission_name) LIKE 'REPORTS%' THEN 2
        WHEN UPPER(p.permission_name) LIKE 'IN%' THEN 3
        WHEN UPPER(p.permission_name) LIKE 'SA%' THEN 4
        WHEN UPPER(p.permission_name) LIKE 'PA%' THEN 5
        WHEN UPPER(p.permission_name) LIKE 'SY%' THEN 6
        WHEN UPPER(p.permission_name) LIKE 'MA%' THEN 7
        ELSE 8
    END,
    LENGTH(p.permission_name),
    p.permission_name COLLATE ""C"";
";

        public const string GetById = @"SELECT r.id, r.role_name, r.created_by, r.created_on, 
                r.last_modified_by, r.last_modified_on, r.is_active, r.is_deleted,
                COALESCE(ARRAY_AGG(rp.permission_id) FILTER (WHERE rp.permission_id IS NOT NULL), '{}') AS permissionIDs,
                COALESCE(
                       JSONB_AGG(
                           JSONB_BUILD_OBJECT('id', p.id, 'permission_name', p.permission_name, 'permission_code', p.permission_code)
                       ) FILTER (WHERE p.id IS NOT NULL), '[]'
                   ) AS permissions_stringified
                FROM Roles r 
                LEFT JOIN role_permission_mapping rp ON r.id = rp.role_id
                LEFT JOIN permissions p ON rp.permission_id = p.id
                WHERE r.id = @id AND r.is_deleted = false GROUP BY r.id;";

        public const string Insert = @"INSERT INTO roles (role_name, created_by, created_on, last_modified_by, last_modified_on, is_active, is_deleted)
                VALUES (@role_name, @created_by, NOW(), @created_by, NOW(), @is_active, false) RETURNING id;";

        public const string RolePermissionMappingInsert = @"INSERT INTO role_permission_mapping (role_id, permission_id, created_by, created_on, last_modified_by, last_modified_on) 
                SELECT @role_id, unnest(@permissionIDs), @created_by, NOW(), @created_by, NOW();";

        public const string RolePermissionMappingDelete = @"DELETE FROM role_permission_mapping WHERE role_id = @id";

        public const string Update = @"UPDATE roles SET role_name = @role_name, last_modified_by = @last_modified_by,
                is_active = @is_active, last_modified_on = NOW() WHERE id = @id;";

        //public const string ActiveInActive = @"UPDATE roles SET is_active = @is_active, last_modified_by = @last_modified_by,
        //        last_modified_on = NOW() WHERE id = @id;";

        public const string Delete = @"DELETE FROM roles WHERE id = @id";
        public const string SoftDelete = @"UPDATE roles SET is_deleted = true WHERE id = @id";

        public const string InsertPermission = @"INSERT INTO permissions (permission_name, permission_code, created_by, created_on, last_modified_by,last_modified_on)
                VALUES (@permission_name, @permission_code, @created_by, NOW(),@last_modified_by, NOW()) RETURNING id;";

        public const string UpdatePermission = @"UPDATE permissions SET permission_name = @permission_name, permission_code = @permission_code, last_modified_by = @last_modified_by,
                last_modified_on = NOW() WHERE id = @id;";
    }
}
