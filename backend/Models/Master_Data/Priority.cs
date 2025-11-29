namespace OmniPlanner_API.Models.Master_Data
{
    public class Priority : CommonModel
    {
        public int id { get; set; }
        public string priority { get; set; }
        public string color { get; set; }
        public bool is_default { get; set; } = false;
    }
}


