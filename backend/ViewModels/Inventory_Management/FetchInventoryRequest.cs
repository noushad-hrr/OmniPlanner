namespace OmniPlanner_API.ViewModels.Inventory_Management
{
    public class FetchInventoryRequest
    {
        //public int user_id { get; set; } // Not required(Provide only those sites to user which is he is having the permissions)
        public bool is_moved_inventory { get; set; } // 1 Priority
        //public List<int>? region_id { get; set; }// 2 Priority
        public int[]? site_ids { get; set; }// 2 Priority
        public int[]? customer_ids { get; set; } //3 Priority
        public int[]? created_by_ids { get; set; } // 4 Priority
        public int[]? product_ids { get; set; } //5 Priority
        public int[]? package_ids { get; set; } //6 Priority
        public string filter_status { get; set; } // 7 Priority
        public string? search_word { get; set; }
        public bool received_from_another_site { get; set; }
        public bool is_super_admin { get; set; }

        // For Pagination
        public int page_size { get; set; }
        public int page_number { get; set; }
    }

}
