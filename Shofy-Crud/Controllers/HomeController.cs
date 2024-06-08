using System;
using System.Reflection.Metadata;
using System.Xml.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shofy_Crud.Data;
using Shofy_Crud.Models;
using Shofy_Crud.Services.Interfaces;
using Shofy_Crud.ViewModels;

namespace OneToMany_task.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext _context;
        private readonly ICategoryService _categoryService;

        public HomeController(AppDbContext context,
                              ICategoryService categoryService)
        {
            _context = context;
            _categoryService = categoryService;
        }

        public async Task<IActionResult> Index()
        {
            List<Category> categories = await _categoryService.GetAllAsync();


            HomeVM model = new()
            {
                Categories = categories
            };

            return View(model);
        }

    }
}