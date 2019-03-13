using Contracts;
using Domains.Enums;
using Domains.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

namespace Services
{
    public class CarShowService : ICarShowService
    {
        private IHelperFacade<CarShow> HelperFacade { get; set; }

        /// <summary>Initializes a new instance of the <see cref="CarShowService"/> class.</summary>
        /// <param name="helperFacade">The helper facade.</param>
        public CarShowService(IHelperFacade<CarShow> helperFacade)
        {
            HelperFacade = helperFacade;
        }

        /// <summary>Gets the car shows.</summary>
        /// <returns></returns>
        public async Task<IList<Make>> GetCarShows()
        {
            var carShows = await HelperFacade.GetAllResponseAsync(EntityTypes.Cars);
            IList<Make> makes = new List<Make>();
            if (carShows.Count > 0)
                ConvertResponse(carShows, makes);

            return makes;
        }

        /// <summary>Converts the response.</summary>
        /// <param name="carShows">The car shows.</param>
        /// <param name="makes">The makes.</param>
        private static void ConvertResponse(IList<CarShow> carShows, IList<Make> makes)
        {
            foreach (var carShow in carShows)
            {
                carShow.Name = string.IsNullOrEmpty(carShow.Name) ? string.Empty : carShow.Name;
                Make make;
                var show = new Show { Name = carShow.Name };
                foreach (var car in carShow.Cars)
                {
                    car.Model = string.IsNullOrEmpty(car.Model) ? string.Empty : car.Model;
                    car.Make = string.IsNullOrEmpty(car.Make) ? string.Empty : car.Make;

                    var car1 = car;
                    make = makes.Any(m => m.Name == car1.Make)
                        ? makes.First(m => m.Name == car.Make)
                        : new Make {Name = car.Make};
                    var model = make.Models.Any(m => m.Name == car.Model)
                        ? make.Models.First(m => m.Name == car.Model)
                        : new Model {Name = car.Model};
                    model.Shows.Add(show);
                    if (make.Models.All(m => m.Name != car.Model))
                        make.Models.Add(model);
                    if (makes.All(m => m.Name != make.Name))
                        makes.Add(make);
                }
            }
        }
    }
}
