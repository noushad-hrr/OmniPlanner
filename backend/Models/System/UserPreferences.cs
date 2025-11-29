using OmniPlanner_API.Models;

namespace OmniPlanner_API.Models.System
{
    public class UserPreferences : CommonModel
    {
        public int id { get; set; }
        public int user_id { get; set; }
        public string theme { get; set; } = "dark"; // 'dark' or 'light'
        public string app_theme_id { get; set; } = "theme1";
        public string icon_theme_id { get; set; } = "default";
        public string icon_name { get; set; } = "layer-group";
        public bool sidebar_collapsed { get; set; } = true;
        public string? language { get; set; }
        public string? timezone { get; set; }
    }

    public class AppTheme
    {
        public string id { get; set; } = string.Empty;
        public string name { get; set; } = string.Empty;
        public string description { get; set; } = string.Empty;
        public string preview { get; set; } = string.Empty;
        public bool is_available { get; set; } = true;
    }

    public class IconTheme
    {
        public string id { get; set; } = string.Empty;
        public string name { get; set; } = string.Empty;
        public string description { get; set; } = string.Empty;
        public string icon { get; set; } = string.Empty;
        public bool is_default { get; set; } = false;
    }
}

