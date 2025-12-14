using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Queries.Master_Data;
using OmniPlanner_API.ViewModels.Master_Data;
using Dapper;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace OmniPlanner_API.Repository
{
    public class UrlsMasterRepository : IUrlsMasterRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string UserID;

        public UrlsMasterRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
            GetUserId();
        }

        private void GetUserId()
        {
            if (_httpContextAccessor.HttpContext == null)
            {
                UserID = null;
                return;
            }
            var claimsIdentity = _httpContextAccessor.HttpContext.User.Identity as ClaimsIdentity;
            UserID = claimsIdentity?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }

        public async Task<IEnumerable<UrlDocViewModel>> GetUrls()
        {
            using (var connection = _context.CreateConnection())
            {
                var urls = await connection.QueryAsync<UrlDocViewModel>(UrlsMasterQueries.GetAll);
                
                // Populate credentials for each URL
                foreach (var url in urls)
                {
                    url.credentials = await GetUrlCredentials(url.id);
                }
                
                return urls;
            }
        }

        public async Task<UrlDoc?> GetUrlById(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryFirstOrDefaultAsync<UrlDoc>(UrlsMasterQueries.GetById, new { id });
            }
        }

        public async Task<bool> LabelExists(string label, int? categoryId, int excludeId = 0)
        {
            using (var connection = _context.CreateConnection())
            {
                var count = await connection.ExecuteScalarAsync<int>(
                    UrlsMasterQueries.CheckLabelExists, 
                    new { label, category_id = categoryId, id = excludeId });
                return count > 0;
            }
        }

        public async Task<bool> UrlExists(string url, int? categoryId, int excludeId = 0)
        {
            using (var connection = _context.CreateConnection())
            {
                var count = await connection.ExecuteScalarAsync<int>(
                    UrlsMasterQueries.CheckUrlExists, 
                    new { url, category_id = categoryId, id = excludeId });
                return count > 0;
            }
        }

        public async Task<UrlDoc> AddUpdateUrl(UrlDoc request, List<int>? credentialIds = null)
        {
            using (var connection = _context.CreateConnection())
            {
                // Check for duplicate label (case-insensitive, category-level, excluding deleted records)
                var labelExists = await LabelExists(request.label, request.category_id, request.id);
                if (labelExists)
                {
                    throw new Exception("Label already exists in this category");
                }

                // Check for duplicate URL (case-insensitive, category-level, excluding deleted records)
                var urlExists = await UrlExists(request.url, request.category_id, request.id);
                if (urlExists)
                {
                    throw new Exception("URL already exists in this category");
                }

                var userId = string.IsNullOrEmpty(UserID) ? 1 : Convert.ToInt32(UserID);
                request.created_by = userId;
                request.last_modified_by = userId;

                if (request.id == 0)
                {
                    request.id = await connection.ExecuteScalarAsync<int>(UrlsMasterQueries.Insert, request);
                }
                else
                {
                    await connection.ExecuteAsync(UrlsMasterQueries.Update, request);
                }

                // Handle credential mapping
                if (credentialIds != null)
                {
                    // Remove all existing credentials for this URL
                    await connection.ExecuteAsync(UrlsMasterQueries.RemoveAllCredentialsFromUrl, new { urlId = request.id });

                    // Add new credentials
                    foreach (var credentialId in credentialIds)
                    {
                        await connection.ExecuteAsync(UrlsMasterQueries.AddCredentialToUrl, new { urlId = request.id, credentialId });
                    }
                }
            }
            return request;
        }

        public async Task<List<CredentialInfo>> GetUrlCredentials(int urlId)
        {
            using (var connection = _context.CreateConnection())
            {
                var credentials = await connection.QueryAsync<CredentialInfo>(UrlsMasterQueries.GetUrlCredentials, new { urlId });
                return credentials.ToList();
            }
        }

        public async Task<bool> AddCredentialToUrl(int urlId, int credentialId)
        {
            using (var connection = _context.CreateConnection())
            {
                var result = await connection.QueryFirstOrDefaultAsync<int?>(UrlsMasterQueries.AddCredentialToUrl, new { urlId, credentialId });
                return result.HasValue;
            }
        }

        public async Task<bool> RemoveCredentialFromUrl(int urlId, int credentialId)
        {
            using (var connection = _context.CreateConnection())
            {
                var rows = await connection.ExecuteAsync(UrlsMasterQueries.RemoveCredentialFromUrl, new { urlId, credentialId });
                return rows > 0;
            }
        }

        public async Task<bool> DeleteUrl(int id, bool isHardDelete)
        {
            using (var connection = _context.CreateConnection())
            {
                if (isHardDelete)
                {
                    await connection.ExecuteAsync(UrlsMasterQueries.Delete, new { Id = id });
                }
                else
                {
                    await connection.ExecuteAsync(UrlsMasterQueries.SoftDelete, new { Id = id });
                }
                return true;
            }
        }
    }
}


