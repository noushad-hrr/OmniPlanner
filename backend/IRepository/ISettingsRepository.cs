using OmniPlanner_API.Models.System;
using OmniPlanner_API.ViewModels.System;

namespace OmniPlanner_API.IRepository
{
    public interface ISettingsRepository
    {
        Task<UserPreferences?> GetUserPreferences(int userId);
        Task<UserPreferences> SaveUserPreferences(UserPreferencesViewModel preferences);
        Task<List<AppTheme>> GetAppThemes();
        Task<List<IconTheme>> GetIconThemes();
    }
}

