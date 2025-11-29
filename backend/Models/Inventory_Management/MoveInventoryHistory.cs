using System.Text.Json.Serialization;

namespace OmniPlanner_API.Models.Inventory_Management
{
    public class MoveInventory : CommonModel
    {
        public long id { get; set; } = 0;
        public long inventory_id { get; set; }
        public int destination_site_id { get; set; }
        public string? remarks { get; set; }
        [JsonIgnore]
        public int origin_site_id { get; set; } = 0;
        //public List<MoveInventories> inventories { get; set; }
        //[JsonIgnore]
        //public long inventory_id { get; set; } = 0;


    }
    //public class MoveInventories : CommonModel
    //{ 
    //    //public int origin_site_id { get; set; }
    //}

    public class MoveInventoryHistory : MoveInventory
    {
        public string origin_site_code { get; set; }
        public string destination_site_code { get; set; }
        public string status { get; set; }

    }
}
