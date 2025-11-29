namespace OmniPlanner_API.ViewModels.System
{
    public class UserPreferencesViewModel
    {
        public int? UserId { get; set; }
        public string Theme { get; set; } = "dark";
        public string AppThemeId { get; set; } = "theme1";
        public string IconThemeId { get; set; } = "default";
        public string IconName { get; set; } = "layer-group";
        public bool SidebarCollapsed { get; set; } = true;
        public string? Language { get; set; }
        public string? Timezone { get; set; }
    }
}

