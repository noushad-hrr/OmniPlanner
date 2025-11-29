using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Models.System;
using OmniPlanner_API.Repository;

namespace OmniPlanner_API.ViewModels.Master_Data
{
    public class MasterList
    {
        public List<SitesViewModel> allSites { get; set; }
        public List<SitesViewModel> sitesByUser { get; set; }
        public List<Products> products { get; set; }
        public List<Regions> regions { get; set; }
        public List<PackageTypes> packageTypes { get; set; }
        public List<customerViewModel> customers { get; set; }
        //public List<setting> setting { get; set; }
        public List<ScaleAndPaymentMethod> paymentMethods { get; set; }
    }
}
