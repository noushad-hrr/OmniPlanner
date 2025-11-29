using OmniPlanner_API.Models.Auth;
using OmniPlanner_API.ViewModels.Auth;
using System.Data;

namespace OmniPlanner_API.IRepository
{
    public interface IUsersRepository
    {
        Task<User?> GetByEmail(string email);
        Task<User?> GetByUsername(string username);
        Task<User?> GetById(int id);
        Task<IEnumerable<UserViewModel>> GetAll();
        Task<User> Create(CreateUserRequest request, int createdBy);
        Task<User> Update(UpdateUserRequest request, int modifiedBy);
        Task<bool> UpdatePassword(int userId, string newPassword, int modifiedBy);
        Task<bool> UpdateLastLogin(int userId);
        Task<bool> Delete(int id, bool isHardDelete, int modifiedBy);
        Task<List<RoleViewModel>> GetUserRoles(int userId);
        Task<List<string>> GetUserPermissions(int userId);
        Task<bool> AssignRoles(int userId, List<int> roleIds, int assignedBy, IDbConnection? connection = null, IDbTransaction? transaction = null);
        Task<bool> RemoveRoles(int userId, List<int> roleIds);
        Task<bool> EmailExists(string email, int? excludeId = null);
        Task<bool> UsernameExists(string username, int? excludeId = null);
    }
}

