using SendGrid.Helpers.Mail;
using SendGrid;
using PortfolioAPI.Models;

namespace PortfolioAPI.Services
{
    public class SendgridEmailService: ISendgridEmailService
    {
        private readonly IConfiguration configuration;

        public SendgridEmailService(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public async Task Send(ContactForm contactUser)
        {
            var apiKey = configuration.GetValue<string>("SENDGRID_API_KEY");
            var email = configuration.GetValue<string>("SENDGRID_FROM");
            var name = configuration.GetValue<string>("SENDGRID_NAME");

            var client = new SendGridClient(apiKey);
            var from = new EmailAddress(email, name);
            var subject = $"User {contactUser.Email} wants to contact you";
            var to = new EmailAddress(email, name);
            var plainTextMessage = contactUser.Message;
            var contentHtml = @$"FROM: {contactUser.Name} - 
                Email: {contactUser.Email}
                Message: {contactUser.Message}";
            var singleEmail = MailHelper.CreateSingleEmail(from, to, subject,
                plainTextMessage, contentHtml);
            var response = await client.SendEmailAsync(singleEmail);
        }
    }
}
