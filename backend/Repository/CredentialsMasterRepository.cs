using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Queries.Master_Data;
using OmniPlanner_API.ViewModels.Master_Data;
using Dapper;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;

namespace OmniPlanner_API.Repository
{
    public class CredentialsMasterRepository : ICredentialsMasterRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string UserID;

        public CredentialsMasterRepository(DapperContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
            GetUserId();
        }

        private void GetUserId()
        {
            if (_httpContextAccessor.HttpContext == null)
                UserID = null;
            var claimsIdentity = _httpContextAccessor.HttpContext.User.Identity as ClaimsIdentity;
            UserID = claimsIdentity?.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }

        #region Crud Of Credentials

        public async Task<IEnumerable<CredentialViewModel>> GetCredentials()
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<CredentialViewModel>(CredentialsMasterQueries.GetAll);
            }
        }

        public async Task<Credential?> GetCredentialById(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryFirstOrDefaultAsync<Credential>(CredentialsMasterQueries.GetById, new { id });
            }
        }

        public async Task<bool> CredentialExists(string credentialId, string credentialPassword, int excludeId = 0)
        {
            using (var connection = _context.CreateConnection())
            {
                var count = await connection.ExecuteScalarAsync<int>(
                    CredentialsMasterQueries.CheckCredentialExists, 
                    new { credential_id = credentialId, credential_password = credentialPassword, id = excludeId });
                return count > 0;
            }
        }

        public async Task<Credential> AddUpdateCredential(Credential request)
        {
            using (var connection = _context.CreateConnection())
            {
                // Check for duplicate credential based on credential_id and credential_password (excluding deleted records)
                var exists = await CredentialExists(request.credential_id, request.credential_password, request.id);
                if (exists)
                {
                    throw new Exception("Credential with this ID and password combination already exists");
                }

                var userId = string.IsNullOrEmpty(UserID) ? 1 : Convert.ToInt32(UserID);
                request.created_by = userId;
                request.last_modified_by = userId;

                // Ensure additional_fields is valid JSON
                if (string.IsNullOrWhiteSpace(request.additional_fields))
                {
                    request.additional_fields = "{}";
                }

                if (request.id == 0)
                {
                    request.id = await connection.ExecuteScalarAsync<int>(CredentialsMasterQueries.Insert, request);
                }
                else
                {
                    await connection.ExecuteAsync(CredentialsMasterQueries.Update, request);
                }
            }
            return request;
        }

        public async Task<bool> DeleteCredential(int id, bool isHardDelete)
        {
            using (var connection = _context.CreateConnection())
            {
                if (isHardDelete)
                {
                    await connection.ExecuteAsync(CredentialsMasterQueries.Delete, new { Id = id });
                }
                else
                {
                    await connection.ExecuteAsync(CredentialsMasterQueries.SoftDelete, new { Id = id });
                }
                return true;
            }
        }

        #endregion
    }
}

