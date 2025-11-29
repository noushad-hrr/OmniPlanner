using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Queries.Master_Data;
using OmniPlanner_API.ViewModels.Master_Data;
using Dapper;
using DocumentFormat.OpenXml.Drawing;
using System.Security.Claims;
using System.Text.Json;

namespace OmniPlanner_API.Repository
{
    public class SitesRepository : ISitesRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string UserID;
        public SitesRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
            GetRoleId();
        }
        private void GetRoleId()
        {
            if (_httpContextAccessor.HttpContext == null)
                UserID = null;
            var claimsIdentity = _httpContextAccessor.HttpContext.User.Identity as ClaimsIdentity;
            UserID = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }

        #region Crud Of Sites
        public async Task<IEnumerable<SitesViewModel>> GetSites()
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<SitesViewModel>(SiteQueries.GetAll);
            }
        }

        public async Task<Sites?> GetSiteById(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryFirstOrDefaultAsync<Sites>(SiteQueries.GetById, new { id });
            }
        }
        //public async Task<bool> ActiveInActive(int id, bool is_active)
        //{
        //    using (var connection = _context.CreateConnection())
        //    {
        //        await connection.ExecuteAsync(SiteQueries.ActiveInActive, new { id, is_active });
        //        return true;
        //    }
        //}

        public async Task<Sites> AddUpdateSite(Sites request)
        {
            using (var connection = _context.CreateConnection())
            {
                request.created_by = Convert.ToInt32(UserID);
                request.last_modified_by = Convert.ToInt32(UserID);
                if (request.id == 0)
                {
                    request.id = await connection.ExecuteScalarAsync<int>(SiteQueries.Insert, request);
                }
                else
                {
                    //var existing = await GetSiteById(request.id.Value);
                    await connection.ExecuteAsync(SiteQueries.Update, request);
                }
            }
            return request;
        }

        public async Task<bool> DeleteSite(int id, bool isHardDelete)
        {
            using (var connection = _context.CreateConnection())
            {
                if (isHardDelete)
                {
                    await connection.ExecuteAsync(SiteQueries.Delete, new { Id = id });

                }
                else
                {
                    await connection.ExecuteAsync(SiteQueries.SoftDelete, new { Id = id });

                }
                return true;
            }
        }

        #endregion

        #region Crud Of Scrapped Vehicles
        //public async Task<List<ScrappedVehicleEntry>> GetScrappedVehicleEntry(ScrappedVehicleEntryRequest request)
        //{
        //    using (var connection = _context.CreateConnection())
        //    {
        //        return await connection.QueryAsync<ScrappedVehicleEntry>(SiteQueries.GetAll);
        //    }
        //}

        public async Task<List<ScrappedVehicleEntry>> AddUpdateScrappedVehicleEntry(List<ScrappedVehicleEntry> requests)
        {

            using (var connection = _context.CreateConnection())
            {

                //check duplicate entries against site year month - starts
                var duplicates_entry = requests
                                      .GroupBy(x => new { x.site_id, x.year_month.Year, x.year_month.Month })
                                      .Where(g => g.Count() > 1)
                                      .Select(g => (g.Key.site_id, g.Key.Year, g.Key.Month))
                                      .FirstOrDefault();

                if (duplicates_entry == default)
                {
                    var entriesToCheck = string.Join(",\n", requests
                                               .Where(r => r.id == 0)
                                               .Select(r => $"({r.site_id}, {r.year_month.Year}, {r.year_month.Month})"));

                    duplicates_entry = await connection.QueryFirstOrDefaultAsync<(int, int, int)>(SiteQueries.GetDuplicateScrappedVehicleEntry.Replace("{{_entriesToCheck_}}", entriesToCheck).Replace("  ", " "));
                }

                if (duplicates_entry != default)
                {
                    throw new Exception($"Duplicate entry found - Site ID: {duplicates_entry.site_id}, Year-Month: {duplicates_entry.Year}-{duplicates_entry.Month:D2}");
                }
                //check duplicate entries against site year month - ends

                foreach (var request in requests)
                {
                    if (request.id == 0)
                    {
                        request.created_by = Convert.ToInt32(UserID);
                        request.id = await connection.ExecuteScalarAsync<int>(SiteQueries.InsertScrappedVehicleEntry, request);
                    }
                    else
                    {
                        request.last_modified_by = Convert.ToInt32(UserID);
                        await connection.ExecuteAsync(SiteQueries.UpdateScrappedVehicleEntry, request);
                    }
                }
            }
            return requests;
        }

        public async Task<IEnumerable<ScrappedVehicleEntryResponse>> GetScrappedVehicleEntry(ScrappedVehicleEntryRequest request)
        {
            using (var connection = _context.CreateConnection())
            {
                var result = await connection.QueryAsync<ScrappedVehicleEntryResponse>(SiteQueries.GetScrappedVehicleEntry, request);

                //foreach (var res in result)
                //{
                //    if (!string.IsNullOrEmpty(res.monthly_entry_stringified))
                //    {
                //        res.monthly_entry = JsonSerializer.Deserialize<Dictionary<string, int>>(res.monthly_entry_stringified);
                //        res.total_vehicles_scrapped = res.monthly_entry?.Values.Sum() ?? 0;
                //    }

                //}

                return result;
            }
        }

        public static Dictionary<string, int> SafeParseMonthlyEntry(string? json)
        {
            if (string.IsNullOrWhiteSpace(json))
                return new Dictionary<string, int>();

            try
            {
                return JsonSerializer.Deserialize<Dictionary<string, int>>(json) ?? new Dictionary<string, int>();
            }
            catch (JsonException)
            {
                // Log the error if needed
                return new Dictionary<string, int>();
            }
        }

        #endregion
    }
}
