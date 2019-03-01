using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Contracts;
using Domains.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EnergyAustraliaApi.Controllers
{
    [Route("api/[controller]")]
    public class CarShowController : ControllerBase
    {
        private ICarShowService _carShowService { get; set; }
        public CarShowController(ICarShowService carShowService)
        {
            _carShowService = carShowService;
        }

        [HttpGet("[action]")]
        public async Task<IList<Make>> GetMakeAsync()
        {
            return await _carShowService.GetCarShows();
        }
    }
}