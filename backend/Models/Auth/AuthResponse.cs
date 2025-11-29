namespace OmniPlanner_API.Models.Auth
{
    public class AuthResponse
    {
        public string token { get; set; } = string.Empty;
        public string refreshToken { get; set; } = string.Empty;
        public DateTime expiresAt { get; set; }
        public UserInfo user { get; set; } = new UserInfo();
        public List<string> roles { get; set; } = new List<string>();
        public List<string> permissions { get; set; } = new List<string>();
    }

    public class UserInfo
    {
        public int id { get; set; }
        public string email { get; set; } = string.Empty;
        public string username { get; set; } = string.Empty;
        public string first_name { get; set; } = string.Empty;
        public string last_name { get; set; } = string.Empty;
        public string? phone { get; set; }
        public bool email_verified { get; set; }
    }
}

