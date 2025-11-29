using OmniPlanner_API.Models.Dashboard;
using OmniPlanner_API.Models.Master_Data;

namespace OmniPlanner_API.IRepository
{
    public interface IDashboardRepository
    {
        Task<AvailableInventories> GetAvailableInventories(DashboardRequest request);
        Task<IEnumerable<AvgSalesPerVehicleDismantle>> GetAverageSalesPerVehicle(DashboardRequest request);
        Task<IEnumerable<TotalCrushAndCoreSales>> GetCrushAndCoreSales(DashboardRequest request);
        Task<IEnumerable<DuePaymentsPast45Days>> GetDuePayments(DashboardRequest request);
        Task<IEnumerable<PaymentsByProduct>> GetPaymentsByProduct(DashboardRequest request);
        Task<IEnumerable<ProductsAverage>> GetProductsAverage(DashboardRequest request);
        Task<Today> GetTodaySectionData(DashboardRequest request);
    }
}
