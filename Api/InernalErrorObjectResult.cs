using Domains.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api
{
    public class InernalErrorObjectResult : ObjectResult
    {
        public InernalErrorObjectResult(Error error)
            : base(error)
        {
            StatusCode = error.StatusCode;
            Message = error.Message;
            Description = error.Description;
        }

        public string Message { get; }

        private string Description { get; }
    }
}
