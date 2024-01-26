using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TheWallServer.Data;
using TheWallServer.Models;

namespace TheWallServer.Controllers
{
    [ApiController]
    [Route("posts")]
    public class PostsController : ControllerBase
    {
        private readonly WallContext _context;

        public PostsController(WallContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult GetAllPosts()
        {
            IQueryable<Post> posts = _context.Posts;
            return Ok(posts.ToArray());
        }
    }
}
