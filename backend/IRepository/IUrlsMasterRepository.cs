using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.ViewModels.Master_Data;

namespace OmniPlanner_API.IRepository
{
    public interface IUrlsMasterRepository
    {
        Task<IEnumerable<UrlDocViewModel>> GetUrls();
        Task<UrlDoc?> GetUrlById(int id);
        Task<UrlDoc> AddUpdateUrl(UrlDoc request, List<int>? credentialIds = null);
        Task<bool> DeleteUrl(int id, bool isHardDelete);
        
        // Credential mapping methods
        Task<List<CredentialInfo>> GetUrlCredentials(int urlId);
        Task<bool> AddCredentialToUrl(int urlId, int credentialId);
        Task<bool> RemoveCredentialFromUrl(int urlId, int credentialId);
    }
}


