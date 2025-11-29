namespace OmniPlanner_API.Models.Notes
{
    public class Note
    {
        public int id { get; set; }
        public string title { get; set; }
        public string content { get; set; }
        public int? categoryId { get; set; }
        public string? categoryName { get; set; }
        public DateTime createdOn { get; set; }
        public DateTime? updatedOn { get; set; }
        public bool important { get; set; }
    }
}


