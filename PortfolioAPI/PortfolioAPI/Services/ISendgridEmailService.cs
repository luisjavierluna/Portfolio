using PortfolioAPI.Models;

namespace PortfolioAPI.Services
{
    public interface ISendgridEmailService
    {
        Task Send(ContactForm contactUser);
    }
}