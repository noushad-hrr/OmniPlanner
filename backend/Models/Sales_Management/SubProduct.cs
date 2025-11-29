using System.Text.Json.Serialization;

namespace OmniPlanner_API.Models.Sales_Management
{
    public class SubProduct : SubProductResponse
    {
        public int inventory_sold_data_id { get; set; }
        public List<sub_product_list>? sub_product_list { get; set; }
        public object data_modified { get; set; }
    }

    public class SubProductResponse
    {
        public int? quantity_sold { get; set; }
        public float? total_sold { get; set; }
        public float? price_per_pound_unit { get; set; }
    }

    public class SubProductDelete: SubProductResponse
    {
        public int inventory_sold_data_id { get; set; }
        public object data_modified { get; set; }
        public int id { get; set; }
        public bool isHardDelete { get; set; }
    }
    public class sub_product_list
    {
        public int id { get; set; }
        [JsonIgnore]
        public int inventory_sold_data_id { get; set; }
        public int product_id { get; set; }
        public string? product_name { get; set; }
        public int total_quantity { get; set; }
        public decimal total_amount { get; set; }
        public decimal is_deleted { get; set; }
        public List<sub_product_items> sub_product_items { get; set; }

    }
    public class sub_product_items
    {
        public int id { get; set; }
        public int sub_product_id { get; set; }
        public decimal price { get; set; }
        public int quantity { get; set; }
        public decimal total { get; set; }

    }
}
