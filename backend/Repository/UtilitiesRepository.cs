using OmniPlanner_API.IRepository;
using OmniPlanner_API.Models.System;
//using MailKit.Security;
using Microsoft.Extensions.Options;
//using MimeKit;

namespace OmniPlanner_API.Repository
{
    public class UtilitiesRepository : IUtilitiesRepository
    {
        private readonly MailSettings _mailSettings;
        public UtilitiesRepository(IOptions<MailSettings> mailSettings)
        {
            _mailSettings = mailSettings.Value;
        }
        //public bool SendEmailAsync(Email_Templates mailRequest, List<string> sendTo, List<IFormFile>? attachments)
        //{
        //    var email = new MimeMessage();
           
        //    foreach (var mailTo in sendTo)
        //    {
        //        email.To.Add(MailboxAddress.Parse(mailTo));
        //    }
        //    email.From.Add(new MailboxAddress(_mailSettings.DisplayName, _mailSettings.Mail));
        //    if (mailRequest.copy_to != null && mailRequest.copy_to.Split(",").Any())
        //        foreach (var mail in mailRequest.copy_to.Split(","))
        //        {
        //            email.Cc.Add(MailboxAddress.Parse(mail));

        //        }
        //    email.Subject = mailRequest.email_subject;

        //    var builder = new BodyBuilder();
        //    //For attechment
        //    byte[] fileBytes;
        //    if (attachments != null && attachments.Any())
        //        foreach (var file in attachments)
        //        {
        //            if (file.Length > 0)
        //            {
        //                using (var ms = new MemoryStream())
        //                {
        //                    file.CopyTo(ms);
        //                    fileBytes = ms.ToArray();
        //                }
        //                builder.Attachments.Add(file.FileName, fileBytes, ContentType.Parse(file.ContentType));
        //            }
        //        }
        //    //end code for attachment
        //    builder.HtmlBody = mailRequest.email_body;
        //    email.Body = builder.ToMessageBody();

        //    using var smtp = new MailKit.Net.Smtp.SmtpClient(); // Ensure you use MailKit's SmtpClient
        //    smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.SslOnConnect);
        //    smtp.Authenticate(_mailSettings.UserName, _mailSettings.Password);
        //    smtp.Send(email);
        //    smtp.Disconnect(true);
        //    return true;
        //}
    }
}
