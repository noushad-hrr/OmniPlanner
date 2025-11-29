namespace OmniPlanner_API.Models.Attachments
{
    public class AttachmentResponse : CommonModel
    {
        public int id { get; set; }
        public long inventory_id { get; set; }
        public string? file_name { get; set; }
        public string? attachment_path { get; set; }
    }
    public class Attachments
    {
        public int inventory_id { get; set; }
        public List<IFormFile>? files { get; set; }
    }
}
