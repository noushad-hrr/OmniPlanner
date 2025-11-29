using OmniPlanner_API.Models.Master_Data;

namespace OmniPlanner_API.ViewModels.Master_Data
{
    public class UrlDocViewModel : UrlDoc
    {
        public string? category_name { get; set; }
        public string? category_icon { get; set; }
        public List<CredentialInfo>? credentials { get; set; }
    }

    public class CredentialInfo
    {
        public int id { get; set; }
        public string provider { get; set; }
        public string credential_name { get; set; }
        public string credential_id { get; set; }
    }
}


