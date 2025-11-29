using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.ViewModels.Master_Data;

namespace OmniPlanner_API.IRepository
{
    public interface IPriorityMasterRepository
    {
        Task<IEnumerable<PriorityViewModel>> GetPriorities();
        Task<Priority?> GetPriorityById(int id);
        Task<Priority> AddUpdatePriority(Priority request);
        Task<bool> DeletePriority(int id, bool isHardDelete);
    }
}


