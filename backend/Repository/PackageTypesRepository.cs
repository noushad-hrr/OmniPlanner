using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Queries.Master_Data;
using Dapper;
using System.Security.Claims;

namespace OmniPlanner_API.Repository
{
    public class PackageTypesRepository : IPackageTypesRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string UserID;
        public PackageTypesRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
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

        public async Task<IEnumerable<PackageTypes>> GetPackageTypes()
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<PackageTypes>(PackageTypeQueries.GetAll);
            }
        }

        public async Task<PackageTypes?> GetPackageTypeById(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryFirstOrDefaultAsync<PackageTypes>(PackageTypeQueries.GetById, new { id });
            }
        }
        //public async Task<bool> ActiveInActive(int id, bool is_active)
        //{
        //    using (var connection = _context.CreateConnection())
        //    {
        //        await connection.ExecuteAsync(PackageTypeQueries.ActiveInActive, new { id, is_active });
        //        return true;
        //    }
        //}

        public async Task<PackageTypes> AddUpdatePackageType(PackageTypes request)
        {
            using (var connection = _context.CreateConnection())
            {
                request.created_by = Convert.ToInt32(UserID);
                request.last_modified_by = Convert.ToInt32(UserID);
                if (request.id == 0)
                {
                    request.id = await connection.ExecuteScalarAsync<int>(PackageTypeQueries.Insert, request);
                }
                else
                {
                    //var existing = await GetPackageTypeById(request.id.Value);
                    await connection.ExecuteAsync(PackageTypeQueries.Update, request);
                }
            }
            return request;
        }

        public async Task<bool> DeletePackageType(int id, bool isHardDelete)
        {
            using (var connection = _context.CreateConnection())
            {
                if (isHardDelete)
                {
                await connection.ExecuteAsync(PackageTypeQueries.Delete, new { Id = id });
                }
                else
                {
                await connection.ExecuteAsync(PackageTypeQueries.SoftDelete, new { Id = id });
                }
                return true;
            }
        }
    }
}
