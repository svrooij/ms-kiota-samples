/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAttachmentCollectionResponseFromDiscriminatorValue, createAttachmentFromDiscriminatorValue, serializeAttachment, type Attachment, type AttachmentCollectionResponse } from '../../../../../../../../../models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { AttachmentItemRequestBuilderRequestsMetadata, AttachmentItemRequestBuilderUriTemplate, type AttachmentItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments
 */
export interface AttachmentsRequestBuilder extends BaseRequestBuilder<AttachmentsRequestBuilder> {
    /**
     * The Count property
     */
    get count(): CountRequestBuilder;
    /**
     * Gets an item from the graphtypescriptv4.utilities.users.item.mailFolders.item.childFolders.item.messages.item.attachments.item collection
     * @param attachmentId The unique identifier of attachment
     * @returns a AttachmentItemRequestBuilder
     */
     byAttachmentId(attachmentId: string) : AttachmentItemRequestBuilder;
    /**
     * Retrieve a list of attachment objects attached to a message.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttachmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/message-list-attachments?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AttachmentsRequestBuilderGetQueryParameters> | undefined) : Promise<AttachmentCollectionResponse | undefined>;
    /**
     * Use this API to create a new Attachment. An attachment can be one of the following types: All these types of attachment resources are derived from the attachmentresource.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Attachment
     * @see {@link https://learn.microsoft.com/graph/api/eventmessage-post-attachments?view=graph-rest-1.0|Find more info here}
     */
     post(body: Attachment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Attachment | undefined>;
    /**
     * Retrieve a list of attachment objects attached to a message.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AttachmentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Use this API to create a new Attachment. An attachment can be one of the following types: All these types of attachment resources are derived from the attachmentresource.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Attachment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of attachment objects attached to a message.
 */
export interface AttachmentsRequestBuilderGetQueryParameters {
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
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AttachmentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AttachmentsRequestBuilderNavigationMetadata: Record<Exclude<keyof AttachmentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAttachmentId: {
        uriTemplate: AttachmentItemRequestBuilderUriTemplate,
        requestsMetadata: AttachmentItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["attachment%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AttachmentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAttachmentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AttachmentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAttachmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAttachment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AttachmentsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messages/{message%2Did}/attachments{?%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */
