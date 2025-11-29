using System.ComponentModel.DataAnnotations;

namespace OmniPlanner_API.Models.Auth
{
    public class CreateUserRequest
    {
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        public string email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Username is required")]
        [MinLength(3, ErrorMessage = "Username must be at least 3 characters")]
        public string username { get; set; } = string.Empty;

        [Required(ErrorMessage = "Password is required")]
        [MinLength(6, ErrorMessage = "Password must be at least 6 characters")]
        public string password { get; set; } = string.Empty;

        [Required(ErrorMessage = "First name is required")]
        public string first_name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Last name is required")]
        public string last_name { get; set; } = string.Empty;

        public string? phone { get; set; }

        public List<int> roleIds { get; set; } = new List<int>();

        public bool is_active { get; set; } = true;
    }

    public class UpdateUserRequest
    {
        public int id { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        public string email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Username is required")]
        [MinLength(3, ErrorMessage = "Username must be at least 3 characters")]
        public string username { get; set; } = string.Empty;

        public string? password { get; set; }

        [Required(ErrorMessage = "First name is required")]
        public string first_name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Last name is required")]
        public string last_name { get; set; } = string.Empty;

        public string? phone { get; set; }

        public List<int> roleIds { get; set; } = new List<int>();

        public bool is_active { get; set; } = true;
    }
}

