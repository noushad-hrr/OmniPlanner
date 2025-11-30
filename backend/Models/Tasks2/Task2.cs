using OmniPlanner_API.ViewModels.Master_Data;

namespace OmniPlanner_API.Models.Tasks2
{
    // Reusing TaskPriority, TaskStatus, TaskCategory, TaskUrl from Tasks namespace
    using OmniPlanner_API.Models.Tasks;

    public class Subtask2
    {
        public int id { get; set; }
        public string title { get; set; }
        public string? description { get; set; }
        public TaskStatus status { get; set; }
        public TaskPriority priority_level { get; set; }
        public DateTime? taskOnDate { get; set; }
        public string? startTime { get; set; }
        public string? endTime { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime updatedAt { get; set; }
        public decimal? estimatedHours { get; set; }
        public int? priority_order { get; set; }
        public List<Subtask2>? subtasks { get; set; }
        public string parentId { get; set; }
        public int level { get; set; }
        public bool? isExpanded { get; set; } = false;
        public bool completed { get; set; } = false;
        public bool important { get; set; } = false;
    }

    public class Task2
    {
        public int id { get; set; }
        public string title { get; set; }
        public string? description { get; set; }
        public TaskPriority priority_level { get; set; }
        public TaskStatus status { get; set; }
        public TaskCategory category { get; set; }
        public DateTime? taskOnDate { get; set; }
        public string? startTime { get; set; }
        public string? endTime { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime updatedAt { get; set; }
        public decimal? estimatedHours { get; set; }
        public int? priority_order { get; set; }
        public List<Subtask2>? subtasks { get; set; }
        public bool isExpanded { get; set; } = false;
        public string? remarks { get; set; }
        public List<TaskUrl>? urls { get; set; }
        public bool important { get; set; } = false;
        public bool completed { get; set; } = false;
        public PeriodicTask? periodic_task { get; set; }
    }
}
