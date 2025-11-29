using OmniPlanner_API.Models.Sales_Management;

namespace OmniPlanner_API.Models.Master_Data
{
    public class Customer : CommonModel
    {
        public int id { get; set; }
        public string name { get; set; }
        public string? phone_number { get; set; }
        public int customer_type {  get; set; } //1. Scrap Customer 2. Wholesale Customer
        public List<CustomerPriceMappingViewModel>? customer_price_mapping {  get; set; }
    }
}
