/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createExtensionCollectionResponseFromDiscriminatorValue, createExtensionFromDiscriminatorValue, serializeExtension, type Extension, type ExtensionCollectionResponse } from '../../../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/';
// @ts-ignore
import { ExtensionItemRequestBuilderRequestsMetadata, type ExtensionItemRequestBuilder } from './item/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/extensions
 */
export interface ExtensionsRequestBuilder extends BaseRequestBuilder<ExtensionsRequestBuilder> {
    /**
     * The Count property
     */
    get count(): CountRequestBuilder;
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.item.mailFolders.item.childFolders.item.messages.item.extensions.item collection
     * @param extensionId The unique identifier of extension
     * @returns {ExtensionItemRequestBuilder}
     */
     byExtensionId(extensionId: string) : ExtensionItemRequestBuilder;
    /**
     * The collection of open extensions defined for the message. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ExtensionCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ExtensionsRequestBuilderGetQueryParameters> | undefined) : Promise<ExtensionCollectionResponse | undefined>;
    /**
     * Create new navigation property to extensions for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Extension>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Extension, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Extension | undefined>;
    /**
     * The collection of open extensions defined for the message. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ExtensionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to extensions for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Extension, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of open extensions defined for the message. Nullable.
 */
export interface ExtensionsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const ExtensionsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messages/{message%2Did}/extensions{?%24count,%24expand,%24filter,%24orderby,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ExtensionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ExtensionsRequestBuilderNavigationMetadata: Record<Exclude<keyof ExtensionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byExtensionId: {
        requestsMetadata: ExtensionItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["extension%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ExtensionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ExtensionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createExtensionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ExtensionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ExtensionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createExtensionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeExtension,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
