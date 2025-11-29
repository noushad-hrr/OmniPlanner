using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Queries.Master_Data;
using OmniPlanner_API.ViewModels.Master_Data;
using Dapper;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace OmniPlanner_API.Repository
{
    public class CategoryMasterRepository : ICategoryMasterRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string UserID;

        public CategoryMasterRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
            GetRoleId();
        }

        private void GetRoleId()
        {
            if (_httpContextAccessor.HttpContext == null)
                UserID = null;
            var claimsIdentity = _httpContextAccessor.HttpContext.User.Identity as ClaimsIdentity;
            UserID = claimsIdentity?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }

        #region Crud Of Categories

        public async Task<IEnumerable<CategoryViewModel>> GetCategories()
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<CategoryViewModel>(CategoryMasterQueries.GetAll);
            }
        }

        public async Task<Category?> GetCategoryById(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryFirstOrDefaultAsync<Category>(CategoryMasterQueries.GetById, new { id });
            }
        }

        public async Task<bool> CategoryExists(string category, int excludeId = 0)
        {
            using (var connection = _context.CreateConnection())
            {
                var count = await connection.ExecuteScalarAsync<int>(
                    CategoryMasterQueries.CheckCategoryExists, 
                    new { category, id = excludeId });
                return count > 0;
            }
        }

        public async Task<Category> AddUpdateCategory(Category request)
        {
            using (var connection = _context.CreateConnection())
            {
                // Check for duplicate category (case-insensitive, excluding deleted records)
                var exists = await CategoryExists(request.category, request.id);
                if (exists)
                {
                    throw new Exception("Category name already exists");
                }

                var userId = string.IsNullOrEmpty(UserID) ? 1 : Convert.ToInt32(UserID);
                request.created_by = userId;
                request.last_modified_by = userId;

                if (request.id == 0)
                {
                    request.id = await connection.ExecuteScalarAsync<int>(CategoryMasterQueries.Insert, request);
                }
                else
                {
                    await connection.ExecuteAsync(CategoryMasterQueries.Update, request);
                }
            }
            return request;
        }

        public async Task<bool> DeleteCategory(int id, bool isHardDelete)
        {
            using (var connection = _context.CreateConnection())
            {
                if (isHardDelete)
                {
                    await connection.ExecuteAsync(CategoryMasterQueries.Delete, new { Id = id });
                }
                else
                {
                    await connection.ExecuteAsync(CategoryMasterQueries.SoftDelete, new { Id = id });
                }
                return true;
            }
        }

        #endregion
    }
}

