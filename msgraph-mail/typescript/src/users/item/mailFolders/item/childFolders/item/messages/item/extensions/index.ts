/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createExtensionCollectionResponseFromDiscriminatorValue, createExtensionFromDiscriminatorValue, serializeExtension, type Extension, type ExtensionCollectionResponse } from '../../../../../../../../../models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { ExtensionItemRequestBuilderRequestsMetadata, ExtensionItemRequestBuilderUriTemplate, type ExtensionItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestMetadata } from '@microsoft/kiota-abstractions';

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
     * @returns a ExtensionItemRequestBuilder
     */
     byExtensionId(extensionId: string) : ExtensionItemRequestBuilder;
    /**
     * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExtensionCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<ExtensionsRequestBuilderGetQueryParameters> | undefined) : Promise<ExtensionCollectionResponse | undefined>;
    /**
     * Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. The table in the Permissions section lists the resources that support open extensions.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Extension
     * @see {@link https://learn.microsoft.com/graph/api/opentypeextension-post-opentypeextension?view=graph-rest-1.0|Find more info here}
     */
     post(body: Extension, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Extension | undefined>;
    /**
     * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ExtensionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create an open extension (openTypeExtension object) and add custom properties in a new or existing instance of a resource. You can create an open extension in a resource instance and store custom data to it all in the same operation, except for specific resources. The table in the Permissions section lists the resources that support open extensions.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Extension, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get an open extension (openTypeExtension object) identified by name or fully qualified name. The table in the Permissions section lists the resources that support open extensions. The following table lists the three scenarios where you can get an open extension from a supported resource instance.
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
    "byExtensionId": {
        uriTemplate: ExtensionItemRequestBuilderUriTemplate,
        requestsMetadata: ExtensionItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["extension%2Did"],
    },
    "count": {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ExtensionsRequestBuilderRequestsMetadata: Record<string, RequestMetadata> = {
    "get": {
        responseBodyContentType: "application/json",
        errorMappings: {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>,
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createExtensionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ExtensionsRequestBuilderGetQueryParametersMapper,
    },
    "post": {
        responseBodyContentType: "application/json",
        errorMappings: {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>,
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createExtensionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeExtension,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ExtensionsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messages/{message%2Did}/extensions{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */
