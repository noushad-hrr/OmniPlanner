using System.Text.Json.Serialization;
using OmniPlanner_API.Models.Sales_Management;
using OmniPlanner_API.ViewModels.Inventory_Management;

namespace OmniPlanner_API.Models.PaymentsAndRecievables
{
    public class OutstandingPaymentsRequest : SoldOutRequest
    {
        public int[]? customer_ids { get; set; }
        public bool? payment_status { get; set; } = false;
    }

    public class OutstandingPaymentsRequestV2 : SoldOutRequestV2
    {
        public int[]? customer_ids { get; set; }
        public bool? payment_status { get; set; } = false;
    }
    public class OutstandingPaymentsResponse
    {
        public int customer_id { get; set; }
        public string customer_name { get; set; }
        public int customer_type { get; set; }
        public int records { get; set; }
        public decimal total_weight { get; set; }
        public decimal total_quantity { get; set; }
        public decimal total_sold { get; set; }
        //public List<string> inventory_ids {  get; set; }
        public List<int> InventoryIds
        {
            get
            {
                if (string.IsNullOrEmpty(inventory_ids_stringify)) return new List<int>();
                return inventory_ids_stringify.Split(',', StringSplitOptions.RemoveEmptyEntries)
                                      .Select(x => Convert.ToInt32(x.Trim()))
                                      .ToList();
            }
        }
        [JsonIgnore]
        public string? inventory_ids_stringify { get; set; }
    }

    public class OutstandingPaymentsResponseHeader
    {
        public IEnumerable<OutstandingPaymentsResponse?> data { get; set; }
        public List<string> po_numbers { get; set; }
        [JsonIgnore]
        public string? po_numbers_strigified { get; set; }
    }

    public class FilterBasedOutstandingPaymentsRequestData : FilterBasedSoldOutRequest
    {
        public int customerId { get; set; }
        public int[]? created_by_ids { get; set; }
    }

    public class FilterBasedOutstandingPaymentsResponse : FilterBasedSoldOutResponse
    {
        public decimal amount_recieved { get; set; }
        public decimal total_sold { get; set; }
        public decimal discrepancy { get; set; }
    }


    public class MarkAsPaid
    {
        public int id { get; set; } = 0;
        public int inventory_id { get; set; } = 0;
        public string? sold_inventories { get; set; }
        public List<MarkAsPaid?>? sold_inventories_json { get; set; }
        public string? payment_details { get; set; }
        public bool full_payment_received { get; set; }
        public decimal total_sold { get; set; } = 0;
        public decimal total_payment_received { get; set; } = 0;
        public decimal total_amount_due { get; set; } = 0;
        public List<IFormFile>? files { get; set; }
        public List<PaymentHistory>? payment_details_json { get; set; }
        public int? marked_paid_by { get; set; }
        public int? payment_verified_by { get; set; }
        public bool is_write_off { get; set; } = false;
        public string? writeoff_reason { get; set; }
        public int? writeoff_by { get; set; }
        public DateTime? writeoff_date { get; set; }
    }


    public class MarkAsPaidV2
    {
        public bool full_payment_received { get; set; }
        public bool is_write_off { get; set; } = false;
        public string? writeoff_reason { get; set; }
        public List<InventoriesByPoNumber> inventories_by_po_numbers { get; set; } 
        public List<string>? files_base64 { get; set; } 
    }

    public class InventoriesByPoNumber { 
        public string po_number { get; set; }
        public List<PaymentHistory> payment_details { get; set; }
        public List<SoldInventory> sold_inventories { get; set; }
        public List<string>? files_base64 { get; set; }
    
    }

    public class SoldInventory
    {
        public int id { get; set; }
        public int inventory_id { get; set; }
        public decimal total_amount_due { get; set; }
        [JsonIgnore]
        public decimal total_payment_received { get; set; } = 0;
        [JsonIgnore]
        public List<PaymentHistory>? payment_details { get; set; }
        [JsonIgnore]
        public bool full_payment_received { get; set; } 
        [JsonIgnore]
        public int marked_paid_by { get; set; } = 0;
        [JsonIgnore]
        public bool is_write_off { get; set; } = false;
        [JsonIgnore]
        public string? writeoff_reason { get; set; }
        [JsonIgnore]
        public int? writeoff_by { get; set; }
        [JsonIgnore]
        public DateTime? writeoff_date { get; set; }
    }
    //public class MultipleInventoryMarkAsPaid //multiple inventories marked as paid at a time
    //{
    //    [JsonPropertyName("inventory_id")]
    //    public int inventory_id { get; set; }

    //    [JsonPropertyName("id")]
    //    public int id { get; set; }
    //}

    public class MarkAsVerify
    {
        public int[] inventory_sold_ids { get; set; }
    }


    public class OutstandingsByPONumberRequest
    {
        public List<string> po_numbers { get; set; }
     }

}
