using Microsoft.EntityFrameworkCore;
using TheWallServer.Models;

namespace TheWallServer.Data
{
    public class WallContext : DbContext
    {
        public WallContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfiguration config = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();

            string connectionString = config["ConnectionStrings:WallDbConnectionString"];
            optionsBuilder.UseSqlServer(connectionString);
        }
    }
}
