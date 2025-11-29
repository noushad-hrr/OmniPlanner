using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Attachments;
using OmniPlanner_API.Models.Inventory_Management;
using OmniPlanner_API.Queries;
using OmniPlanner_API.Queries.Attachments;
using Dapper;
using System.Collections.Generic;
using System.Security.Claims;

namespace OmniPlanner_API.Repository
{
    public class AttachmentRepository : IAttachmentRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string UserID;
        public AttachmentRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
            GetUserId();
        }
        private void GetUserId()
        {
            if (_httpContextAccessor.HttpContext == null)
                UserID = null;
            var claimsIdentity = _httpContextAccessor.HttpContext.User.Identity as ClaimsIdentity;
            UserID = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }
        public async Task<bool> CreateAttachments(List<IFormFile>? files, int inventory_id)
        {
            if (files != null && files.Any())
            {
                using (var connection = _context.CreateConnection())
                {
                    var response = new List<AttachmentResponse>();
                    foreach (var file in files)
                    {
                        AttachmentResponse requestData = new AttachmentResponse
                        {
                            id = 0,
                            inventory_id = inventory_id,
                            file_name = file.FileName,
                            attachment_path = UploadFile(file)
                        };
                        requestData.created_by = Convert.ToInt32(UserID);
                        requestData.last_modified_by = Convert.ToInt32(UserID);
                        requestData.id = await connection.ExecuteScalarAsync<int>(AttachmentQueries.Insert, requestData);

                        if (requestData == null)
                            throw new Exception(CommonMessages.UnableToCreate);
                    }
                }
            }
            return true;
        }

        public static string UploadFile(IFormFile file)
        {
            string uploadsDirectory = "Uploads"; // Path.Combine(Directory.GetCurrentDirectory(), "Uploads");
            string newfileName = Guid.NewGuid().ToString() + "_" + file.FileName;
            string filePath = Path.Combine(uploadsDirectory, newfileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                file.CopyTo(stream);
            }
            return filePath;
        }
        public async Task<AttachmentResponse?> GetAttachmentById(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryFirstOrDefaultAsync<AttachmentResponse>(AttachmentQueries.GetById, new { id });
            }
        }

        public async Task<IEnumerable<AttachmentResponse?>> GetAttachmentByInventoryId(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<AttachmentResponse>(AttachmentQueries.GetByInventoryId, new { id });
            }
        }

        public async Task<bool> DeleteAttachment(int id, bool isHardDelete)
        {
            using (var connection = _context.CreateConnection())
            {
                if (isHardDelete)
                {
                    await connection.ExecuteAsync(AttachmentQueries.Delete, new { Id = id });
                }
                else
                {
                    await connection.ExecuteAsync(AttachmentQueries.SoftDelete, new { Id = id });

                }
                return true;
            }
        }
        public async Task<bool> DeleteAttachmentByInventoryId(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(AttachmentQueries.DeleteByInventoryId, new { Id = id });
                return true;
            }
        }
    }
}
