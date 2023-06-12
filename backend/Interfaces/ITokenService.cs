
using backend.Entities;

namespace backend.Interfaces
{
    public interface ITokenService
    {
        string GenerateToken(User user);
    }
}