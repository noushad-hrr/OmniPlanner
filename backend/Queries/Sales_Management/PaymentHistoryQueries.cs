namespace OmniPlanner_API.Queries.Sales_Management
{
    public class PaymentHistoryQueries
    {
        public const string Insert = @"INSERT INTO payments_history 
            (inventory_sold_data_id, mode_of_payment, received_amount, check_number, notes, created_by, created_on, last_modified_by, 
            last_modified_on, is_deleted)
            VALUES (@inventory_sold_data_id, @mode_of_payment, @received_amount, @check_number, @notes, @created_by, NOW(), @created_by, 
            NOW(), false) RETURNING id;";

        public const string GetByInventorySoldDataId = @"SELECT p.*,
                                        CONCAT(u1.first_name, ' ', u1.last_name) AS created_by_name,
                                        CONCAT(u2.first_name, ' ', u2.last_name) AS last_modified_by_name
                                        FROM payments_history p 
                                        LEFT JOIN users u1 ON p.created_by = u1.id
                                        LEFT JOIN users u2 ON p.last_modified_by = u2.id
                                        WHERE p.inventory_sold_data_id = @id AND is_deleted = false";
    }
}
