using System;
using Domains.Enums;
using Domains.ViewModels;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Contracts
{
    public interface IHelperFacade
    {
        Task<IList<CarShow>> GetAllResponseAsync(EntityTypes entityType);
    }
}
