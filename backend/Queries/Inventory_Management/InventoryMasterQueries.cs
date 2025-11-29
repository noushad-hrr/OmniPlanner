using System.Collections.Generic;
using DocumentFormat.OpenXml.Drawing.Charts;
//using Org.BouncyCastle.Crypto;

namespace OmniPlanner_API.Queries.Inventory_Management
{
    public class InventoryMasterQueries
    {
        public const string GetAll = @"SELECT
                                        i.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name,
                                        s1.site_code AS origin_site_code,
                                        s2.site_code AS site_code,
                                        p.product_name,
                                        pt.package_type,
                                        c.name AS customer_name
                                        FROM inventory_master i
                                        LEFT JOIN users u1 ON i.created_by = u1.id
                                        LEFT JOIN users u2 ON i.last_modified_by = u2.id
                                        LEFT JOIN sites s1 ON i.origin_site_id = s1.id
                                        LEFT JOIN sites s2 ON i.site_id = s2.id
                                        LEFT JOIN products p ON i.product_id = p.id
                                        LEFT JOIN package_types pt ON i.package_id = pt.id
                                        LEFT JOIN customer_master c ON i.customer_id = c.id
                                        WHERE i.is_deleted = false";

        public const string GetById = @"SELECT m.*, s.site_code, p.product_name, pk.package_type, c.name AS customer_name,
                os.site_code AS origin_site_code, s.site_code, CONCAT(u.first_name, ' ', u.last_name) AS created_by_name,
                CONCAT(ul.first_name, ' ', ul.last_name) AS last_modified_by_name, COUNT(*) OVER() AS total_count FROM inventory_master m
                LEFT JOIN sites s ON m.site_id = s.id
                LEFT JOIN products p ON m.product_id = p.id
                LEFT JOIN package_types pk ON m.package_id = pk.id
                LEFT JOIN customer_master c ON m.customer_id = c.id
                LEFT JOIN users u ON m.created_by = u.id
                LEFT JOIN users ul ON m.last_modified_by = ul.id
                LEFT JOIN sites os ON m.origin_site_id = os.id
                WHERE m.id = @inventoryId AND m.is_deleted = false";

        //pound should be considered as ton, as at the UI level Pound is renamed as Ton

        public const string Insert = @"INSERT INTO inventory_master 
            (description, site_id, product_id, package_id, customer_id, quantity, total_pounds, inventory_date, 
             no_of_engines, no_of_engines_values, transmissions, transmissions_values, status, origin_site_id, 
             created_by, created_on, last_modified_by, last_modified_on, is_deleted,is_quick_sale)
            VALUES (@description, @site_id, @product_id, @package_id, @customer_id, @quantity, @total_pounds, 
            @inventory_date, @no_of_engines, @no_of_engines_values, @transmissions, @transmissions_values, @status, 
            @origin_site_id, @created_by, NOW(), @created_by, NOW(), false,@is_quick_sale) RETURNING id;";

        public const string Update = @"UPDATE inventory_master SET description = @description, site_id = @site_id,
            product_id = @product_id, package_id = @package_id, customer_id = @customer_id, quantity = @quantity,
            total_pounds = @total_pounds, inventory_date = @inventory_date, no_of_engines = @no_of_engines, 
            no_of_engines_values = @no_of_engines_values, transmissions = @transmissions, 
            transmissions_values = @transmissions_values, status = @status, origin_site_id = @origin_site_id,
            last_modified_by = @last_modified_by, last_modified_on = NOW() WHERE id = @id AND is_deleted = false";

        //public const string ActiveInActive = @"UPDATE inventory_master SET is_active = @is_active, last_modified_by = @last_modified_by,
        //        last_modified_on = NOW() WHERE id = @id;";

        public const string Delete = @"DELETE FROM inventory_master WHERE id = @id";

        public const string SoftDelete = @"UPDATE inventory_master SET is_deleted = true WHERE id = @id";
        
        // Below query is for filters
        public const string FetchWithFilters = @"SELECT m.*, s.site_code, p.product_name, p.price_calculation_on AS per_pound_or_unit, pk.package_type, c.name AS customer_name,
                os.site_code AS origin_site_code, s.site_code, CONCAT(u.first_name, ' ', u.last_name) AS created_by_name,
                CONCAT(ul.first_name, ' ', ul.last_name) AS last_modified_by_name, COUNT(*) OVER() AS total_count FROM inventory_master m
                LEFT JOIN sites s ON m.site_id = s.id
                LEFT JOIN products p ON m.product_id = p.id
                LEFT JOIN package_types pk ON m.package_id = pk.id
                LEFT JOIN customer_master c ON m.customer_id = c.id
                LEFT JOIN users u ON m.created_by = u.id
                LEFT JOIN users ul ON m.last_modified_by = ul.id
                LEFT JOIN sites os ON m.origin_site_id = os.id
                WHERE status = @filter_status{{_query_}}
                ORDER BY m.id DESC LIMIT @page_size OFFSET ((@page_number - 1) * @page_size);";

        public const string InsertInMoveInventory = @"INSERT INTO move_inventory_history(inventory_id, origin_site_id,
                destination_site_id, remarks, created_by, created_on) VALUES (@inventory_id, @origin_site_id,
                @destination_site_id, @remarks, @created_by, NOW());";

        public const string GetInventoryMovedHistoryByInventoryId = @"SELECT mh.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        s1.site_code AS origin_site_code,
                                        s2.site_code AS destination_site_code,
                                        i.status
                                        FROM move_inventory_history mh
                                        LEFT JOIN users u1 ON mh.created_by = u1.id
                                        LEFT JOIN sites s1 ON mh.origin_site_id = s1.id
                                        LEFT JOIN sites s2 ON mh.destination_site_id = s2.id
                                        LEFT JOIN inventory_master i ON mh.inventory_id = i.id
                                        WHERE mh.inventory_id = @id";

        public const string InsertEditHistory = @"INSERT INTO inventory_master_auditlogs 
            (inventory_id, modified_by, modified_on, data_modified)
            VALUES (@id, @last_modified_by, NOW(), @data_modified) RETURNING id;";

        public const string GetEditHistory = @"SELECT
                                        ima.*,
                                        CONCAT(u.first_name, ' ', u.last_name) AS modified_by_name
                                        FROM inventory_master_auditlogs ima
                                        LEFT JOIN users u ON ima.modified_by = u.id
                                        WHERE ima.inventory_id = @inventoryId
                                        ORDER BY ima.inventory_id DESC";
    }
}
