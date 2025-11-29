using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.ViewModels.Master_Data;

namespace OmniPlanner_API.IRepository
{
    public interface ICategoryMasterRepository
    {
        Task<IEnumerable<CategoryViewModel>> GetCategories();
        Task<Category?> GetCategoryById(int id);
        Task<Category> AddUpdateCategory(Category request);
        Task<bool> DeleteCategory(int id, bool isHardDelete);
    }
}

