using Contracts;
using Domains.Enums;
using Domains.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

namespace Services
{
    public class CarShowService : ICarShowService
    {
        private IHelperFacade<CarShow> _helperFacade { get; set; }
        public CarShowService(IHelperFacade<CarShow> helperFacade)
        {
            _helperFacade = helperFacade;
        }
        public async Task<IList<Make>> GetCarShows()
        {
            IList<CarShow> carShows = await _helperFacade.GetAllResponseAsync(EntityTypes.cars);
            IList<Make> makes = new List<Make>();
            if (carShows.Count > 0)
                ConvertResponse(carShows, makes);

            return makes;
        }

        private static void ConvertResponse(IList<CarShow> carShows, IList<Make> makes)
        {
            foreach (var carShow in carShows)
            {
                carShow.name = string.IsNullOrEmpty(carShow.name) ? string.Empty : carShow.name;
                Make make = new Make();
                Show show = new Show { name = carShow.name };
                foreach (var car in carShow.cars)
                {
                    car.model = string.IsNullOrEmpty(car.model) ? string.Empty : car.model;
                    car.make = string.IsNullOrEmpty(car.make) ? string.Empty : car.make;

                    make = makes.Any(m => m.name == car.make) ?
                                makes.First(m => m.name == car.make) :
                                new Make { name = car.make };
                    Model model = make.models.Any(m => m.name == car.model) ?
                                    make.models.First(m => m.name == car.model) :
                                    new Model { name = car.model };
                    model.shows.Add(show);
                    if (!make.models.Any(m => m.name == car.model))
                        make.models.Add(model);
                    if (!makes.Any(m => m.name == make.name))
                        makes.Add(make);
                }
            }
        }
    }
}
