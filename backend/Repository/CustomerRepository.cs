using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Models.Sales_Management;
using OmniPlanner_API.Models.System;
using OmniPlanner_API.Queries.Master_Data;
using OmniPlanner_API.Queries.System;
using OmniPlanner_API.ViewModels.Master_Data;
using Dapper;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.Security.Claims;

namespace OmniPlanner_API.Repository
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string UserID;
        public CustomerRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
            GetUserId();
        }
        private void GetUserId()
        {
            if (_httpContextAccessor.HttpContext == null)
                UserID = null;
            var claimsIdentity = _httpContextAccessor.HttpContext.User.Identity as ClaimsIdentity;
            UserID = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }

        public async Task<IEnumerable<customerViewModel>> GetCustomers()
        {
            using (var connection = _context.CreateConnection())
            {
                var customers =  await connection.QueryAsync<customerViewModel>(CustomerQueries.GetAll);
                foreach (var customer in customers)
                {
                    if (!string.IsNullOrEmpty(customer.CustomerPriceMappingJson))
                    {
                        customer.customer_price_mapping = JsonConvert.DeserializeObject<List<CustomerPriceMappingViewModel>>(customer.CustomerPriceMappingJson);
                    }
                }

                return customers.ToList();
            }
        }

        public async Task<customerViewModel?> GetCustomerById(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                var result =  await connection.QueryFirstOrDefaultAsync<customerViewModel>(CustomerQueries.GetById, new { id });
                if (result == null)
                    return null;

            //    // Deserialize the JSON string into a List<CustomerPriceMapping>
            //    result.customerPriceMapping = !string.IsNullOrEmpty(result.CustomerPriceMappingJson)
            //? JsonConvert.DeserializeObject<List<CustomerPriceMappingViewModel>>(result.CustomerPriceMappingJson)
            //: new List<CustomerPriceMappingViewModel>();
                
                result.customer_price_mapping = !string.IsNullOrEmpty(result.CustomerPriceMappingJson)
           ? JsonConvert.DeserializeObject<List<CustomerPriceMappingViewModel>>(result.CustomerPriceMappingJson)
           : new List<CustomerPriceMappingViewModel>();
                return result;
            }
        }
        public async Task<Customer> AddUpdateCustomer(Customer request)
        {
            using (var connection = _context.CreateConnection())
            {
                request.created_by = Convert.ToInt32(UserID);
                request.last_modified_by = Convert.ToInt32(UserID);
                if (request.id == 0)
                {
                    request.id = await connection.ExecuteScalarAsync<int>(CustomerQueries.Insert, request);
                }
                else
                {
                    await connection.ExecuteAsync(CustomerQueries.Update, request);
                    // add update price mapping
                    if (request.customer_price_mapping != null && request.customer_price_mapping.Any())
                    {
                        AddUpdateCustomerPriceMapping(request.customer_price_mapping, request.id);
                    }
                }
            }
            return request;
        }

        public async Task<bool> DeleteCustomer(int id, bool isHardDelete)
        {
            using (var connection = _context.CreateConnection())
            {
                if (isHardDelete)
                {
                    await connection.ExecuteAsync(CustomerQueries.Delete, new { Id = id });
                }
                else
                {
                    await connection.ExecuteAsync(CustomerQueries.SoftDelete, new { Id = id });
                }
                return true;
            }
        }
        public async Task<bool> AddUpdateCustomerPriceMapping(List<CustomerPriceMappingViewModel> request,int id)
        {
            using (var connection = _context.CreateConnection())
            {
                for (int i = 0; i < request.Count; i++)
                {
                    request[i].customer_id = id;
                    await connection.ExecuteAsync(CustomerQueries.InsertOrUpdateCustomerPrice, request[i]);
                }
            }
            return true;
        }
    }
}
