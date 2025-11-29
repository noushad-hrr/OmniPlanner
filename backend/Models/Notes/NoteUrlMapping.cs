using OmniPlanner_API.ViewModels.Master_Data;

namespace OmniPlanner_API.Models.Notes
{
    public class NoteUrlMapping
    {
        public int id { get; set; }
        public int note_id { get; set; }
        public int url_id { get; set; }
        public DateTime created_on { get; set; }
    }

    public class NoteUrlViewModel
    {
        public int id { get; set; }
        public int note_id { get; set; }
        public int url_id { get; set; }
        public string label { get; set; }
        public string url { get; set; }
        public string? category_name { get; set; }
        public string? category_icon { get; set; }
        public DateTime created_on { get; set; }
        public List<CredentialInfo>? credentials { get; set; }
    }
}

