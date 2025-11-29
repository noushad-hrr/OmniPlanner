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
    public class UsersController : ControllerBase
    {
        private readonly IUsersRepository _usersRepository;

        public UsersController(IUsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }

        private int GetCurrentUserId()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim != null && int.TryParse(userIdClaim.Value, out int userId))
                return userId;
            throw new UnauthorizedAccessException("User not authenticated");
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var response = new ServiceResponse<IEnumerable<ViewModels.Auth.UserViewModel>>();
            try
            {
                response.Data = await _usersRepository.GetAll();
                response.Message = CommonMessages.GetSuccessfully;
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message.Contains("already exists") || ex.Message.Contains("not found") 
                    ? ex.Message 
                    : "An error occurred while processing your request. Please try again.";
                return Ok(response);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var response = new ServiceResponse<ViewModels.Auth.UserViewModel>();
            try
            {
                var user = await _usersRepository.GetById(id);
                if (user == null)
                {
                    response.Success = false;
                    response.Message = CommonMessages.DataNotFound;
                    return Ok(response);
                }

                var userViewModel = new ViewModels.Auth.UserViewModel
                {
                    id = user.id,
                    email = user.email,
                    username = user.username,
                    first_name = user.first_name,
                    last_name = user.last_name,
                    phone = user.phone,
                    is_active = user.is_active,
                    email_verified = user.email_verified,
                    last_login = user.last_login,
                    created_on = user.created_on,
                    last_modified_on = user.last_modified_on
                };

                userViewModel.roles = await _usersRepository.GetUserRoles(id);

                response.Data = userViewModel;
                response.Message = CommonMessages.GetSuccessfully;
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message.Contains("already exists") || ex.Message.Contains("not found") 
                    ? ex.Message 
                    : "An error occurred while processing your request. Please try again.";
                return Ok(response);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] CreateUserRequest request)
        {
            var response = new ServiceResponse<ViewModels.Auth.UserViewModel>();
            try
            {
                if (!ModelState.IsValid)
                {
                    response.Success = false;
                    response.Message = string.Join("; ", ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage));
                    return BadRequest(response);
                }

                var currentUserId = GetCurrentUserId();
                var user = await _usersRepository.Create(request, currentUserId);

                var userViewModel = new ViewModels.Auth.UserViewModel
                {
                    id = user.id,
                    email = user.email,
                    username = user.username,
                    first_name = user.first_name,
                    last_name = user.last_name,
                    phone = user.phone,
                    is_active = user.is_active,
                    email_verified = user.email_verified,
                    created_on = user.created_on,
                    last_modified_on = user.last_modified_on
                };

                userViewModel.roles = await _usersRepository.GetUserRoles(user.id);

                response.Data = userViewModel;
                response.Message = "User created successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message.Contains("already exists") || ex.Message.Contains("not found") 
                    ? ex.Message 
                    : "An error occurred while processing your request. Please try again.";
                return Ok(response);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUser([FromBody] UpdateUserRequest request)
        {
            var response = new ServiceResponse<ViewModels.Auth.UserViewModel>();
            try
            {
                var currentUserId = GetCurrentUserId();
                var user = await _usersRepository.Update(request, currentUserId);

                var userViewModel = new ViewModels.Auth.UserViewModel
                {
                    id = user.id,
                    email = user.email,
                    username = user.username,
                    first_name = user.first_name,
                    last_name = user.last_name,
                    phone = user.phone,
                    is_active = user.is_active,
                    email_verified = user.email_verified,
                    last_login = user.last_login,
                    created_on = user.created_on,
                    last_modified_on = user.last_modified_on
                };

                userViewModel.roles = await _usersRepository.GetUserRoles(user.id);

                response.Data = userViewModel;
                response.Message = "User updated successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message.Contains("already exists") || ex.Message.Contains("not found") 
                    ? ex.Message 
                    : "An error occurred while processing your request. Please try again.";
                return Ok(response);
            }
        }

        [HttpDelete("{id}/{isHardDelete}")]
        public async Task<IActionResult> DeleteUser(int id, bool isHardDelete = false)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var currentUserId = GetCurrentUserId();
                response.Data = await _usersRepository.Delete(id, isHardDelete, currentUserId);
                response.Message = "User deleted successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message.Contains("already exists") || ex.Message.Contains("not found") 
                    ? ex.Message 
                    : "An error occurred while processing your request. Please try again.";
                return Ok(response);
            }
        }

        [HttpPut("{id}/password")]
        public async Task<IActionResult> ChangePassword(int id, [FromBody] string newPassword)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var currentUserId = GetCurrentUserId();
                response.Data = await _usersRepository.UpdatePassword(id, newPassword, currentUserId);
                response.Message = "Password updated successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message.Contains("already exists") || ex.Message.Contains("not found") 
                    ? ex.Message 
                    : "An error occurred while processing your request. Please try again.";
                return Ok(response);
            }
        }
    }
}

