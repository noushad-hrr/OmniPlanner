using Dapper;
using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Auth;
using OmniPlanner_API.Queries.Auth;
using OmniPlanner_API.ViewModels.Auth;
using System.Data;
using System.Security.Claims;

namespace OmniPlanner_API.Repository
{
    public class RolesRepository : IRolesRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string? UserID;

        public RolesRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
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

        public async Task<Role?> GetById(int id)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<Role>(RoleQueries.GetById, new { id });
        }

        public async Task<Role?> GetByName(string name)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<Role>(RoleQueries.GetByName, new { name });
        }

        public async Task<IEnumerable<RoleViewModel>> GetAll()
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryAsync<RoleViewModel>(RoleQueries.GetAll);
        }

        public async Task<Role> Create(CreateRoleRequest request, int createdBy)
        {
            using var connection = _context.CreateConnection();
            connection.Open();
            using var transaction = connection.BeginTransaction();

            try
            {
                // Check if name exists
                if (await NameExists(request.name))
                {
                    throw new Exception("Role name already exists");
                }

                var role = new Role
                {
                    name = request.name,
                    description = request.description,
                    is_active = request.is_active,
                    created_by = createdBy,
                    last_modified_by = createdBy
                };

                role = await connection.QueryFirstOrDefaultAsync<Role>(
                    RoleQueries.Create,
                    role,
                    transaction);

                // Assign permissions
                if (request.permissionIds != null && request.permissionIds.Any())
                {
                    await AssignPermissions(role!.id, request.permissionIds, createdBy, connection, transaction);
                }

                transaction.Commit();
                return role!;
            }
            catch
            {
                transaction.Rollback();
                throw;
            }
        }

        public async Task<Role> Update(UpdateRoleRequest request, int modifiedBy)
        {
            using var connection = _context.CreateConnection();
            connection.Open();
            using var transaction = connection.BeginTransaction();

            try
            {
                // Check if name exists (excluding current role)
                if (await NameExists(request.name, request.id))
                {
                    throw new Exception("Role name already exists");
                }

                var role = await connection.QueryFirstOrDefaultAsync<Role>(
                    RoleQueries.Update,
                    new
                    {
                        id = request.id,
                        name = request.name,
                        description = request.description,
                        is_active = request.is_active,
                        last_modified_by = modifiedBy
                    },
                    transaction);

                // Update permissions
                await connection.ExecuteAsync(
                    RoleQueries.RemoveAllRolePermissions,
                    new { roleId = request.id },
                    transaction);

                if (request.permissionIds != null && request.permissionIds.Any())
                {
                    await AssignPermissions(request.id, request.permissionIds, modifiedBy, connection, transaction);
                }

                transaction.Commit();
                return role!;
            }
            catch
            {
                transaction.Rollback();
                throw;
            }
        }

        public async Task<bool> Delete(int id, bool isHardDelete, int modifiedBy)
        {
            using var connection = _context.CreateConnection();
            if (isHardDelete)
            {
                var rows = await connection.ExecuteAsync(RoleQueries.HardDelete, new { id });
                return rows > 0;
            }
            else
            {
                var rows = await connection.ExecuteAsync(RoleQueries.Delete, new { id, last_modified_by = modifiedBy });
                return rows > 0;
            }
        }

        public async Task<List<PermissionViewModel>> GetRolePermissions(int roleId)
        {
            using var connection = _context.CreateConnection();
            var permissions = await connection.QueryAsync<PermissionViewModel>(
                RoleQueries.GetRolePermissions,
                new { roleId });
            return permissions.ToList();
        }

        public async Task<bool> AssignPermissions(int roleId, List<int> permissionIds, int assignedBy, IDbConnection? connection = null, IDbTransaction? transaction = null)
        {
            var useExistingConnection = connection != null;
            if (!useExistingConnection)
            {
                connection = _context.CreateConnection();
            }

            try
            {
                foreach (var permissionId in permissionIds)
                {
                    await connection.ExecuteAsync(
                        RoleQueries.AssignPermission,
                        new { roleId, permissionId, assignedBy },
                        transaction);
                }
                return true;
            }
            finally
            {
                if (!useExistingConnection && connection != null)
                {
                    connection.Dispose();
                }
            }
        }

        public async Task<bool> RemovePermissions(int roleId, List<int> permissionIds)
        {
            using var connection = _context.CreateConnection();
            foreach (var permissionId in permissionIds)
            {
                await connection.ExecuteAsync(
                    RoleQueries.RemovePermission,
                    new { roleId, permissionId });
            }
            return true;
        }

        public async Task<bool> NameExists(string name, int? excludeId = null)
        {
            using var connection = _context.CreateConnection();
            if (excludeId.HasValue)
            {
                return await connection.QueryFirstOrDefaultAsync<bool>(
                    RoleQueries.CheckNameExistsExcludingId,
                    new { name, excludeId = excludeId.Value });
            }
            return await connection.QueryFirstOrDefaultAsync<bool>(
                RoleQueries.CheckNameExists,
                new { name });
        }
    }
}

