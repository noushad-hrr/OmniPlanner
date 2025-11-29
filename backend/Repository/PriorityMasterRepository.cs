using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Queries.Master_Data;
using OmniPlanner_API.ViewModels.Master_Data;
using Dapper;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace OmniPlanner_API.Repository
{
    public class PriorityMasterRepository : IPriorityMasterRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string UserID;

        public PriorityMasterRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
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

        public async Task<IEnumerable<PriorityViewModel>> GetPriorities()
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<PriorityViewModel>(PriorityMasterQueries.GetAll);
            }
        }

        public async Task<Priority?> GetPriorityById(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryFirstOrDefaultAsync<Priority>(PriorityMasterQueries.GetById, new { id });
            }
        }

        public async Task<bool> PriorityExists(string priority, int excludeId = 0)
        {
            using (var connection = _context.CreateConnection())
            {
                var count = await connection.ExecuteScalarAsync<int>(
                    PriorityMasterQueries.CheckPriorityExists, 
                    new { priority, id = excludeId });
                return count > 0;
            }
        }

        public async Task<Priority> AddUpdatePriority(Priority request)
        {
            using (var connection = _context.CreateConnection())
            {
                // Check for duplicate priority (case-insensitive, excluding deleted records)
                var exists = await PriorityExists(request.priority, request.id);
                if (exists)
                {
                    throw new Exception("Priority name already exists");
                }

                var userId = string.IsNullOrEmpty(UserID) ? 1 : Convert.ToInt32(UserID);
                request.created_by = userId;
                request.last_modified_by = userId;

                // If setting this priority as default, unset all other defaults first
                if (request.is_default)
                {
                    // For new records (id = 0), we need to unset all defaults
                    // For existing records, we unset all except the current one
                    var unsetQuery = request.id == 0 
                        ? @"UPDATE priority_master SET is_default = false, last_modified_by = @last_modified_by, last_modified_on = NOW() WHERE is_default = true AND is_deleted = false;"
                        : PriorityMasterQueries.UnsetOtherDefaults;
                    
                    await connection.ExecuteAsync(unsetQuery, new { 
                        id = request.id,
                        last_modified_by = userId 
                    });
                }

                if (request.id == 0)
                {
                    request.id = await connection.ExecuteScalarAsync<int>(PriorityMasterQueries.Insert, request);
                }
                else
                {
                    await connection.ExecuteAsync(PriorityMasterQueries.Update, request);
                }
            }
            return request;
        }

        public async Task<bool> DeletePriority(int id, bool isHardDelete)
        {
            using (var connection = _context.CreateConnection())
            {
                if (isHardDelete)
                {
                    await connection.ExecuteAsync(PriorityMasterQueries.Delete, new { Id = id });
                }
                else
                {
                    await connection.ExecuteAsync(PriorityMasterQueries.SoftDelete, new { Id = id });
                }
                return true;
            }
        }
    }
}


