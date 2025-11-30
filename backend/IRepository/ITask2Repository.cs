using OmniPlanner_API.Models.Tasks2;
using OmniPlanner_API.ViewModels.Tasks2;

namespace OmniPlanner_API.IRepository
{
    public interface ITask2Repository
    {
        System.Threading.Tasks.Task<IEnumerable<Task2>> GetTasks2();
        System.Threading.Tasks.Task<Task2> AddMainTask2(AddMainTask2Request request, int userId);
        System.Threading.Tasks.Task<Task2> UpdateMainTask2(UpdateMainTask2Request request, int userId);
        System.Threading.Tasks.Task<bool> UpdateTask2Important(int id, bool important, int userId);
        System.Threading.Tasks.Task<bool> UpdateTask2Completed(int id, bool completed, int userId);
        System.Threading.Tasks.Task<bool> DeleteMainTask2(int id);
        
        System.Threading.Tasks.Task<Subtask2> AddLevel1Subtask2(AddLevel1Subtask2Request request, int userId);
        System.Threading.Tasks.Task<Subtask2> UpdateLevel1Subtask2(UpdateLevel1Subtask2Request request, int userId);
        System.Threading.Tasks.Task<bool> UpdateLevel1Subtask2Completed(int id, bool completed, int userId);
        System.Threading.Tasks.Task<bool> DeleteLevel1Subtask2(int id);
        
        System.Threading.Tasks.Task<Subtask2> AddLevel2Subtask2(AddLevel2Subtask2Request request, int userId);
        System.Threading.Tasks.Task<Subtask2> UpdateLevel2Subtask2(UpdateLevel2Subtask2Request request, int userId);
        System.Threading.Tasks.Task<bool> UpdateLevel2Subtask2Completed(int id, bool completed, int userId);
        System.Threading.Tasks.Task<bool> DeleteLevel2Subtask2(int id);
        
        // Aliases without "2" suffix for controller compatibility
        System.Threading.Tasks.Task<IEnumerable<Task2>> GetTasks();
        System.Threading.Tasks.Task<Task2> AddMainTask(AddMainTask2Request request, int userId);
        System.Threading.Tasks.Task<Task2> UpdateMainTask(UpdateMainTask2Request request, int userId);
        System.Threading.Tasks.Task<bool> UpdateTaskImportant(int id, bool important, int userId);
        System.Threading.Tasks.Task<bool> UpdateTaskCompleted(int id, bool completed, int userId);
        System.Threading.Tasks.Task<bool> UpdateLevel1SubtaskCompleted(int id, bool completed, int userId);
        System.Threading.Tasks.Task<bool> UpdateLevel2SubtaskCompleted(int id, bool completed, int userId);
        System.Threading.Tasks.Task<bool> DeleteMainTask(int id);
        System.Threading.Tasks.Task<Subtask2> AddLevel1Subtask(AddLevel1Subtask2Request request, int userId);
        System.Threading.Tasks.Task<Subtask2> UpdateLevel1Subtask(UpdateLevel1Subtask2Request request, int userId);
        System.Threading.Tasks.Task<bool> DeleteLevel1Subtask(int id);
        System.Threading.Tasks.Task<Subtask2> AddLevel2Subtask(AddLevel2Subtask2Request request, int userId);
        System.Threading.Tasks.Task<Subtask2> UpdateLevel2Subtask(UpdateLevel2Subtask2Request request, int userId);
        System.Threading.Tasks.Task<bool> DeleteLevel2Subtask(int id);
    }
}
