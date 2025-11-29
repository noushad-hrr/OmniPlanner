namespace OmniPlanner_API.ViewModels.Tasks
{
    public class UpdateMainTaskRequest
    {
        public int id { get; set; }
        public string title { get; set; }
        public string? description { get; set; }
        public int? priority_level_id { get; set; }
        public int? status_id { get; set; }
        public int? category_id { get; set; }
        public DateTime? task_on_date { get; set; }
        public string? start_time { get; set; }
        public string? end_time { get; set; }
        public decimal? estimated_hours { get; set; }
        public int? priority_order { get; set; }
        public string? remarks { get; set; }
        public bool important { get; set; } = false;
        public bool completed { get; set; } = false;
        public int? periodic_tasks_main_task_id { get; set; }
        public List<int>? url_ids { get; set; } // List of URL IDs from urls_master
    }
}

