namespace OmniPlanner_API.Queries.Master_Data
{
    public class CredentialsMasterQueries
    {
        public const string GetAll = @"SELECT
                                        c.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
                                        FROM credentials_master c
                                        LEFT JOIN users u1 ON c.created_by = u1.id
                                        LEFT JOIN users u2 ON c.last_modified_by = u2.id
                                        WHERE c.is_deleted = false
                                        ORDER BY c.provider ASC, c.credential_name ASC";

        public const string GetById = @"SELECT * FROM credentials_master WHERE id = @id AND is_deleted = false";

        public const string Insert = @"INSERT INTO credentials_master 
                (provider, credential_name, credential_id, credential_password, additional_fields, notes, created_by, created_on, last_modified_by, last_modified_on, is_active, is_deleted)
                VALUES (@provider, @credential_name, @credential_id, @credential_password, COALESCE(CAST(@additional_fields AS jsonb), '{}'::jsonb), @notes, @created_by, NOW(), @created_by, NOW(), @is_active, false) RETURNING id;";

        public const string Update = @"UPDATE credentials_master SET 
                provider = @provider, 
                credential_name = @credential_name,
                credential_id = @credential_id,
                credential_password = @credential_password,
                additional_fields = COALESCE(CAST(@additional_fields AS jsonb), '{}'::jsonb),
                notes = @notes,
                is_active = @is_active,
                last_modified_by = @last_modified_by, 
                last_modified_on = NOW() 
                WHERE id = @id;";

        public const string Delete = @"DELETE FROM credentials_master WHERE id = @id";
        
        public const string SoftDelete = @"UPDATE credentials_master SET is_deleted = true WHERE id = @id";

        public const string CheckCredentialExists = @"SELECT COUNT(*) FROM credentials_master 
                WHERE LOWER(TRIM(credential_id)) = LOWER(TRIM(@credential_id))
                AND credential_password = @credential_password
                AND is_deleted = false 
                AND (CASE WHEN @id = 0 THEN TRUE ELSE id != @id END)";
    }
}

