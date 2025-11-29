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
    public class RolesController : ControllerBase
    {
        private readonly IRolesRepository _rolesRepository;

        public RolesController(IRolesRepository rolesRepository)
        {
            _rolesRepository = rolesRepository;
        }

        private int GetCurrentUserId()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim != null && int.TryParse(userIdClaim.Value, out int userId))
                return userId;
            throw new UnauthorizedAccessException("User not authenticated");
        }

        [HttpGet]
        public async Task<IActionResult> GetAllRoles()
        {
            var response = new ServiceResponse<IEnumerable<ViewModels.Auth.RoleViewModel>>();
            try
            {
                response.Data = await _rolesRepository.GetAll();
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
        public async Task<IActionResult> GetRoleById(int id)
        {
            var response = new ServiceResponse<object>();
            try
            {
                var role = await _rolesRepository.GetById(id);
                if (role == null)
                {
                    response.Success = false;
                    response.Message = CommonMessages.DataNotFound;
                    return Ok(response);
                }

                var roleViewModel = new ViewModels.Auth.RoleViewModel
                {
                    id = role.id,
                    name = role.name,
                    description = role.description,
                    is_active = role.is_active
                };

                var permissions = await _rolesRepository.GetRolePermissions(id);

                response.Data = new { role = roleViewModel, permissions = permissions };
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
        public async Task<IActionResult> CreateRole([FromBody] CreateRoleRequest request)
        {
            var response = new ServiceResponse<ViewModels.Auth.RoleViewModel>();
            try
            {
                if (!ModelState.IsValid)
                {
                    response.Success = false;
                    response.Message = string.Join("; ", ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage));
                    return BadRequest(response);
                }

                var currentUserId = GetCurrentUserId();
                var role = await _rolesRepository.Create(request, currentUserId);

                var roleViewModel = new ViewModels.Auth.RoleViewModel
                {
                    id = role.id,
                    name = role.name,
                    description = role.description,
                    is_active = role.is_active
                };

                response.Data = roleViewModel;
                response.Message = "Role created successfully";
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
        public async Task<IActionResult> UpdateRole([FromBody] UpdateRoleRequest request)
        {
            var response = new ServiceResponse<ViewModels.Auth.RoleViewModel>();
            try
            {
                if (!ModelState.IsValid)
                {
                    response.Success = false;
                    response.Message = string.Join("; ", ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage));
                    return BadRequest(response);
                }

                var currentUserId = GetCurrentUserId();
                var role = await _rolesRepository.Update(request, currentUserId);

                var roleViewModel = new ViewModels.Auth.RoleViewModel
                {
                    id = role.id,
                    name = role.name,
                    description = role.description,
                    is_active = role.is_active
                };

                response.Data = roleViewModel;
                response.Message = "Role updated successfully";
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
        public async Task<IActionResult> DeleteRole(int id, bool isHardDelete = false)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var currentUserId = GetCurrentUserId();
                response.Data = await _rolesRepository.Delete(id, isHardDelete, currentUserId);
                response.Message = "Role deleted successfully";
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
        public async Task<IActionResult> GetRolePermissions(int id)
        {
            var response = new ServiceResponse<IEnumerable<ViewModels.Auth.PermissionViewModel>>();
            try
            {
                response.Data = await _rolesRepository.GetRolePermissions(id);
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

