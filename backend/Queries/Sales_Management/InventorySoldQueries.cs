namespace OmniPlanner_API.Queries.Sales_Management
{
    public class InventorySoldQueries
    {
        public const string GetAll = @"
           SELECT i.*,
           CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
           CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name,
           CONCAT(u3.first_name, ' ', u3.last_name) AS marked_sold_by_name,
           CONCAT(u4.first_name, ' ', u4.last_name) AS marked_paid_by_name,
           CONCAT(u5.first_name, ' ', u5.last_name) AS payment_verified_by_name,
           s.site_code AS shared_with_site_code,
           c.name AS customer_name
           FROM inventory_sold_data i
           LEFT JOIN users u1 ON i.created_by = u1.id
           LEFT JOIN users u2 ON i.last_modified_by = u2.id
           LEFT JOIN users u3 ON i.marked_sold_by = u3.id
           LEFT JOIN users u4 ON i.marked_paid_by = u4.id
           LEFT JOIN users u5 ON i.payment_verified_by = u5.id
           LEFT JOIN sites s ON i.shared_with_site = s.id
           LEFT JOIN customer_master c ON i.customer_id = c.id
           WHERE i.is_deleted = false";

        public const string GetById = @"SELECT * FROM inventory_sold_data WHERE id = @id AND is_deleted = false";

        //Note : for the sold inventories(all input records for invetoSoldData), by inventory id in the inventory_master masrk status as "Sold Out"
        //pounds should be considered as tons, as at the UI level Pound is renamed as Ton
        public const string Insert = @"INSERT INTO inventory_sold_data 
            (inventory_id, po_number, customer_id, notes, date_leaving_site, quantity_sold, weight_sold, 
            price_per_pound_unit, per_pound_or_unit, total_sold, payment_received_at_time_of_sale, 
            full_payment_received, total_payment_received, total_amount_due, marked_sold_by, marked_sold_on, 
            marked_paid_by, marked_paid_on, is_revenue_shared, shared_with_site, shared_percentage, 
            payment_verified, payment_verified_by, payment_verified_on, created_by, created_on, last_modified_by, 
            last_modified_on, is_deleted, additional_charges)
            VALUES (@inventory_id, @po_number, @customer_id, @notes, @date_leaving_site, @quantity_sold, 
            @weight_sold, @price_per_pound_unit, @per_pound_or_unit, @total_sold, @payment_received_at_time_of_sale, 
            @full_payment_received, @total_payment_received, @total_amount_due, @marked_sold_by, NOW(), 
            @marked_paid_by, NOW(), @is_revenue_shared, @shared_with_site, @shared_percentage, 
            @payment_verified, @payment_verified_by, @payment_verified_on, @created_by, NOW(), @created_by, 
            NOW(), false, @additional_charges::jsonb) RETURNING id;

            UPDATE inventory_master 
            SET status = 'Sold Out' 
            WHERE id = @inventory_id;";

        public const string Update = @"UPDATE inventory_sold_data 
                                        SET quantity_sold = @quantity_sold, 
                                        weight_sold = @weight_sold, 
                                        total_sold = @total_sold, 
                                        per_pound_or_unit = @per_pound_or_unit, 
                                        price_per_pound_unit = @price_per_pound_unit, 
                                        {{_query_}}
                                        full_payment_received = @full_payment_received,                                 
                                        last_modified_by = @last_modified_by, 
                                        last_modified_on = NOW(),
                                        is_write_off = @is_write_off, 
                                        writeoff_reason = @writeoff_reason, 
                                        writeoff_by = @writeoff_by, 
                                        writeoff_date = @writeoff_date 
                                        WHERE id = @id AND is_deleted = false;";

        //    public const string Update = @"
        //UPDATE inventory_sold_data 
        //SET quantity_sold = @quantity_sold, 
        //    weight_sold = @weight_sold, 
        //    total_sold = @total_sold, 
        //    last_modified_by = @last_modified_by, 
        //    last_modified_on = NOW() 
        //WHERE id = @id AND is_deleted = false;

        //UPDATE inventory_master 
        //SET quantity = @quantity_sold,
        //    total_pounds = @weight_sold, 
        //    last_modified_by = @last_modified_by, 
        //    last_modified_on = NOW() 
        //WHERE id = @inventory_id AND is_deleted = false;";


        //public const string ActiveInActive = @"UPDATE inventory_sold_data SET is_active = @is_active, last_modified_by = @last_modified_by,
        //        last_modified_on = NOW() WHERE id = @id;";

        public const string Delete = @"DELETE FROM inventory_sold_data WHERE id = @id";
        public const string SoftDelete = @"UPDATE inventory_sold_data SET is_deleted = true WHERE id = @id";

        //New Functionality filters, replace from above model/method
        public const string GetAllSoldOutV2 = @"SELECT im.product_id, 
            p.product_name, 
            COUNT(*) AS records, 
          STRING_AGG(DISTINCT isd.inventory_id::text, ',') AS inventory_ids_stringify,
            COALESCE(SUM( CASE 
        WHEN isd.per_pound_or_unit = 'Per Ton' THEN isd.weight_sold * 2000
        ELSE isd.weight_sold
    END), 0) AS total_weight, 
            COALESCE(SUM(isd.quantity_sold), 0) AS total_quantity, 
            COALESCE(SUM(isd.total_sold), 0) AS total_sold,
COUNT(CASE WHEN isd.full_payment_received = true THEN 1 END) AS total_paid_count,
      COUNT(CASE WHEN isd.full_payment_received = false THEN 1 END) AS total_not_paid_count
            FROM inventory_sold_data isd
            LEFT JOIN inventory_master im ON isd.inventory_id = im.id
            LEFT JOIN products p ON im.product_id = p.id
           LEFT JOIN customer_master c ON isd.customer_id = c.id
           WHERE isd.is_deleted = false 
            {{_query_}}{{_date_}} {{_payment_status_query_}}
            GROUP BY im.product_id, p.product_name;";

        public const string GetAllSoldOutV2Header = @"SELECT 
          STRING_AGG(DISTINCT isd.po_number::text, ',') AS po_numbers_strigified
            FROM inventory_sold_data isd
            LEFT JOIN inventory_master im ON isd.inventory_id = im.id
            LEFT JOIN products p ON im.product_id = p.id
           LEFT JOIN customer_master c ON isd.customer_id = c.id
           WHERE isd.is_deleted = false 
            {{_query_}}{{_date_}} {{_payment_status_query_}};";


        //public const string GetSoldOutsByProductIdNew = @"WITH master_table AS (
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
        //        WHERE isd.is_deleted = false AND isd.payment_verified = @payment_status
        //            AND DATE(isd.created_on) BETWEEN DATE(@start_date) AND DATE(@end_date) 
        //            {{_query_}}
        //            AND (LOWER(im.id::text) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(im.description) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(isd.notes) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(isd.po_number) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(im.quantity::text) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(im.total_pounds::text) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(im.inventory_date::text) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(im.status) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(os.site_code) LIKE LOWER('%' || @search_word || '%') OR
        //            LOWER(CONCAT(u1.first_name, ' ', u1.last_name)) LIKE LOWER('%' || @search_word || '%'))
        //        ORDER BY isd.id DESC)
        //            SELECT * FROM master_table LIMIT @page_size OFFSET ((@page_number - 1) * @page_size);";

        public const string GetSoldOutsByProductIdNew = @"
WITH master_table AS (
    SELECT im.*, isd.*,
        im.id AS inventory_id, 
        isd.id AS inventory_sold_id,
        isd.additional_charges::text AS additional_charges_strigified,
        MAX(CONCAT(u1.first_name, ' ', u1.last_name)) AS created_by_name,
        MAX(CONCAT(u2.first_name, ' ', u2.last_name)) AS last_modified_by_name,
        MAX(CONCAT(u3.first_name, ' ', u3.last_name)) AS payment_verified_by_name,
        MAX(CONCAT(u4.first_name, ' ', u4.last_name)) AS marked_paid_by_name,
        MAX(CONCAT(u5.first_name, ' ', u5.last_name)) AS marked_sold_by_name,
        MAX(os.site_code) AS origin_site_code,
        MAX(s.site_code) AS site_code,
        MAX(s1.site_code) AS shared_with_site_code,
        MAX(p.product_name) AS product_name,
        MAX(pt.package_type) AS package_type,
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
                    'mode_of_payment_name',pm.mode_of_payment
                )
            ) FILTER (WHERE ph.id IS NOT NULL), '[]'
        )::TEXT AS PaymentHistoryJson,
COALESCE(
            jsonb_agg(DISTINCT 
                jsonb_build_object(
                    'id', sp.id,
                    'product_id', sp.product_id,
                    'product_name', p1.product_name,
                    'total_quantity', sp.total_quantity,
                    'total_amount', sp.total_amount,
                    'inventory_sold_data_id', sp.inventory_sold_data_id,
                    'sub_product_items', (
                        SELECT jsonb_agg(
                            jsonb_build_object(
                                'id', spi.id,
                                'price', spi.price,
                                'quantity', spi.quantity,
                                'total', spi.total
                            )
                        ) 
                        FROM sub_product_items spi 
                        WHERE spi.sub_product_id = sp.id
                    )
                )
            ) FILTER (WHERE sp.id IS NOT NULL AND sp.is_deleted = false), '[]'
        )::TEXT AS sub_product_list_strigified
    FROM inventory_master im
    LEFT JOIN inventory_sold_data isd ON im.id = isd.inventory_id
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
    LEFT JOIN customer_master c ON isd.customer_id = c.id
    LEFT JOIN inventory_attachments i ON im.id = i.inventory_id
    LEFT JOIN users u6 ON i.created_by = u6.id
    LEFT JOIN users u7 ON i.last_modified_by = u7.id
    LEFT JOIN payments_history ph ON isd.id = ph.inventory_sold_data_id 
    LEFT JOIN payment_methods pm ON ph.mode_of_payment = pm.id 
    LEFT JOIN users u8 ON ph.created_by = u8.id
    LEFT JOIN users u9 ON ph.last_modified_by = u9.id
    LEFT JOIN sub_product_list sp ON isd.id = sp.inventory_sold_data_id
    LEFT JOIN products p1 ON sp.product_id = p1.id
    WHERE isd.is_deleted = false 
        {{_date_}} 
        {{_query_}}{{_payment_status_query_}}
        AND (
            LOWER(im.id::text) LIKE LOWER('%' || @search_word || '%') OR
            LOWER(im.description) LIKE LOWER('%' || @search_word || '%') OR
            LOWER(isd.notes) LIKE LOWER('%' || @search_word || '%') OR
            LOWER(isd.po_number) LIKE LOWER('%' || @search_word || '%') OR
            LOWER(im.quantity::text) LIKE LOWER('%' || @search_word || '%') OR
            LOWER(im.total_pounds::text) LIKE LOWER('%' || @search_word || '%') OR
            LOWER(im.inventory_date::text) LIKE LOWER('%' || @search_word || '%') OR
            LOWER(im.status) LIKE LOWER('%' || @search_word || '%') OR
            LOWER(os.site_code) LIKE LOWER('%' || @search_word || '%') OR
            LOWER(CONCAT(u1.first_name, ' ', u1.last_name)) LIKE LOWER('%' || @search_word || '%')
        )
    GROUP BY isd.id, im.id
    ORDER BY isd.last_modified_on DESC
)
SELECT * FROM master_table 
LIMIT @page_size OFFSET ((@page_number - 1) * @page_size);
";

        public const string GetSoldOutsByProductIdHeader = @"WITH master_table_1 AS (
                SELECT isd.po_number,
                isd.quantity_sold, 
        CASE 
            WHEN isd.per_pound_or_unit = 'Per Ton' THEN isd.weight_sold * 2000
            ELSE isd.weight_sold
        END AS weight_sold,
        
                isd.full_payment_received,
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
) AS discrepancy

                FROM inventory_master im
                LEFT JOIN inventory_sold_data isd ON im.id = isd.inventory_id
                LEFT JOIN sites os ON im.origin_site_id = os.id
                LEFT JOIN customer_master c ON isd.customer_id = c.id
                LEFT JOIN users u1 ON isd.created_by = u1.id
                WHERE isd.is_deleted = false 
                    {{_date_}}
                    {{_query_}}
                    AND (LOWER(im.id::text) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(im.description) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(isd.notes) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(isd.po_number) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(im.quantity::text) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(im.total_pounds::text) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(im.inventory_date::text) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(im.status) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(os.site_code) LIKE LOWER('%' || @search_word || '%') OR
                    LOWER(CONCAT(u1.first_name, ' ', u1.last_name)) LIKE LOWER('%' || @search_word || '%')) GROUP BY isd.id),
master_table_2 AS (
    SELECT * FROM master_table_1
    {{_paid_not_paid_count_query_}}
)
                SELECT 
                (SELECT COUNT(*) FROM master_table_2) AS total_records, 
                (SELECT COALESCE(SUM(quantity_sold), 0) FROM master_table_2) AS total_quantity,
                (SELECT COALESCE(SUM(weight_sold), 0) FROM master_table_2) AS total_weight,
                (SELECT COALESCE(SUM(write_off_value), 0) FROM master_table_2) AS total_write_off,
                (SELECT COALESCE(SUM(discrepancy), 0) FROM master_table_2) AS total_discrepancy,
                (SELECT COUNT(*) FROM master_table_1 WHERE full_payment_received = true) AS total_paid_count,
                (SELECT COUNT(*) FROM master_table_1 WHERE full_payment_received = false) AS total_not_paid_count,
                (SELECT json_agg(DISTINCT po_number) FROM master_table_2 WHERE po_number IS NOT NULL) AS po_numbers_strigified;
";
        public const string InsertEditHistory = @"INSERT INTO inventory_sold_data_auditlogs 
            (inventory_sold_data_id, modified_by, modified_on, data_modified, data_modified_at)
            VALUES (@id, @last_modified_by, NOW(), @data_modified, @data_modified_at) RETURNING id;";

        public const string GetEditHistory = @"SELECT
                                        isda.*,
                                        CONCAT(u.first_name, ' ', u.last_name) AS modified_by_name
                                        FROM inventory_sold_data_auditlogs isda
                                        LEFT JOIN users u ON isda.modified_by = u.id
                                        WHERE isda.inventory_sold_data_id = @inventorySoldDataId
                                        ORDER BY isda.inventory_sold_data_id DESC";

        //public const string isPOnumberExist = @"SELECT
        //                                CASE 
        //                                    WHEN EXISTS (SELECT 1 FROM inventory_sold_data WHERE po_number = @PONumber) 
        //                                    THEN FALSE 
        //                                    ELSE TRUE 
        //                                END AS result;";
        public const string GetSoldInventoryDetailsByPONumber = @"
        SELECT 
        COALESCE(
            jsonb_agg(
                jsonb_build_object(
                    'shared_with_site_code', s2.site_code,
                    'shared_percentage', isd.shared_percentage,
                    'origin_site_id', im.origin_site_id,
                    'is_revenue_shared', isd.is_revenue_shared,
                    'origin_site_code', s.site_code,
                    'id', isd.id,
                    'inventory_id', isd.inventory_id,
                    'weight_sold', (CASE 
        WHEN isd.per_pound_or_unit = 'Per Ton' THEN isd.weight_sold * 2000
        ELSE isd.weight_sold END), 'quantity_sold', isd.quantity_sold,'product_name', p.product_name
                            )) , '[]')::TEXT AS solddatajson, COALESCE(SUM(
        CASE WHEN isd.per_pound_or_unit = 'Per Ton' THEN isd.weight_sold * 2000
            ELSE isd.weight_sold 
        END
    ), 0) AS total_weights, COUNT(isd.id) AS total_box_count, SUM(isd.quantity_sold) AS total_quantity,
                    SUM(isd.total_sold) AS total_sold
                    FROM inventory_sold_data isd
                    LEFT JOIN inventory_master im ON isd.inventory_id = im.id
                    LEFT JOIN products p ON im.product_id = p.id
                    LEFT JOIN sites s ON im.origin_site_id = s.id
                    LEFT JOIN sites s2 ON isd.shared_with_site = s2.id
                    WHERE isd.po_number = @PONumber;";
    }
}
