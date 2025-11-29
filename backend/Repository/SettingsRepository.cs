using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.System;
using OmniPlanner_API.Queries.System;
using OmniPlanner_API.Repository;
using OmniPlanner_API.ViewModels.System;
using Dapper;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace OmniPlanner_API.Repository
{
    public class SettingsRepository : ISettingsRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string UserID;

        public SettingsRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
            GetUserId();
        }

        private void GetUserId()
        {
            if (_httpContextAccessor.HttpContext == null)
                UserID = null;
            var claimsIdentity = _httpContextAccessor.HttpContext.User.Identity as ClaimsIdentity;
            UserID = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }

        private int GetCurrentUserId()
        {
            if (int.TryParse(UserID, out int userId))
                return userId;
            throw new Exception("User ID not found. Please ensure you are authenticated.");
        }

        public async Task<UserPreferences?> GetUserPreferences(int userId)
        {
            using var connection = _context.CreateConnection();
            var preferences = await connection.QueryFirstOrDefaultAsync<UserPreferences>(
                SettingsQueries.GetUserPreferences,
                new { UserId = userId }
            );
            return preferences;
        }

        public async Task<UserPreferences> SaveUserPreferences(UserPreferencesViewModel preferences)
        {
            using var connection = _context.CreateConnection();
            connection.Open();

            using var transaction = connection.BeginTransaction();
            try
            {
                int currentUserId = GetCurrentUserId();
                int targetUserId = preferences.UserId ?? currentUserId;

                // Check if preferences exist
                var exists = await connection.QueryFirstOrDefaultAsync<int>(
                    SettingsQueries.CheckUserPreferencesExists,
                    new { UserId = targetUserId },
                    transaction
                );

                UserPreferences userPrefs;

                if (exists > 0)
                {
                    // Update existing preferences
                    var updateParams = new
                    {
                        user_id = targetUserId,
                        theme = preferences.Theme,
                        app_theme_id = preferences.AppThemeId,
                        icon_theme_id = preferences.IconThemeId,
                        icon_name = preferences.IconName,
                        sidebar_collapsed = preferences.SidebarCollapsed,
                        language = preferences.Language,
                        timezone = preferences.Timezone,
                        last_modified_by = currentUserId,
                        last_modified_by_name = "System User" // You can get this from user context
                    };

                    var updatedId = await connection.QueryFirstOrDefaultAsync<int>(
                        SettingsQueries.UpdateUserPreferences,
                        updateParams,
                        transaction
                    );

                    if (updatedId == 0)
                        throw new Exception("Failed to update user preferences");

                    userPrefs = new UserPreferences
                    {
                        id = updatedId,
                        user_id = targetUserId,
                        theme = preferences.Theme,
                        app_theme_id = preferences.AppThemeId,
                        icon_theme_id = preferences.IconThemeId,
                        icon_name = preferences.IconName,
                        sidebar_collapsed = preferences.SidebarCollapsed,
                        language = preferences.Language,
                        timezone = preferences.Timezone,
                        last_modified_by = currentUserId,
                        last_modified_on = DateTime.UtcNow
                    };
                }
                else
                {
                    // Insert new preferences
                    var insertParams = new
                    {
                        user_id = targetUserId,
                        theme = preferences.Theme,
                        app_theme_id = preferences.AppThemeId,
                        icon_theme_id = preferences.IconThemeId,
                        icon_name = preferences.IconName,
                        sidebar_collapsed = preferences.SidebarCollapsed,
                        language = preferences.Language,
                        timezone = preferences.Timezone,
                        created_by = currentUserId,
                        created_by_name = "System User",
                        last_modified_by = currentUserId,
                        last_modified_by_name = "System User"
                    };

                    var newId = await connection.QueryFirstOrDefaultAsync<int>(
                        SettingsQueries.InsertUserPreferences,
                        insertParams,
                        transaction
                    );

                    userPrefs = new UserPreferences
                    {
                        id = newId,
                        user_id = targetUserId,
                        theme = preferences.Theme,
                        app_theme_id = preferences.AppThemeId,
                        icon_theme_id = preferences.IconThemeId,
                        icon_name = preferences.IconName,
                        sidebar_collapsed = preferences.SidebarCollapsed,
                        language = preferences.Language,
                        timezone = preferences.Timezone,
                        created_by = currentUserId,
                        created_on = DateTime.UtcNow,
                        last_modified_by = currentUserId,
                        last_modified_on = DateTime.UtcNow
                    };
                }

                transaction.Commit();
                return userPrefs;
            }
            catch
            {
                transaction.Rollback();
                throw;
            }
        }

        public async Task<List<AppTheme>> GetAppThemes()
        {
            // For now, return hardcoded themes
            // In the future, this can be loaded from database
            return await Task.FromResult(new List<AppTheme>
            {
                new AppTheme
                {
                    id = "theme1",
                    name = "Theme 1",
                    description = "Default dark theme (Development in progress)",
                    preview = "Dark gradient with blue accents",
                    is_available = true
                }
                // Add more themes as they're developed
            });
        }

        public async Task<List<IconTheme>> GetIconThemes()
        {
            // For now, return hardcoded icon themes
            // In the future, this can be loaded from database
            return await Task.FromResult(new List<IconTheme>
            {
                new IconTheme
                {
                    id = "default",
                    name = "Default Icons",
                    description = "Standard FontAwesome icons",
                    icon = "layer-group",
                    is_default = true
                }
            });
        }
    }
}

