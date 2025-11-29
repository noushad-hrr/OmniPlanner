namespace OmniPlanner_API.Queries.System
{
    public static class UserQueries
    {
        public const string GetAll = @"SELECT
                u1.*,
                CONCAT(u2.first_name, ' ', u2.last_name) AS created_by_name,
                CONCAT(u3.first_name, ' ', u3.last_name) AS last_modified_by_name,
                r.role_name,
                COALESCE(ARRAY_AGG(us.site_id) FILTER(WHERE us.site_id IS NOT NULL), '{}') AS siteIDs,
COALESCE(
        jsonb_agg(
            DISTINCT jsonb_build_object(
                'regionID', us.region_id,
                'siteIDs', COALESCE(
                    (SELECT array_agg(us2.site_id) 
                     FROM user_site_mapping us2 
                     WHERE us2.user_id = u1.id AND us2.region_id = us.region_id), '{}'
                )
            )
        ) FILTER (WHERE us.region_id IS NOT NULL), '[]'::jsonb
    ) AS regions_stringified
                FROM users u1
                LEFT JOIN users u2 ON u1.created_by = u2.id
                LEFT JOIN users u3 ON u1.last_modified_by = u3.id
                LEFT JOIN roles r ON u1.role_id = r.id
                LEFT JOIN user_site_mapping us ON u1.id = us.user_id
                GROUP BY u1.id, u2.first_name, u2.last_name, u3.first_name, u3.last_name, r.role_name";

        public const string GetAllActive = @"SELECT
                u1.*,
                CONCAT(u2.first_name, ' ', u2.last_name) AS created_by_name,
                CONCAT(u3.first_name, ' ', u3.last_name) AS last_modified_by_name,
                r.role_name,
                COALESCE(ARRAY_AGG(us.site_id) FILTER(WHERE us.site_id IS NOT NULL), '{}') AS siteIDs
                FROM users u1
                LEFT JOIN users u2 ON u1.created_by = u2.id
                LEFT JOIN users u3 ON u1.last_modified_by = u3.id
                LEFT JOIN roles r ON u1.role_id = r.id
                LEFT JOIN user_site_mapping us ON u1.id = us.user_id
                WHERE u1.is_active = true
                GROUP BY u1.id, u2.first_name, u2.last_name, u3.first_name, u3.last_name, r.role_name";

        //public const string GetById = @"SELECT * FROM users WHERE id = @id;";
        public const string GetById = @"SELECT
                u1.*,
                CONCAT(u2.first_name, ' ', u2.last_name) AS created_by_name,
                CONCAT(u3.first_name, ' ', u3.last_name) AS last_modified_by_name,
                r.role_name,
COALESCE(ARRAY_AGG(us.site_id) FILTER(WHERE us.site_id IS NOT NULL), '{}') AS siteIDs,
                COALESCE(
        jsonb_agg(
            DISTINCT jsonb_build_object(
                'regionID', us.region_id,
                'siteIDs', COALESCE(
                    (SELECT array_agg(us2.site_id) 
                     FROM user_site_mapping us2 
                     WHERE us2.user_id = u1.id AND us2.region_id = us.region_id), '{}'
                )
            )
        ) FILTER (WHERE us.region_id IS NOT NULL), '[]'::jsonb
    ) AS regions_stringified
                FROM users u1
                LEFT JOIN users u2 ON u1.created_by = u2.id
                LEFT JOIN users u3 ON u1.last_modified_by = u3.id
                LEFT JOIN roles r ON u1.role_id = r.id
                LEFT JOIN user_site_mapping us ON u1.id = us.user_id
                WHERE u1.id = @id
                GROUP BY u1.id, u2.first_name, u2.last_name, u3.first_name, u3.last_name, r.role_name";


        public const string GetByEmail = @"SELECT * FROM users WHERE LOWER(email) = LOWER(@userEmail);";

        public const string Login = @"SELECT u.*,
                r.is_active AS is_role_active,
                COALESCE(
                        JSONB_AGG(
                            JSONB_BUILD_OBJECT('id', s.id, 'site_code', s.site_code)
                        ) FILTER (WHERE s.id IS NOT NULL), '[]'
                    ) AS sites_stringified
                FROM users u
                LEFT JOIN user_site_mapping us ON u.id = us.user_id                
                LEFT JOIN roles r ON u.role_id = r.id
                LEFT JOIN sites s ON us.site_id = s.id
                WHERE LOWER(u.email) = LOWER(@email) AND u.is_active = true
                GROUP BY u.id, r.is_active;";

        public const string Insert = @"INSERT INTO users 
             (first_name, last_name, email, password, phone_number, role_id, is_super_admin,
             created_by,created_on, last_modified_by, last_modified_on, is_active)
             VALUES (@first_name, @last_name, LOWER(@email), @password, @phone_number, @role_id, @is_super_admin,
             @created_by, NOW(), @created_by, NOW(), @is_active) RETURNING id;";

        public const string UpdateWithPassword = @"UPDATE users SET first_name = @first_name, last_name = @last_name, email = LOWER(@email),
                password = @password, phone_number = @phone_number, role_id = @role_id, is_active = @is_active,
                is_super_admin = @is_super_admin, last_modified_by = @last_modified_by,
                last_modified_on = NOW() WHERE id = @id;";

        public const string UpdateWithoutPassword = @"UPDATE users SET first_name = @first_name, last_name = @last_name, email = LOWER(@email),
                phone_number = @phone_number, role_id = @role_id, is_active = @is_active,
                is_super_admin = @is_super_admin, last_modified_by = @last_modified_by,
                last_modified_on = NOW() WHERE id = @id;";

        public const string UpdatePassword = @"UPDATE users SET password = @password, 
                last_modified_by = @last_modified_by,
                last_modified_on = NOW() WHERE id = @id;";

        public const string UserSiteMappingInsert = @"INSERT INTO user_site_mapping (user_id, site_id, region_id) 
                SELECT @user_id, unnest(@siteIDs), @regionID;";

        public const string UserSiteMappingDelete = @"DELETE FROM user_site_mapping WHERE user_id = @id";

        public const string GetUsersBySiteIds = @"SELECT DISTINCT u.*
                FROM users u
                JOIN user_site_mapping usm ON u.id = usm.user_id
                JOIN sites s ON usm.site_id = s.id
                WHERE usm.site_id = ANY(@siteIds) AND s.is_active = true";

        //public const string ActiveInActive = @"UPDATE users SET is_active = @is_active,
        //        last_modified_by = @last_modified_by, last_modified_on = NOW() WHERE id = @id;";

        //public const string Delete = @"DELETE FROM users WHERE id = @id";
        //public const string SoftDelete = @"UPDATE users SET is_deleted = true WHERE id = @id";

        public const string GetEmailsOfAr = @"
                SELECT DISTINCT u.*
                FROM users u
                INNER JOIN user_site_mapping usm ON usm.user_id = u.id
                INNER JOIN inventory_master inm ON usm.site_id = inm.origin_site_id
                INNER JOIN roles r ON u.role_id = r.id 
                WHERE inm.id = ANY(@inventoryIds)
                AND r.role_name = @role 
                AND r.is_active = TRUE 
                AND r.is_deleted = FALSE 
                AND u.is_active = TRUE;";
    }
}
