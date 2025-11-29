namespace OmniPlanner_API.Models.Master_Data
{
    public class Sites : CommonModel
    {
        public int id { get; set; }
        public string site_code { get; set; }
        public int region_id { get; set; }

    }
}
