using OmniPlanner_API.ViewModels.Master_Data;

namespace OmniPlanner_API.Models.Tasks
{
    public class TaskPriority
    {
        public string name { get; set; }
        public string color { get; set; }
    }

    public class TaskStatus
    {
        public string name { get; set; }
        public string color { get; set; }
    }

    public class TaskCategory
    {
        public string name { get; set; }
        public string icon { get; set; }
    }

    public class TaskUrl
    {
        public int id { get; set; }
        public string label { get; set; }
        public string url { get; set; }
        public List<CredentialInfo>? credentials { get; set; }
    }

    public class Subtask
    {
        public int id { get; set; }
        public string title { get; set; }
        public string? description { get; set; }
        public TaskStatus status { get; set; }
        public TaskPriority priority_level { get; set; }
        // Category removed - only main tasks have categories
        // Single date for By date/day subtasks
        public DateTime? taskOnDate { get; set; }
        public string? startTime { get; set; }
        public string? endTime { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime updatedAt { get; set; }
        public decimal? estimatedHours { get; set; }
        public int? priority_order { get; set; } // Priority order for sorting subtasks (nullable)
        public List<Subtask>? subtasks { get; set; }
        public string parentId { get; set; }
        public int level { get; set; }
        public bool? isExpanded { get; set; } = false;
        public bool completed { get; set; } = false;
        public bool important { get; set; } = false; // Added for consistency with main task
    }

    public class Task
    {
        public int id { get; set; }
        public string title { get; set; }
        public string? description { get; set; }
        public TaskPriority priority_level { get; set; } // Renamed from priority
        public TaskStatus status { get; set; }
        public TaskCategory category { get; set; }
        // Replaced startDate/endDate with single taskOnDate for By date/day tasks
        public DateTime? taskOnDate { get; set; }
        public string? startTime { get; set; }
        public string? endTime { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime updatedAt { get; set; }
        public decimal? estimatedHours { get; set; }
        public int? priority_order { get; set; } // New field for order of the day
        public List<Subtask>? subtasks { get; set; }
        public bool isExpanded { get; set; } = false;
        public string? remarks { get; set; }
        public List<TaskUrl>? urls { get; set; }
        public bool important { get; set; } = false;
        public bool completed { get; set; } = false;
        public PeriodicTask? periodic_task { get; set; } // Reference to periodic task (nullable)
        public PeriodicSubtask? periodic_level_1_task { get; set; } 
        public PeriodicSubtask? periodic_level_2_task { get; set; }
    }
    public class TaskCategoryModel
    {
        public string id { get; set; }
        public string name { get; set; }
        public string color { get; set; }
        public string icon { get; set; }
    }
}

