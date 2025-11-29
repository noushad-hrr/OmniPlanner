namespace OmniPlanner_API.Models.Master_Data
{
    public class Products : CommonModel
    {
        public int id { get; set; }
        public int product_id { get; set; }
        public string product_name { get; set; } = string.Empty;
        public string product_description { get; set; } = string.Empty;
        public string product_code { get; set; } = string.Empty;
        public bool is_customer_mandatory { get; set; }
        public bool is_extra_fields_required { get; set; }
        public string price_calculation_on { get; set; } = string.Empty;
    }
}
