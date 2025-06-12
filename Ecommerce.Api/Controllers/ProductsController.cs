using Microsoft.AspNetCore.Mvc;
using Ecommerce.Api.Models; // Ensure this using statement is present
using System.Collections.Generic;
using System.Linq;

namespace Ecommerce.Api.Controllers // Ensure this namespace matches your folder structure
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private static readonly List<Product> _products = new List<Product>
        {
            new Product { Id = 1, Name = "Classic T-Shirt", Price = 19.99m, Description = "A comfortable and stylish classic t-shirt.", ImageUrl = "https://via.placeholder.com/300x300.png?text=Classic+T-Shirt" },
            new Product { Id = 2, Name = "Running Shoes", Price = 79.99m, Description = "Lightweight running shoes for optimal performance.", ImageUrl = "https://via.placeholder.com/300x300.png?text=Running+Shoes" },
            new Product { Id = 3, Name = "Bluetooth Headphones", Price = 49.99m, Description = "Wireless Bluetooth headphones with noise cancellation.", ImageUrl = "https://via.placeholder.com/300x300.png?text=Bluetooth+Headphones" },
            new Product { Id = 4, Name = "Coffee Maker", Price = 29.99m, Description = "Drip coffee maker with a 12-cup capacity.", ImageUrl = "https://via.placeholder.com/300x300.png?text=Coffee+Maker" },
            new Product { Id = 5, Name = "Yoga Mat", Price = 24.99m, Description = "Eco-friendly yoga mat for your daily practice.", ImageUrl = "https://via.placeholder.com/300x300.png?text=Yoga+Mat" }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            return Ok(_products);
        }

        // Optional: Add a GET by ID endpoint for future use
        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            var product = _products.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
    }
}
