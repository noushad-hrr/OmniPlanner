using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Dashboard;
using OmniPlanner_API.Models.Sales_Management;
using OmniPlanner_API.Queries.Dashboard;
using OmniPlanner_API.Queries.Master_Data;
using OmniPlanner_API.Repository;
using OmniPlanner_API.ViewModels.Master_Data;
using Dapper;
using DocumentFormat.OpenXml.Office2010.Excel;
using Newtonsoft.Json;
using System.Security.Claims;

namespace OmniPlanner_API.Repository
{
    public class DashboardRepository : IDashboardRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public DashboardRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<AvailableInventories> GetAvailableInventories(DashboardRequest request)
        {
            using (var connection = _context.CreateConnection())
            {
                var response = new AvailableInventories();
                var query = "";
                if (request.view_type == 1)
                {
                    query = "im.origin_site_id";
                }
                else
                {
                    query = "s.region_id";
                }

                response.available_inventories_by_product = await connection.QueryAsync<AvailableInventoriesByProduct>(DashboardQueries.GetAvailableInventoriesByProduct.Replace("{{_query_}}", query), request);
                response.total_available_inventories = await connection.QueryFirstOrDefaultAsync<int>(DashboardQueries.GetTotalAvailableInventories.Replace("{{_query_}}", query), request);

                return response;
            }
        }

        public Task<IEnumerable<AvgSalesPerVehicleDismantle>> GetAverageSalesPerVehicle(DashboardRequest request)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<TotalCrushAndCoreSales>> GetCrushAndCoreSales(DashboardRequest request)
        {
            using (var connection = _context.CreateConnection())
            {
                var query = "";
                if (request.view_type == 1)
                {
                    query = "im.origin_site_id";
                }
                else
                {
                    query = "s.region_id";
                }

                return await connection.QueryAsync<TotalCrushAndCoreSales>(DashboardQueries.GetCrushAndCoreSales.Replace("{{_query_}}", query), request);
            }
        }

        public async Task<IEnumerable<DuePaymentsPast45Days>> GetDuePayments(DashboardRequest request)
        {
            using (var connection = _context.CreateConnection())
            {
                var query = "";
                if (request.view_type == 1)
                {
                    query = "im.origin_site_id";
                }
                else
                {
                    query = "s.region_id";
                }

                return await connection.QueryAsync<DuePaymentsPast45Days>(DashboardQueries.GetDuePast45Days.Replace("{{_query_}}", query), request);
            }
        }

        public async Task<IEnumerable<PaymentsByProduct>> GetPaymentsByProduct(DashboardRequest request)
        {
            using (var connection = _context.CreateConnection())
            {
                var query = "";
                if (request.view_type == 1)
                {
                    query = "im.origin_site_id";
                return await connection.QueryAsync<PaymentsByProduct>(DashboardQueries.GetPaymentsByProductsBySites.Replace("{{_query_}}", query), request);
                }
                else
                {
                    query = "s.region_id";
                return await connection.QueryAsync<PaymentsByProduct>(DashboardQueries.GetPaymentsByProductsByRegions.Replace("{{_query_}}", query), request);
                }


                //var result = CustomisePaymentsByProducts.GenerateCustomisePaymentsByProductData(query_response);

                //return result;
            }
        }

        public async Task<IEnumerable<ProductsAverage>> GetProductsAverage(DashboardRequest request)
        {
            using (var connection = _context.CreateConnection())
            {
                var query = "";
                if (request.view_type == 1)
                {
                    query = "im.origin_site_id";
                }
                else
                {
                    query = "s.region_id";
                }

                var flatData = (await connection.QueryAsync<ProductPriceRow>(DashboardQueries.GetProductsAverage.Replace("{{_query_}}", query), request)).ToList();
                var result = TransformToProductsAverage(flatData);
                return result;
            }
        }

        public List<ProductsAverage> TransformToProductsAverage(List<ProductPriceRow> flatData)
        {
            return flatData
                .GroupBy(x => x.product_name)
                .Select(g => new ProductsAverage
                {
                    product_name = g.Key,
                    per_unit_details = MapDetails(g, "Per Unit"),
                    per_pound_details = MapDetails(g, "Per Pound")
                })
                .ToList();
        }

        private unit_of_measurement_details MapDetails(IEnumerable<ProductPriceRow> group, string unitType)
        {
            var data = group.FirstOrDefault(x => x.per_pound_or_unit == unitType);
            if (data == null) return null;

            return new unit_of_measurement_details
            {
                avg_price_by_site = data.avg_price_by_site,
                max_price_by_site = data.max_price_by_site,
                max_price_site_code = data.max_price_site_code,
                min_price_by_site = data.min_price_by_site,
                min_price_site_code = data.min_price_site_code
            };
        }

        public async Task<Today> GetTodaySectionData(DashboardRequest request)
        {
            using (var connection = _context.CreateConnection())
            {
                var query = "";
                if (request.view_type == 1)
                {
                    query = "im.origin_site_id";
                }
                else
                {
                    query = "s.region_id";
                }

                var result = await connection.QueryFirstOrDefaultAsync<Today>(DashboardQueries.GetTodaySection.Replace("{{_query_}}", query), request);

                return result;
            }
        }
    }
}
