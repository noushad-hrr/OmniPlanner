namespace OmniPlanner_API.Models.System
{
    public class Email_Templates : CommonModel
    {
        public int id { get; set; }
        public string email_code { get; set; } // EM-MAS-01:ProductMarkedAsSold, EM-DPW-02:due payment after 6 week , EM-ZERO-03 :  Zero weight and doller(price) after 5 days
        public string email_subject { get; set; }
        public string email_body { get; set; }
        public string? copy_to { get; set; }
    }
    public class PaymentDue
    {
        public string email { get; set; }
        public int inventory_sold_id { get; set; }
        public int inventory_id { get; set; }
        public string po_number { get; set; }
        public string origin_site_id { get; set; }
        public DateTime created_on { get; set; }
        public decimal total_sold { get; set; }
        public decimal total_payment_received { get; set; }
        public decimal total_amount_due { get; set; }
        public string customer_name { get; set; }
        public string product_name { get; set; }
        public decimal weigh_sold { get; set; }
        public string user_name { get; set; }
    }
    public class MailDetails
    {
        public string origin_site_code { get; set; }
        public int inventory_id { get; set; }
        public decimal weight_sold { get; set; }
        public int quantity_sold { get; set; }
        public string? product_name { get; set; }
        public decimal total_weight { get; set; }
        public int total_box_count { get; set; }
        public int total_quantity { get; set; }
        public string? total_sold { get; set; } // total_sold is total value in packaging slip
        public string mail { get; set; }
        public string name { get; set; }
    }

}
