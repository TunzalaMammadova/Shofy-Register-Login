using System;
namespace Shofy_Crud.Models
{
	public class Category : BaseEntity
	{
        public string Name { get; set; }
        public string Image { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}

