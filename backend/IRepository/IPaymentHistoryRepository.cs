using System.Collections;
using OmniPlanner_API.Models.Sales_Management;

namespace OmniPlanner_API.IRepository
{
    public interface IPaymentHistoryRepository
    {
        Task<bool> AddPaymentDetails(List<PaymentHistory> request);
        Task<IEnumerable<PaymentHistory>> GetPaymentHistoryByInventorySoldDataId(int id);
    }
}
