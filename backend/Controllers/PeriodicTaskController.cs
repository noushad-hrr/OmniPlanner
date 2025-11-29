using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Tasks;
using OmniPlanner_API.ViewModels;
using OmniPlanner_API.ViewModels.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OmniPlanner_API.Queries;
using System.Security.Claims;
using PeriodicTask = OmniPlanner_API.Models.Tasks.PeriodicTask;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize]
    public class PeriodicTaskController : ControllerBase
    {
        private readonly IPeriodicTasksRepository _periodicTaskRepository;

        public PeriodicTaskController(IPeriodicTasksRepository periodicTaskRepository)  
        {
            _periodicTaskRepository = periodicTaskRepository;
        }

        private int GetCurrentUserId()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim != null && int.TryParse(userIdClaim.Value, out int userId))
                return userId;
            throw new UnauthorizedAccessException("User not authenticated");
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPeriodicTasks()
        {
            var response = new ServiceResponse<IEnumerable<PeriodicTask>>();
            try
            {
                response.Data = await _periodicTaskRepository.GetPeriodicTasks();
                if (response.Data == null || !response.Data.Any())
                {
                    response.Data = new List<PeriodicTask>();
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
        public async Task<IActionResult> AddPeriodicTask([FromBody] AddPeriodicTaskRequest request)
        {
            var response = new ServiceResponse<PeriodicTask>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _periodicTaskRepository.AddPeriodicTask(request, userId);
                response.Message = "Periodic task added successfully";
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
        public async Task<IActionResult> UpdatePeriodicTask([FromBody] UpdatePeriodicTaskRequest request)
        {
            var response = new ServiceResponse<PeriodicTask>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _periodicTaskRepository.UpdatePeriodicTask(request, userId);
                response.Message = "Periodic task updated successfully";
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
        public async Task<IActionResult> DeletePeriodicTask(int id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _periodicTaskRepository.DeletePeriodicTask(id);
                response.Message = "Periodic task deleted successfully";
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
        public async Task<IActionResult> AddPeriodicLevel1Subtask([FromBody] AddPeriodicLevel1SubtaskRequest request)
        {
            var response = new ServiceResponse<PeriodicSubtask>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _periodicTaskRepository.AddLevel1Subtask(request, userId);
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
        public async Task<IActionResult> UpdatePeriodicLevel1Subtask([FromBody] UpdatePeriodicLevel1SubtaskRequest request)
        {
            var response = new ServiceResponse<PeriodicSubtask>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _periodicTaskRepository.UpdateLevel1Subtask(request, userId);
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
        public async Task<IActionResult> DeletePeriodicLevel1Subtask(int id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _periodicTaskRepository.DeleteLevel1Subtask(id);
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
        public async Task<IActionResult> AddPeriodicLevel2Subtask([FromBody] AddPeriodicLevel2SubtaskRequest request)
        {
            var response = new ServiceResponse<PeriodicSubtask>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _periodicTaskRepository.AddLevel2Subtask(request, userId);
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
        public async Task<IActionResult> UpdatePeriodicLevel2Subtask([FromBody] UpdatePeriodicLevel2SubtaskRequest request)
        {
            var response = new ServiceResponse<PeriodicSubtask>();
            try
            {
                var userId = GetCurrentUserId();
                response.Data = await _periodicTaskRepository.UpdateLevel2Subtask(request, userId);
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
        public async Task<IActionResult> DeletePeriodicLevel2Subtask(int id)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _periodicTaskRepository.DeleteLevel2Subtask(id);
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

