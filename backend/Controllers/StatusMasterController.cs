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
    public class StatusMasterController : ControllerBase
    {
        private readonly IStatusMasterRepository _statusRepository;

        public StatusMasterController(IStatusMasterRepository statusRepository)
        {
            _statusRepository = statusRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllStatuses()
        {
            var response = new ServiceResponse<IEnumerable<StatusViewModel>>();
            try
            {
                response.Data = await _statusRepository.GetStatuses();
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
        public async Task<IActionResult> GetStatusById(int id)
        {
            var response = new ServiceResponse<Status>();
            try
            {
                response.Data = await _statusRepository.GetStatusById(id);
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
        public async Task<IActionResult> AddUpdateStatus([FromBody] Status request)
        {
            var response = new ServiceResponse<Status>();
            try
            {
                if (string.IsNullOrWhiteSpace(request.status))
                {
                    throw new Exception("Status name is required");
                }
                if (string.IsNullOrWhiteSpace(request.color))
                {
                    throw new Exception("Color is required");
                }

                response.Data = await _statusRepository.AddUpdateStatus(request);
                if (response.Data == null)
                    throw new Exception(CommonMessages.UnableToCreate);

                response.Message = request.id == 0 ? "Status created successfully" : "Status updated successfully";
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
        public async Task<IActionResult> DeleteStatus(int id, bool isHardDelete)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _statusRepository.DeleteStatus(id, isHardDelete);
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


