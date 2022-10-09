using System.ComponentModel.DataAnnotations;

namespace PortfolioAPI.Models
{
    public class ContactForm
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        [StringLength(maximumLength: 50, MinimumLength = 5, ErrorMessage = "The field {0} must have a minimum length of {2} and a maximum length of {1}")]
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        [StringLength(maximumLength: 50, MinimumLength = 5, ErrorMessage = "The field {0} must have a minimum length of {2} and a maximum length of {1}")]
        public string Email { get; set; }
        [Required]
        [StringLength(maximumLength: 150, MinimumLength = 10, ErrorMessage = "The field {0} must have a minimum length of {2} and a maximum length of {1}")]
        public string Message { get; set; }
        public DateTime ContactDay { get; set; } = DateTime.Now;
    }
}
