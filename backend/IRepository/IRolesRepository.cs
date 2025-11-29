using OmniPlanner_API.Models.Auth;
using OmniPlanner_API.ViewModels.Auth;
using System.Data;

namespace OmniPlanner_API.IRepository
{
    public interface IRolesRepository
    {
        Task<Role?> GetById(int id);
        Task<Role?> GetByName(string name);
        Task<IEnumerable<RoleViewModel>> GetAll();
        Task<Role> Create(CreateRoleRequest request, int createdBy);
        Task<Role> Update(UpdateRoleRequest request, int modifiedBy);
        Task<bool> Delete(int id, bool isHardDelete, int modifiedBy);
        Task<List<PermissionViewModel>> GetRolePermissions(int roleId);
        Task<bool> AssignPermissions(int roleId, List<int> permissionIds, int assignedBy, IDbConnection? connection = null, IDbTransaction? transaction = null);
        Task<bool> RemovePermissions(int roleId, List<int> permissionIds);
        Task<bool> NameExists(string name, int? excludeId = null);
    }
}

