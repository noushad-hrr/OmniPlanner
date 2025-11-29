namespace OmniPlanner_API.Models.Tasks
{
    public class PeriodicTask
    {
        public int id { get; set; }
        public string title { get; set; }
        public string? description { get; set; }
        public TaskPriority priority_level { get; set; } // Renamed from priority
        public TaskStatus status { get; set; }
        public TaskCategory category { get; set; }
        public DateTime? startDate { get; set; }
        public DateTime? endDate { get; set; }
        public string? startTime { get; set; }
        public string? endTime { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime updatedAt { get; set; }
        public decimal? estimatedHours { get; set; }
        public int? priority_order { get; set; } // New field for order of the day
        public List<PeriodicSubtask>? subtasks { get; set; }
        public bool isExpanded { get; set; } = false;
        public string? remarks { get; set; }
        public List<TaskUrl>? urls { get; set; }
        public bool important { get; set; } = false;
        public bool completed { get; set; } = false;
    }

    public class PeriodicSubtask
    {
        public int id { get; set; }
        public string title { get; set; }
        public string? description { get; set; }
        public TaskStatus status { get; set; }
        public TaskPriority priority_level { get; set; }
        public TaskCategory category { get; set; }
        public DateTime? startDate { get; set; }
        public DateTime? endDate { get; set; }
        public string? startTime { get; set; }
        public string? endTime { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime updatedAt { get; set; }
        public decimal? estimatedHours { get; set; }
        public int? priority_order { get; set; } // Priority order for sorting subtasks (nullable)
        public List<PeriodicSubtask>? subtasks { get; set; }
        public string parentId { get; set; }
        public int level { get; set; }
        public bool? isExpanded { get; set; } = false;
        public bool completed { get; set; } = false;
    }
}

