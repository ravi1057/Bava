using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Ecommerce.Api.Models;

public class Product
{
    [Key] // Primary Key
    public int Id { get; set; }

    [Required] // Not nullable string
    [StringLength(100)] // Max length
    public string Name { get; set; } = string.Empty;

    [Required]
    [Column(TypeName = "decimal(18,2)")] // Specify SQL column type for price
    public decimal Price { get; set; }

    [StringLength(500)] // Max length for description
    public string Description { get; set; } = string.Empty;

    [StringLength(255)] // Max length for ImageUrl
    public string ImageUrl { get; set; } = string.Empty;
}
