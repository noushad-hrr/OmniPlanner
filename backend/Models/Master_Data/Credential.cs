using System.Text.Json;

namespace OmniPlanner_API.Models.Master_Data
{
    public class Credential : CommonModel
    {
        public int id { get; set; }
        public string provider { get; set; }
        public string credential_name { get; set; }
        public string credential_id { get; set; }
        public string credential_password { get; set; }
        public string? additional_fields { get; set; } // JSON string
        public string? notes { get; set; }

        // Helper method to get additional fields as dictionary
        public Dictionary<string, string>? GetAdditionalFields()
        {
            if (string.IsNullOrWhiteSpace(additional_fields))
                return null;

            try
            {
                return JsonSerializer.Deserialize<Dictionary<string, string>>(additional_fields);
            }
            catch
            {
                return null;
            }
        }

        // Helper method to set additional fields from dictionary
        public void SetAdditionalFields(Dictionary<string, string>? fields)
        {
            if (fields == null || fields.Count == 0)
            {
                additional_fields = "{}";
                return;
            }

            try
            {
                additional_fields = JsonSerializer.Serialize(fields);
            }
            catch
            {
                additional_fields = "{}";
            }
        }
    }
}

