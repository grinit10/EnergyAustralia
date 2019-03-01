using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domains.ViewModels
{
    public class Error
    {
        [JsonProperty("statusCode")]
        public int StatusCode { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }
    }
}
