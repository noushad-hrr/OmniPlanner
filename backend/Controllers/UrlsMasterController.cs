using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.Queries;
using OmniPlanner_API.ViewModels;
using OmniPlanner_API.ViewModels.Master_Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace OmniPlanner_API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    //[Authorize]
    public class UrlsMasterController : ControllerBase
    {
        private readonly IUrlsMasterRepository _urlsRepository;

        public UrlsMasterController(IUrlsMasterRepository urlsRepository)
        {
            _urlsRepository = urlsRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUrls()
        {
            var response = new ServiceResponse<IEnumerable<UrlDocViewModel>>();
            try
            {
                //Thread.Sleep(8000);
                response.Data = await _urlsRepository.GetUrls();
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
        public async Task<IActionResult> GetUrlById(int id)
        {
            var response = new ServiceResponse<UrlDoc>();
            try
            {
                response.Data = await _urlsRepository.GetUrlById(id);
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
        public async Task<IActionResult> AddUpdateUrl([FromBody] object request)
        {
            var response = new ServiceResponse<UrlDoc>();
            try
            {
                UrlDoc urlDoc;
                List<int>? credentialIds = null;

                // Configure JSON options - properties are already camelCase in the model
                var jsonOptions = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                    // Don't set PropertyNamingPolicy since properties are already camelCase
                };

                // Parse the request using JsonDocument to preserve structure
                JsonDocument jsonDoc;
                try
                {
                    var jsonString = System.Text.Json.JsonSerializer.Serialize(request);
                    jsonDoc = JsonDocument.Parse(jsonString);
                }
                catch (Exception ex)
                {
                    throw new Exception($"Failed to parse request: {ex.Message}");
                }

                // Check if request has urlDoc property (new format with credentials)
                if (jsonDoc.RootElement.TryGetProperty("urlDoc", out JsonElement urlDocElement))
                {
                    // New format: UrlDocRequest
                    // Convert JsonElement to string and deserialize
                    var urlDocJson = urlDocElement.GetRawText();
                    urlDoc = JsonSerializer.Deserialize<UrlDoc>(urlDocJson, jsonOptions);
                    
                    // Extract credentialIds if present
                    if (jsonDoc.RootElement.TryGetProperty("credentialIds", out JsonElement credentialIdsElement))
                    {
                        if (credentialIdsElement.ValueKind == JsonValueKind.Array)
                        {
                            credentialIds = JsonSerializer.Deserialize<List<int>>(credentialIdsElement.GetRawText(), jsonOptions);
                        }
                    }
                }
                else
                {
                    // Old format: Direct UrlDoc (backward compatibility)
                    var jsonString = jsonDoc.RootElement.GetRawText();
                    urlDoc = JsonSerializer.Deserialize<UrlDoc>(jsonString, jsonOptions);
                }

                // Ensure id is properly converted (handle string to int conversion)
                if (urlDoc != null && jsonDoc.RootElement.TryGetProperty("urlDoc", out JsonElement urlDocCheck))
                {
                    if (urlDocCheck.TryGetProperty("id", out JsonElement idElement))
                    {
                        if (idElement.ValueKind == JsonValueKind.String)
                        {
                            if (int.TryParse(idElement.GetString(), out int parsedId))
                            {
                                urlDoc.id = parsedId;
                            }
                        }
                        else if (idElement.ValueKind == JsonValueKind.Number)
                        {
                            urlDoc.id = idElement.GetInt32();
                        }
                    }
                }
                else if (urlDoc != null && jsonDoc.RootElement.TryGetProperty("id", out JsonElement rootIdElement))
                {
                    if (rootIdElement.ValueKind == JsonValueKind.String)
                    {
                        if (int.TryParse(rootIdElement.GetString(), out int parsedId))
                        {
                            urlDoc.id = parsedId;
                        }
                    }
                    else if (rootIdElement.ValueKind == JsonValueKind.Number)
                    {
                        urlDoc.id = rootIdElement.GetInt32();
                    }
                }

                if (urlDoc == null)
                    throw new Exception("Invalid request format");

                if (string.IsNullOrWhiteSpace(urlDoc.label))
                    throw new Exception("Label is required");
                if (string.IsNullOrWhiteSpace(urlDoc.url))
                    throw new Exception("URL is required");
                if (!urlDoc.category_id.HasValue || urlDoc.category_id.Value == 0)
                    throw new Exception("Category is required");

                response.Data = await _urlsRepository.AddUpdateUrl(urlDoc, credentialIds);
                if (response.Data == null)
                    throw new Exception(CommonMessages.UnableToCreate);

                response.Message = urlDoc.id == 0 ? "URL/DOC created successfully" : "URL/DOC updated successfully";
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

        [HttpDelete("{id}/{isHardDelete}")]
        public async Task<IActionResult> DeleteUrl(int id, bool isHardDelete)
        {
            var response = new ServiceResponse<bool>();
            try
            {
                response.Data = await _urlsRepository.DeleteUrl(id, isHardDelete);
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

        [HttpGet("{urlId}/credentials")]
        public async Task<IActionResult> GetUrlCredentials(int urlId)
        {
            var response = new ServiceResponse<List<CredentialInfo>>();
            try
            {
                response.Data = await _urlsRepository.GetUrlCredentials(urlId);
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


