using Microsoft.EntityFrameworkCore;
using Ecommerce.Api.Models; // Assuming Product model is here

namespace Ecommerce.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        // Optionally, you can override OnModelCreating for further configuration
        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     base.OnModelCreating(modelBuilder);
        //     // Example: Configure Product price precision
        //     modelBuilder.Entity<Product>()
        //         .Property(p => p.Price)
        //         .HasColumnType("decimal(18,2)");
        // }
    }
}
