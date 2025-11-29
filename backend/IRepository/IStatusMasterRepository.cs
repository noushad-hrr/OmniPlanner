using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.ViewModels.Master_Data;

namespace OmniPlanner_API.IRepository
{
    public interface IStatusMasterRepository
    {
        Task<IEnumerable<StatusViewModel>> GetStatuses();
        Task<Status?> GetStatusById(int id);
        Task<Status> AddUpdateStatus(Status request);
        Task<bool> DeleteStatus(int id, bool isHardDelete);
    }
}


