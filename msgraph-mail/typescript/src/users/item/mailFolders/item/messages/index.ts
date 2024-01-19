/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMessageCollectionResponseFromDiscriminatorValue, createMessageFromDiscriminatorValue, serializeMessage, type Message, type MessageCollectionResponse } from '../../../../../models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { MessageItemRequestBuilderNavigationMetadata, MessageItemRequestBuilderRequestsMetadata, MessageItemRequestBuilderUriTemplate, type MessageItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/messages
 */
export interface MessagesRequestBuilder extends BaseRequestBuilder<MessagesRequestBuilder> {
    /**
     * The Count property
     */
    get count(): CountRequestBuilder;
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.item.mailFolders.item.messages.item collection
     * @param messageId The unique identifier of message
     * @returns a MessageItemRequestBuilder
     */
     byMessageId(messageId: string) : MessageItemRequestBuilder;
    /**
     * Get all the messages in the specified user's mailbox, or those messages in a specified folder in the mailbox.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MessageCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/mailfolder-list-messages?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<MessagesRequestBuilderGetQueryParameters> | undefined) : Promise<MessageCollectionResponse | undefined>;
    /**
     * Use this API to create a new Message in a mailfolder.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Message
     * @see {@link https://learn.microsoft.com/graph/api/mailfolder-post-messages?view=graph-rest-1.0|Find more info here}
     */
     post(body: Message, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Message | undefined>;
    /**
     * Get all the messages in the specified user's mailbox, or those messages in a specified folder in the mailbox.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MessagesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Use this API to create a new Message in a mailfolder.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Message, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get all the messages in the specified user's mailbox, or those messages in a specified folder in the mailbox.
 */
export interface MessagesRequestBuilderGetQueryParameters {
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
     * Search items by search phrases
     */
    search?: string;
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
const MessagesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MessagesRequestBuilderNavigationMetadata: Record<Exclude<keyof MessagesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMessageId: {
        uriTemplate: MessageItemRequestBuilderUriTemplate,
        requestsMetadata: MessageItemRequestBuilderRequestsMetadata,
        navigationMetadata: MessageItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["message%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MessagesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMessageCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: MessagesRequestBuilderGetQueryParametersMapper,
    },
    post: {
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
export const MessagesRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/messages{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */
