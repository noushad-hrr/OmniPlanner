namespace OmniPlanner_API.Queries.Master_Data
{
    public class PriorityMasterQueries
    {
        public const string GetAll = @"SELECT
                                        p.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
                                        FROM priority_master p
                                        LEFT JOIN users u1 ON p.created_by = u1.id
                                        LEFT JOIN users u2 ON p.last_modified_by = u2.id
                                        WHERE p.is_deleted = false
                                        ORDER BY p.priority ASC";

        public const string GetById = @"SELECT * FROM priority_master WHERE id = @id AND is_deleted = false";

        public const string Insert = @"INSERT INTO priority_master 
                (priority, color, created_by, created_on, last_modified_by, last_modified_on, is_active, is_deleted, is_default)
                VALUES (@priority, @color, @created_by, NOW(), @created_by, NOW(), @is_active, false, @is_default) RETURNING id;";

        public const string Update = @"UPDATE priority_master SET 
                priority = @priority, 
                color = @color, 
                is_active = @is_active,
                is_default = @is_default,
                last_modified_by = @last_modified_by, 
                last_modified_on = NOW() 
                WHERE id = @id;";

        public const string UnsetOtherDefaults = @"UPDATE priority_master 
                SET is_default = false, 
                last_modified_by = @last_modified_by, 
                last_modified_on = NOW() 
                WHERE is_default = true 
                AND is_deleted = false 
                AND id != @id;";

        public const string Delete = @"DELETE FROM priority_master WHERE id = @id";
        
        public const string SoftDelete = @"UPDATE priority_master SET is_deleted = true WHERE id = @id";

        public const string CheckPriorityExists = @"SELECT COUNT(*) FROM priority_master 
                WHERE LOWER(TRIM(priority)) = LOWER(TRIM(@priority)) 
                AND is_deleted = false 
                AND (CASE WHEN @id = 0 THEN TRUE ELSE id != @id END)";
    }
}


