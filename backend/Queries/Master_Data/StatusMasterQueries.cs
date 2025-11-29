namespace OmniPlanner_API.Queries.Master_Data
{
    public class StatusMasterQueries
    {
        public const string GetAll = @"SELECT
                                        s.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
                                        FROM status_master s
                                        LEFT JOIN users u1 ON s.created_by = u1.id
                                        LEFT JOIN users u2 ON s.last_modified_by = u2.id
                                        WHERE s.is_deleted = false
                                        ORDER BY s.status ASC";

        public const string GetById = @"SELECT * FROM status_master WHERE id = @id AND is_deleted = false";

        public const string Insert = @"INSERT INTO status_master 
                (status, color, created_by, created_on, last_modified_by, last_modified_on, is_active, is_deleted, is_default, is_completion_status)
                VALUES (@status, @color, @created_by, NOW(), @created_by, NOW(), @is_active, false, @is_default, @is_completion_status) RETURNING id;";

        public const string Update = @"UPDATE status_master SET 
                status = @status, 
                color = @color, 
                is_active = @is_active,
                is_default = @is_default,
                is_completion_status = @is_completion_status,
                last_modified_by = @last_modified_by, 
                last_modified_on = NOW() 
                WHERE id = @id;";

        public const string UnsetOtherDefaults = @"UPDATE status_master 
                SET is_default = false, 
                last_modified_by = @last_modified_by, 
                last_modified_on = NOW() 
                WHERE is_default = true 
                AND is_deleted = false 
                AND id != @id;";

        public const string UnsetOtherCompletionStatuses = @"UPDATE status_master 
                SET is_completion_status = false, 
                last_modified_by = @last_modified_by, 
                last_modified_on = NOW() 
                WHERE is_completion_status = true 
                AND is_deleted = false 
                AND id != @id;";

        public const string Delete = @"DELETE FROM status_master WHERE id = @id";
        
        public const string SoftDelete = @"UPDATE status_master SET is_deleted = true WHERE id = @id";

        public const string CheckStatusExists = @"SELECT COUNT(*) FROM status_master 
                WHERE LOWER(TRIM(status)) = LOWER(TRIM(@status)) 
                AND is_deleted = false 
                AND (CASE WHEN @id = 0 THEN TRUE ELSE id != @id END)";
    }
}


