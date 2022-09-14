using Microsoft.EntityFrameworkCore;
using PortfolioAPI.Models;

namespace PortfolioAPI.Data
{
    public class ContactFormDbContext : DbContext
    {
        public ContactFormDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<ContactForm> ContactForms { get; set; }
    }
}
