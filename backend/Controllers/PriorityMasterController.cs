using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Queries;
using OmniPlanner_API.ViewModels;
using OmniPlanner_API.ViewModels.Master_Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    //[Authorize]
    public class PriorityMasterController : ControllerBase
    {
        private readonly IPriorityMasterRepository _priorityRepository;

        public PriorityMasterController(IPriorityMasterRepository priorityRepository)
        {
            _priorityRepository = priorityRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPriorities()
        {
            var response = new ServiceResponse<IEnumerable<PriorityViewModel>>();
            try
            {
                response.Data = await _priorityRepository.GetPriorities();
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPriorityById(int id)
        {
            var response = new ServiceResponse<Priority>();
            try
            {
                response.Data = await _priorityRepository.GetPriorityById(id);
                if (response.Data == null)
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

        [HttpPost]
        public async Task<IActionResult> AddUpdatePriority([FromBody] Priority request)
        {
            var response = new ServiceResponse<Priority>();
            try
            {
                if (string.IsNullOrWhiteSpace(request.priority))
                {
                    throw new Exception("Priority name is required");
                }
                if (string.IsNullOrWhiteSpace(request.color))
                {
                    throw new Exception("Color is required");
                }

                response.Data = await _priorityRepository.AddUpdatePriority(request);
                if (response.Data == null)
                    throw new Exception(CommonMessages.UnableToCreate);

                response.Message = request.id == 0 ? "Priority created successfully" : "Priority updated successfully";
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

        [HttpDelete("{id}/{isHardDelete}")]
        public async Task<IActionResult> DeletePriority(int id, bool isHardDelete)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _priorityRepository.DeletePriority(id, isHardDelete);
                if (!response.Data)
                    throw new Exception(CommonMessages.UnableToDelete);

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


