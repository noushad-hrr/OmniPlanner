using OmniPlanner_API.Models.Master_Data;

namespace OmniPlanner_API.ViewModels.Master_Data
{
    public class ProductsViewModel
    {
        public int product_id { get; set; }
        public string product_name { get; set; } = string.Empty;
        public string product_description { get; set; } = string.Empty;
        public string product_code { get; set; } = string.Empty;
        public bool is_active { get; set; }
        public bool is_deleted { get; set; }
        public DateTime created_on { get; set; }
        public string created_by_name { get; set; } = string.Empty;
        public DateTime last_modified_on { get; set; }
        public string last_modified_by_name { get; set; } = string.Empty;
    }
}
