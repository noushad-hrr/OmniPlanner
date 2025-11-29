using System.Text.Json.Serialization;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Models.Sales_Management;

namespace OmniPlanner_API.ViewModels.Master_Data
{
    public class customerViewModel : Customer
    {
       
        //public List<CustomerPriceMappingViewModel>? customerPriceMapping {  get; set; }
        [JsonIgnore]
        public string CustomerPriceMappingJson { get; set; } = string.Empty;
    }
}
