using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.ViewModels
{
    public class Model
    {
        public Model()
        {
            shows = new List<Show>();
        }
        public string name { get; set; }
        public IList<Show> shows { get; set; }
    }
}
