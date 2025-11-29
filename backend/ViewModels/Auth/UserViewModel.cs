namespace OmniPlanner_API.ViewModels.Auth
{
    public class UserViewModel
    {
        public int id { get; set; }
        public string email { get; set; } = string.Empty;
        public string username { get; set; } = string.Empty;
        public string first_name { get; set; } = string.Empty;
        public string last_name { get; set; } = string.Empty;
        public string? phone { get; set; }
        public bool is_active { get; set; }
        public bool email_verified { get; set; }
        public DateTime? last_login { get; set; }
        public DateTime created_on { get; set; }
        public DateTime last_modified_on { get; set; }
        public List<RoleViewModel> roles { get; set; } = new List<RoleViewModel>();
        public string? created_by_name { get; set; }
        public string? last_modified_by_name { get; set; }
    }

    public class RoleViewModel
    {
        public int id { get; set; }
        public string name { get; set; } = string.Empty;
        public string? description { get; set; }
        public bool is_active { get; set; }
    }

    public class PermissionViewModel
    {
        public int id { get; set; }
        public string name { get; set; } = string.Empty;
        public string code { get; set; } = string.Empty;
        public string? description { get; set; }
        public string? module { get; set; }
        public bool is_active { get; set; }
    }

    public class RolePermissionViewModel
    {
        public int role_id { get; set; }
        public string role_name { get; set; } = string.Empty;
        public int permission_id { get; set; }
        public string permission_name { get; set; } = string.Empty;
        public string permission_code { get; set; } = string.Empty;
        public string? permission_module { get; set; }
    }
}

