using DocumentFormat.OpenXml.Drawing.Charts;
using DocumentFormat.OpenXml.Math;
using DocumentFormat.OpenXml.Office2010.Excel;

namespace OmniPlanner_API.Queries.Master_Data
{
    public class PackageTypeQueries
    {
        public const string GetAll = @"SELECT
                                        p.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
                                        FROM package_types p
                                        LEFT JOIN users u1 ON p.created_by = u1.id
                                        LEFT JOIN users u2 ON p.last_modified_by = u2.id
                                        WHERE p.is_deleted = false
                                        ORDER BY
                                                CASE p.id
                                                    WHEN 1 THEN 1
                                                    WHEN 6 THEN 2
                                                    WHEN 2 THEN 3
                                                    WHEN 3 THEN 4
                                                    WHEN 4 THEN 5
                                                    WHEN 5 THEN 6
                                                    ELSE 7
                                                  END,
                                                  p.id;";

        public const string GetAllActive = @"SELECT
                                        p.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
                                        FROM package_types p
                                        LEFT JOIN users u1 ON p.created_by = u1.id
                                        LEFT JOIN users u2 ON p.last_modified_by = u2.id
                                        WHERE p.is_deleted = false AND p.is_active = true
                                        ORDER BY
                                                CASE p.id
                                                    WHEN 1 THEN 1
                                                    WHEN 6 THEN 2
                                                    WHEN 2 THEN 3
                                                    WHEN 3 THEN 4
                                                    WHEN 4 THEN 5
                                                    WHEN 5 THEN 6
                                                    ELSE 7
                                                  END,
                                                  p.id;";

        public const string GetById = @"SELECT* FROM package_types WHERE id = @id AND is_deleted = false";

        public const string Insert = @"INSERT INTO package_types (package_type, created_by, created_on, last_modified_by, last_modified_on, is_active, is_deleted)
                VALUES (@package_type, @created_by, NOW(), @created_by, NOW(), @is_active, false) RETURNING id;";

        public const string Update = @"UPDATE package_types SET package_type = @package_type, is_active = @is_active, 
                last_modified_by = @last_modified_by, last_modified_on = NOW() WHERE id = @id;";

        //public const string ActiveInActive = @"UPDATE package_types SET is_active = @is_active, last_modified_by = @last_modified_by,
        //        last_modified_on = NOW() WHERE id = @id;";

        public const string Delete = @"DELETE FROM package_types WHERE id = @id";
        public const string SoftDelete = @"UPDATE package_types SET is_deleted = true WHERE id = @id";
    }
}
