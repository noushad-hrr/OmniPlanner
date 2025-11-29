namespace OmniPlanner_API.Models.Sales_Management
{
    public class CustomerPriceMapping
    {
        public int customer_id { get; set; }
        public int product_id { get; set; }
        public double price_per_unit { get; set; }
        public double price_per_pound { get; set; }
        public double price_per_ton { get; set; }
    }

    public class CustomerPriceMappingViewModel : CustomerPriceMapping
    {
        //public int customer_name { get; set; }
        public string? product_name { get; set; }
    }
}
