using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OmniPlanner_API.Models.Sales_Management
{
    [Table("inventory_sold")]
    public class InventorySold : CommonModel
    {
        [Key]
        public int inventory_sold_id { get; set; }
        public int id { get; set; }
        public int inventory_id { get; set; }
        public int customer_id { get; set; }
        public decimal quantity { get; set; }
        public decimal quantity_sold { get; set; }
        public decimal weight_sold { get; set; }
        public decimal price_per_unit { get; set; }
        public decimal price_per_pound_unit { get; set; }
        public decimal total_amount { get; set; }
        public decimal total_sold { get; set; }
        public DateTime sold_date { get; set; } = DateTime.Now;
        public string payment_status { get; set; } = string.Empty;
        public string notes { get; set; } = string.Empty;
        public string po_number { get; set; } = string.Empty;
        public string origin_site_code { get; set; } = string.Empty;
        public string product_name { get; set; } = string.Empty;
        public string per_pound_or_unit { get; set; } = string.Empty;
        public bool payment_verified { get; set; } = false;
        public int? payment_verified_by { get; set; }
        public DateTime? payment_verified_on { get; set; }
        public bool is_revenue_shared { get; set; } = false;
        public decimal? shared_percentage { get; set; }
        public int? shared_with_site { get; set; }
        public bool payment_received_at_time_of_sale { get; set; } = false;
        public string? payment_details_json { get; set; }
        public List<PaymentHistory>? payment_details { get; set; }
        public bool full_payment_received { get; set; } = false;
        public decimal? total_payment_received { get; set; }
        public decimal? total_amount_due { get; set; }
        public bool is_write_off { get; set; } = false;
        public int? writeoff_by { get; set; }
        public DateTime? writeoff_date { get; set; }
        public int? marked_sold_by { get; set; }
        public int? marked_paid_by { get; set; }
        public bool is_active { get; set; } = true;
        public bool is_deleted { get; set; } = false;
        public DateTime created_on { get; set; } = DateTime.Now;
        public int created_by { get; set; }
        public DateTime last_modified_on { get; set; } = DateTime.Now;
        public int last_modified_by { get; set; }
    }

    public class InventorySoldRequest
    {
        public int inventory_id { get; set; }
        public int customer_id { get; set; }
        public decimal quantity { get; set; }
        public decimal quantity_sold { get; set; }
        public decimal weight_sold { get; set; }
        public decimal price_per_unit { get; set; }
        public decimal price_per_pound_unit { get; set; }
        public decimal total_sold { get; set; }
        public string payment_status { get; set; } = string.Empty;
        public string notes { get; set; } = string.Empty;
        public string po_number { get; set; } = string.Empty;
        public string origin_site_code { get; set; } = string.Empty;
        public string product_name { get; set; } = string.Empty;
        public string per_pound_or_unit { get; set; } = string.Empty;
        public DateTime created_on { get; set; } = DateTime.Now;
        public bool is_revenue_shared { get; set; } = false;
        public decimal? shared_percentage { get; set; }
        public int? shared_with_site { get; set; }
        public bool payment_received_at_time_of_sale { get; set; } = false;
        public List<PaymentHistory>? payment_details_json { get; set; }
        public List<PaymentHistory>? payment_details { get; set; }
        public bool full_payment_received { get; set; } = false;
        public decimal? total_payment_received { get; set; }
        public decimal? total_amount_due { get; set; }
        public List<AdditionalPaymenst>? additional_charges { get; set; }
        public List<InventorySoldRequest>? inventories_to_be_sold { get; set; }
        public List<string>? files { get; set; }
        public bool is_quick_sale { get; set; } = false;
        public DateTime date_leaving_site { get; set; } = DateTime.Now;
        public List<string>? files_base64 { get; set; }
    }

    public class InventorySoldUpdateRequest
    {
        public int id { get; set; }
        public int inventory_sold_id { get; set; }
        public decimal quantity { get; set; }
        public decimal price_per_unit { get; set; }
        public string payment_status { get; set; } = string.Empty;
        public string notes { get; set; } = string.Empty;
        public bool is_write_off { get; set; } = false;
        public int? writeoff_by { get; set; }
        public DateTime? writeoff_date { get; set; }
        public int last_modified_by { get; set; }
        public decimal? total_amount_due { get; set; }
        public List<PaymentHistory>? payment_details { get; set; }
        public decimal? total_payment_received { get; set; }
        public string data_modified { get; set; } = string.Empty;
    }

    public class MultipleInventorySold
    {
        public List<InventorySoldRequest> inventory_sold_list { get; set; } = new List<InventorySoldRequest>();
        public decimal total_sold { get; set; }
        public int inventory_id { get; set; }
        public decimal? total_payment_received { get; set; }
        public decimal? total_amount_due { get; set; }
        public bool full_payment_received { get; set; } = false;
        public List<PaymentHistory>? payment_details { get; set; }
        public string? payment_details_json { get; set; }
    }

    public class InventorySoldEditHistory
    {
        public int edit_history_id { get; set; }
        public int inventory_sold_id { get; set; }
        public string field_name { get; set; } = string.Empty;
        public string old_value { get; set; } = string.Empty;
        public string new_value { get; set; } = string.Empty;
        public DateTime edited_on { get; set; } = DateTime.Now;
        public int edited_by { get; set; }
    }

    public class InventroryDataByPONumber
    {
        public string po_number { get; set; } = string.Empty;
        public List<InventorySold> inventory_sold_list { get; set; } = new List<InventorySold>();
        public decimal total_sold { get; set; }
        public string mail { get; set; } = string.Empty;
        public string name { get; set; } = string.Empty;
        public List<SoldData>? SoldDataByPONumber { get; set; }
        public string? soldDataJson { get; set; }
        public decimal total_weights { get; set; }
        public int total_box_count { get; set; }
        public decimal total_quantity { get; set; }
    }

    public class SoldData
    {
        public int id { get; set; }
        public string product_name { get; set; } = string.Empty;
        public decimal quantity { get; set; }
        public decimal quantity_sold { get; set; }
        public decimal weight { get; set; }
        public decimal weight_sold { get; set; }
        public decimal price { get; set; }
        public string origin_site_code { get; set; } = string.Empty;
        public int origin_site_id { get; set; }
        public bool is_revenue_shared { get; set; } = false;
        public decimal? shared_percentage { get; set; }
        public string shared_site_view { get; set; } = string.Empty;
        public string shared_with_site_code { get; set; } = string.Empty;
    }
}
