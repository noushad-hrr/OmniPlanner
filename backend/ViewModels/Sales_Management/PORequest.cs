namespace OmniPlanner_API.ViewModels.Sales_Management
{
    public class PORequest
    {
        public string PONumber { get; set; }
        public bool is_super_admin { get; set; } = false;
        public int[]? site_ids { get; set; }
    }
}
