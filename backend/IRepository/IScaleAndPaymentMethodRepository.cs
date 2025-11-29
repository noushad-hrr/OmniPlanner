using OmniPlanner_API.Models.Master_Data;

namespace OmniPlanner_API.IRepository
{
    public interface IScaleAndPaymentMethodRepository
    {
        Task<IEnumerable<ScaleAndPaymentMethod>> GetAllScaleAndPaymentMethods();
        Task<ScaleAndPaymentMethod?> GetScaleAndPaymentMethodById(int id);
        Task<ScaleAndPaymentMethod> AddUpdateScaleAndPaymentMethod(ScaleAndPaymentMethod request);
        Task<bool> DeleteScaleAndPaymentMethod(int id, bool isHardDelete);
    }
}
