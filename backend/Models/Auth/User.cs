namespace OmniPlanner_API.Models.Auth
{
    public class User
    {
        public int id { get; set; }
        public string email { get; set; } = string.Empty;
        public string username { get; set; } = string.Empty;
        public string password_hash { get; set; } = string.Empty;
        public string first_name { get; set; } = string.Empty;
        public string last_name { get; set; } = string.Empty;
        public string? phone { get; set; }
        public bool is_active { get; set; } = true;
        public bool is_deleted { get; set; } = false;
        public bool email_verified { get; set; } = false;
        public DateTime? last_login { get; set; }
        public string? password_reset_token { get; set; }
        public DateTime? password_reset_expires { get; set; }
        public int? created_by { get; set; }
        public DateTime created_on { get; set; }
        public int? last_modified_by { get; set; }
        public DateTime last_modified_on { get; set; }
    }
}

