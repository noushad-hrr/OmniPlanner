using OmniPlanner_API.Models.Master_Data;

namespace OmniPlanner_API.Models.Dashboard
{
    public class DashboardRequest
    {
        public int[] sites_or_regions {  get; set; }
        public DateTime? start_date {  get; set; }
        public DateTime? end_date {  get; set; }
        public int view_type {  get; set; } //site view or region view
        public int[] permitted_sections {  get; set; } //Section 1 - Today,
                                                       //Section 2 - payments_by_product,
                                                       //Section 3 - due_payments_past_45_days,
                                                       //Section 4 - total_crush_and_core_sales,
                                                       //Section 5 - available_inventories,
                                                       //Section 6 - products_average,
                                                       //Section 7 - avg_sales_per_vehicle_dismantle
    }
    public enum dashboard_sections
    {
        Today = 1,
        payments_by_product = 2,
        due_payments_past_45_days = 3,
        total_crush_and_core_sales = 4,
        available_inventories = 5,
        products_average =  6,
        avg_sales_per_vehicle_dismantle = 7
    }
}
