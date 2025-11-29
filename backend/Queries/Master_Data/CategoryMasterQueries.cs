namespace OmniPlanner_API.Queries.Master_Data
{
    public class CategoryMasterQueries
    {
        public const string GetAll = @"SELECT
                                        c.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
                                        FROM category_master c
                                        LEFT JOIN users u1 ON c.created_by = u1.id
                                        LEFT JOIN users u2 ON c.last_modified_by = u2.id
                                        WHERE c.is_deleted = false
                                        ORDER BY c.category ASC";

        public const string GetById = @"SELECT * FROM category_master WHERE id = @id AND is_deleted = false";

        public const string Insert = @"INSERT INTO category_master 
                (category, icon, created_by, created_on, last_modified_by, last_modified_on, is_active, is_deleted)
                VALUES (@category, @icon, @created_by, NOW(), @created_by, NOW(), @is_active, false) RETURNING id;";

        public const string Update = @"UPDATE category_master SET 
                category = @category, 
                icon = @icon, 
                is_active = @is_active,
                last_modified_by = @last_modified_by, 
                last_modified_on = NOW() 
                WHERE id = @id;";

        public const string Delete = @"DELETE FROM category_master WHERE id = @id";
        
        public const string SoftDelete = @"UPDATE category_master SET is_deleted = true WHERE id = @id";

        public const string CheckCategoryExists = @"SELECT COUNT(*) FROM category_master 
                WHERE LOWER(TRIM(category)) = LOWER(TRIM(@category)) 
                AND is_deleted = false 
                AND (CASE WHEN @id = 0 THEN TRUE ELSE id != @id END)";
    }
}

