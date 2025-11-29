namespace OmniPlanner_API.Queries.Master_Data
{
    public class RegionQueries
    {
        public const string GetAll = @"SELECT r.*, CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
             CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
             FROM regions r LEFT JOIN users u1 ON r.created_by = u1.id
             LEFT JOIN users u2 ON r.last_modified_by = u2.id WHERE r.is_deleted = false";

        public const string GetAllActive = @"SELECT r.*, CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
             CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
             FROM regions r LEFT JOIN users u1 ON r.created_by = u1.id
             LEFT JOIN users u2 ON r.last_modified_by = u2.id WHERE r.is_deleted = false AND r.is_active = true";

        public const string GetById = @"SELECT * FROM regions WHERE id = @id AND is_deleted = false";

        public const string Insert = @"INSERT INTO regions 
            (region_name, created_by,created_on, last_modified_by, last_modified_on, is_active, is_deleted)
            VALUES (@region_name, @created_by, NOW(), @created_by, NOW(), @is_active, false) RETURNING id;";

        public const string Update = @"UPDATE regions SET region_name = @region_name, is_active = @is_active,
             last_modified_by = @last_modified_by, last_modified_on = NOW() WHERE id = @id;";

        //public const string ActiveInActive = @"UPDATE regions SET is_active = @is_active,
        //        last_modified_by = @last_modified_by, last_modified_on = NOW() WHERE id = @id;";

        public const string Delete = @"DELETE FROM regions WHERE id = @id";
        public const string SoftDelete = @"UPDATE regions SET is_deleted = true WHERE id = @id";
    }
}
