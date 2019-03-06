using System;
using Domains.Enums;
using Domains.ViewModels;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Contracts
{
    public interface IHelperFacade<T> where T: class
    {
        Task<IList<T>> GetAllResponseAsync(EntityTypes entityType);
    }
}
