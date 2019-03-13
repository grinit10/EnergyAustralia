using Domains.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Api
{
    public class InernalErrorObjectResult : ObjectResult
    {
        /// <summary>Initializes a new instance of the <see cref="InernalErrorObjectResult"/> class.</summary>
        /// <param name="error">The error.</param>
        public InernalErrorObjectResult(Error error)
            : base(error)
        {
            StatusCode = error.StatusCode;
            Message = error.Message;
        }

        public string Message { get; }
    }
}
