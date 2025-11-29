namespace OmniPlanner_API.Models.Sales_Management
{
    public class PaymentHistory : CommonModel
    {
        public int id { get; set; } = 0;
        public int inventory_sold_data_id { get; set; } = 0;
        public int mode_of_payment { get; set; }
        public decimal received_amount { get; set; }
        public DateTime received_date { get; set; }
        public string? check_number { get; set; }
        public string? notes { get; set; }
    }
}
