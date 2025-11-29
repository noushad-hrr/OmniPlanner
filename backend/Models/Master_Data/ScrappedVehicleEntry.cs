namespace OmniPlanner_API.Models.Master_Data
{
    // Monthly scrapped vehicle entry
    public class ScrappedVehicleEntryObject
    {
        public List<ScrappedVehicleEntry> scrapped_vehicle { get; set; }
    }
    public class ScrappedVehicleEntry : CommonModel
    {
        public int id { get; set; }
        public int site_id { get; set; }
        public int vehicle_count { get; set; }
        public DateTime year_month { get; set; }
    }

    public class ScrappedVehicleEntryRequest
    {
        public List<int> site_ids { get; set; }
    }

    public class ScrappedVehicleEntryResponse : ScrappedVehicleEntry
    {
        public string site_code { get; set; }
    }
}
