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
    public class RegionController : ControllerBase
    {
        private readonly IRegionsRepository _regionRepository;

        public RegionController(IRegionsRepository regionRepository)
        {
            _regionRepository = regionRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllRegions()
        {
            var response = new ServiceResponse<IEnumerable<Regions>>();
            try
            {
                response.Data = await _regionRepository.GetRegions();
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
        public async Task<IActionResult> GetRegionById(int id)
        {
            var response = new ServiceResponse<Regions>();
            try
            {
                response.Data = await _regionRepository.GetRegionById(id);
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
        public async Task<IActionResult> AddUpdateRegion([FromBody] Regions request)
        {
            var response = new ServiceResponse<Regions>();
            try
            {
                response.Data = await _regionRepository.AddUpdateRegion(request);
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
        //public async Task<IActionResult> ActiveInActiveRegion(int id, bool status)
        //{
        //    var response = new ServiceResponse<bool>();
        //    try
        //    {
        //        response.Data = await _regionRepository.ActiveInActive(id, status);
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
        public async Task<IActionResult> DeleteRegion(int id, bool isHardDelete)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _regionRepository.DeleteRegion(id, isHardDelete);
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
