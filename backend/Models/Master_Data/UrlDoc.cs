namespace OmniPlanner_API.Models.Master_Data
{
    public class UrlDoc : CommonModel
    {
        public int id { get; set; }
        public string label { get; set; }
        public string url { get; set; }
        public int? category_id { get; set; }
    }
}


