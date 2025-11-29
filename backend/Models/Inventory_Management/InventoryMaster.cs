using System.Text.Json.Serialization;
using OmniPlanner_API.Models.Sales_Management;

namespace OmniPlanner_API.Models.Inventory_Management
{
    public class InventoryMaster : CommonModel
    {
        public int id { get; set; } = 0;
        public string? description { get; set; }
        public int site_id { get; set; }
        public int product_id { get; set; }
        public int package_id { get; set; }
        public int? customer_id { get; set; }
        public int quantity { get; set; }
        public decimal total_pounds { get; set; } //pounds should be considered as tons, as at the UI level Pound is renamed as Ton
        public DateTime? inventory_date { get; set; }
        public int? no_of_engines { get; set; }
        public decimal? no_of_engines_values { get; set; }
        public int? transmissions { get; set; }
        public decimal? transmissions_values { get; set; }
        public string? status { get; set; }
        public int origin_site_id { get; set; }
        public bool is_quick_sale { get; set; } = false;
        public string? data_modified { get; set; }
    }

    public class InventoryRequest : InventoryMaster
    {
        public List<IFormFile>? files { get; set; }
    }
    public class InventoryEditHistory
    {
        public int? id { get; set; }
        public int inventory_id { get; set; }
        public int modified_by { get; set; }
        public DateTime modified_on { get; set; }
        public string? modified_by_name { get; set; }
        public object data_modified { get; set; }
    }


}
