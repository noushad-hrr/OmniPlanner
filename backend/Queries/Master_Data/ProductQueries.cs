namespace OmniPlanner_API.Queries.Master_Data
{
    public class ProductQueries
    {
        public const string GetAll = @"SELECT
                                        p.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
                                        FROM products p
                                        LEFT JOIN users u1 ON p.created_by = u1.id
                                        LEFT JOIN users u2 ON p.last_modified_by = u2.id
                                        WHERE p.is_deleted = false
                                        order by p.product_name ASC";

        public const string GetAllActive = @"SELECT
                                        p.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
                                        FROM products p
                                        LEFT JOIN users u1 ON p.created_by = u1.id
                                        LEFT JOIN users u2 ON p.last_modified_by = u2.id
                                        WHERE p.is_deleted = false AND p.is_active = true
                                        order by p.product_name ASC";

        public const string GetById = @"SELECT* FROM products WHERE id = @id AND is_deleted = false";

        public const string Insert = @"INSERT INTO products (product_name, is_customer_mandatory,
                is_extra_fields_required, price_calculation_on, created_by, created_on, last_modified_by, last_modified_on,
                is_active, is_deleted) VALUES (@product_name, @is_customer_mandatory, 
                @is_extra_fields_required, @price_calculation_on, @created_by, NOW(), @created_by, NOW(), @is_active, false) RETURNING id;";

        public const string Update = @"UPDATE products SET product_name = @product_name, 
                is_active = @is_active, is_customer_mandatory = @is_customer_mandatory, 
                is_extra_fields_required = @is_extra_fields_required, price_calculation_on = @price_calculation_on,
                last_modified_by = @last_modified_by, last_modified_on = NOW() WHERE id = @id;";

        //public const string ActiveInActive = @"UPDATE products SET is_active = @is_active,
        //        last_modified_by = @last_modified_by, last_modified_on = NOW() WHERE id = @id;";

        public const string Delete = @"DELETE FROM products WHERE id = @id";
        public const string SoftDelete = @"UPDATE products SET is_deleted = true WHERE id = @id";

        //Sub Products Queries
        public const string InsertSubProduct = @"INSERT INTO sub_product_list 
                (inventory_sold_data_id, product_id, total_quantity, total_amount, is_deleted) VALUES 
                (@inventory_sold_data_id, @product_id, @total_quantity, @total_amount, false) RETURNING id;";

        public const string InsertSubProductItem = @"INSERT INTO sub_product_items 
                (sub_product_id, price, quantity, total) VALUES 
                (@sub_product_id, @price, @quantity, @total);";

        public const string UpdateSubProduct = @"
    UPDATE sub_product_list 
    SET product_id = @product_id, 
        total_quantity = @total_quantity, 
        total_amount = @total_amount
    WHERE id = @id AND is_deleted = false;";

        public const string UpdateSubProductItem = @"
    UPDATE sub_product_items 
    SET sub_product_id = @sub_product_id, 
        price = @price, 
        quantity = @quantity, 
        total = @total
    WHERE id = @id";

        public const string DeleteSubProduct = @"DELETE FROM sub_product_list WHERE id = @id";
        public const string SoftDeleteSubProduct = @"UPDATE sub_product_list SET is_deleted = true WHERE id = @id";


        //        public const string UpdateInventorySoldData = @"
        //    UPDATE inventory_sold_data 
        //    SET total_sold = @totalAmountSum, 
        //        quantity_sold = @totalQuantitySum
        //    WHERE id = @id AND is_deleted = false
        //RETURNING *;";


        //        public const string UpdateInventorySoldData = @"
        //    WITH summed AS(
        //    SELECT
        //        inventory_sold_data_id,
        //        SUM(total_quantity) AS sum_quantity,
        //        SUM(total_amount) AS sum_amount
        //    FROM sub_product_list
        //    WHERE inventory_sold_data_id = @id AND is_deleted = false
        //    GROUP BY inventory_sold_data_id
        //),
        //updated AS(
        //    UPDATE inventory_sold_data isd
        //    SET
        //        quantity_sold = s.sum_quantity,
        //        total_sold = s.sum_amount
        //    FROM summed s
        //    WHERE isd.id = s.inventory_sold_data_id
        //    RETURNING isd.quantity_sold, isd.total_sold
        //)
        //SELECT* FROM updated;";


        public const string UpdateInventorySoldData = @"
             UPDATE inventory_sold_data
             SET
                 quantity_sold = @quantity_sold,
                 total_sold = @total_sold,
                 price_per_pound_unit = @price_per_pound_unit,
                 total_amount_due = @total_sold - total_payment_received
             WHERE id = @inventory_sold_data_id
             RETURNING quantity_sold, total_sold, price_per_pound_unit;";


        //        public const string GetSubProductBySoldId = @"SELECT JSON_AGG(
        //    JSON_BUILD_OBJECT(
        //        'id', COALESCE(sp.id, 0),
        //        'product_id', sp.product_id,
        //        'total_quantity', sp.total_quantity,
        //        'total_amount', sp.total_amount,
        //        'sub_product_items', (
        //            SELECT COALESCE(JSON_AGG(
        //                JSON_BUILD_OBJECT(
        //                    'id', COALESCE(spi.id, 0),
        //                    'price', spi.price,
        //                    'quantity', spi.quantity,
        //                    'total', spi.total
        //                )
        //            ), '[]'::JSON)
        //            FROM sub_product_items spi
        //            WHERE spi.sub_product_id = sp.id
        //        )
        //    )
        //) AS result
        //FROM sub_product_list sp
        //WHERE sp.inventory_sold_data_id = :inventory_sold_data_id;";

        public const string HardDelete = @"DELETE FROM products WHERE product_id = @id";

        public const string Exists = @"SELECT COUNT(*) FROM products WHERE product_name = @productName AND product_id != @excludeId";
    }
}
