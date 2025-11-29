using OmniPlanner_API.Models.Sales_Management;
using OmniPlanner_API.Models.System;

namespace OmniPlanner_API.IRepository
{
    public interface IEmailNotificationRepository
    {
        Task<IEnumerable<Email_Templates>> GetEmailNotifications();
        Task<Email_Templates?> GetEmailNotificationById(int id);
        Task<Email_Templates> AddUpdateEmailNotification(Email_Templates request);
        Task<bool> DeleteEmailNotification(int id, bool isHardDelete);
        Task<bool> SendMailForDuePayments();
        Task<bool> SendMailForZeroWeight();
        Task<bool> SendMailToCustomerOrInternal(InventroryDataByPONumber request);
    }
}
