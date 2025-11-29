using OmniPlanner_API.Models.Master_Data;
using OmniPlanner_API.ViewModels.Master_Data;

namespace OmniPlanner_API.IRepository
{
    public interface ICredentialsMasterRepository
    {
        Task<IEnumerable<CredentialViewModel>> GetCredentials();
        Task<Credential?> GetCredentialById(int id);
        Task<Credential> AddUpdateCredential(Credential request);
        Task<bool> DeleteCredential(int id, bool isHardDelete);
    }
}

