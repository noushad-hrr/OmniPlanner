using Dapper;
using System.Security.Claims;
using OmniPlanner_API.Queries.Master_Data;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.IRepository;

namespace OmniPlanner_API.Repository
{
    public class ScaleAndPaymentMethodRepository : IScaleAndPaymentMethodRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string UserID;
        public ScaleAndPaymentMethodRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
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

        public async Task<IEnumerable<ScaleAndPaymentMethod>> GetAllScaleAndPaymentMethods()
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<ScaleAndPaymentMethod>(ScaleAndPaymentMethodQueries.GetAll);
            }
        }

        public async Task<ScaleAndPaymentMethod?> GetScaleAndPaymentMethodById(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryFirstOrDefaultAsync<ScaleAndPaymentMethod>(ScaleAndPaymentMethodQueries.GetById, new { id });
            }
        }
        public async Task<ScaleAndPaymentMethod> AddUpdateScaleAndPaymentMethod(ScaleAndPaymentMethod request)
        {
            using (var connection = _context.CreateConnection())
            {
                request.created_by = Convert.ToInt32(UserID);
                request.last_modified_by = Convert.ToInt32(UserID);
                if (request.id == 0)
                {
                    request.id = await connection.ExecuteScalarAsync<int>(ScaleAndPaymentMethodQueries.Insert, request);
                }
                else
                {
                    await connection.ExecuteAsync(ScaleAndPaymentMethodQueries.Update, request);
                }
            }
            return request;
        }

        public async Task<bool> DeleteScaleAndPaymentMethod(int id, bool isHardDelete)
        {
            using (var connection = _context.CreateConnection())
            {
                if (isHardDelete)
                { 
                    await connection.ExecuteAsync(ScaleAndPaymentMethodQueries.Delete, new { Id = id });
                }
                else
                {
                    await connection.ExecuteAsync(ScaleAndPaymentMethodQueries.SoftDelete, new { Id = id });
                }

                    return true;
            }
        }
    }
}
