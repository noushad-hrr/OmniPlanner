using System.ComponentModel.DataAnnotations;

namespace OmniPlanner_API.Models.Auth
{
    public class CreateRoleRequest
    {
        [Required(ErrorMessage = "Role name is required")]
        [MinLength(2, ErrorMessage = "Role name must be at least 2 characters")]
        public string name { get; set; } = string.Empty;

        public string? description { get; set; }

        public List<int> permissionIds { get; set; } = new List<int>();

        public bool is_active { get; set; } = true;
    }

    public class UpdateRoleRequest
    {
        public int id { get; set; }

        [Required(ErrorMessage = "Role name is required")]
        [MinLength(2, ErrorMessage = "Role name must be at least 2 characters")]
        public string name { get; set; } = string.Empty;

        public string? description { get; set; }

        public List<int> permissionIds { get; set; } = new List<int>();

        public bool is_active { get; set; } = true;
    }
}

