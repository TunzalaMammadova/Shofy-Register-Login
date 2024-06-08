using System;
using Microsoft.AspNetCore.Identity;

namespace Shofy_Crud.Models
{
    public class AppUser : IdentityUser
    {
        public string FullName { get; set; }
    }
}

