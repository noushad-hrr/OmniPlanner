namespace OmniPlanner_API.Queries.Master_Data
{
    public class CustomerQueries
    {
        //public const string GetAll = @"SELECT
        //                                c.*,
        //                                CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
        //                                CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
        //                                FROM customer_master c
        //                                LEFT JOIN users u1 ON c.created_by = u1.id
        //                                LEFT JOIN users u2 ON c.last_modified_by = u2.id
        //                                WHERE c.is_deleted = false";

        //pounds should be considered as tons, as at the UI level Pound is renamed as Ton

        public const string GetAll = @"SELECT 
                                        c.*, 
                                        MAX(CONCAT(u1.first_name, ' ', u1.last_name)) AS created_by_name, 
                                        MAX(CONCAT(u2.first_name, ' ', u2.last_name)) AS last_modified_by_name,
                                        COALESCE(
                                            jsonb_agg(
                                                jsonb_build_object(
                                                    'product_id', cpm.product_id,
                                                    'customer_id', cpm.customer_id,
                                                    'product_name', p.product_name,
                                                    'price_per_unit', cpm.price_per_unit,
                                                    'price_per_pound', cpm.price_per_pound,
                                                    'price_per_ton', cpm.price_per_ton
                                                )
                                            ) FILTER (WHERE cpm.customer_id IS NOT NULL), '[]'
                                        )::TEXT AS CustomerPriceMappingJson
                                    FROM customer_master c
                                    LEFT JOIN users u1 ON c.created_by = u1.id
                                    LEFT JOIN users u2 ON c.last_modified_by = u2.id
                                    LEFT JOIN customer_price_mapping cpm ON c.id = cpm.customer_id
                                    LEFT JOIN products p ON cpm.product_id = p.id
                                    WHERE c.is_deleted = false
                                    GROUP BY c.id;";


        public const string GetAllActive = @"SELECT
                                    c.*,
                                    CONCAT(COALESCE(u1.first_name, ''), ' ', COALESCE(u1.last_name, '')) AS created_by_name,
                                    CONCAT(COALESCE(u2.first_name, ''), ' ', COALESCE(u2.last_name, '')) AS last_modified_by_name,
                                    COALESCE(
                                        jsonb_agg(
                                            jsonb_build_object(
                                                'customer_id', cpm.customer_id,
                                                'product_id', cpm.product_id,
                                                'price_per_unit', cpm.price_per_unit,
                                                'price_per_pound', cpm.price_per_pound,
                                                'price_per_ton', cpm.price_per_ton,
                                                'product_name', p.product_name  -- Fixed: Ensure 'p' is properly joined
                                            )
                                        ) FILTER (WHERE cpm.customer_id IS NOT NULL), '[]'
                                    )::TEXT AS CustomerPriceMappingJson
                                    FROM customer_master c
                                    LEFT JOIN customer_price_mapping cpm ON c.id = cpm.customer_id
                                    LEFT JOIN products p ON cpm.product_id = p.id  -- Added missing JOIN for 'p'
                                    LEFT JOIN users u1 ON c.created_by = u1.id
                                    LEFT JOIN users u2 ON c.last_modified_by = u2.id
                                    WHERE c.is_deleted = false AND c.is_active = true
                                    GROUP BY c.id, u1.first_name, u1.last_name, u2.first_name, u2.last_name;";

        public const string GetById = @"SELECT 
                                            c.*,
                                    COALESCE(
                                            jsonb_agg(
                                                jsonb_build_object(
                                                    'customer_id', cpm.customer_id,
                                                    'product_id', cpm.product_id,
                                                    'price_per_unit', cpm.price_per_unit,
                                                    'price_per_pound', cpm.price_per_pound,
                                                    'price_per_ton', cpm.price_per_ton,
                                                    'product_name', p.product_name
                                                )
                                            ) FILTER(WHERE cpm.customer_id IS NOT NULL), '[]'
                                        )::TEXT AS
                                            CustomerPriceMappingJson
                                        FROM customer_master c
                                        LEFT JOIN customer_price_mapping cpm ON c.id = cpm.customer_id
                                        LEFT JOIN products p ON cpm.product_id = p.id
                                        WHERE c.id = @id AND c.is_deleted = false
                                        GROUP BY c.id";


        public const string Insert = @"INSERT INTO customer_master 
            (name, phone_number, created_by, created_on, last_modified_by, last_modified_on, is_active, is_deleted,customer_type)
            VALUES (@name, @phone_number, @created_by, NOW(), @created_by, NOW(), @is_active, false,@customer_type) RETURNING id;";

        public const string Update = @"UPDATE customer_master SET name = @name,
            phone_number = @phone_number, is_active = @is_active,
            customer_type = @customer_type,
            last_modified_by = @last_modified_by, last_modified_on = NOW() WHERE id = @id AND is_deleted = false";

        //public const string ActiveInActive = @"UPDATE customer_master SET is_active = @is_active, last_modified_by = @last_modified_by,
        //        last_modified_on = NOW() WHERE id = @id;";

        public const string Delete = @"DELETE FROM customer_master WHERE id = @id";
        public const string SoftDelete = @"UPDATE customer_master SET is_deleted = true WHERE id = @id";

        public const string InsertOrUpdateCustomerPrice = @"
            WITH updated AS (
                UPDATE customer_price_mapping
                SET price_per_unit = @price_per_unit, 
                    price_per_pound = @price_per_pound,
                    price_per_ton = @price_per_ton
                WHERE customer_id = @customer_id 
                  AND product_id = @product_id
                RETURNING *
            )
            INSERT INTO customer_price_mapping (customer_id, product_id, price_per_unit, price_per_pound, price_per_ton)
            SELECT @customer_id, @product_id, @price_per_unit, @price_per_pound, @price_per_ton
            WHERE NOT EXISTS (SELECT 1 FROM updated);";


    }
}
