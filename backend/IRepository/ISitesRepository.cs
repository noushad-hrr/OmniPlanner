using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.ViewModels.Master_Data;

namespace OmniPlanner_API.IRepository
{
    public interface ISitesRepository
    {
        Task<IEnumerable<SitesViewModel>> GetSites();
        Task<Sites?> GetSiteById(int id);
        Task<Sites> AddUpdateSite(Sites request);
        Task<bool> DeleteSite(int id, bool isHardDelete);
        //Task<bool> ActiveInActive(int id, bool is_active);

        // For vehicle entry
        //Task<List<ScrappedVehicleEntry>> GetScrappedVehicleEntry(ScrappedVehicleEntryRequest request);
        Task<IEnumerable<ScrappedVehicleEntryResponse>> GetScrappedVehicleEntry(ScrappedVehicleEntryRequest request);
        Task<List<ScrappedVehicleEntry>> AddUpdateScrappedVehicleEntry(List<ScrappedVehicleEntry> request);
    }
}
