using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Models.Sales_Management;
using OmniPlanner_API.Models.System;
using OmniPlanner_API.Queries;
using OmniPlanner_API.ViewModels;
using OmniPlanner_API.ViewModels.Master_Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace OmniPlanner_API.Controllers
{
        [Route("api/[controller]/[action]")]
        [ApiController]
        [Authorize]
        public class CustomerController : ControllerBase
        {
            private readonly ICustomerRepository _customerRepository;

            public CustomerController(ICustomerRepository CustomerRepository)
            {
                _customerRepository = CustomerRepository;
            }
         
            //Get All customers
            [HttpGet]
            public async Task<IActionResult> GetAllCustomers()
            {
                var response = new ServiceResponse<IEnumerable<customerViewModel>>();
                try
                {
                    response.Data = await _customerRepository.GetCustomers();
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
            public async Task<IActionResult> GetCustomerById(int id)
            {
                var response = new ServiceResponse<customerViewModel>();
                try
                {
                    response.Data = await _customerRepository.GetCustomerById(id);
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
            public async Task<IActionResult> AddUpdateCustomer([FromBody] Customer request)
            {
                var response = new ServiceResponse<Customer>();
                try
                {
                    response.Data = await _customerRepository.AddUpdateCustomer(request);
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
            public async Task<IActionResult> DeleteCustomer(int id, bool isHardDelete)
            {
                var response = new ServiceResponse<bool>();
                try
                {
                    response.Data = await _customerRepository.DeleteCustomer(id, isHardDelete);
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
        //[HttpPost]
        //public async Task<IActionResult> AddUpdateCustomerPriceMapping([FromBody] List<CustomerPriceMapping> request)
        //{
        //    var response = new ServiceResponse<bool>();
        //    try
        //    {
        //        response.Data = await _customerRepository.AddUpdateCustomerPriceMapping(request);
        //        if (response.Data == null)
        //            throw new Exception(CommonMessages.UnableToCreate);

        //        response.Message = CommonMessages.GetSuccessfully;
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
        

    }
    }
