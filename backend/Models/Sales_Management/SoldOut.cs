using System.Text.Json.Serialization;
using OmniPlanner_API.Models.Attachments;
using OmniPlanner_API.Models.Inventory_Management;
using OmniPlanner_API.ViewModels.Inventory_Management;
using OmniPlanner_API.ViewModels.Sales_Management;

namespace OmniPlanner_API.Models.Sales_Management
{
    public class SoldOutRequest
    {
        public int user_id { get; set; }
        public DateTime? start_date { get; set; }
        public DateTime? end_date { get; set; }
        public int[]? site_ids { get; set; }
    }
    //New Functionality filters, replace from above model/method
    public class SoldOutRequestV2
    {
        public int user_id { get; set; }
        public DateTime? start_date { get; set; }
        public DateTime? end_date { get; set; }
        public int[]? site_ids { get; set; }
        public int? customerType { get; set; }
        public bool? payment_status { get; set; }
        public string[]? po_numbers { get; set; }
        public int[]? package_ids { get; set; }
        public int[]? customer_ids { get; set; }
        public bool is_super_admin { get; set; }
    }
    ////public class SoldOutResponse
    ////{
    ////    public int product_id { get; set; }
    ////    public string product_name { get; set; }
    ////    public int records { get; set; }
    ////    public int total_paid_count { get; set; }
    ////    public int total_not_paid_count { get; set; }
    ////    public decimal total_weight { get; set; }
    ////    public decimal total_quantity { get; set; }
    ////    public decimal total_sold { get; set; }
    ////}

    //New filters
    public class SoldOutResponse
    {
        public int product_id { get; set; }
        public string product_name { get; set; }
        public int records { get; set; }
        public int total_paid_count { get; set; }
        public int total_not_paid_count { get; set; }
        public decimal total_weight { get; set; }
        public decimal total_quantity { get; set; }
        public decimal total_sold { get; set; }
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
    public class SoldOutResponseWithHeader
    {
        public IEnumerable<SoldOutResponse?> data { get; set; }
        public List<string> po_numbers { get; set; }
        [JsonIgnore]
        public string? po_numbers_strigified { get; set; }

    }

    public class FilterBasedSoldOutRequest
    {
        public DateTime? start_date { get; set; }
        public DateTime? end_date { get; set; }
        public int? productId { get; set; }
        public int? customerType { get; set; }
        public int[]? site_ids { get; set; }
        public int[]? customer_ids { get; set; }
        public int[]? package_ids { get; set; }
        public string[]? po_numbers { get; set; }
        public bool? payment_status { get; set; }
        public string? search_word { get; set; }
        public bool is_payment_to_be_verify_response { get; set; } = false;
        public bool is_super_admin { get; set; } = false;

        // For Pagination
        public int page_size { get; set; }
        public int page_number { get; set; }
    }

    public class FilterBasedSoldOutResponseData : InventoryViewModel
    {
        // inventory_sold_data fields
        public string po_number { get; set; }
        public int sold_customer_id { get; set; }
        public int inventory_sold_id { get; set; }
        public int inventory_id { get; set; }
        public string notes { get; set; }
        public DateTime date_leaving_site { get; set; }
        public int quantity_sold { get; set; }
        public float weight_sold { get; set; }
        public float price_per_pound_unit { get; set; } //pounds should be considered as tons, as at the UI level Pound is renamed as Ton
        public string per_pound_or_unit { get; set; } //pounds should be considered as tons, as at the UI level Pound is renamed as Ton
        public float total_sold { get; set; }
        public bool payment_received_at_time_of_sale { get; set; }
        public bool full_payment_received { get; set; }
        public float total_payment_received { get; set; }
        public float total_amount_due { get; set; }
        public int marked_sold_by { get; set; }
        public DateTime marked_sold_on { get; set; }
        public int marked_paid_by { get; set; }
        public DateTime marked_paid_on { get; set; }
        public bool is_revenue_shared { get; set; }
        public int shared_with_site { get; set; }
        public decimal shared_percentage { get; set; }
        public bool payment_verified { get; set; }
        public int payment_verified_by { get; set; }
        public DateTime payment_verified_on { get; set; }
        public string customer_name { get; set; }
        public string marked_sold_by_name { get; set; }
        public string marked_paid_by_name { get; set; }
        public string shared_with_site_code { get; set; }
        public string payment_verified_by_name { get; set; }
        public bool is_write_off { get; set; } = false;
        public string? writeoff_reason { get; set; }
        public int? writeoff_by { get; set; }
        public DateTime? writeoff_date { get; set; }
        public decimal write_off_value { get; set; }
        public decimal discrepancy { get; set; }
        public IEnumerable<PaymentHistoryViewModel?> payment_details { get; set; }
        [JsonIgnore]
        public string AttachmentsJson { get; set; } = string.Empty;
        [JsonIgnore]
        public string PaymentHistoryJson { get; set; } = string.Empty;
        [JsonIgnore]
        public string sub_product_list_strigified { get; set; } = string.Empty;
        public IEnumerable<sub_product_list?> sub_product_list { get; set; }
        public bool is_quick_sale { get; set; }
        public string? shared_site_view {  get; set; }
        [JsonIgnore]
        public string additional_charges_strigified { get; set; } = string.Empty;
        public object additional_charges { get; set; } = new List<object>();
    }

    public class FilterBasedSoldOutResponse
    {
        public IEnumerable<FilterBasedSoldOutResponseData?> data { get; set; } 
        public int total_records { get; set; }
        public int? total_paid_count { get; set; }
        public int? total_not_paid_count { get; set; }
        public decimal total_weight { get; set; }
        public decimal total_quantity { get; set; }
        public decimal total_discrepancy { get; set; }
        public decimal total_write_off { get; set; }
        public List<string>? po_numbers { get; set; }
        [JsonIgnore]
        public string? po_numbers_strigified { get; set; }
    }
    public class LoginData
    {
        public bool? is_super_admin { get; set; }
        public int[]? siteIDs { get; set; }
    }
}
