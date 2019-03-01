using Domains.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EnergyAustraliaApi
{
    public class InernalErrorObjectResult : ObjectResult
    {
        /// <inheritdoc />
        public InernalErrorObjectResult(Error error)
            : base(error)
        {
            StatusCode = error.Id;
            Message = error.Message;
            Description = error.Description;
        }

        public string Message { get; }

        private string Description { get; }
    }
}
