using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PortfolioAPI.Data;
using PortfolioAPI.Models;

namespace PortfolioAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactFormsController : ControllerBase
    {
        private readonly ContactFormDbContext contactFormDbContext;

        public ContactFormsController(ContactFormDbContext contactFormDbContext)
        {
            this.contactFormDbContext = contactFormDbContext;
        }

        [HttpPost]
        public async Task<IActionResult> AddContactForm([FromBody] ContactForm contactForm)
        {
            contactForm.Id = Guid.NewGuid();
            contactForm.ContactDay = DateTime.Now;
            await contactFormDbContext.ContactForms.AddAsync(contactForm);
            await contactFormDbContext.SaveChangesAsync();
            return Ok(contactForm);
        }
    }
}
