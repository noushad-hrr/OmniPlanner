using OmniPlanner_API.Models.Auth;
using OmniPlanner_API.ViewModels.Auth;

namespace OmniPlanner_API.IRepository
{
    public interface IPermissionsRepository
    {
        Task<Permission?> GetById(int id);
        Task<Permission?> GetByCode(string code);
        Task<IEnumerable<PermissionViewModel>> GetAll();
        Task<IEnumerable<PermissionViewModel>> GetByModule(string module);
        Task<Permission> Create(CreatePermissionRequest request, int createdBy);
        Task<Permission> Update(UpdatePermissionRequest request, int modifiedBy);
        Task<bool> Delete(int id, bool isHardDelete, int modifiedBy);
        Task<List<string>> GetUniqueModules();
        Task<bool> CodeExists(string code, int? excludeId = null);
    }
}

