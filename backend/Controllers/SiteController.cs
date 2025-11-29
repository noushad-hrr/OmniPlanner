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
    public class SiteController : ControllerBase
    {
        private readonly ISitesRepository _siteRepository;

        public SiteController(ISitesRepository siteRepository)
        {
            _siteRepository = siteRepository;
        }

        #region Crud Of Sites
        [HttpGet]
        public async Task<IActionResult> GetAllSites()
        {
            var response = new ServiceResponse<IEnumerable<SitesViewModel>>();
            try
            {
                response.Data = await _siteRepository.GetSites();
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
        public async Task<IActionResult> GetSiteById(int id)
        {
            var response = new ServiceResponse<Sites>();
            try
            {
                response.Data = await _siteRepository.GetSiteById(id);
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
        public async Task<IActionResult> AddUpdateSite([FromBody] Sites request)
        {
            var response = new ServiceResponse<Sites>();
            try
            {
                response.Data = await _siteRepository.AddUpdateSite(request);
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
        //public async Task<IActionResult> ActiveInActiveSite(int id, bool status)
        //{
        //    var response = new ServiceResponse<bool>();
        //    try
        //    {
        //        response.Data = await _siteRepository.ActiveInActive(id, status);
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
        public async Task<IActionResult> DeleteSite(int id, bool isHardDelete)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _siteRepository.DeleteSite(id, isHardDelete);
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

        #region Crud Of Scrapped Vehicles Entry

        [HttpPost]
        public async Task<IActionResult> AddUpdateScrappedVehicleEntry([FromBody] ScrappedVehicleEntryObject request)
        {
            var response = new ServiceResponse<List<ScrappedVehicleEntry>>();
            try
            {
                response.Data = await _siteRepository.AddUpdateScrappedVehicleEntry(request.scrapped_vehicle);
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

        [HttpPost]
        public async Task<IActionResult> GetScrappedVehicleEntry([FromBody] ScrappedVehicleEntryRequest request)
        {
            var response = new ServiceResponse<IEnumerable<ScrappedVehicleEntryResponse>>();
            try
            {
                response.Data = await _siteRepository.GetScrappedVehicleEntry(request);
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

        #endregion
    }
}
