using System;
using Shofy_Crud.Models;
using Shofy_Crud.ViewModels;
using Shofy_Crud.ViewModels.CategoryCreateVM;
using Shofy_Crud.ViewModels.CategoryVM;

namespace Shofy_Crud.Services.Interfaces
{
	public interface ICategoryService
	{
        Task<List<Category>> GetAllAsync();
        Task CreateAsync(Category category);
        Task<List<CategoryVM>> GetAllOrderByDescAsync();
        Task<bool> ExistAsync(string name);
        Task<Category> GetWithProductAsync(int id);
    }
}

