
using System.ComponentModel.DataAnnotations;

namespace backend.Data.DTOs
{
    public class RegisterDTO
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string firstName { get; set; }

        [Required]
        public string lastName { get; set; }

        [Required]
        public DateTime DOB { get; set; }

        [Required]
        public string Password { get; set; }
    }
}