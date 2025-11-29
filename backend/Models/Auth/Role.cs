namespace OmniPlanner_API.Models.Auth
{
    public class Role
    {
        public int id { get; set; }
        public string name { get; set; } = string.Empty;
        public string? description { get; set; }
        public bool is_active { get; set; } = true;
        public bool is_deleted { get; set; } = false;
        public int? created_by { get; set; }
        public DateTime created_on { get; set; }
        public int? last_modified_by { get; set; }
        public DateTime last_modified_on { get; set; }
    }
}

