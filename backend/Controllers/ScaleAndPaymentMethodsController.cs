using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Queries;
using OmniPlanner_API.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize]
    public class ScaleAndPaymentMethodsController : ControllerBase
    {
        private readonly IScaleAndPaymentMethodRepository _scaleAndPaymentRepository;

        public ScaleAndPaymentMethodsController(IScaleAndPaymentMethodRepository ScaleAndPaymentRepository)
        {
            _scaleAndPaymentRepository = ScaleAndPaymentRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllScaleAndPaymentMethods()
        {
            var response = new ServiceResponse<IEnumerable<ScaleAndPaymentMethod>>();
            try
            {
                response.Data = await _scaleAndPaymentRepository.GetAllScaleAndPaymentMethods();
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetScaleAndPaymentMethodById(int id)
        {
            var response = new ServiceResponse<ScaleAndPaymentMethod>();
            try
            {
                response.Data = await _scaleAndPaymentRepository.GetScaleAndPaymentMethodById(id);
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
        public async Task<IActionResult> AddUpdateScaleAndPaymentMethod([FromBody] ScaleAndPaymentMethod request)
        {
            var response = new ServiceResponse<ScaleAndPaymentMethod>();
            try
            {
                response.Data = await _scaleAndPaymentRepository.AddUpdateScaleAndPaymentMethod(request);
                if (response.Data == null)
                    throw new Exception(CommonMessages.UnableToCreate);

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

        //// Only for Super Admin(Hard Delete)
        [HttpDelete("{id}/{isHardDelete}")]
        public async Task<IActionResult> DeleteScaleAndPaymentMethod(int id, bool isHardDelete)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _scaleAndPaymentRepository.DeleteScaleAndPaymentMethod(id, isHardDelete);
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
