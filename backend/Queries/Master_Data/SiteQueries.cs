namespace OmniPlanner_API.Queries.Master_Data
{
    public class SiteQueries
    {
        public const string GetAll = @"SELECT
                                        s.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name,
                                        r.region_name
                                        FROM sites s
                                        LEFT JOIN users u1 ON s.created_by = u1.id
                                        LEFT JOIN users u2 ON s.last_modified_by = u2.id
                                        LEFT JOIN regions r ON s.region_id = r.id
                                        WHERE s.is_deleted = false
                                        ORDER BY s.site_code ASC";


        public const string GetByUser = @"SELECT
                                        s.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name,
                                        r.region_name
                                    FROM sites s
                                    LEFT JOIN users u1 ON s.created_by = u1.id
                                    LEFT JOIN users u2 ON s.last_modified_by = u2.id
                                    LEFT JOIN regions r ON s.region_id = r.id
                                    WHERE s.is_deleted = false AND s.is_active = true
                                    AND s.id = ANY(@siteIDs)
                                    ORDER BY s.site_code ASC";

        public const string GetAllActive = @"SELECT
                                        s.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name,
                                        r.region_name
                                        FROM sites s
                                        LEFT JOIN users u1 ON s.created_by = u1.id
                                        LEFT JOIN users u2 ON s.last_modified_by = u2.id
                                        LEFT JOIN regions r ON s.region_id = r.id
                                        WHERE s.is_deleted = false AND s.is_active = true";

        public const string GetById = @"SELECT * FROM sites WHERE id = @id AND is_deleted = false";

        public const string Insert = @"INSERT INTO sites 
                (site_code, region_id, created_by,created_on, last_modified_by, last_modified_on, is_active, is_deleted)
                VALUES (@site_code, @region_id, @created_by, NOW(), @created_by, NOW(), @is_active, false) RETURNING id;";

        public const string Update = @"UPDATE sites SET site_code = @site_code, region_id = @region_id, is_active = @is_active,
                last_modified_by = @last_modified_by, last_modified_on = NOW() WHERE id = @id;";

        //public const string ActiveInActive = @"UPDATE sites SET is_active = @is_active,
        //last_modified_by = @last_modified_by, last_modified_on = NOW() WHERE id = @id;";

        public const string Delete = @"DELETE FROM sites WHERE id = @id";
        public const string SoftDelete = @"UPDATE sites SET is_deleted = true WHERE id = @id";

        // For scrapped vehicle
        public const string InsertScrappedVehicleEntry = @"INSERT INTO scrapped_vehicle_entry (site_id, year_month, created_by, created_on, last_modified_by,
                last_modified_on, vehicle_count) VALUES (@site_id, @year_month, @created_by, NOW(), @created_by, NOW(), @vehicle_count) RETURNING id;";

        public const string UpdateScrappedVehicleEntry = @"UPDATE scrapped_vehicle_entry SET 
                last_modified_by = @last_modified_by, last_modified_on = NOW(), vehicle_count = @vehicle_count WHERE id = @id;";

        public const string GetScrappedVehicleEntry = @"
Select 
sve.id,
sve.site_id, 
s.site_code,
sve.year_month,
sve.vehicle_count,
sve.created_on,
sve.last_modified_on,
sve.created_by,
sve.last_modified_by,
CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
From scrapped_vehicle_entry sve
Left join sites s ON sve.site_id = s.id
LEFT JOIN users u1 ON sve.created_by = u1.id
LEFT JOIN users u2 ON sve.last_modified_by = u2.id
where sve.site_id = ANY(@site_ids)
";
        public const string GetDuplicateScrappedVehicleEntry = @"
    WITH input_data (site_id, year, month) AS (
        VALUES
        {{_entriesToCheck_}}
    )
    SELECT s.site_id,
           EXTRACT(YEAR FROM s.year_month)::int AS Year,
           EXTRACT(MONTH FROM s.year_month)::int AS Month
    FROM scrapped_vehicle_entry s
    JOIN input_data i ON s.site_id = i.site_id
        AND EXTRACT(YEAR FROM s.year_month)::int = i.year
        AND EXTRACT(MONTH FROM s.year_month)::int = i.month
    LIMIT 1;
";
    }
}
