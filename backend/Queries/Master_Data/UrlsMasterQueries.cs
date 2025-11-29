namespace OmniPlanner_API.Queries.Master_Data
{
    public class UrlsMasterQueries
    {
        public const string GetAll = @"SELECT
                                        u.*,
                                        c.category AS category_name,
                                        c.icon AS category_icon,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
                                        FROM urls_master u
                                        LEFT JOIN category_master c ON u.category_id = c.id AND c.is_deleted = false
                                        LEFT JOIN users u1 ON u.created_by = u1.id
                                        LEFT JOIN users u2 ON u.last_modified_by = u2.id
                                        WHERE u.is_deleted = false
                                        ORDER BY c.category ASC, u.label ASC";

        public const string GetUrlCredentials = @"SELECT 
                                                    cm.id,
                                                    cm.provider,
                                                    cm.credential_name,
                                                    cm.credential_id
                                                   FROM urls_credentials_mapping ucm
                                                   INNER JOIN credentials_master cm ON ucm.credential_id = cm.id AND cm.is_deleted = false AND cm.is_active = true
                                                   WHERE ucm.url_id = @urlId
                                                   ORDER BY cm.provider ASC, cm.credential_name ASC";

        public const string AddCredentialToUrl = @"INSERT INTO urls_credentials_mapping (url_id, credential_id, created_on)
                                                   VALUES (@urlId, @credentialId, NOW())
                                                   ON CONFLICT (url_id, credential_id) DO NOTHING
                                                   RETURNING id;";

        public const string RemoveCredentialFromUrl = @"DELETE FROM urls_credentials_mapping 
                                                        WHERE url_id = @urlId AND credential_id = @credentialId;";

        public const string RemoveAllCredentialsFromUrl = @"DELETE FROM urls_credentials_mapping 
                                                             WHERE url_id = @urlId;";

        public const string GetById = @"SELECT * FROM urls_master WHERE id = @id AND is_deleted = false";

        public const string Insert = @"INSERT INTO urls_master 
                (label, url, category_id, created_by, created_on, last_modified_by, last_modified_on, is_active, is_deleted)
                VALUES (@label, @url, @category_id, @created_by, NOW(), @created_by, NOW(), @is_active, false) RETURNING id;";

        public const string Update = @"UPDATE urls_master SET 
                label = @label, 
                url = @url, 
                category_id = @category_id,
                is_active = @is_active,
                last_modified_by = @last_modified_by, 
                last_modified_on = NOW() 
                WHERE id = @id;";

        public const string Delete = @"DELETE FROM urls_master WHERE id = @id";
        
        public const string SoftDelete = @"UPDATE urls_master SET is_deleted = true WHERE id = @id";

        public const string CheckLabelExists = @"SELECT COUNT(*) FROM urls_master 
                WHERE LOWER(TRIM(label)) = LOWER(TRIM(@label)) 
                AND COALESCE(category_id, -1) = COALESCE(@category_id, -1)
                AND is_deleted = false 
                AND (CASE WHEN @id = 0 THEN TRUE ELSE id != @id END)";

        public const string CheckUrlExists = @"SELECT COUNT(*) FROM urls_master 
                WHERE LOWER(TRIM(url)) = LOWER(TRIM(@url)) 
                AND COALESCE(category_id, -1) = COALESCE(@category_id, -1)
                AND is_deleted = false 
                AND (CASE WHEN @id = 0 THEN TRUE ELSE id != @id END)";
    }
}


