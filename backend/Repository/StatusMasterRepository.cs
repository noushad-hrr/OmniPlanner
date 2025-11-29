using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Queries.Master_Data;
using OmniPlanner_API.ViewModels.Master_Data;
using Dapper;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace OmniPlanner_API.Repository
{
    public class StatusMasterRepository : IStatusMasterRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string UserID;

        public StatusMasterRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
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
            UserID = claimsIdentity?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }

        public async Task<IEnumerable<StatusViewModel>> GetStatuses()
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<StatusViewModel>(StatusMasterQueries.GetAll);
            }
        }

        public async Task<Status?> GetStatusById(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryFirstOrDefaultAsync<Status>(StatusMasterQueries.GetById, new { id });
            }
        }

        public async Task<bool> StatusExists(string status, int excludeId = 0)
        {
            using (var connection = _context.CreateConnection())
            {
                var count = await connection.ExecuteScalarAsync<int>(
                    StatusMasterQueries.CheckStatusExists, 
                    new { status, id = excludeId });
                return count > 0;
            }
        }

        public async Task<Status> AddUpdateStatus(Status request)
        {
            using (var connection = _context.CreateConnection())
            {
                // Check for duplicate status (case-insensitive, excluding deleted records)
                var exists = await StatusExists(request.status, request.id);
                if (exists)
                {
                    throw new Exception("Status name already exists");
                }

                var userId = string.IsNullOrEmpty(UserID) ? 1 : Convert.ToInt32(UserID);
                request.created_by = userId;
                request.last_modified_by = userId;

                // If setting this status as default, unset all other defaults first
                if (request.is_default)
                {
                    // For new records (id = 0), we need to unset all defaults
                    // For existing records, we unset all except the current one
                    var unsetQuery = request.id == 0 
                        ? @"UPDATE status_master SET is_default = false, last_modified_by = @last_modified_by, last_modified_on = NOW() WHERE is_default = true AND is_deleted = false;"
                        : StatusMasterQueries.UnsetOtherDefaults;
                    
                    await connection.ExecuteAsync(unsetQuery, new { 
                        id = request.id,
                        last_modified_by = userId 
                    });
                }

                // If setting this status as completion status, unset all other completion statuses first
                if (request.is_completion_status)
                {
                    // For new records (id = 0), we need to unset all completion statuses
                    // For existing records, we unset all except the current one
                    var unsetCompletionQuery = request.id == 0 
                        ? @"UPDATE status_master SET is_completion_status = false, last_modified_by = @last_modified_by, last_modified_on = NOW() WHERE is_completion_status = true AND is_deleted = false;"
                        : StatusMasterQueries.UnsetOtherCompletionStatuses;
                    
                    await connection.ExecuteAsync(unsetCompletionQuery, new { 
                        id = request.id,
                        last_modified_by = userId 
                    });
                }

                if (request.id == 0)
                {
                    request.id = await connection.ExecuteScalarAsync<int>(StatusMasterQueries.Insert, request);
                }
                else
                {
                    await connection.ExecuteAsync(StatusMasterQueries.Update, request);
                }
            }
            return request;
        }

        public async Task<bool> DeleteStatus(int id, bool isHardDelete)
        {
            using (var connection = _context.CreateConnection())
            {
                if (isHardDelete)
                {
                    await connection.ExecuteAsync(StatusMasterQueries.Delete, new { Id = id });
                }
                else
                {
                    await connection.ExecuteAsync(StatusMasterQueries.SoftDelete, new { Id = id });
                }
                return true;
            }
        }
    }
}


