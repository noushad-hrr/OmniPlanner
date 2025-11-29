namespace OmniPlanner_API.Queries.Auth
{
    public static class PermissionQueries
    {
        public static string GetById = @"
            SELECT id, name, code, description, module, is_active, is_deleted, created_by, 
                   created_on, last_modified_by, last_modified_on
            FROM permissions 
            WHERE id = @id AND is_deleted = FALSE";

        public static string GetByCode = @"
            SELECT id, name, code, description, module, is_active, is_deleted, created_by, 
                   created_on, last_modified_by, last_modified_on
            FROM permissions 
            WHERE code = @code AND is_deleted = FALSE";

        public static string GetAll = @"
            SELECT id, name, code, description, module, is_active, created_on, last_modified_on
            FROM permissions 
            WHERE is_deleted = FALSE
            ORDER BY module, name";

        public static string GetByModule = @"
            SELECT id, name, code, description, module, is_active, created_on, last_modified_on
            FROM permissions 
            WHERE module = @module AND is_deleted = FALSE
            ORDER BY name";

        public static string Create = @"
            INSERT INTO permissions (name, code, description, module, is_active, created_by, 
                                   created_on, last_modified_by, last_modified_on)
            VALUES (@name, @code, @description, @module, @is_active, @created_by, 
                   CURRENT_TIMESTAMP, @created_by, CURRENT_TIMESTAMP)
            RETURNING id, name, code, description, module, is_active, is_deleted, created_by, 
                     created_on, last_modified_by, last_modified_on";

        public static string Update = @"
            UPDATE permissions 
            SET name = @name, code = @code, description = @description, module = @module, 
                is_active = @is_active, last_modified_by = @last_modified_by, 
                last_modified_on = CURRENT_TIMESTAMP
            WHERE id = @id AND is_deleted = FALSE
            RETURNING id, name, code, description, module, is_active, is_deleted, created_by, 
                     created_on, last_modified_by, last_modified_on";

        public static string Delete = @"
            UPDATE permissions 
            SET is_deleted = TRUE, last_modified_by = @last_modified_by, 
                last_modified_on = CURRENT_TIMESTAMP
            WHERE id = @id AND is_deleted = FALSE";

        public static string HardDelete = @"
            DELETE FROM permissions WHERE id = @id";

        public static string CheckCodeExists = @"
            SELECT COUNT(*) > 0 
            FROM permissions 
            WHERE code = @code AND is_deleted = FALSE";

        public static string CheckCodeExistsExcludingId = @"
            SELECT COUNT(*) > 0 
            FROM permissions 
            WHERE code = @code AND id != @excludeId AND is_deleted = FALSE";

        public static string GetUniqueModules = @"
            SELECT DISTINCT module 
            FROM permissions 
            WHERE module IS NOT NULL AND is_deleted = FALSE
            ORDER BY module";
    }
}

