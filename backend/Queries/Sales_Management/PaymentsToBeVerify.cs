namespace OmniPlanner_API.Queries.Sales_Management
{
    public class PaymentsToBeVerify
    {
        public static string MarkAsVerify = @"UPDATE inventory_sold_data 
                                             SET payment_verified = true,  
                                             full_payment_received = true,
                                             last_modified_by = @payment_verified_by, 
                                             last_modified_on = NOW(),
                                             payment_verified_by = @payment_verified_by, 
                                             payment_verified_on = NOW() 
                                             WHERE id = ANY(@inventory_sold_ids) AND is_deleted = false;";
    }
}
