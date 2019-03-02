using Domains.ViewModels;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api
{
    public class ExceptionHandler : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            var exceptionType = context.Exception.GetType().ToString();
            if (exceptionType.Contains("System.Data.DuplicateNameException"))
            {
                context.Result = new InernalErrorObjectResult(
                new Error { StatusCode = 409, Description = "The request could not be completed because of a conflict", Message = context.Exception.Message });
            }
            else if (exceptionType.Contains("System.Data.DataException"))
            {
                context.Result = new InernalErrorObjectResult(
                new Error { StatusCode = 404, Description = "The reqested Resource is Not Found", Message = context.Exception.Message });
            }
            else if (exceptionType.Contains("System.FormatException"))
            {
                context.Result = new InernalErrorObjectResult(
                new Error { StatusCode = 400, Description = "Bad request", Message = context.Exception.Message });
            }
            else
            {
                context.Result = new InernalErrorObjectResult(
                new Error { StatusCode = 500, Description = "The server encountered an unexpected condition which prevented it from fulfilling the request", Message = context.Exception.Message });
            }
        }
    }
}
