using OmniPlanner_API.Models.Master_Data;

namespace OmniPlanner_API.IRepository
{
    public interface IRegionsRepository
    {
        Task<IEnumerable<Regions>> GetRegions();
        Task<Regions?> GetRegionById(int id);
        Task<Regions> AddUpdateRegion(Regions request);
        Task<bool> DeleteRegion(int id, bool isHardDelete);
        //Task<bool> ActiveInActive(int id, bool is_active);
    }
}
