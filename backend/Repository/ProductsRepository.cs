using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Queries.Master_Data;
using OmniPlanner_API.ViewModels.Master_Data;
using Dapper;
using System.Security.Claims;

namespace OmniPlanner_API.Repository
{
    public class ProductsRepository : IProductsRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string UserID;

        public ProductsRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
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

        public async Task<IEnumerable<ProductsViewModel>> GetProducts()
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<ProductsViewModel>(ProductQueries.GetAll);
            }
        }

        public async Task<Products?> GetProductById(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryFirstOrDefaultAsync<Products>(ProductQueries.GetById, new { id });
            }
        }

        public async Task<Products> AddUpdateProduct(Products product)
        {
            using (var connection = _context.CreateConnection())
            {
                if (product.product_id == 0)
                {
                    product.created_by = int.Parse(UserID ?? "1");
                    product.created_on = DateTime.Now;
                    product.last_modified_by = int.Parse(UserID ?? "1");
                    product.last_modified_on = DateTime.Now;
                    product.is_active = true;
                    product.is_deleted = false;

                    var id = await connection.QuerySingleAsync<int>(ProductQueries.Insert, product);
                    product.product_id = id;
                }
                else
                {
                    product.last_modified_by = int.Parse(UserID ?? "1");
                    product.last_modified_on = DateTime.Now;
                    await connection.ExecuteAsync(ProductQueries.Update, product);
                }
                return product;
            }
        }

        public async Task<bool> DeleteProduct(int id, bool isHardDelete)
        {
            using (var connection = _context.CreateConnection())
            {
                if (isHardDelete)
                {
                    var result = await connection.ExecuteAsync(ProductQueries.HardDelete, new { id });
                    return result > 0;
                }
                else
                {
                    var result = await connection.ExecuteAsync(ProductQueries.SoftDelete, new { id, last_modified_by = int.Parse(UserID ?? "1"), last_modified_on = DateTime.Now });
                    return result > 0;
                }
            }
        }

        public async Task<bool> ProductExists(string productName, int? excludeId = null)
        {
            using (var connection = _context.CreateConnection())
            {
                var query = ProductQueries.Exists;
                if (excludeId.HasValue)
                {
                    query += " AND product_id != @excludeId";
                }
                var result = await connection.QueryFirstOrDefaultAsync<int>(query, new { productName, excludeId });
                return result > 0;
            }
        }
    }
}
