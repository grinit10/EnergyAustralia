using System;
using Contracts;
using Domains.Enums;
using Newtonsoft.Json;
using System.Net.Http;
using Domains.ViewModels;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Facade
{
    public class HelperFacade: IHelperFacade
    {
        public async Task<IList<CarShow>> GetAllResponseAsync(EntityTypes entityType)
        {
            switch (entityType)
            {
                case EntityTypes.cars:
                    return await GetShows(EntityTypes.cars.ToString());
                default:
                    return null;
            }
        }

        private static async Task<IList<CarShow>> GetShows(string entity)
        {
            using (var client = new HttpClient())
            {
                var url = new Uri($"http://eacodingtest.digital.energyaustralia.com.au/api/v1/" + EntityTypes.cars.ToString());
                var response = await client.GetAsync(url);
                string json;
                using (var content = response.Content)
                {
                    json = await content.ReadAsStringAsync();
                }
                return JsonConvert.DeserializeObject<IList<CarShow>>(json);
            }
        }
    }
}
