using System.ComponentModel.DataAnnotations;

namespace OmniPlanner_API.Models.Auth
{
    public class CreatePermissionRequest
    {
        [Required(ErrorMessage = "Permission name is required")]
        public string name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Permission code is required")]
        public string code { get; set; } = string.Empty;

        public string? description { get; set; }

        public string? module { get; set; }

        public bool is_active { get; set; } = true;
    }

    public class UpdatePermissionRequest
    {
        public int id { get; set; }

        [Required(ErrorMessage = "Permission name is required")]
        public string name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Permission code is required")]
        public string code { get; set; } = string.Empty;

        public string? description { get; set; }

        public string? module { get; set; }

        public bool is_active { get; set; } = true;
    }
}

