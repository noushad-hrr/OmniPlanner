using OmniPlanner_API.Models.Master_Data;

namespace OmniPlanner_API.IRepository
{
    public interface IPackageTypesRepository
    {
        Task<IEnumerable<PackageTypes>> GetPackageTypes();
        Task<PackageTypes?> GetPackageTypeById(int id);
        Task<PackageTypes> AddUpdatePackageType(PackageTypes request);
        Task<bool> DeletePackageType(int id, bool isHardDelete);
        //Task<bool> ActiveInActive(int id, bool is_active);
    }
}
