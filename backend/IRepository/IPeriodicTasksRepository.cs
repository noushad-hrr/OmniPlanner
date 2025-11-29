using OmniPlanner_API.Models.Tasks;
using PeriodicTask = OmniPlanner_API.Models.Tasks.PeriodicTask;

namespace OmniPlanner_API.IRepository
{
    public interface IPeriodicTasksRepository
    {
        Task<IEnumerable<PeriodicTask>> GetPeriodicTasks();
    }
}

