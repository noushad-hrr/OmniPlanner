using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Tasks;
using OmniPlanner_API.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OmniPlanner_API.Queries;
using PeriodicTask = OmniPlanner_API.Models.Tasks.PeriodicTask;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    //[Authorize]
    public class PeriodicTaskController : ControllerBase
    {
        private readonly IPeriodicTasksRepository _periodicTaskRepository;

        public PeriodicTaskController(IPeriodicTasksRepository periodicTaskRepository)  
        {
            _periodicTaskRepository = periodicTaskRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPeriodicTasks()
        {
            var response = new ServiceResponse<IEnumerable<PeriodicTask>>();
            try
            {
                response.Data = await _periodicTaskRepository.GetPeriodicTasks();
                if (response.Data == null || !response.Data.Any())
                    throw new Exception(CommonMessages.DataNotFound);

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
    }
}

