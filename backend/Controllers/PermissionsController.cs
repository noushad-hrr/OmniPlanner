using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Auth;
using OmniPlanner_API.Queries;
using OmniPlanner_API.ViewModels;
using System.Security.Claims;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize]
    public class PermissionsController : ControllerBase
    {
        private readonly IPermissionsRepository _permissionsRepository;

        public PermissionsController(IPermissionsRepository permissionsRepository)
        {
            _permissionsRepository = permissionsRepository;
        }

        private int GetCurrentUserId()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim != null && int.TryParse(userIdClaim.Value, out int userId))
                return userId;
            throw new UnauthorizedAccessException("User not authenticated");
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPermissions()
        {
            var response = new ServiceResponse<IEnumerable<ViewModels.Auth.PermissionViewModel>>();
            try
            {
                response.Data = await _permissionsRepository.GetAll();
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

        [HttpGet("{module}")]
        public async Task<IActionResult> GetPermissionsByModule(string module)
        {
            var response = new ServiceResponse<IEnumerable<ViewModels.Auth.PermissionViewModel>>();
            try
            {
                response.Data = await _permissionsRepository.GetByModule(module);
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
        public async Task<IActionResult> GetPermissionById(int id)
        {
            var response = new ServiceResponse<ViewModels.Auth.PermissionViewModel>();
            try
            {
                var permission = await _permissionsRepository.GetById(id);
                if (permission == null)
                {
                    response.Success = false;
                    response.Message = CommonMessages.DataNotFound;
                    return Ok(response);
                }

                var permissionViewModel = new ViewModels.Auth.PermissionViewModel
                {
                    id = permission.id,
                    name = permission.name,
                    code = permission.code,
                    description = permission.description,
                    module = permission.module,
                    is_active = permission.is_active
                };

                response.Data = permissionViewModel;
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
        public async Task<IActionResult> CreatePermission([FromBody] CreatePermissionRequest request)
        {
            var response = new ServiceResponse<ViewModels.Auth.PermissionViewModel>();
            try
            {
                if (!ModelState.IsValid)
                {
                    response.Success = false;
                    response.Message = string.Join("; ", ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage));
                    return BadRequest(response);
                }

                var currentUserId = GetCurrentUserId();
                var permission = await _permissionsRepository.Create(request, currentUserId);

                var permissionViewModel = new ViewModels.Auth.PermissionViewModel
                {
                    id = permission.id,
                    name = permission.name,
                    code = permission.code,
                    description = permission.description,
                    module = permission.module,
                    is_active = permission.is_active
                };

                response.Data = permissionViewModel;
                response.Message = "Permission created successfully";
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
        public async Task<IActionResult> UpdatePermission([FromBody] UpdatePermissionRequest request)
        {
            var response = new ServiceResponse<ViewModels.Auth.PermissionViewModel>();
            try
            {
                var currentUserId = GetCurrentUserId();
                var permission = await _permissionsRepository.Update(request, currentUserId);

                var permissionViewModel = new ViewModels.Auth.PermissionViewModel
                {
                    id = permission.id,
                    name = permission.name,
                    code = permission.code,
                    description = permission.description,
                    module = permission.module,
                    is_active = permission.is_active
                };

                response.Data = permissionViewModel;
                response.Message = "Permission updated successfully";
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
        public async Task<IActionResult> DeletePermission(int id, bool isHardDelete = false)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var currentUserId = GetCurrentUserId();
                response.Data = await _permissionsRepository.Delete(id, isHardDelete, currentUserId);
                response.Message = "Permission deleted successfully";
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

        [HttpGet]
        public async Task<IActionResult> GetUniqueModules()
        {
            var response = new ServiceResponse<IEnumerable<string>>();
            try
            {
                response.Data = await _permissionsRepository.GetUniqueModules();
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

