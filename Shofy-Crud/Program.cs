using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Shofy_Crud.Data;
using Shofy_Crud.Models;
using Shofy_Crud.Services;
using Shofy_Crud.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);



// Add services to the container.
builder.Services.AddRazorPages();

builder.Services.AddIdentity<AppUser, IdentityRole>().AddEntityFrameworkStores<AppDbContext>()
                                                     .AddDefaultTokenProviders();

builder.Services.Configure<IdentityOptions>(opt =>
{
    opt.Password.RequireDigit = true;
    opt.Password.RequiredUniqueChars = 1;
    opt.Password.RequireNonAlphanumeric = true;
    opt.Password.RequireLowercase = true;
    opt.Password.RequireUppercase = true;
});

builder.Services.AddControllersWithViews();

builder.Services.AddScoped<ICategoryService, CategoryService>();




builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("ShofyDatabase"));
});
var app = builder.Build();

app.UseAuthorization();
app.MapRazorPages();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "areas",
    pattern: "{area:exists}/{controller=Dashboard}/{action=Index}/{id?}"
);

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
);


app.Run();



