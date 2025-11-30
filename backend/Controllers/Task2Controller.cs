using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Tasks2;
using OmniPlanner_API.ViewModels;
using OmniPlanner_API.ViewModels.Tasks2;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OmniPlanner_API.Queries;
using System.Security.Claims;
using Task2 = OmniPlanner_API.Models.Tasks2.Task2;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize]
    public class Task2Controller : ControllerBase
    {
        private readonly ITask2Repository _task2Repository;

        public Task2Controller(ITask2Repository task2Repository)  
        {
            _task2Repository = task2Repository;
        }

        private int GetCurrentUserId()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim != null && int.TryParse(userIdClaim.Value, out int userId))
                return userId;
            throw new UnauthorizedAccessException("User not authenticated");
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTasks2()
        {
            var response = new ServiceResponse<IEnumerable<Task2>>();
            try
            {
                response.Data = await _task2Repository.GetTasks();
                if (response.Data == null || !response.Data.Any())
                {
                    response.Data = new List<Task2>();
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
        public async Task<IActionResult> AddMainTask2([FromBody] AddMainTask2Request request)
        {
            var response = new ServiceResponse<Task2>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _task2Repository.AddMainTask(request, userId);
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
        public async Task<IActionResult> UpdateMainTask2([FromBody] UpdateMainTask2Request request)
        {
            var response = new ServiceResponse<Task2>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _task2Repository.UpdateMainTask(request, userId);
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
        public async Task<IActionResult> UpdateTask2Important(int id, [FromBody] bool important)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _task2Repository.UpdateTaskImportant(id, important, userId);
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
        public async Task<IActionResult> UpdateTask2Completed(int id, [FromBody] bool completed)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _task2Repository.UpdateTaskCompleted(id, completed, userId);
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
        public async Task<IActionResult> UpdateLevel1Subtask2Completed(int id, [FromBody] bool completed)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _task2Repository.UpdateLevel1SubtaskCompleted(id, completed, userId);
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
        public async Task<IActionResult> UpdateLevel2Subtask2Completed(int id, [FromBody] bool completed)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _task2Repository.UpdateLevel2SubtaskCompleted(id, completed, userId);
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
        public async Task<IActionResult> DeleteMainTask2(int id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _task2Repository.DeleteMainTask(id);
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
        public async Task<IActionResult> AddLevel1Subtask2([FromBody] AddLevel1Subtask2Request request)
        {
            var response = new ServiceResponse<Subtask2>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _task2Repository.AddLevel1Subtask(request, userId);
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
        public async Task<IActionResult> UpdateLevel1Subtask2([FromBody] UpdateLevel1Subtask2Request request)
        {
            var response = new ServiceResponse<Subtask2>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _task2Repository.UpdateLevel1Subtask(request, userId);
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
        public async Task<IActionResult> DeleteLevel1Subtask2(int id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _task2Repository.DeleteLevel1Subtask(id);
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
        public async Task<IActionResult> AddLevel2Subtask2([FromBody] AddLevel2Subtask2Request request)
        {
            var response = new ServiceResponse<Subtask2>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _task2Repository.AddLevel2Subtask(request, userId);
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
        public async Task<IActionResult> UpdateLevel2Subtask2([FromBody] UpdateLevel2Subtask2Request request)
        {
            var response = new ServiceResponse<Subtask2>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _task2Repository.UpdateLevel2Subtask(request, userId);
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
        public async Task<IActionResult> DeleteLevel2Subtask2(int id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _task2Repository.DeleteLevel2Subtask(id);
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
