using System.ComponentModel.DataAnnotations;

namespace PortfolioAPI.Models
{
    public class ContactForm
    {
        [Required]
        [StringLength(maximumLength: 50, MinimumLength = 5)]
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        [StringLength(maximumLength: 50, MinimumLength = 5)]
        public string Email { get; set; }
        [Required]
        [StringLength(maximumLength: 150, MinimumLength = 10)]
        public string Message { get; set; }
    }
}
