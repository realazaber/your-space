
using System.Security.Cryptography;
using System.Text;
using backend.Data;
using backend.Data.DTOs;
using backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{

    public class AccountController : BaseController
    {
        private readonly DataContext _context;

        public AccountController(DataContext context)
        {
            this._context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(RegisterDTO registerDTO)
        {
            if (await UserExists(registerDTO.UserName, registerDTO.Email))
            {
                return BadRequest("User already exists.");
            }

            using var hmac = new HMACSHA512();

            var user = new User
            {
                UserName = registerDTO.UserName.ToLower(),
                Email = registerDTO.Email.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDTO.Password)),
                PasswordSalt = hmac.Key
            };

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private async Task<bool> UserExists(string userName, string email)
        {
            var user = await _context.Users.FirstOrDefaultAsync(user =>
                user.UserName.ToLower() == userName.ToLower() || user.Email.ToLower() == email.ToLower());

            return user != null;
        }

    }
}