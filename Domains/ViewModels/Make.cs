using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.ViewModels
{
    public class Make
    {
        public Make()
        {
            models = new List<Model>();
        }
        public string name { get; set; }
        public IList<Model> models { get; set; }
    }
}
