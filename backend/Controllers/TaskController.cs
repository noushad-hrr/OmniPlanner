using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Tasks;
using OmniPlanner_API.ViewModels;
using OmniPlanner_API.ViewModels.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OmniPlanner_API.Queries;
using System.Security.Claims;
using System.Linq;
using System.Collections.Generic;
using Task = OmniPlanner_API.Models.Tasks.Task;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize]
    public class TaskController : ControllerBase
    {
        private readonly ITasksRepository _taskRepository;

        public TaskController(ITasksRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        private int GetCurrentUserId()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim != null && int.TryParse(userIdClaim.Value, out int userId))
                return userId;
            throw new UnauthorizedAccessException("User not authenticated");
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTasks()
        {
            var response = new ServiceResponse<IEnumerable<Task>>();
            try
            {
                var tasks = await _taskRepository.GetTasks();

                if (tasks != null && tasks.Any())
                {
                    // Filter out shadowed periodic tasks
                    // Logic: L2 > L1 > Main for the same Date and Periodic Main Task ID
                    var tasksToRemove = new HashSet<int>();
                    var periodicTasks = tasks.Where(t => t.periodic_task != null && t.taskOnDate.HasValue).ToList();

                    var groupedTasks = periodicTasks.GroupBy(t => new { Date = t.taskOnDate.Value.Date, PeriodicId = t.periodic_task.id });

                    foreach (var group in groupedTasks)
                    {
                        var hasLevel2 = group.Any(t => t.periodic_level_2_task != null);
                        var hasLevel1 = group.Any(t => t.periodic_level_1_task != null);

                        if (hasLevel1)
                        {
                            // If L1 exists (and no L2), remove anything that is NOT L1 (i.e. remove Main)
                            foreach (var task in group.Where(t => t.periodic_level_1_task == null))
                            {
                                tasksToRemove.Add(task.id);
                            }
                        }

                        if (hasLevel2)
                        {
                            foreach (var task_ref_1 in group.Where(t => t.periodic_level_2_task != null))
                            {
                                //remove A B null by A B C
                                foreach (var task in group.Where(t => t.periodic_level_2_task == null && t.periodic_level_1_task != null))
                                {
                                    if (task.periodic_task.id == task_ref_1.periodic_task.id && task.periodic_level_1_task.id == task_ref_1.periodic_level_1_task.id && task.periodic_level_2_task == null)
                                    {
                                        tasksToRemove.Add(task.id);
                                    }
                                }
                            }
                        }

                    }

                    if (tasksToRemove.Any())
                    {
                        tasks = tasks.Where(t => !tasksToRemove.Contains(t.id));
                    }
                }

                response.Data = tasks ?? new List<Task>();
                if (response.Data == null || !response.Data.Any())
                {
                    response.Data = new List<Task>();
                }

                response.Message = CommonMessages.GetSuccessfully;
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddMainTask([FromBody] AddMainTaskRequest request)
        {
            var response = new ServiceResponse<Task>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _taskRepository.AddMainTask(request, userId);
                response.Message = "Main task added successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateMainTask([FromBody] UpdateMainTaskRequest request)
        {
            var response = new ServiceResponse<Task>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _taskRepository.UpdateMainTask(request, userId);
                response.Message = "Main task updated successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpPut("important/{id}")]
        public async Task<IActionResult> UpdateTaskImportant(int id, [FromBody] bool important)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _taskRepository.UpdateTaskImportant(id, important, userId);
                response.Message = important ? "Task marked as important" : "Task unmarked as important";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpPut("completed/{id}")]
        public async Task<IActionResult> UpdateTaskCompleted(int id, [FromBody] bool completed)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _taskRepository.UpdateTaskCompleted(id, completed, userId);
                response.Message = completed ? "Task marked as completed" : "Task unmarked as completed";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpPut("level1/completed/{id}")]
        public async Task<IActionResult> UpdateLevel1SubtaskCompleted(int id, [FromBody] bool completed)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _taskRepository.UpdateLevel1SubtaskCompleted(id, completed, userId);
                response.Message = completed ? "Level 1 subtask marked as completed" : "Level 1 subtask unmarked as completed";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpPut("level2/completed/{id}")]
        public async Task<IActionResult> UpdateLevel2SubtaskCompleted(int id, [FromBody] bool completed)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _taskRepository.UpdateLevel2SubtaskCompleted(id, completed, userId);
                response.Message = completed ? "Level 2 subtask marked as completed" : "Level 2 subtask unmarked as completed";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMainTask(int id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _taskRepository.DeleteMainTask(id);
                response.Message = "Main task deleted successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddLevel1Subtask([FromBody] AddLevel1SubtaskRequest request)
        {
            var response = new ServiceResponse<Subtask>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _taskRepository.AddLevel1Subtask(request, userId);
                response.Message = "Level 1 subtask added successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateLevel1Subtask([FromBody] UpdateLevel1SubtaskRequest request)
        {
            var response = new ServiceResponse<Subtask>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _taskRepository.UpdateLevel1Subtask(request, userId);
                response.Message = "Level 1 subtask updated successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpDelete("level1/{id}")]
        public async Task<IActionResult> DeleteLevel1Subtask(int id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _taskRepository.DeleteLevel1Subtask(id);
                response.Message = "Level 1 subtask deleted successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddLevel2Subtask([FromBody] AddLevel2SubtaskRequest request)
        {
            var response = new ServiceResponse<Subtask>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _taskRepository.AddLevel2Subtask(request, userId);
                response.Message = "Level 2 subtask added successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateLevel2Subtask([FromBody] UpdateLevel2SubtaskRequest request)
        {
            var response = new ServiceResponse<Subtask>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _taskRepository.UpdateLevel2Subtask(request, userId);
                response.Message = "Level 2 subtask updated successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpDelete("level2/{id}")]
        public async Task<IActionResult> DeleteLevel2Subtask(int id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _taskRepository.DeleteLevel2Subtask(id);
                response.Message = "Level 2 subtask deleted successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }
    }
}

