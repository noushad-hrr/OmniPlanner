namespace OmniPlanner_API.ViewModels.Tasks
{
    public class AddPeriodicTaskRequest
    {
        public string title { get; set; }
        public string? description { get; set; }
        public int? priority_level_id { get; set; }
        public int? status_id { get; set; }
        public int? category_id { get; set; }
        public DateTime start_date { get; set; }
        public DateTime? end_date { get; set; }
        public string? start_time { get; set; }
        public string? end_time { get; set; }
        
        // Recurrence fields
        public string recurrence_pattern { get; set; } // 'daily', 'weekly', 'monthly', 'yearly', 'custom'
        public int recurrence_interval { get; set; } = 1;
        public int[]? recurrence_days { get; set; } // For weekly: [1,3,5]
        public int? recurrence_month_day { get; set; } // For monthly: day of month
        public int? recurrence_week_of_month { get; set; } // For monthly: 1=first week, etc.
        public int? recurrence_day_of_week { get; set; } // For monthly: day of week
        public int? recurrence_month { get; set; } // For yearly: month
        public string? recurrence_end_type { get; set; } // 'never', 'on_date', 'after_occurrences'
        public DateTime? recurrence_end_date { get; set; }
        public int? recurrence_occurrences { get; set; }
        
        public decimal? estimated_hours { get; set; }
        public int? priority_order { get; set; }
        public string? remarks { get; set; }
        public bool important { get; set; } = false;
        public bool active { get; set; } = true;
        public List<int>? url_ids { get; set; } // List of URL IDs from urls_master
    }
}
