using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Attachments;
using OmniPlanner_API.Models.Sales_Management;
using OmniPlanner_API.Queries;
using OmniPlanner_API.Repository;
using OmniPlanner_API.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize]
    public class PaymentHistoryController : ControllerBase
    {
        private readonly IPaymentHistoryRepository _paymentHistoryRepository;

        public PaymentHistoryController(IPaymentHistoryRepository paymentHistoryRepository)
        {
            _paymentHistoryRepository = paymentHistoryRepository;
        }


        [HttpPost]
        public async Task<IActionResult> AddPaymentDetails([FromBody] List<PaymentHistory> request)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _paymentHistoryRepository.AddPaymentDetails(request);
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
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPaymentHistoryByInventorySoldDataId(int id)
        {
            var response = new ServiceResponse<IEnumerable<PaymentHistory>>();
            try
            {
                response.Data = await _paymentHistoryRepository.GetPaymentHistoryByInventorySoldDataId(id);
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


    }
}
