using backend.Data;
using backend.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly DataContext dbContext;

        public UsersController(DataContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> GetUsers() 
        {
            return dbContext.Users.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<User> GetUser(int id) 
        {
            return dbContext.Users.Find(id);
            
        }
    }
}