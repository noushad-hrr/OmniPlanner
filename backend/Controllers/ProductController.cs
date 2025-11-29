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
    [Authorize]
    public class ProductController : ControllerBase
    {
        private readonly IProductsRepository _productRepository;

        public ProductController(IProductsRepository ProductRepository)
        {
            _productRepository = ProductRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
            var response = new ServiceResponse<IEnumerable<ProductsViewModel>>();
            try
            {
                response.Data = await _productRepository.GetProducts();
                if (response.Data == null || !response.Data.Any())
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {
            var response = new ServiceResponse<Products>();
            try
            {
                response.Data = await _productRepository.GetProductById(id);
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
        public async Task<IActionResult> AddUpdateProduct([FromBody] Products request)
        {
            var response = new ServiceResponse<Products>();
            try
            {
                response.Data = await _productRepository.AddUpdateProduct(request);
                if (response.Data == null)
                    throw new Exception(CommonMessages.UnableToCreate);

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

        //[HttpGet("{id}")]
        //public async Task<IActionResult> ActiveInActiveProduct(int id, bool status)
        //{
        //    var response = new ServiceResponse<bool>();
        //    try
        //    {
        //        response.Data = await _productRepository.ActiveInActive(id, status);
        //        response.Success = true;
        //        return Ok(response);
        //    }
        //    catch (Exception ex)
        //    {
        //        response.Success = false;
        //        response.Message = ex.Message;
        //        return Ok(response);
        //    }
        //}

        // Only for Super Admin(Hard Delete)
        [HttpDelete("{id}/{isHardDelete}")]
        public async Task<IActionResult> DeleteProduct(int id, bool isHardDelete)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _productRepository.DeleteProduct(id, isHardDelete);
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
    }
}
