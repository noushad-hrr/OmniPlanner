using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Dashboard;
using OmniPlanner_API.Queries;
using OmniPlanner_API.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize]
    public class DashboardController : ControllerBase
    {
        private readonly IDashboardRepository _dashboardRepository;

        public DashboardController(IDashboardRepository dashboardRepository)
        {
            _dashboardRepository = dashboardRepository;
        }

        // POST api/<Dashboard>
        [HttpPost]
        public async Task<IActionResult> GetDashboard([FromBody] DashboardRequest request)
        {
            var response = new ServiceResponse<DashboardResponse>();
            try
            {
                var dashboard_response = new DashboardResponse();

                foreach (var section in request.permitted_sections)
                {
                    var dasboard_section = (dashboard_sections)section;

                    switch (dasboard_section)
                    {
                        case dashboard_sections.Today:
                            dashboard_response.today = await _dashboardRepository.GetTodaySectionData(request);
                            break;
                        case dashboard_sections.payments_by_product:
                            dashboard_response.payments_by_product = await _dashboardRepository.GetPaymentsByProduct(request);
                            break;
                        case dashboard_sections.due_payments_past_45_days:
                            dashboard_response.due_payments_past_45_days = await _dashboardRepository.GetDuePayments(request);
                            break;
                        case dashboard_sections.total_crush_and_core_sales:
                            dashboard_response.total_crush_and_core_sales = await _dashboardRepository.GetCrushAndCoreSales(request);
                            break;
                        case dashboard_sections.available_inventories:
                            dashboard_response.available_inventories = await _dashboardRepository.GetAvailableInventories(request);
                            break;
                        case dashboard_sections.products_average:
                            dashboard_response.products_average = await _dashboardRepository.GetProductsAverage(request);
                            break;
                            //case dashboard_sections.avg_sales_per_vehicle_dismantle:
                            //    dashboard_response.avg_sales_per_vehicle_dismantle = _dashboardRepository.GetAverageSalesPerVehicle(request);
                            //    break;
                    }
                }
                response.Data = dashboard_response;
                response.Success = true;
                response.Message = "Dashboard Retrived Successfully";                ;
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
