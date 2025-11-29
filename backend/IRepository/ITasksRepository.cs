using OmniPlanner_API.Models.Tasks;
using OmniPlanner_API.ViewModels.Tasks;
using Task = OmniPlanner_API.Models.Tasks.Task;

namespace OmniPlanner_API.IRepository
{
    public interface ITasksRepository
    {
        Task<IEnumerable<Task>> GetTasks();
        Task<Task> AddMainTask(AddMainTaskRequest request, int userId);
        Task<Task> UpdateMainTask(UpdateMainTaskRequest request, int userId);
        Task<bool> UpdateTaskImportant(int id, bool important, int userId);
        Task<bool> UpdateTaskCompleted(int id, bool completed, int userId);
        Task<bool> UpdateLevel1SubtaskCompleted(int id, bool completed, int userId);
        Task<bool> UpdateLevel2SubtaskCompleted(int id, bool completed, int userId);
        Task<bool> DeleteMainTask(int id);
        Task<Subtask> AddLevel1Subtask(AddLevel1SubtaskRequest request, int userId);
        Task<Subtask> UpdateLevel1Subtask(UpdateLevel1SubtaskRequest request, int userId);
        Task<bool> DeleteLevel1Subtask(int id);
        Task<Subtask> AddLevel2Subtask(AddLevel2SubtaskRequest request, int userId);
        Task<Subtask> UpdateLevel2Subtask(UpdateLevel2SubtaskRequest request, int userId);
        Task<bool> DeleteLevel2Subtask(int id);
    }
}

