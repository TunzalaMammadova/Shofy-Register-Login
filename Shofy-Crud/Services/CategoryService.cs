using System;
using Microsoft.EntityFrameworkCore;
using Shofy_Crud.Data;
using Shofy_Crud.Models;
using Shofy_Crud.Services.Interfaces;
using Shofy_Crud.ViewModels;
using Shofy_Crud.ViewModels.CategoryCreateVM;
using Shofy_Crud.ViewModels.CategoryVM;

namespace Shofy_Crud.Services
{
	public class CategoryService : ICategoryService
	{
        private readonly AppDbContext _context;

        public CategoryService(AppDbContext context)
        {
            _context = context;
        }

        public async Task CreateAsync(Category category)
        {
            await _context.Categories.AddAsync(category);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> ExistAsync(string name)
        {
            return await _context.Categories.AnyAsync(m => m.Name.Trim() == name.Trim());
        }

        public async Task<List<Category>> GetAllAsync()
        {
            return await _context.Categories.Where(m => !m.SoftDeleted).ToListAsync();
        }

        public async Task<List<CategoryVM>> GetAllOrderByDescAsync()
        {
            List<Category> categories = await _context.Categories.OrderByDescending(m => m.Id)
                                                                 .ToListAsync();
            return categories.Select(m => new CategoryVM { Id = m.Id, Name = m.Name }).ToList();
        }

        public async Task<Category> GetWithProductAsync(int id)
        {
            return await _context.Categories.Where(m => m.Id == id)
                                            .Include(m => m.Products)
                                            .FirstOrDefaultAsync();
        }

    }
}

