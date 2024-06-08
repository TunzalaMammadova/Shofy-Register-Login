using System;
namespace Shofy_Crud.ViewModels.Categories
{
	public class CategoryDetailVM
	{
        public string Name { get; set; }
        public string? Image { get; set; }
        public bool SoftDeleted { get; set; }
    }
}

