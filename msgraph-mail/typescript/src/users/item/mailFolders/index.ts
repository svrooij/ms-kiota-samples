/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMailFolderCollectionResponseFromDiscriminatorValue, createMailFolderFromDiscriminatorValue, serializeMailFolder, type MailFolder, type MailFolderCollectionResponse } from '../../../models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { MailFolderItemRequestBuilderNavigationMetadata, MailFolderItemRequestBuilderRequestsMetadata, MailFolderItemRequestBuilderUriTemplate, type MailFolderItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders
 */
export interface MailFoldersRequestBuilder extends BaseRequestBuilder<MailFoldersRequestBuilder> {
    /**
     * The Count property
     */
    get count(): CountRequestBuilder;
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.item.mailFolders.item collection
     * @param mailFolderId The unique identifier of mailFolder
     * @returns a MailFolderItemRequestBuilder
     */
     byMailFolderId(mailFolderId: string) : MailFolderItemRequestBuilder;
    /**
     * The user's mail folders. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MailFolderCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/user-list-mailfolders?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<MailFoldersRequestBuilderGetQueryParameters> | undefined) : Promise<MailFolderCollectionResponse | undefined>;
    /**
     * Use this API to create a new mail folder in the root folder of the user's mailbox. If you intend a new folder to be hidden, you must set the isHidden property to true on creation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MailFolder
     * @see {@link https://learn.microsoft.com/graph/api/user-post-mailfolders?view=graph-rest-1.0|Find more info here}
     */
     post(body: MailFolder, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MailFolder | undefined>;
    /**
     * The user's mail folders. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MailFoldersRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Use this API to create a new mail folder in the root folder of the user's mailbox. If you intend a new folder to be hidden, you must set the isHidden property to true on creation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: MailFolder, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The user's mail folders. Read-only. Nullable.
 */
export interface MailFoldersRequestBuilderGetQueryParameters {
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
     * Include Hidden Folders
     */
    includeHiddenFolders?: string;
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
const MailFoldersRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const MailFoldersRequestBuilderNavigationMetadata: Record<Exclude<keyof MailFoldersRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMailFolderId: {
        uriTemplate: MailFolderItemRequestBuilderUriTemplate,
        requestsMetadata: MailFolderItemRequestBuilderRequestsMetadata,
        navigationMetadata: MailFolderItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["mailFolder%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MailFoldersRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMailFolderCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: MailFoldersRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMailFolderFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMailFolder,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const MailFoldersRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders{?includeHiddenFolders,%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */
