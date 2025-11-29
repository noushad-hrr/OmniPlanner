using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.System;
using OmniPlanner_API.Queries;
using OmniPlanner_API.ViewModels;
using OmniPlanner_API.ViewModels.System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize]
    public class SettingsController : ControllerBase
    {
        private readonly ISettingsRepository _settingsRepository;

        public SettingsController(ISettingsRepository settingsRepository)
        {
            _settingsRepository = settingsRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetUserPreferences()
        {
            var response = new ServiceResponse<UserPreferencesViewModel>();
            try
            {
                var userId = GetCurrentUserId();
                var preferences = await _settingsRepository.GetUserPreferences(userId);

                if (preferences == null)
                {
                    response.Success = false;
                    response.Message = CommonMessages.DataNotFound;
                    response.Data = null;
                    return Ok(response);
                }

                response.Data = new UserPreferencesViewModel
                {
                    UserId = preferences.user_id,
                    Theme = preferences.theme,
                    AppThemeId = preferences.app_theme_id,
                    IconThemeId = preferences.icon_theme_id,
                    IconName = preferences.icon_name,
                    SidebarCollapsed = preferences.sidebar_collapsed,
                    Language = preferences.language,
                    Timezone = preferences.timezone
                };

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
        public async Task<IActionResult> SaveUserPreferences([FromBody] UserPreferencesViewModel preferences)
        {
            var response = new ServiceResponse<UserPreferencesViewModel>();
            try
            {
                // Ensure UserId is set to current user if not provided
                if (!preferences.UserId.HasValue)
                {
                    preferences.UserId = GetCurrentUserId();
                }

                var savedPreferences = await _settingsRepository.SaveUserPreferences(preferences);

                response.Data = new UserPreferencesViewModel
                {
                    UserId = savedPreferences.user_id,
                    Theme = savedPreferences.theme,
                    AppThemeId = savedPreferences.app_theme_id,
                    IconThemeId = savedPreferences.icon_theme_id,
                    IconName = savedPreferences.icon_name,
                    SidebarCollapsed = savedPreferences.sidebar_collapsed,
                    Language = savedPreferences.language,
                    Timezone = savedPreferences.timezone
                };

                response.Message = "Preferences saved successfully";
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
        public async Task<IActionResult> GetAppThemes()
        {
            var response = new ServiceResponse<IEnumerable<AppTheme>>();
            try
            {
                var themes = await _settingsRepository.GetAppThemes();
                response.Data = themes;
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

        [HttpGet]
        public async Task<IActionResult> GetIconThemes()
        {
            var response = new ServiceResponse<IEnumerable<IconTheme>>();
            try
            {
                var themes = await _settingsRepository.GetIconThemes();
                response.Data = themes;
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

        private int GetCurrentUserId()
        {
            var claimsIdentity = User.Identity as ClaimsIdentity;
            var userIdClaim = claimsIdentity?.FindFirst(ClaimTypes.NameIdentifier);
            
            if (userIdClaim != null && int.TryParse(userIdClaim.Value, out int userId))
            {
                return userId;
            }
            
            throw new Exception("User ID not found. Please ensure you are authenticated.");
        }
    }
}

