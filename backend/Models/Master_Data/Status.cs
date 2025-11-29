namespace OmniPlanner_API.Models.Master_Data
{
    public class Status : CommonModel
    {
        public int id { get; set; }
        public string status { get; set; }
        public string color { get; set; }
        public bool is_default { get; set; } = false;
        public bool is_completion_status { get; set; } = false;
    }
}


