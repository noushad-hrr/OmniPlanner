using OmniPlanner_API.Models.Attachments;
using OmniPlanner_API.Models.Inventory_Management;

namespace OmniPlanner_API.IRepository
{
    public interface IAttachmentRepository
    {
        Task<bool> CreateAttachments(List<IFormFile>? files, int inventory_id);
        Task<IEnumerable<AttachmentResponse>> GetAttachmentByInventoryId(int id);
        Task<AttachmentResponse?> GetAttachmentById(int id);
        Task<bool> DeleteAttachment(int id, bool isHardDelete);
        Task<bool> DeleteAttachmentByInventoryId(int id);

    }
}
