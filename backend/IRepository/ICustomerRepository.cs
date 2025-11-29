using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Models.Sales_Management;
using OmniPlanner_API.Models.System;
using OmniPlanner_API.ViewModels.Master_Data;

namespace OmniPlanner_API.IRepository
{
    public interface ICustomerRepository
    {
        Task<IEnumerable<customerViewModel>> GetCustomers();
        Task<customerViewModel?> GetCustomerById(int id);
        Task<Customer> AddUpdateCustomer(Customer request);
        Task<bool> DeleteCustomer(int id, bool isHardDelete);
        //Task<bool> AddUpdateCustomerPriceMapping(List<CustomerPriceMapping> request);
    }
}
