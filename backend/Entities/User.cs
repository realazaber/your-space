using Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure;

namespace backend.Entities
{
    public class User
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }
    }
}