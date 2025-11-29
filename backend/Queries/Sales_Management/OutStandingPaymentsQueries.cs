using DocumentFormat.OpenXml.Office2010.Excel;

namespace OmniPlanner_API.Queries.Sales_Management
{
    public class OutStandingPaymentsQueries
    {
        public const string GetOutstandingPayments = @"SELECT isd.customer_id, 
              c.name AS customer_name, 
              c.customer_type AS customer_type, 
              COUNT(*) AS records, 
              COALESCE(SUM(isd.weight_sold), 0) AS total_weight, 
              COALESCE(SUM(isd.quantity_sold), 0) AS total_quantity, 
              COALESCE(SUM(isd.total_sold), 0) AS total_sold
              FROM inventory_sold_data isd
              LEFT JOIN inventory_master im ON isd.inventory_id = im.id
              LEFT JOIN customer_master c ON isd.customer_id = c.id
              WHERE {{_query_}} 
              isd.payment_received_at_time_of_sale = false AND isd.full_payment_received = false
              GROUP BY isd.customer_id, c.name, c.customer_type;";

        //New Functionality filters, replace from above model/method
        public const string GetOutstandingPaymentsV2 = @"SELECT isd.customer_id, 
       c.name AS customer_name, 
       c.customer_type AS customer_type, 
       COUNT(*) AS records, 
       STRING_AGG(DISTINCT isd.inventory_id::text, ',') AS inventory_ids_stringify,
       COALESCE(SUM(CASE 
        WHEN isd.per_pound_or_unit = 'Per Ton' THEN isd.weight_sold * 2000
        ELSE isd.weight_sold END), 0) AS total_weight, 
       COALESCE(SUM(isd.quantity_sold), 0) AS total_quantity, 
       COALESCE(SUM(isd.total_sold), 0) AS total_sold
       FROM inventory_sold_data isd
       LEFT JOIN inventory_master im ON isd.inventory_id = im.id
       LEFT JOIN customer_master c ON isd.customer_id = c.id
      WHERE isd.is_deleted = false {{_query_}} {{_payment_status_query_}}
       AND isd.payment_received_at_time_of_sale = false AND isd.full_payment_received = false
       GROUP BY isd.customer_id, c.name, c.customer_type;";


        public const string GetOutstandingPaymentsV2Header = @"SELECT 
       STRING_AGG(DISTINCT isd.po_number::text, ',') AS po_numbers_strigified
       FROM inventory_sold_data isd
       LEFT JOIN inventory_master im ON isd.inventory_id = im.id
       LEFT JOIN customer_master c ON isd.customer_id = c.id
      WHERE isd.is_deleted = false {{_query_}} {{_payment_status_query_}}
       AND isd.payment_received_at_time_of_sale = false AND isd.full_payment_received = false
       ;";

        //public const string GetOutstandingsByCustomer = @"WITH master_table AS (
        //     SELECT im.*, isd.* ,CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
        //            CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name,
        //            CONCAT(u3.first_name, ' ', u3.last_name) AS payment_verified_by_name,
        //            CONCAT(u4.first_name, ' ', u4.last_name) AS marked_paid_by_name,
        //            CONCAT(u5.first_name, ' ', u5.last_name) AS marked_sold_by_name,
        //            os.site_code AS origin_site_code, 
        //            s.site_code AS site_code,
        //            s1.site_code AS shared_with_site_code,
        //            p.product_name,
        //            pt.package_type,
        //            isd.id AS inventory_sold_id,
        //            im.id AS inventory_id,
        //            c.name AS customer_name FROM inventory_master im
        //            LEFT JOIN inventory_sold_data isd ON im.id = isd.inventory_id
        //            LEFT JOIN users u1 ON isd.created_by = u1.id
        //            LEFT JOIN users u2 ON isd.last_modified_by = u2.id
        //            LEFT JOIN users u3 ON isd.payment_verified_by = u3.id
        //            LEFT JOIN users u4 ON isd.marked_paid_by = u4.id
        //            LEFT JOIN users u5 ON isd.marked_sold_by = u5.id
        //            LEFT JOIN sites os ON im.origin_site_id = os.id
        //            LEFT JOIN sites s ON im.site_id = s.id
        //            LEFT JOIN sites s1 ON isd.shared_with_site = s1.id
        //            LEFT JOIN package_types pt ON im.package_id = pt.id
        //            LEFT JOIN products p ON im.product_id = p.id
        //            LEFT JOIN customer_master c ON isd.customer_id = c.id
        //        WHERE isd.is_deleted = false AND isd.payment_verified = @payment_status AND isd.customer_id = @customerId
        //            AND isd.payment_received_at_time_of_sale = false AND DATE(isd.created_on) BETWEEN DATE(@start_date) AND DATE(@end_date) 
        //            {{_query_}}
        //            AND (LOWER(im.id::text) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(im.description) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(isd.notes) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(isd.po_number) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(im.quantity::text) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(im.total_pounds::text) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(im.inventory_date::text) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(im.status) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(c.name) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(os.site_code) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(CONCAT(u1.first_name, ' ', u1.last_name)) LIKE LOWER('%' || @search_word || '%'))
        //        ORDER BY isd.id DESC)
        //            SELECT * FROM master_table LIMIT @page_size OFFSET ((@page_number - 1) * @page_size);";


        //pounds should be considered as tons, as at the UI level Pound is renamed as Ton

        public const string GetOutstandingsByCustomer = @"WITH master_table AS (
             SELECT im.*, isd.* ,
                    isd.additional_charges::text AS additional_charges_strigified, 
                    MAX(CONCAT(u1.first_name, ' ', u1.last_name)) AS created_by_name,
                    MAX(CONCAT(u2.first_name, ' ', u2.last_name)) AS last_modified_by_name,
                    MAX(CONCAT(u2.first_name, ' ', u2.last_name)) AS last_modified_by_name,
                    MAX(CONCAT(u3.first_name, ' ', u3.last_name)) AS payment_verified_by_name,
                    MAX(CONCAT(u4.first_name, ' ', u4.last_name)) AS marked_paid_by_name,
                    MAX(CONCAT(u5.first_name, ' ', u5.last_name)) AS marked_sold_by_name,
                    MAX(os.site_code) AS origin_site_code,
                    MAX(s.site_code) AS site_code,
                    MAX(s1.site_code) AS shared_with_site_code,
                    MAX(p.product_name) AS product_name,
                    MAX(pt.package_type) AS package_type,
                    MAX(isd.id) AS inventory_sold_id,
                    MAX(im.id) AS inventory_id,
                    MAX(c.name) AS customer_name,

 -- Compute write_off_value and discrepancy
        CASE 
            WHEN isd.is_write_off = true THEN isd.total_sold - isd.total_payment_received
            ELSE 0 
        END AS write_off_value,
        
GREATEST(
            CASE 
            WHEN isd.is_write_off = false AND isd.full_payment_received = true THEN isd.total_sold - isd.total_payment_received
            ELSE 0  
        END,
    0
) AS discrepancy,

                    COALESCE(
            jsonb_agg(DISTINCT
                jsonb_build_object(
                    'id', i.id, 
                    'file_name', i.file_name, 
                    'created_by_name', CONCAT(u6.first_name, ' ', u6.last_name), 
                    'last_modified_by_name', CONCAT(u7.first_name, ' ', u7.last_name),
                    'inventory_id' , i.inventory_id,
                    'attachment_path', i.attachment_path,
                    'created_by', i.created_by,
                    'created_on', i.created_on,
                    'last_modified_by', i.last_modified_by,
                    'last_modified_on', i.last_modified_on,
                    'is_deleted', i.is_deleted
                )
            ) FILTER (WHERE i.id IS NOT NULL), '[]'
        )::TEXT AS AttachmentsJson,
        COALESCE(
            jsonb_agg(DISTINCT
                jsonb_build_object(
                    'id', ph.id,
                    'inventory_sold_data_id', ph.inventory_sold_data_id,
                    'received_amount', ph.received_amount,
                    'created_by_name', CONCAT(u8.first_name, ' ', u8.last_name),
                    'last_modified_by_name', CONCAT(u9.first_name, ' ', u9.last_name),
                    'check_number',ph.check_number,
                    'notes',ph.notes,
                    'created_by',ph.created_by,
                    'created_on',ph.created_on,
                    'last_modified_by',ph.last_modified_by,
                    'last_modified_on',ph.last_modified_on,
                    'is_deleted',ph.is_deleted,
                    'mode_of_payment',ph.mode_of_payment,
                    'mode_of_payment_name', pm.mode_of_payment
                )
            ) FILTER (WHERE ph.id IS NOT NULL), '[]'
        )::TEXT AS PaymentHistoryJson
                    FROM inventory_master im
                    LEFT JOIN inventory_sold_data isd ON im.id = isd.inventory_id
LEFT JOIN payments_history ph ON isd.id = ph.inventory_sold_data_id
LEFT JOIN users u8 ON ph.created_by = u8.id
    LEFT JOIN users u9 ON ph.last_modified_by = u9.id
LEFT JOIN inventory_attachments i ON im.id = i.inventory_id
 LEFT JOIN users u6 ON i.created_by = u6.id
    LEFT JOIN users u7 ON i.last_modified_by = u7.id
                    LEFT JOIN users u1 ON isd.created_by = u1.id
                    LEFT JOIN users u2 ON isd.last_modified_by = u2.id
                    LEFT JOIN users u3 ON isd.payment_verified_by = u3.id
                    LEFT JOIN users u4 ON isd.marked_paid_by = u4.id
                    LEFT JOIN users u5 ON isd.marked_sold_by = u5.id
                    LEFT JOIN sites os ON im.origin_site_id = os.id
                    LEFT JOIN sites s ON im.site_id = s.id
                    LEFT JOIN sites s1 ON isd.shared_with_site = s1.id
                    LEFT JOIN package_types pt ON im.package_id = pt.id
                    LEFT JOIN products p ON im.product_id = p.id
                    LEFT JOIN payment_methods pm ON ph.mode_of_payment = pm.id
                    LEFT JOIN customer_master c ON isd.customer_id = c.id
                    WHERE isd.is_deleted = false AND isd.customer_id = @customerId
                    AND isd.payment_received_at_time_of_sale = false AND isd.full_payment_received = false 
                    {{_query_}}
                    AND (LOWER(im.id::text) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(im.description) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(isd.notes) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(isd.po_number) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(im.quantity::text) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(im.total_pounds::text) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(im.inventory_date::text) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(im.status) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(c.name) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(os.site_code) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(CONCAT(u1.first_name, ' ', u1.last_name)) LIKE LOWER('%' || @search_word || '%'))
GROUP BY isd.id, im.id
    ORDER BY isd.last_modified_on DESC)
                    SELECT * FROM master_table LIMIT @page_size OFFSET ((@page_number - 1) * @page_size);";

        public const string GetOutstandingsByCustomerHeader = @"WITH master_table AS (
                SELECT isd.po_number,
                isd.quantity_sold, 
                CASE 
            WHEN isd.per_pound_or_unit = 'Per Ton' THEN isd.weight_sold * 2000
            ELSE isd.weight_sold
        END AS weight_sold,
                isd.total_payment_received,
 -- Compute write_off_value and discrepancy
        CASE 
            WHEN isd.is_write_off = true THEN isd.total_sold - isd.total_payment_received
            ELSE 0 
        END AS write_off_value,
        
GREATEST(
            CASE 
            WHEN isd.is_write_off = false AND isd.full_payment_received = true THEN isd.total_sold - isd.total_payment_received
            ELSE 0  
        END,
    0
) AS discrepancy,
                isd.total_sold 
                FROM inventory_master im
                LEFT JOIN inventory_sold_data isd ON im.id = isd.inventory_id
                LEFT JOIN sites os ON im.origin_site_id = os.id
                LEFT JOIN users u1 ON isd.created_by = u1.id
                LEFT JOIN customer_master c ON isd.customer_id = c.id
                WHERE isd.is_deleted = false 
                    AND isd.payment_received_at_time_of_sale = false AND isd.full_payment_received = false  
                    AND isd.customer_id = @customerId
                    {{_query_}}  
                    AND (LOWER(im.id::text) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(im.description) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(isd.notes) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(isd.po_number) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(im.quantity::text) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(im.total_pounds::text) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(im.inventory_date::text) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(im.status) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(c.name) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(os.site_code) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(CONCAT(u1.first_name, ' ', u1.last_name)) LIKE LOWER('%' || @search_word || '%')))
                SELECT 
                (SELECT COUNT(*) FROM master_table) AS total_records, 
                (SELECT COALESCE(SUM(quantity_sold), 0) FROM master_table) AS total_quantity,
                (SELECT COALESCE(SUM(weight_sold), 0) FROM master_table) AS total_weight,
                (SELECT COALESCE(SUM(total_payment_received), 0) FROM master_table) AS amount_recieved,
                (SELECT COALESCE(SUM(total_sold), 0) FROM master_table) AS total_sold,
                (SELECT COALESCE(SUM(write_off_value), 0) FROM master_table) AS total_write_off,
                (SELECT COALESCE(SUM(discrepancy), 0) FROM master_table) AS total_discrepancy,
                (SELECT json_agg(DISTINCT po_number) FROM master_table WHERE po_number IS NOT NULL) AS po_numbers_strigified;
";

        public static string MarkAsPaid = @"UPDATE inventory_sold_data 
                                             SET full_payment_received = @full_payment_received, 
                                             total_payment_received = total_payment_received + @total_payment_received, 
                                             total_amount_due = @total_amount_due, 
                                             payment_verified = true,  
                                             marked_paid_by = @marked_paid_by, 
                                             marked_paid_on = NOW(),  
                                             last_modified_by = @marked_paid_by, 
                                             last_modified_on = NOW(),
                                             payment_verified_by = @marked_paid_by, 
                                             payment_verified_on = NOW(),
                                             is_write_off = @is_write_off, 
                                             writeoff_reason = @writeoff_reason, 
                                             writeoff_by = @writeoff_by, 
                                             writeoff_date = @writeoff_date 
                                             WHERE id = @id AND is_deleted = false;";


        public const string GetOutstandingsByPONumbers = @"WITH master_table AS (
             SELECT im.*, isd.* ,MAX(CONCAT(u1.first_name, ' ', u1.last_name)) AS created_by_name,
                    MAX(CONCAT(u2.first_name, ' ', u2.last_name)) AS last_modified_by_name,
                    MAX(CONCAT(u2.first_name, ' ', u2.last_name)) AS last_modified_by_name,
                    MAX(CONCAT(u3.first_name, ' ', u3.last_name)) AS payment_verified_by_name,
                    MAX(CONCAT(u4.first_name, ' ', u4.last_name)) AS marked_paid_by_name,
                    MAX(CONCAT(u5.first_name, ' ', u5.last_name)) AS marked_sold_by_name,
                    MAX(os.site_code) AS origin_site_code,
                    MAX(s.site_code) AS site_code,
                    MAX(s1.site_code) AS shared_with_site_code,
                    MAX(p.product_name) AS product_name,
                    MAX(pt.package_type) AS package_type,
                    MAX(isd.id) AS inventory_sold_id,
                    MAX(im.id) AS inventory_id,
                    MAX(c.name) AS customer_name,

 -- Compute write_off_value and discrepancy
        CASE 
            WHEN isd.is_write_off = true THEN isd.total_sold - isd.total_payment_received
            ELSE 0 
        END AS write_off_value,
        
GREATEST(
            CASE 
            WHEN isd.is_write_off = false AND isd.full_payment_received = true THEN isd.total_sold - isd.total_payment_received
            ELSE 0  
        END,
    0
) AS discrepancy,
        
                    COALESCE(
            jsonb_agg(DISTINCT
                jsonb_build_object(
                    'id', i.id, 
                    'file_name', i.file_name, 
                    'created_by_name', CONCAT(u6.first_name, ' ', u6.last_name), 
                    'last_modified_by_name', CONCAT(u7.first_name, ' ', u7.last_name),
                    'inventory_id' , i.inventory_id,
                    'attachment_path', i.attachment_path,
                    'created_by', i.created_by,
                    'created_on', i.created_on,
                    'last_modified_by', i.last_modified_by,
                    'last_modified_on', i.last_modified_on,
                    'is_deleted', i.is_deleted
                )
            ) FILTER (WHERE i.id IS NOT NULL), '[]'
        )::TEXT AS AttachmentsJson,
        COALESCE(
            jsonb_agg(DISTINCT
                jsonb_build_object(
                    'id', ph.id,
                    'inventory_sold_data_id', ph.inventory_sold_data_id,
                    'received_amount', ph.received_amount,
                    'created_by_name', CONCAT(u8.first_name, ' ', u8.last_name),
                    'last_modified_by_name', CONCAT(u9.first_name, ' ', u9.last_name),
                    'check_number',ph.check_number,
                    'notes',ph.notes,
                    'created_by',ph.created_by,
                    'created_on',ph.created_on,
                    'last_modified_by',ph.last_modified_by,
                    'last_modified_on',ph.last_modified_on,
                    'is_deleted',ph.is_deleted,
                    'mode_of_payment',ph.mode_of_payment,
                    'mode_of_payment_name', pm.mode_of_payment
                )
            ) FILTER (WHERE ph.id IS NOT NULL), '[]'
        )::TEXT AS PaymentHistoryJson
                    FROM inventory_master im
                    LEFT JOIN inventory_sold_data isd ON im.id = isd.inventory_id
LEFT JOIN payments_history ph ON isd.id = ph.inventory_sold_data_id
LEFT JOIN users u8 ON ph.created_by = u8.id
    LEFT JOIN users u9 ON ph.last_modified_by = u9.id
LEFT JOIN inventory_attachments i ON im.id = i.inventory_id
 LEFT JOIN users u6 ON i.created_by = u6.id
    LEFT JOIN users u7 ON i.last_modified_by = u7.id
                    LEFT JOIN users u1 ON isd.created_by = u1.id
                    LEFT JOIN users u2 ON isd.last_modified_by = u2.id
                    LEFT JOIN users u3 ON isd.payment_verified_by = u3.id
                    LEFT JOIN users u4 ON isd.marked_paid_by = u4.id
                    LEFT JOIN users u5 ON isd.marked_sold_by = u5.id
                    LEFT JOIN sites os ON im.origin_site_id = os.id
                    LEFT JOIN sites s ON im.site_id = s.id
                    LEFT JOIN sites s1 ON isd.shared_with_site = s1.id
                    LEFT JOIN package_types pt ON im.package_id = pt.id
                    LEFT JOIN products p ON im.product_id = p.id
                    LEFT JOIN payment_methods pm ON ph.mode_of_payment = pm.id
                    LEFT JOIN customer_master c ON isd.customer_id = c.id
                    WHERE isd.is_deleted = false
                    {{_query_}}
GROUP BY isd.id, im.id
                ORDER BY im.id ASC)
                    SELECT * FROM master_table;";
    }

}
