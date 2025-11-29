using OmniPlanner_API.Models.Attachments;
using OmniPlanner_API.Models.Inventory_Management;

namespace OmniPlanner_API.ViewModels.Inventory_Management
{
    public class InventoryViewModel : InventoryMaster
    {
        public string site_code { get; set; }
        public string product_name { get; set; }
        public string per_pound_or_unit { get; set; }
        public string package_type { get; set; }
        public string customer_name { get; set; }
        public string origin_site_code { get; set; }
        public long total_count { get; set; }
        public bool is_quick_sale {  get; set; }
        public List<AttachmentResponse>? attachments { get; set; }
    }

}
