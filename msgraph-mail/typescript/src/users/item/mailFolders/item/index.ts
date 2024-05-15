/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMailFolderFromDiscriminatorValue, serializeMailFolder, type MailFolder } from '../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../models/oDataErrors/';
// @ts-ignore
import { ChildFoldersRequestBuilderNavigationMetadata, ChildFoldersRequestBuilderRequestsMetadata, type ChildFoldersRequestBuilder } from './childFolders/';
// @ts-ignore
import { MessageRulesRequestBuilderNavigationMetadata, MessageRulesRequestBuilderRequestsMetadata, type MessageRulesRequestBuilder } from './messageRules/';
// @ts-ignore
import { MessagesRequestBuilderNavigationMetadata, MessagesRequestBuilderRequestsMetadata, type MessagesRequestBuilder } from './messages/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}
 */
export interface MailFolderItemRequestBuilder extends BaseRequestBuilder<MailFolderItemRequestBuilder> {
    /**
     * The childFolders property
     */
    get childFolders(): ChildFoldersRequestBuilder;
    /**
     * The messageRules property
     */
    get messageRules(): MessageRulesRequestBuilder;
    /**
     * The messages property
     */
    get messages(): MessagesRequestBuilder;
    /**
     * Delete navigation property mailFolders for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * The user's mail folders. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MailFolder>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<MailFolderItemRequestBuilderGetQueryParameters> | undefined) : Promise<MailFolder | undefined>;
    /**
     * Update the navigation property mailFolders in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MailFolder>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: MailFolder, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MailFolder | undefined>;
    /**
     * Delete navigation property mailFolders for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The user's mail folders. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MailFolderItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property mailFolders in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: MailFolder, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The user's mail folders. Read-only. Nullable.
 */
export interface MailFolderItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Include Hidden Folders
     */
    includeHiddenFolders?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const MailFolderItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}{?%24expand,%24select,includeHiddenFolders}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MailFolderItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MailFolderItemRequestBuilderNavigationMetadata: Record<Exclude<keyof MailFolderItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    childFolders: {
        requestsMetadata: ChildFoldersRequestBuilderRequestsMetadata,
        navigationMetadata: ChildFoldersRequestBuilderNavigationMetadata,
    },
    messageRules: {
        requestsMetadata: MessageRulesRequestBuilderRequestsMetadata,
        navigationMetadata: MessageRulesRequestBuilderNavigationMetadata,
    },
    messages: {
        requestsMetadata: MessagesRequestBuilderRequestsMetadata,
        navigationMetadata: MessagesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MailFolderItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: MailFolderItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
    },
    get: {
        uriTemplate: MailFolderItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMailFolderFromDiscriminatorValue,
        queryParametersMapper: MailFolderItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: MailFolderItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMailFolderFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMailFolder,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
