using Dapper;
using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Auth;
using OmniPlanner_API.Queries.Auth;
using OmniPlanner_API.Repository;
using OmniPlanner_API.ViewModels.Auth;
using System.Data;
using System.Security.Claims;

namespace OmniPlanner_API.Repository
{
    public class UsersRepository : IUsersRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string? UserID;

        public UsersRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
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

        public async Task<User?> GetByEmail(string email)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<User>(UserQueries.GetByEmail, new { email });
        }

        public async Task<User?> GetByUsername(string username)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<User>(UserQueries.GetByUsername, new { username });
        }

        public async Task<User?> GetById(int id)
        {
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<User>(UserQueries.GetById, new { id });
        }

        public async Task<IEnumerable<UserViewModel>> GetAll()
        {
            using var connection = _context.CreateConnection();
            var users = await connection.QueryAsync<UserViewModel>(UserQueries.GetAll);
            
            // Load roles for each user
            foreach (var user in users)
            {
                user.roles = (await GetUserRoles(user.id)).ToList();
            }
            
            return users;
        }

        public async Task<User> Create(CreateUserRequest request, int createdBy)
        {
            using var connection = _context.CreateConnection();
            connection.Open();
            using var transaction = connection.BeginTransaction();

            try
            {
                // Check if email exists
                if (await EmailExists(request.email))
                {
                    throw new Exception("Email already exists");
                }

                // Check if username exists
                if (await UsernameExists(request.username))
                {
                    throw new Exception("Username already exists");
                }

                // Hash password
                var passwordHash = PasswordHasher.HashPassword(request.password);

                var user = new User
                {
                    email = request.email,
                    username = request.username,
                    password_hash = passwordHash,
                    first_name = request.first_name,
                    last_name = request.last_name,
                    phone = request.phone,
                    is_active = request.is_active,
                    email_verified = false,
                    created_by = createdBy,
                    last_modified_by = createdBy
                };

                user = await connection.QueryFirstOrDefaultAsync<User>(UserQueries.Create, user, transaction);

                // Assign roles
                if (request.roleIds != null && request.roleIds.Any())
                {
                    await AssignRoles(user.id, request.roleIds, createdBy, connection, transaction);
                }

                transaction.Commit();
                return user;
            }
            catch
            {
                transaction.Rollback();
                throw;
            }
        }

        public async Task<User> Update(UpdateUserRequest request, int modifiedBy)
        {
            using var connection = _context.CreateConnection();
            connection.Open();
            using var transaction = connection.BeginTransaction();

            try
            {
                // Check if email exists (excluding current user)
                if (await EmailExists(request.email, request.id))
                {
                    throw new Exception("Email already exists");
                }

                // Check if username exists (excluding current user)
                if (await UsernameExists(request.username, request.id))
                {
                    throw new Exception("Username already exists");
                }

                var user = await connection.QueryFirstOrDefaultAsync<User>(
                    UserQueries.Update,
                    new
                    {
                        id = request.id,
                        email = request.email,
                        username = request.username,
                        first_name = request.first_name,
                        last_name = request.last_name,
                        phone = request.phone,
                        is_active = request.is_active,
                        last_modified_by = modifiedBy
                    },
                    transaction);

                // Update password if provided
                if (!string.IsNullOrEmpty(request.password))
                {
                    var passwordHash = PasswordHasher.HashPassword(request.password);
                    await connection.ExecuteAsync(
                        UserQueries.UpdatePassword,
                        new { id = request.id, password_hash = passwordHash, last_modified_by = modifiedBy },
                        transaction);
                }

                // Update roles
                await connection.ExecuteAsync(UserQueries.RemoveAllUserRoles, new { userId = request.id }, transaction);
                if (request.roleIds != null && request.roleIds.Any())
                {
                    await AssignRoles(request.id, request.roleIds, modifiedBy, connection, transaction);
                }

                transaction.Commit();
                return user!;
            }
            catch
            {
                transaction.Rollback();
                throw;
            }
        }

        public async Task<bool> UpdatePassword(int userId, string newPassword, int modifiedBy)
        {
            using var connection = _context.CreateConnection();
            var passwordHash = PasswordHasher.HashPassword(newPassword);
            var rows = await connection.ExecuteAsync(
                UserQueries.UpdatePassword,
                new { id = userId, password_hash = passwordHash, last_modified_by = modifiedBy });
            return rows > 0;
        }

        public async Task<bool> UpdateLastLogin(int userId)
        {
            using var connection = _context.CreateConnection();
            var rows = await connection.ExecuteAsync(UserQueries.UpdateLastLogin, new { id = userId });
            return rows > 0;
        }

        public async Task<bool> Delete(int id, bool isHardDelete, int modifiedBy)
        {
            using var connection = _context.CreateConnection();
            if (isHardDelete)
            {
                var rows = await connection.ExecuteAsync(UserQueries.HardDelete, new { id });
                return rows > 0;
            }
            else
            {
                var rows = await connection.ExecuteAsync(UserQueries.Delete, new { id, last_modified_by = modifiedBy });
                return rows > 0;
            }
        }

        public async Task<List<RoleViewModel>> GetUserRoles(int userId)
        {
            using var connection = _context.CreateConnection();
            var roles = await connection.QueryAsync<RoleViewModel>(UserQueries.GetUserRoles, new { userId });
            return roles.ToList();
        }

        public async Task<List<string>> GetUserPermissions(int userId)
        {
            using var connection = _context.CreateConnection();
            var permissions = await connection.QueryAsync<string>(UserQueries.GetUserPermissions, new { userId });
            return permissions.ToList();
        }

        public async Task<bool> AssignRoles(int userId, List<int> roleIds, int assignedBy, IDbConnection? connection = null, IDbTransaction? transaction = null)
        {
            var useExistingConnection = connection != null;
            if (!useExistingConnection)
            {
                connection = _context.CreateConnection();
            }

            try
            {
                foreach (var roleId in roleIds)
                {
                    await connection.ExecuteAsync(
                        UserQueries.AssignRoles,
                        new { userId, roleId, assignedBy },
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

        public async Task<bool> RemoveRoles(int userId, List<int> roleIds)
        {
            using var connection = _context.CreateConnection();
            foreach (var roleId in roleIds)
            {
                await connection.ExecuteAsync(UserQueries.RemoveRoles, new { userId, roleId });
            }
            return true;
        }

        public async Task<bool> EmailExists(string email, int? excludeId = null)
        {
            using var connection = _context.CreateConnection();
            if (excludeId.HasValue)
            {
                return await connection.QueryFirstOrDefaultAsync<bool>(
                    UserQueries.CheckEmailExistsExcludingId,
                    new { email, excludeId = excludeId.Value });
            }
            return await connection.QueryFirstOrDefaultAsync<bool>(
                UserQueries.CheckEmailExists,
                new { email });
        }

        public async Task<bool> UsernameExists(string username, int? excludeId = null)
        {
            using var connection = _context.CreateConnection();
            if (excludeId.HasValue)
            {
                return await connection.QueryFirstOrDefaultAsync<bool>(
                    UserQueries.CheckUsernameExistsExcludingId,
                    new { username, excludeId = excludeId.Value });
            }
            return await connection.QueryFirstOrDefaultAsync<bool>(
                UserQueries.CheckUsernameExists,
                new { username });
        }
    }
}

