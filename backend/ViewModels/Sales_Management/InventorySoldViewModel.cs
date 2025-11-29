using OmniPlanner_API.Models.Sales_Management;

namespace OmniPlanner_API.ViewModels.Sales_Management
{
    public class InventorySoldViewModel : InventorySold
    {
        public string customer_name { get; set; }
        public string marked_sold_by_name { get; set; }
        public string marked_paid_by_name { get; set; }
        public string shared_with_site_code { get; set; }
        public string payment_verified_by_name { get; set; }
    }
}
