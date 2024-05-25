// <auto-generated/>
using GitHub.ApiClient.Repos.Item.Item;
using Microsoft.Kiota.Abstractions;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System;
namespace GitHub.ApiClient.Repos.Item {
    /// <summary>
    /// Builds and executes requests for operations under \repos\{owner}
    /// </summary>
    public class WithOwnerItemRequestBuilder : BaseRequestBuilder 
    {
        /// <summary>Gets an item from the GitHub.ApiClient.repos.item.item collection</summary>
        /// <param name="position">The repository name</param>
        /// <returns>A <see cref="WithRepoItemRequestBuilder"/></returns>
        public WithRepoItemRequestBuilder this[string position]
        {
            get
            {
                var urlTplParams = new Dictionary<string, object>(PathParameters);
                urlTplParams.Add("repo", position);
                return new WithRepoItemRequestBuilder(urlTplParams, RequestAdapter);
            }
        }
        /// <summary>
        /// Instantiates a new <see cref="WithOwnerItemRequestBuilder"/> and sets the default values.
        /// </summary>
        /// <param name="pathParameters">Path parameters for the request</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public WithOwnerItemRequestBuilder(Dictionary<string, object> pathParameters, IRequestAdapter requestAdapter) : base(requestAdapter, "{+baseurl}/repos/{owner}", pathParameters)
        {
        }
        /// <summary>
        /// Instantiates a new <see cref="WithOwnerItemRequestBuilder"/> and sets the default values.
        /// </summary>
        /// <param name="rawUrl">The raw URL to use for the request builder.</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public WithOwnerItemRequestBuilder(string rawUrl, IRequestAdapter requestAdapter) : base(requestAdapter, "{+baseurl}/repos/{owner}", rawUrl)
        {
        }
    }
}