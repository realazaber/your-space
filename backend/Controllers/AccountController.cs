
using System.Security.Cryptography;
using System.Text;
using backend.Data;
using backend.Data.DTOs;
using backend.Entities;
using backend.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace backend.Controllers
{

    public class AccountController : BaseController
    {
        private readonly DataContext _context;
        private readonly ITokenService _tokenService;

        public AccountController(DataContext context, ITokenService tokenService)
        {
            _tokenService = tokenService;
            this._context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerDTO)
        {
            if (await UserExists(registerDTO.Email))
            {
                return BadRequest("User already exists.");
            }

            using var hmac = new HMACSHA512();

            var user = new User
            {
                Email = registerDTO.Email.ToLower(),
                UserName = registerDTO.UserName.ToLower(),
                firstName = registerDTO.firstName,
                lastName = registerDTO.lastName,
                DOB = registerDTO.DOB,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDTO.Password)),
                PasswordSalt = hmac.Key
            };

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return new UserDTO
            {
                Email = user.Email,
                Username = user.UserName,
                firstName = user.firstName,
                lastName = user.lastName,
                DOB = user.DOB,
                Token = _tokenService.GenerateToken(user)
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO)
        {
            var user = await _context.Users.SingleOrDefaultAsync(user => user.Email == loginDTO.Email);

            if (user == null)
            {
                return Unauthorized("User does not exist.");
            }

            using var hmac = new HMACSHA512(user.PasswordSalt);

            var computeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDTO.Password));

            for (int i = 0; i < computeHash.Length; i++)
            {
                if (computeHash[i] != user.PasswordHash[i])
                {
                    return Unauthorized("Invalid password.");
                }
            }

            return new UserDTO
            {
                Email = user.Email,
                Username = user.UserName,
                firstName = user.firstName,
                lastName = user.lastName,
                DOB = user.DOB,
                Token = _tokenService.GenerateToken(user)
            };
        }

        private async Task<bool> UserExists(string email)
        {
            var user = await _context.Users.FirstOrDefaultAsync(user =>
                 user.Email.ToLower() == email.ToLower());

            return user != null;
        }

    }
}