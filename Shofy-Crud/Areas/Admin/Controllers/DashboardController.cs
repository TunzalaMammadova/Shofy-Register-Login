using System;
using Microsoft.AspNetCore.Mvc;

namespace Shofy_Crud.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class DashboardController : Controller
	{
        public IActionResult Index()
        {
            return View();
        }
    }
}

