/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../../models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions/$count
 */
export interface CountRequestBuilder extends BaseRequestBuilder<CountRequestBuilder> {
    /**
     * Get the number of the resource
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<number>}
     */
     get(requestConfiguration?: RequestConfiguration<CountRequestBuilderGetQueryParameters> | undefined) : Promise<number | undefined>;
    /**
     * Get the number of the resource
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CountRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the number of the resource
 */
export interface CountRequestBuilderGetQueryParameters {
    /**
     * Filter items by property values
     */
    filter?: string;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CountRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "filter": "%24filter",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CountRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "text/plain;q=0.9",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "number",
        queryParametersMapper: CountRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const CountRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messages/{message%2Did}/extensions/$count{?%24filter}";
/* tslint:enable */
/* eslint-enable */
