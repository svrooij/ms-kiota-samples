/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMessageFromDiscriminatorValue, serializeMessage, type Message } from '../../../../models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../models/oDataErrors/';
import { AttachmentsRequestBuilderNavigationMetadata, AttachmentsRequestBuilderRequestsMetadata, AttachmentsRequestBuilderUriTemplate, type AttachmentsRequestBuilder } from './attachments/';
import { ExtensionsRequestBuilderNavigationMetadata, ExtensionsRequestBuilderRequestsMetadata, ExtensionsRequestBuilderUriTemplate, type ExtensionsRequestBuilder } from './extensions/';
import { ContentRequestBuilderRequestsMetadata, ContentRequestBuilderUriTemplate, type ContentRequestBuilder } from './value/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/messages/{message-id}
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
     * Delete a message in the specified user's mailbox, or delete a relationship of the message.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @see {@link https://learn.microsoft.com/graph/api/message-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * The messages in a mailbox or folder. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Message>}
     * @see {@link https://learn.microsoft.com/graph/api/eventmessage-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<MessageItemRequestBuilderGetQueryParameters> | undefined) : Promise<Message | undefined>;
    /**
     * Update the properties of an eventMessage object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Message>}
     * @see {@link https://learn.microsoft.com/graph/api/eventmessage-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: Message, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Message | undefined>;
    /**
     * Delete a message in the specified user's mailbox, or delete a relationship of the message.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The messages in a mailbox or folder. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MessageItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of an eventMessage object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Message, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The messages in a mailbox or folder. Read-only. Nullable.
 */
export interface MessageItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Include Hidden Messages
     */
    includeHiddenMessages?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
}
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
        uriTemplate: AttachmentsRequestBuilderUriTemplate,
        requestsMetadata: AttachmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AttachmentsRequestBuilderNavigationMetadata,
    },
    content: {
        uriTemplate: ContentRequestBuilderUriTemplate,
        requestsMetadata: ContentRequestBuilderRequestsMetadata,
    },
    extensions: {
        uriTemplate: ExtensionsRequestBuilderUriTemplate,
        requestsMetadata: ExtensionsRequestBuilderRequestsMetadata,
        navigationMetadata: ExtensionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MessageItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMessageFromDiscriminatorValue,
        queryParametersMapper: MessageItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMessageFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMessage,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const MessageItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/messages/{message%2Did}{?%24expand,%24select,includeHiddenMessages}";
/* tslint:enable */
/* eslint-enable */
