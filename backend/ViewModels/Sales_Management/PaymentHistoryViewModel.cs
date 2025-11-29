using OmniPlanner_API.Models.Sales_Management;

namespace OmniPlanner_API.ViewModels.Sales_Management
{
    public class PaymentHistoryViewModel : PaymentHistory
    {
        public string mode_of_payment_name { get; set; }
    }
}
