namespace OmniPlanner_API.Queries.System
{
    public class EmailTemplateQueries
    {
        public const string GetAll = @"SELECT
                                        e.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
                                        FROM email_templates e
                                        LEFT JOIN users u1 ON e.created_by = u1.id
                                        LEFT JOIN users u2 ON e.last_modified_by = u2.id
                                        WHERE e.is_deleted = false";

        public const string GetById = @"SELECT * FROM email_templates WHERE id = @id AND is_deleted = false";

        public const string GetByEmailCode = @"SELECT * FROM email_templates WHERE email_code = @emailCode AND is_active = true AND is_deleted = false";

        public const string Insert = @"INSERT INTO email_templates 
            (email_code, email_subject, email_body, copy_to, created_by,created_on, last_modified_by, last_modified_on, is_active, is_deleted)
            VALUES (@email_code, @email_subject, @email_body, @copy_to, @created_by, NOW(), @created_by, NOW(), @is_active, false) RETURNING id;";

        public const string Update = @"UPDATE email_templates SET email_code = @email_code,
            email_subject = @email_subject, email_body = @email_body, copy_to = @copy_to, is_active = @is_active,
            last_modified_by = @last_modified_by, last_modified_on = NOW() WHERE id = @id;";

        //public const string ActiveInActive = @"UPDATE email_templates SET is_active = @is_active, last_modified_by = @last_modified_by,
        //        last_modified_on = NOW() WHERE id = @id;";

        public const string Delete = @"DELETE FROM email_templates WHERE id = @id";
        public const string SoftDelete = @"UPDATE email_templates SET is_deleted = true WHERE id = @id";

        public const string SendMailForDuePayments = @"
                                                        SELECT isd.id AS inventory_sold_id,isd.po_number,im.origin_site_id,isd.created_on,isd.total_sold,isd.total_payment_received,isd.total_amount_due, u.email as email,u.first_name as user_name, p.product_name as product_name , cu.name as customer_name,isd.weight_sold,isd.inventory_id
                                                        FROM inventory_sold_data isd
                                                        INNER JOIN inventory_master im ON isd.inventory_id = im.id
                                                        INNER JOIN user_site_mapping us ON im.origin_site_id = us.site_id
                                                        INNER JOIN users u ON us.user_id = u.id
                                                        INNER JOIN roles r ON u.role_id = r.id
                                                        LEFT JOIN customer_master cu ON isd.customer_id = cu.id
                                                        LEFT JOIN products p ON im.product_id = p.id
                                                        WHERE isd.full_payment_received = false AND isd.created_on <= NOW() - INTERVAL '1 weeks'
                                                        AND r.role_name IN ('Site AR', 'Site Manager') AND r.is_active =  TRUE AND  r.is_deleted = FALSE AND  u.is_active = TRUE AND isd.is_deleted = FALSE";
        public const string SendMailForZeroWeight = @"
                                                        SELECT isd.id AS inventory_sold_id,isd.po_number,im.origin_site_id,isd.created_on,isd.total_sold,isd.total_payment_received,isd.total_amount_due, u.email as email,u.first_name as user_name,p.product_name as product_name , cu.name as customer_name, isd.weight_sold,isd.inventory_id
                                                        FROM inventory_sold_data isd
                                                        LEFT JOIN inventory_master im ON isd.inventory_id = im.id
                                                        LEFT JOIN user_site_mapping us ON im.origin_site_id = us.site_id
                                                        LEFT JOIN users u ON isd.created_by = u.id
                                                        LEFT JOIN roles r ON u.role_id = r.id
                                                        LEFT JOIN customer_master cu ON isd.customer_id = cu.id
                                                        LEFT JOIN products p ON im.product_id = p.id
                                                        WHERE isd.total_sold = 0 AND DATE(isd.created_on) = CURRENT_DATE - INTERVAL '5 days'
                                                        AND  u.is_active = TRUE AND isd.is_deleted = FALSE";
        //AND r.role_name IN ('Site Manager') AND r.is_active = TRUE AND r.is_deleted = FALSE 

    }
}
