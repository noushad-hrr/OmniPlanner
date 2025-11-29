using System.Text.Json.Serialization;
using OmniPlanner_API.Models;
using OmniPlanner_API.Models.Inventory_Management;

namespace OmniPlanner_API.Models.Sales_Management
{
    //public class QuickSale
    //{
    //    public InventoryRequest inventory { get; set; }
    //    public InventorySoldRequest? payment { get; set; }
    //}

    public class QuickSaleV2
    {
        public List<QuickSaleInventories> inventories { get; set; } 
        public string? description { get; set; }
        public int origin_site_id { get; set; }
        public int site_id { get; set; }
        public int customer_id { get; set; }
        public string po_number { get; set; }
        public string notes { get; set; }
        public DateTime date_leaving_site { get; set; }
        public bool payment_received_at_time_of_sale { get; set; }
        public List<PaymentHistory>? payment_details_json { get; set; } = new();
    }

    public class QuickSaleInventories
    {
        public int product_id { get; set; }
        public int package_id { get; set; }
        public decimal quantity { get; set; }
        public decimal total_pounds { get; set; }
        public decimal total_sold { get; set; }
        public int? no_of_engines { get; set; }
        public decimal? no_of_engines_values { get; set; }
        public int? transmissions { get; set; }
        public decimal? transmissions_values { get; set; }
        public decimal price_per_pound_unit { get; set; }
        public string per_pound_or_unit { get; set; }
        public List<string>? files_base64 { get; set; } = [];
        public bool is_revenue_shared { get; set; }
        [JsonIgnore]
        public bool full_payment_received { get; set; }
        [JsonIgnore]
        public decimal? total_payment_received { get; set; } = 0;
        [JsonIgnore]
        public decimal? total_amount_due { get; set; } = 0;
        public int? shared_with_site { get; set; }
        public decimal? shared_percentage { get; set; }
        [JsonIgnore]
        public List<PaymentHistory>? payment_details_json { get; set; }
        public List<AdditionalPaymenst>? additional_charges { get; set; }
    }

    public class AdditionalPaymenst
    {
        public string charge_type { get; set; } = string.Empty;
        public decimal amount { get; set; }
        public string description { get; set; } = string.Empty;
    }
}

