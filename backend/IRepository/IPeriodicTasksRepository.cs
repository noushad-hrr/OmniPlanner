using OmniPlanner_API.Models.Tasks;
using PeriodicTask = OmniPlanner_API.Models.Tasks.PeriodicTask;
using OmniPlanner_API.ViewModels.Tasks;

namespace OmniPlanner_API.IRepository
{
    public interface IPeriodicTasksRepository
    {
        Task<IEnumerable<PeriodicTask>> GetPeriodicTasks();
        Task<PeriodicTask> AddPeriodicTask(AddPeriodicTaskRequest request, int userId);
        Task<PeriodicTask> UpdatePeriodicTask(UpdatePeriodicTaskRequest request, int userId);
        Task<bool> DeletePeriodicTask(int id);
        Task<PeriodicSubtask> AddLevel1Subtask(AddPeriodicLevel1SubtaskRequest request, int userId);
        Task<PeriodicSubtask> UpdateLevel1Subtask(UpdatePeriodicLevel1SubtaskRequest request, int userId);
        Task<bool> DeleteLevel1Subtask(int id);
        Task<PeriodicSubtask> AddLevel2Subtask(AddPeriodicLevel2SubtaskRequest request, int userId);
        Task<PeriodicSubtask> UpdateLevel2Subtask(UpdatePeriodicLevel2SubtaskRequest request, int userId);
        Task<bool> DeleteLevel2Subtask(int id);
    }
}

