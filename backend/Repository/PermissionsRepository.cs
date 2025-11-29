using Dapper;
using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Auth;
using OmniPlanner_API.Queries.Auth;
using OmniPlanner_API.ViewModels.Auth;
using System.Security.Claims;

namespace OmniPlanner_API.Repository
{
    public class PermissionsRepository : IPermissionsRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string? UserID;

        public PermissionsRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
            GetUserId();
        }

        private void GetUserId()
        {
            if (_httpContextAccessor.HttpContext == null)
                UserID = null;
            var claimsIdentity = _httpContextAccessor.HttpContext?.User.Identity as ClaimsIdentity;
            UserID = claimsIdentity?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }

        private int GetCurrentUserId()
        {
            if (!string.IsNullOrEmpty(UserID) && int.TryParse(UserID, out int userId))
                return userId;
            return 1; // Default system user
        }

        public async Task<Permission?> GetById(int id)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<Permission>(PermissionQueries.GetById, new { id });
        }

        public async Task<Permission?> GetByCode(string code)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<Permission>(PermissionQueries.GetByCode, new { code });
        }

        public async Task<IEnumerable<PermissionViewModel>> GetAll()
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryAsync<PermissionViewModel>(PermissionQueries.GetAll);
        }

        public async Task<IEnumerable<PermissionViewModel>> GetByModule(string module)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryAsync<PermissionViewModel>(
                PermissionQueries.GetByModule,
                new { module });
        }

        public async Task<Permission> Create(CreatePermissionRequest request, int createdBy)
        {
            using var connection = _context.CreateConnection();

            // Check if code exists
            if (await CodeExists(request.code))
            {
                throw new Exception("Permission code already exists");
            }

            var permission = new Permission
            {
                name = request.name,
                code = request.code,
                description = request.description,
                module = request.module,
                is_active = request.is_active,
                created_by = createdBy,
                last_modified_by = createdBy
            };

            return await connection.QueryFirstOrDefaultAsync<Permission>(
                PermissionQueries.Create,
                permission) ?? permission;
        }

        public async Task<Permission> Update(UpdatePermissionRequest request, int modifiedBy)
        {
            using var connection = _context.CreateConnection();

            // Check if code exists (excluding current permission)
            if (await CodeExists(request.code, request.id))
            {
                throw new Exception("Permission code already exists");
            }

            var permission = await connection.QueryFirstOrDefaultAsync<Permission>(
                PermissionQueries.Update,
                new
                {
                    id = request.id,
                    name = request.name,
                    code = request.code,
                    description = request.description,
                    module = request.module,
                    is_active = request.is_active,
                    last_modified_by = modifiedBy
                });

            return permission ?? throw new Exception("Permission not found");
        }

        public async Task<bool> Delete(int id, bool isHardDelete, int modifiedBy)
        {
            using var connection = _context.CreateConnection();
            if (isHardDelete)
            {
                var rows = await connection.ExecuteAsync(PermissionQueries.HardDelete, new { id });
                return rows > 0;
            }
            else
            {
                var rows = await connection.ExecuteAsync(
                    PermissionQueries.Delete,
                    new { id, last_modified_by = modifiedBy });
                return rows > 0;
            }
        }

        public async Task<List<string>> GetUniqueModules()
        {
            using var connection = _context.CreateConnection();
            var modules = await connection.QueryAsync<string>(PermissionQueries.GetUniqueModules);
            return modules.ToList();
        }

        public async Task<bool> CodeExists(string code, int? excludeId = null)
        {
            using var connection = _context.CreateConnection();
            if (excludeId.HasValue)
            {
                return await connection.QueryFirstOrDefaultAsync<bool>(
                    PermissionQueries.CheckCodeExistsExcludingId,
                    new { code, excludeId = excludeId.Value });
            }
            return await connection.QueryFirstOrDefaultAsync<bool>(
                PermissionQueries.CheckCodeExists,
                new { code });
        }
    }
}

