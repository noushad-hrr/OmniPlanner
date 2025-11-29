using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Queries;
using OmniPlanner_API.ViewModels;
using OmniPlanner_API.ViewModels.Master_Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    //[Authorize]
    public class CategoryMasterController : ControllerBase
    {
        private readonly ICategoryMasterRepository _categoryRepository;

        public CategoryMasterController(ICategoryMasterRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        #region Crud Of Categories

        [HttpGet]
        public async Task<IActionResult> GetAllCategories()
        {
            var response = new ServiceResponse<IEnumerable<CategoryViewModel>>();
            try
            {
                response.Data = await _categoryRepository.GetCategories();
                if (response.Data == null || !response.Data.Any())
                {
                    response.Message = "No categories found";
                    response.Success = true;
                    return Ok(response);
                }

                response.Message = CommonMessages.GetSuccessfully;
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCategoryById(int id)
        {
            var response = new ServiceResponse<Category>();
            try
            {
                response.Data = await _categoryRepository.GetCategoryById(id);
                if (response.Data == null)
                    throw new Exception(CommonMessages.DataNotFound);

                response.Message = CommonMessages.GetSuccessfully;
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddUpdateCategory([FromBody] Category request)
        {
            var response = new ServiceResponse<Category>();
            try
            {
                if (string.IsNullOrWhiteSpace(request.category))
                {
                    throw new Exception("Category name is required");
                }

                response.Data = await _categoryRepository.AddUpdateCategory(request);
                if (response.Data == null)
                    throw new Exception(CommonMessages.UnableToCreate);

                response.Message = request.id == 0 ? "Category created successfully" : "Category updated successfully";
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        [HttpDelete("{id}/{isHardDelete}")]
        public async Task<IActionResult> DeleteCategory(int id, bool isHardDelete)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _categoryRepository.DeleteCategory(id, isHardDelete);
                if (!response.Data)
                    throw new Exception(CommonMessages.UnableToDelete);

                response.Message = CommonMessages.GetSuccessfully;
                response.Success = true;
                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.Message = ex.Message;
                return Ok(response);
            }
        }

        #endregion
    }
}

