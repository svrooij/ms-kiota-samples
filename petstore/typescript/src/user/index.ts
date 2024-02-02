/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { serializeUser, type User } from '../models/';
import { CreateWithArrayRequestBuilderRequestsMetadata, CreateWithArrayRequestBuilderUriTemplate, type CreateWithArrayRequestBuilder } from './createWithArray/';
import { CreateWithListRequestBuilderRequestsMetadata, CreateWithListRequestBuilderUriTemplate, type CreateWithListRequestBuilder } from './createWithList/';
import { type WithUsernameItemRequestBuilder, WithUsernameItemRequestBuilderRequestsMetadata, WithUsernameItemRequestBuilderUriTemplate } from './item/';
import { LoginRequestBuilderRequestsMetadata, LoginRequestBuilderUriTemplate, type LoginRequestBuilder } from './login/';
import { LogoutRequestBuilderRequestsMetadata, LogoutRequestBuilderUriTemplate, type LogoutRequestBuilder } from './logout/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /user
 */
export interface UserRequestBuilder extends BaseRequestBuilder<UserRequestBuilder> {
    /**
     * The createWithArray property
     */
    get createWithArray(): CreateWithArrayRequestBuilder;
    /**
     * The createWithList property
     */
    get createWithList(): CreateWithListRequestBuilder;
    /**
     * The login property
     */
    get login(): LoginRequestBuilder;
    /**
     * The logout property
     */
    get logout(): LogoutRequestBuilder;
    /**
     * Gets an item from the petstore.utilities.user.item collection
     * @param username The name that needs to be fetched. Use user1 for testing. 
     * @returns a WithUsernameItemRequestBuilder
     */
     byUsername(username: string) : WithUsernameItemRequestBuilder;
    /**
     * This can only be done by the logged in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     post(body: User, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * This can only be done by the logged in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: User, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const UserRequestBuilderNavigationMetadata: Record<Exclude<keyof UserRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUsername: {
        uriTemplate: WithUsernameItemRequestBuilderUriTemplate,
        requestsMetadata: WithUsernameItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["username"],
    },
    createWithArray: {
        uriTemplate: CreateWithArrayRequestBuilderUriTemplate,
        requestsMetadata: CreateWithArrayRequestBuilderRequestsMetadata,
    },
    createWithList: {
        uriTemplate: CreateWithListRequestBuilderUriTemplate,
        requestsMetadata: CreateWithListRequestBuilderRequestsMetadata,
    },
    login: {
        uriTemplate: LoginRequestBuilderUriTemplate,
        requestsMetadata: LoginRequestBuilderRequestsMetadata,
    },
    logout: {
        uriTemplate: LogoutRequestBuilderUriTemplate,
        requestsMetadata: LogoutRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json, application/xml",
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUser,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UserRequestBuilderUriTemplate = "{+baseurl}/user";
/* tslint:enable */
/* eslint-enable */
