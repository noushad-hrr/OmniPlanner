using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Auth;
using OmniPlanner_API.Queries;
using OmniPlanner_API.Repository;
using OmniPlanner_API.ViewModels;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUsersRepository _usersRepository;
        private readonly JwtService _jwtService;

        public AuthController(IUsersRepository usersRepository, JwtService jwtService)
        {
            _usersRepository = usersRepository;
            _jwtService = jwtService;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var response = new ServiceResponse<AuthResponse>();
            try
            {
                // Validate user
                var user = await _usersRepository.GetByEmail(request.email);
                if (user == null || !user.is_active || user.is_deleted)
                {
                    response.Success = false;
                    response.Message = "Invalid email or password";
                    return Ok(response);
                }

                // Verify password
                if (!PasswordHasher.VerifyPassword(request.password, user.password_hash))
                {
                    response.Success = false;
                    response.Message = "Invalid email or password";
                    return Ok(response);
                }

                // Get user roles and permissions
                var roles = await _usersRepository.GetUserRoles(user.id);
                var roleNames = roles.Select(r => r.name).ToList();
                var permissions = await _usersRepository.GetUserPermissions(user.id);

                // Generate tokens
                var token = _jwtService.GenerateToken(user.id, user.email, user.username, roleNames, permissions);
                var refreshToken = _jwtService.GenerateRefreshToken();
                var expiresAt = DateTime.UtcNow.AddMinutes(60);

                // Update last login
                await _usersRepository.UpdateLastLogin(user.id);

                // Create response
                var authResponse = new AuthResponse
                {
                    token = token,
                    refreshToken = refreshToken,
                    expiresAt = expiresAt,
                    user = new UserInfo
                    {
                        id = user.id,
                        email = user.email,
                        username = user.username,
                        first_name = user.first_name,
                        last_name = user.last_name,
                        phone = user.phone,
                        email_verified = user.email_verified
                    },
                    roles = roleNames,
                    permissions = permissions
                };

                response.Data = authResponse;
                response.Message = "Login successful";
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
        [AllowAnonymous] // Allow logout without authentication (token might already be cleared)
        public async Task<IActionResult> Logout()
        {
            var response = new ServiceResponse<bool>();
            try
            {
                // In a full implementation, you would invalidate the refresh token here
                // For now, we'll just return success
                response.Data = true;
                response.Message = "Logout successful";
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
        [Authorize]
        public async Task<IActionResult> GetCurrentUser()
        {
            var response = new ServiceResponse<AuthResponse>();
            try
            {
                var userIdClaim = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier);
                if (userIdClaim == null || !int.TryParse(userIdClaim.Value, out int userId))
                {
                    response.Success = false;
                    response.Message = "User not authenticated";
                    return Ok(response);
                }

                var user = await _usersRepository.GetById(userId);
                if (user == null || !user.is_active || user.is_deleted)
                {
                    response.Success = false;
                    response.Message = "User not found";
                    return Ok(response);
                }

                var roles = await _usersRepository.GetUserRoles(user.id);
                var roleNames = roles.Select(r => r.name).ToList();
                var permissions = await _usersRepository.GetUserPermissions(user.id);

                var authResponse = new AuthResponse
                {
                    user = new UserInfo
                    {
                        id = user.id,
                        email = user.email,
                        username = user.username,
                        first_name = user.first_name,
                        last_name = user.last_name,
                        phone = user.phone,
                        email_verified = user.email_verified
                    },
                    roles = roleNames,
                    permissions = permissions
                };

                response.Data = authResponse;
                response.Message = "User retrieved successfully";
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
        [AllowAnonymous]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequest request)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var user = await _usersRepository.GetByEmail(request.email);
                if (user == null)
                {
                    // Don't reveal if email exists
                    response.Success = true;
                    response.Message = "If the email exists, a password reset link has been sent";
                    response.Data = true;
                    return Ok(response);
                }

                // In a full implementation, generate reset token and send email
                // For now, just return success
                response.Success = true;
                response.Message = "If the email exists, a password reset link has been sent";
                response.Data = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        // REMOVED: Password hash generation endpoint for security
        // Use PasswordHashGenerator utility class or implement admin-only endpoint if needed

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordRequest request)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                var user = await _usersRepository.GetByEmail(request.email);
                if (user == null)
                {
                    response.Success = false;
                    response.Message = "Invalid reset token";
                    return Ok(response);
                }

                // In a full implementation, verify the reset token
                // For now, just update the password
                var success = await _usersRepository.UpdatePassword(user.id, request.newPassword, user.id);
                if (!success)
                {
                    response.Success = false;
                    response.Message = "Failed to reset password";
                    return Ok(response);
                }

                response.Success = true;
                response.Message = "Password reset successfully";
                response.Data = true;
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

