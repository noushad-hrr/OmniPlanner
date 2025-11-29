namespace OmniPlanner_API.Models
{
    public class CommonModel
    {
        public int created_by { get; set; }
        public DateTime created_on { get; set; }
        public string? created_by_name { get; set; }
        public int last_modified_by { get; set; }
        public DateTime last_modified_on { get; set; }
        public string? last_modified_by_name { get; set; }
        public bool is_active { get; set; }
        public bool is_deleted { get; set; }
    }
}
