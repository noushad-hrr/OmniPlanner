using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.Sales_Management;
using OmniPlanner_API.Models.System;
using OmniPlanner_API.Queries.System;
using Dapper;
using Microsoft.Extensions.Options;
using System.Security.Claims;
using System.Text;
namespace OmniPlanner_API.Repository
{
    public class EmailNotificationRepository : IEmailNotificationRepository
    {
        private readonly DapperContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private string UserID;
        private readonly IUtilitiesRepository _utiles;
        private readonly MailSettings _mailSettings;
        public EmailNotificationRepository(DapperContext context, IHttpContextAccessor httpContextAccessor, IUtilitiesRepository utiles, IOptions<MailSettings> mailSettings)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
            GetUserId();
            _utiles = utiles;
            _mailSettings = mailSettings.Value;
        }
        private void GetUserId()
        {
            if (_httpContextAccessor.HttpContext == null)
                UserID = null;
            var claimsIdentity = _httpContextAccessor.HttpContext.User.Identity as ClaimsIdentity;
            UserID = claimsIdentity.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }

        public async Task<IEnumerable<Email_Templates>> GetEmailNotifications()
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryAsync<Email_Templates>(EmailTemplateQueries.GetAll);
            }
        }

        public async Task<Email_Templates?> GetEmailNotificationById(int id)
        {
            using (var connection = _context.CreateConnection())
            {
                return await connection.QueryFirstOrDefaultAsync<Email_Templates>(EmailTemplateQueries.GetById, new { id });
            }
        }
        public async Task<Email_Templates> AddUpdateEmailNotification(Email_Templates request)
        {
            using (var connection = _context.CreateConnection())
            {
                request.created_by = Convert.ToInt32(UserID);
                request.last_modified_by = Convert.ToInt32(UserID);
                if (request.id == 0)
                {
                    request.id = await connection.ExecuteScalarAsync<int>(EmailTemplateQueries.Insert, request);
                }
                else
                {
                    await connection.ExecuteAsync(EmailTemplateQueries.Update, request);
                }
            }
            return request;
        }

        public async Task<bool> DeleteEmailNotification(int id, bool isHardDelete)
        {
            using (var connection = _context.CreateConnection())
            {
                if (isHardDelete)
                {
                    await connection.ExecuteAsync(EmailTemplateQueries.Delete, new { Id = id });
                }
                else
                {
                    await connection.ExecuteAsync(EmailTemplateQueries.SoftDelete, new { Id = id });
                }
                return true;
            }
        }
        // send mail for due payment after 6 weks of sold.
        public async Task<bool> SendMailForDuePayments()
        {
            using (var connection = _context.CreateConnection())
            {
                IEnumerable<PaymentDue> result = await connection.QueryAsync<PaymentDue>(EmailTemplateQueries.SendMailForDuePayments);
                var emailTemplate = await connection.QueryFirstOrDefaultAsync<Email_Templates>(EmailTemplateQueries.GetByEmailCode, new { emailCode = "EM-DPW-02" });
                foreach (var group in result.GroupBy(data => data.inventory_sold_id))
                {
                    List<string> MailsList = group.Select(item => item.email).Distinct().ToList();
                    var firstItem = group.FirstOrDefault();
                    if (firstItem != null && emailTemplate != null)
                    {
                        bool IsMultipleUser = MailsList.Count > 1 ? true : false;
                        SendAnEmailForMarkAsSold(MailsList, emailTemplate, firstItem, IsMultipleUser);
                    }
                }

                return true;
            }
        }
        // send mail for zero weight after 5 days of sold.
        public async Task<bool> SendMailForZeroWeight()
        {
            using (var connection = _context.CreateConnection())
            {
                IEnumerable<PaymentDue> result = await connection.QueryAsync<PaymentDue>(EmailTemplateQueries.SendMailForZeroWeight);
                var emailTemplate = await connection.QueryFirstOrDefaultAsync<Email_Templates>(EmailTemplateQueries.GetByEmailCode, new { emailCode = "EM-ZERO-03" });
                foreach (var group in result.GroupBy(data => data.inventory_sold_id))
                {
                    List<string> MailsList = group.Select(item => item.email).Distinct().ToList();
                    var firstItem = group.FirstOrDefault();
                    if (firstItem != null && emailTemplate != null)
                    {
                        bool IsMultipleUser = MailsList.Count > 1 ? true : false;
                        SendAnEmailForMarkAsSold(MailsList, emailTemplate, firstItem, IsMultipleUser);
                    }
                }

                return true;
            }
        }
        private void SendAnEmailForMarkAsSold(List<string> emailsToUsers, Email_Templates emailTemplate, PaymentDue inventorySold, bool IsMultipleUse)
        {
            var emailBody = emailTemplate.email_body;
            string greeting = IsMultipleUse ? "<span>Hi Everyone</span>" : $"<span>Hi, </span>{inventorySold.user_name}";
            emailTemplate.email_body = $@"<!DOCTYPE html>
<html>
    <head>
        <meta charset=""utf-8"">
        <meta name=""viewport"" content=""width=device-width"">
        <title>Email Table</title>
    </head>
    <style>
        table {{
            width: 100%;
            border-collapse: collapse;
            font-family: Arial, sans-serif;
        }}
        th, td {{
            padding: 10px;
            border: 1px solid #ccc;
            text-align: left;
        }}
        th {{
            background-color: #f2f2f2;
            font-weight: bold;
        }}
    </style>
    <body>
<p>{greeting}</p>
<p>
{emailBody}
</p>
        <b>Sold Inventory Details</b>
        <table>
            <tr>
                <th>ID#</th>
                <td>{inventorySold.inventory_id}</td>
            </tr>
            <tr>
                <th>Po #</th>
                <td>{inventorySold.po_number}</td>
            </tr>
            <tr>
                <th>Site Code</th>
                <td>{inventorySold.origin_site_id}</td>
            </tr>
            <tr>
                <th>Product</th>
                <td>{inventorySold.product_name}</td>
            </tr>
           
            
            <tr>
                <th>Customer</th>
                <td>{inventorySold.customer_name}</td>
            </tr>
            <tr>
                <th>Date Sold</th>
                <td>{inventorySold.created_on.ToString("MM/dd/yyyyy")}</td>
            </tr>
             <tr>
                <th>Weight Sold</th>
                <td>{inventorySold.weigh_sold}</td>
            </tr>
            <tr>
                <th>Price Received</th>
                <td>{inventorySold.total_payment_received}</td>
            </tr>
            <tr>
                <th>Total $ Value</th>
                <td>{inventorySold.total_sold}</td>
            </tr>
            <tr>
                <th>Total Due Amount</th>
                <td>{inventorySold.total_amount_due}</td>
            </tr>
        </table>
<br>
<p style='margin: 0; padding: 0;font-weight: bold;'>Thanks & Regards</P>
<p style='margin: 0; padding: 0;font-weight: bold;'>{_mailSettings.DisplayName}</p>
    </body>
</html>";
            //_utiles.SendEmailAsync(emailTemplate, emailsToUsers, null);
        }

        public async Task<bool> SendMailToCustomerOrInternal(InventroryDataByPONumber request)
        {
            using (var connection = _context.CreateConnection())
            {
                bool isSendToCustomer;
                Email_Templates emailTemplate = new Email_Templates();
                if (request.total_sold == null)
                {
                    isSendToCustomer = true;
                    emailTemplate = await connection.QueryFirstOrDefaultAsync<Email_Templates>(EmailTemplateQueries.GetByEmailCode, new { emailCode = "EM-CUST-04" });
                }
                else
                {
                    isSendToCustomer = false;
                    emailTemplate = await connection.QueryFirstOrDefaultAsync<Email_Templates>(EmailTemplateQueries.GetByEmailCode, new { emailCode = "EM-SELF-05" });
                }
                if (request.mail != null)
                    SendMailToCustomerOrInt(request, emailTemplate, isSendToCustomer);
                return true;
            }
        }
        private void SendMailToCustomerOrInt(InventroryDataByPONumber MailData, Email_Templates emailTemplate, bool isSendToCustomer)
        {
            List<string> emailsToUsers = new List<string>();
            emailsToUsers.Add(MailData.mail);
            var emailBody = emailTemplate.email_body;
            string totalValueRow = MailData.total_sold != null
    ? $"<tr><th colspan='3'>Total Value</th><td colspan='2'>${MailData.total_sold}</td></tr>"
    : "";
            string greeting = $"<span>Hi, </span>{MailData.name}";
            StringBuilder emailBodyBuilder = new StringBuilder();

            emailBodyBuilder.AppendLine(@"<!DOCTYPE html>
<html>
    <head>
        <meta charset=""utf-8"">
        <meta name=""viewport"" content=""width=device-width"">
        <title>Email Table</title>
    </head>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            font-family: Arial, sans-serif;
        }
        th, td {
            padding: 10px;
            border: 1px solid #ccc;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
    </style>
    <body>");

            emailBodyBuilder.AppendLine($"<p>{greeting}</p>");
            emailBodyBuilder.AppendLine($"<p>{emailBody}</p>");
            emailBodyBuilder.AppendLine("<b>Sold Inventory Details</b>");
            emailBodyBuilder.AppendLine(@"<table>
    <tr>
        <th>Site Id</th>
        <th>Id Number</th>
        <th>Weight</th>
        <th>Unit</th>
        <th>Product Name</th>
    </tr>");
            foreach (var item in MailData.SoldDataByPONumber)
            {
                emailBodyBuilder.AppendLine($@"
        <tr>
            <td>{item.origin_site_code}</td>
            <td>{item.id}</td>
            <td>{item.weight_sold}</td>
            <td>{item.quantity_sold}</td>
            <td>{item.product_name}</td>
        </tr>");
            }
            emailBodyBuilder.AppendLine($@"
<tr>
            <th colspan='3'>Total Weights</th>
            <td colspan='2'>{MailData.total_weights}</td>
        </tr>
        <tr>
            <th colspan='3'>Total Box Count</th>
            <td colspan='2'>#{MailData.total_box_count}</td>
        </tr> 
         <tr>
            <th colspan='3'>Total Quantity</th>
            <td colspan='2'>{MailData.total_quantity}</td>
        </tr>
          {totalValueRow} </table>");

            emailBodyBuilder.AppendLine(@"<br>
<p style='margin: 0; padding: 0;font-weight: bold;'>Thanks & Regards</P>
<p style='margin: 0; padding: 0;font-weight: bold;'>" + _mailSettings.DisplayName + @"</p>
</body>
</html>");

            emailTemplate.email_body = emailBodyBuilder.ToString();
            //_utiles.SendEmailAsync(emailTemplate, emailsToUsers, null);
        }
    }

}
