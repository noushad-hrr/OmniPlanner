namespace OmniPlanner_API.Queries.Master_Data
{
    public class ScaleAndPaymentMethodQueries
    {
            public const string GetAll = @"SELECT
                                        p.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
                                        FROM payment_methods p
                                        LEFT JOIN users u1 ON p.created_by = u1.id
                                        LEFT JOIN users u2 ON p.last_modified_by = u2.id
                                        WHERE p.is_deleted = false";

        public const string GetAllActive = @"SELECT
                                        p.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
                                        FROM payment_methods p
                                        LEFT JOIN users u1 ON p.created_by = u1.id
                                        LEFT JOIN users u2 ON p.last_modified_by = u2.id
                                        WHERE p.is_deleted = false AND p.is_active = true";

        public const string GetById = @"SELECT * FROM payment_methods WHERE id = @id AND is_deleted = false";

            public const string Insert = @"INSERT INTO payment_methods 
            (mode_of_payment, created_by, created_on, last_modified_by, last_modified_on, is_active, is_deleted)
            VALUES (@mode_of_payment, @created_by, NOW(), @created_by, NOW(), @is_active, false) RETURNING id;";

            public const string Update = @"UPDATE payment_methods SET mode_of_payment = @mode_of_payment, is_active = @is_active,
            last_modified_by = @last_modified_by, last_modified_on = NOW() WHERE id = @id AND is_deleted = false";

            //public const string ActiveInActive = @"UPDATE payment_methods SET is_active = @is_active, last_modified_by = @last_modified_by,
            //        last_modified_on = NOW() WHERE id = @id;";

            public const string Delete = @"DELETE FROM payment_methods WHERE id = @id";
            public const string SoftDelete = @"UPDATE payment_methods SET is_deleted = true WHERE id = @id";

    }
    }

