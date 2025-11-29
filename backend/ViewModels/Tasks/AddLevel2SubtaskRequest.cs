namespace OmniPlanner_API.ViewModels.Tasks
{
    public class AddLevel2SubtaskRequest
    {
        public int tasks_level_1_sub_task_id { get; set; }
        public string title { get; set; }
        public string? description { get; set; }
        public int? priority_level_id { get; set; }
        public int? status_id { get; set; }
        public string? start_time { get; set; }
        public string? end_time { get; set; }
        public decimal? estimated_hours { get; set; }
        public int? priority_order { get; set; }
        public bool important { get; set; } = false;
        public bool completed { get; set; } = false;
    }
}

