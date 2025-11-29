using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Queries;
using OmniPlanner_API.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace OmniPlanner_API.Controllers
{

    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize]
    public class PackageTypeController : ControllerBase
    {
        private readonly IPackageTypesRepository _PackageTypeRepository;

        public PackageTypeController(IPackageTypesRepository PackageTypeRepository)
        {
            _PackageTypeRepository = PackageTypeRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPackageTypes()
        {
            var response = new ServiceResponse<IEnumerable<PackageTypes>>();
            try
            {
                response.Data = await _PackageTypeRepository.GetPackageTypes();
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
        public async Task<IActionResult> GetPackageTypeById(int id)
        {
            var response = new ServiceResponse<PackageTypes>();
            try
            {
                response.Data = await _PackageTypeRepository.GetPackageTypeById(id);
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
        public async Task<IActionResult> AddUpdatePackageType([FromBody] PackageTypes request)
        {
            var response = new ServiceResponse<PackageTypes>();
            try
            {
                response.Data = await _PackageTypeRepository.AddUpdatePackageType(request);
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
        //public async Task<IActionResult> ActiveInActivePackageType(int id, bool status)
        //{
        //    var response = new ServiceResponse<bool>();
        //    try
        //    {
        //        response.Data = await _PackageTypeRepository.ActiveInActive(id, status);
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
        public async Task<IActionResult> DeletePackageType(int id, bool isHardDelete)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _PackageTypeRepository.DeletePackageType(id, isHardDelete);
                if (!response.Data)
                    throw new Exception(CommonMessages.UnableToDelete);
                response.Message = CommonMessages.DeletedSuccessfully;
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
