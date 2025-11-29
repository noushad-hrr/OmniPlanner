using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Attachments;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Models.Sales_Management;
using OmniPlanner_API.Queries.Attachments;
using OmniPlanner_API.Queries.Master_Data;
using OmniPlanner_API.Queries.Sales_Management;
using Dapper;
using System.Security.Claims;

namespace OmniPlanner_API.Repository
{
    public class PaymentHistoryRepository : IPaymentHistoryRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string UserID;
        public PaymentHistoryRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
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

        public async Task<bool> AddPaymentDetails(List<PaymentHistory> payments)
        {
            using (var connection = _context.CreateConnection())
            {
                foreach (var payment in payments)
                {
                    payment.created_by = Convert.ToInt32(UserID);
                    payment.last_modified_by = Convert.ToInt32(UserID);
                    payment.id = await connection.ExecuteScalarAsync<int>(PaymentHistoryQueries.Insert, payment);
                }
            }
            return true;
        }

        public async Task<IEnumerable<PaymentHistory?>> GetPaymentHistoryByInventorySoldDataId(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<PaymentHistory>(PaymentHistoryQueries.GetByInventorySoldDataId, new { id });
            }
        }

    }
}

