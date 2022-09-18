using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PortfolioAPI.Models;
using PortfolioAPI.Services;

namespace PortfolioAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactFormsController : ControllerBase
    {
        private readonly ISendgridEmailService sendgridEmailService;

        public ContactFormsController(
            ISendgridEmailService sendgridEmailService)
        {
            this.sendgridEmailService = sendgridEmailService;
        }

        [HttpPost]
        public async Task<IActionResult> AddContactForm([FromBody] ContactForm contactForm)
        {
            await sendgridEmailService.Send(contactForm);
            return Ok(contactForm);
        }
    }
}
