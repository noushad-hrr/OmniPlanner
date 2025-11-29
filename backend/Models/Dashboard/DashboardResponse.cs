namespace OmniPlanner_API.Models.Dashboard
{
    public class DashboardResponse
    {
        public Today today { get; set; }
        public IEnumerable<PaymentsByProduct> payments_by_product { get; set; }
        public IEnumerable<DuePaymentsPast45Days> due_payments_past_45_days { get; set; }
        public IEnumerable<TotalCrushAndCoreSales> total_crush_and_core_sales { get; set; }
        public AvailableInventories available_inventories { get; set; }
        public IEnumerable<ProductsAverage> products_average { get; set; }
        public IEnumerable<AvgSalesPerVehicleDismantle> avg_sales_per_vehicle_dismantle { get; set; }
    }

    public class Today
    {
        public string total_payment_received_today { get; set; }
        public string total_payment_received_percentage_difference_from_last_month { get; set; }
        public string total_sold_today { get; set; }
        public string total_sold_percentage_difference_from_last_month { get; set; }
        public string total_inventories_added_today { get; set; }
        public string total_inventories_sold_today { get; set; }
    }
    public class DuePaymentsPast45Days
    {
        public int customer_id { get; set; }
        public string customer_name { get; set; }
        public decimal total_amount_due { get; set; }
        public int count_of_inventories { get; set; }
        public string customer_type { get; set; }
        public string phone_number { get; set; }

    }
    public class TotalCrushAndCoreSales
    {
        public string customer_name { get; set; }
        public decimal total_sale { get; set; }
        public decimal total_paid_amount { get; set; }
        public decimal total_due_amount { get; set; }
        public decimal total_discrepancy { get; set; }
        public decimal total_write_off { get; set; }
    }
    public class AvailableInventories
    {
        public int total_available_inventories { get; set; }
        public IEnumerable<AvailableInventoriesByProduct> available_inventories_by_product { get; set; }
    }
    public class AvailableInventoriesByProduct
    {
        public string product_name { get; set; }
        public int available_inventories_count { get; set; }
        public int total_units { get; set; }
        public decimal total_weight { get; set; }
    }
    public class ProductsAverage
    {
        public string product_name { get; set; }
        public unit_of_measurement_details per_unit_details { get; set; }
        public unit_of_measurement_details per_pound_details { get; set; }
        //public unit_of_measurement_details per_ton_details { get; set; }
    }
    public class unit_of_measurement_details
    {
        public string max_price_site_code { get; set; }
        public decimal max_price_by_site { get; set; }
        public decimal avg_price_by_site { get; set; }
        public string min_price_site_code { get; set; }
        public decimal min_price_by_site { get; set; }
    }
    public class ProductPriceRow //query responnse of ProductsAverage 
    {
        public string product_name { get; set; }
        public string per_pound_or_unit { get; set; }
        public decimal avg_price_by_site { get; set; }
        public decimal max_price_by_site { get; set; }
        public string max_price_site_code { get; set; }
        public decimal min_price_by_site { get; set; }
        public string min_price_site_code { get; set; }
    }
    public class AvgSalesPerVehicleDismantle
    {
    }
}
