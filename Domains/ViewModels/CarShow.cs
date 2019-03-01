using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.ViewModels
{
    public class CarShow
    {
        public string name { get; set; }
        public IList<Car> cars { get; set; }
    }
}
