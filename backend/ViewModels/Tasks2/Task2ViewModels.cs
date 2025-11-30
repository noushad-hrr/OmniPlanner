namespace OmniPlanner_API.ViewModels.Tasks2
{
    public class AddMainTask2Request
    {
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
        public List<int>? url_ids { get; set; }
    }

    public class UpdateMainTask2Request
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
        public List<int>? url_ids { get; set; }
    }

    public class AddLevel1Subtask2Request
    {
        public int tasks2_main_task_id { get; set; }
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

    public class UpdateLevel1Subtask2Request
    {
        public int id { get; set; }
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

    public class AddLevel2Subtask2Request
    {
        public int tasks2_level_1_sub_task_id { get; set; }
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

    public class UpdateLevel2Subtask2Request
    {
        public int id { get; set; }
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
