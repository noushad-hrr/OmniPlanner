using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Sales_Management;
using OmniPlanner_API.Models.System;
using OmniPlanner_API.Queries;
using OmniPlanner_API.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize]
    public class EmailNotificationController : ControllerBase
    {
        private readonly IEmailNotificationRepository _emailNotificationRepository;

        public EmailNotificationController(IEmailNotificationRepository EmailNotificationRepository)
        {
            _emailNotificationRepository = EmailNotificationRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmailNotifications()
        {
            var response = new ServiceResponse<IEnumerable<Email_Templates>>();
            try
            {
                response.Data = await _emailNotificationRepository.GetEmailNotifications();
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
        public async Task<IActionResult> GetEmailNotificationById(int id)
        {
            var response = new ServiceResponse<Email_Templates>();
            try
            {
                response.Data = await _emailNotificationRepository.GetEmailNotificationById(id);
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
        public async Task<IActionResult> AddUpdateEmailNotification([FromBody] Email_Templates request)
        {
            var response = new ServiceResponse<Email_Templates>();
            try
            {
                response.Data = await _emailNotificationRepository.AddUpdateEmailNotification(request);
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

        //// Only for Super Admin(Hard Delete)
        [HttpDelete("{id}/{isHardDelete}")]
        public async Task<IActionResult> DeleteEmailNotification(int id, bool isHardDelete)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _emailNotificationRepository.DeleteEmailNotification(id, isHardDelete);
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
        [HttpGet]
        public async Task<IActionResult> SendMailForDuePayments()
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _emailNotificationRepository.SendMailForDuePayments();
                if (!response.Data)
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
        [HttpGet]
        public async Task<IActionResult> SendMailForZeroWeight()
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _emailNotificationRepository.SendMailForZeroWeight();
                if (!response.Data)
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
        public async Task<IActionResult> SendMailToYourSelf([FromBody] InventroryDataByPONumber request)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _emailNotificationRepository.SendMailToCustomerOrInternal(request);
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
    }
}
