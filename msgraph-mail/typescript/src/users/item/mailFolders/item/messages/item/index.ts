/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMessageFromDiscriminatorValue, serializeMessage, type Message } from '../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../models/oDataErrors/';
// @ts-ignore
import { AttachmentsRequestBuilderNavigationMetadata, AttachmentsRequestBuilderRequestsMetadata, type AttachmentsRequestBuilder } from './attachments/';
// @ts-ignore
import { ExtensionsRequestBuilderNavigationMetadata, ExtensionsRequestBuilderRequestsMetadata, type ExtensionsRequestBuilder } from './extensions/';
// @ts-ignore
import { ContentRequestBuilderRequestsMetadata, type ContentRequestBuilder } from './value/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}
 */
export interface MessageItemRequestBuilder extends BaseRequestBuilder<MessageItemRequestBuilder> {
    /**
     * The attachments property
     */
    get attachments(): AttachmentsRequestBuilder;
    /**
     * The Content property
     */
    get content(): ContentRequestBuilder;
    /**
     * The extensions property
     */
    get extensions(): ExtensionsRequestBuilder;
    /**
     * Delete navigation property messages for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * The collection of messages in the mailFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Message>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<MessageItemRequestBuilderGetQueryParameters> | undefined) : Promise<Message | undefined>;
    /**
     * Update the navigation property messages in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Message>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: Message, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Message | undefined>;
    /**
     * Delete navigation property messages for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The collection of messages in the mailFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MessageItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property messages in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Message, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of messages in the mailFolder.
 */
export interface MessageItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const MessageItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/messages/{message%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MessageItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MessageItemRequestBuilderNavigationMetadata: Record<Exclude<keyof MessageItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    attachments: {
        requestsMetadata: AttachmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AttachmentsRequestBuilderNavigationMetadata,
    },
    content: {
        requestsMetadata: ContentRequestBuilderRequestsMetadata,
    },
    extensions: {
        requestsMetadata: ExtensionsRequestBuilderRequestsMetadata,
        navigationMetadata: ExtensionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MessageItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: MessageItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
    },
    get: {
        uriTemplate: MessageItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMessageFromDiscriminatorValue,
        queryParametersMapper: MessageItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: MessageItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMessageFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMessage,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
