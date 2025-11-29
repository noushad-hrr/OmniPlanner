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
    public class CredentialsMasterController : ControllerBase
    {
        private readonly ICredentialsMasterRepository _credentialsRepository;

        public CredentialsMasterController(ICredentialsMasterRepository credentialsRepository)
        {
            _credentialsRepository = credentialsRepository;
        }

        #region Crud Of Credentials

        [HttpGet]
        public async Task<IActionResult> GetAllCredentials()
        {
            var response = new ServiceResponse<IEnumerable<CredentialViewModel>>();
            try
            {
                response.Data = await _credentialsRepository.GetCredentials();
                if (response.Data == null || !response.Data.Any())
                {
                    response.Message = "No credentials found";
                    response.Success = true;
                    return Ok(response);
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCredentialById(int id)
        {
            var response = new ServiceResponse<Credential>();
            try
            {
                response.Data = await _credentialsRepository.GetCredentialById(id);
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
        public async Task<IActionResult> AddUpdateCredential([FromBody] Credential request)
        {
            var response = new ServiceResponse<Credential>();
            try
            {
                if (string.IsNullOrWhiteSpace(request.provider))
                {
                    throw new Exception("Provider is required");
                }

                if (string.IsNullOrWhiteSpace(request.credential_name))
                {
                    throw new Exception("Credential name is required");
                }

                if (string.IsNullOrWhiteSpace(request.credential_id))
                {
                    throw new Exception("Credential ID is required");
                }

                if (string.IsNullOrWhiteSpace(request.credential_password))
                {
                    throw new Exception("Credential password is required");
                }

                response.Data = await _credentialsRepository.AddUpdateCredential(request);
                if (response.Data == null)
                    throw new Exception(CommonMessages.UnableToCreate);

                response.Message = request.id == 0 ? "Credential created successfully" : "Credential updated successfully";
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
        public async Task<IActionResult> DeleteCredential(int id, bool isHardDelete)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _credentialsRepository.DeleteCredential(id, isHardDelete);
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

        #endregion
    }
}

