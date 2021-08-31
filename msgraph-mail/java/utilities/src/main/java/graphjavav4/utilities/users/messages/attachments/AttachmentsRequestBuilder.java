package graphjavav4.utilities.users.messages.attachments;

import com.microsoft.kiota.HttpCore;
import com.microsoft.kiota.HttpMethod;
import com.microsoft.kiota.MiddlewareOption;
import com.microsoft.kiota.QueryParametersBase;
import com.microsoft.kiota.RequestInformation;
import com.microsoft.kiota.ResponseHandler;
import com.microsoft.kiota.serialization.SerializationWriter;
import graphjavav4.utilities.users.Attachment;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.function.Function;
import java.util.Map;
import java.util.Objects;
/** Builds and executes requests for operations under /users/{user-id}/messages/{message-id}/attachments  */
public class AttachmentsRequestBuilder {
    /** Current path for the request  */
    private final String currentPath;
    /** The http core service to use to execute the requests.  */
    private final HttpCore httpCore;
    /** Whether the current path is a raw URL  */
    private final boolean isRawUrl;
    /** Path segment to use to build the URL for the current request builder  */
    private final String pathSegment;
    /**
     * Instantiates a new AttachmentsRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @return a void
     */
    public AttachmentsRequestBuilder(@javax.annotation.Nonnull final String currentPath, @javax.annotation.Nonnull final HttpCore httpCore) {
        this(currentPath, httpCore, true);
    }
    /**
     * Instantiates a new AttachmentsRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     * @return a void
     */
    public AttachmentsRequestBuilder(@javax.annotation.Nonnull final String currentPath, @javax.annotation.Nonnull final HttpCore httpCore, final boolean isRawUrl) {
        Objects.requireNonNull(currentPath);
        Objects.requireNonNull(httpCore);
        this.pathSegment = "/attachments";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @return a RequestInformation
     */
    @javax.annotation.Nonnull
    public RequestInformation createGetRequestInformation() throws URISyntaxException {
        return createGetRequestInformation(null, null, null);
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param q Request query parameters
     * @return a RequestInformation
     */
    @javax.annotation.Nonnull
    public RequestInformation createGetRequestInformation(@javax.annotation.Nullable final java.util.function.Consumer<GetQueryParameters> q) throws URISyntaxException {
        return createGetRequestInformation(q, null, null);
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param h Request headers
     * @param q Request query parameters
     * @return a RequestInformation
     */
    @javax.annotation.Nonnull
    public RequestInformation createGetRequestInformation(@javax.annotation.Nullable final java.util.function.Consumer<GetQueryParameters> q, @javax.annotation.Nullable final java.util.function.Consumer<Map<String, String>> h) throws URISyntaxException {
        return createGetRequestInformation(q, h, null);
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @return a RequestInformation
     */
    @javax.annotation.Nonnull
    public RequestInformation createGetRequestInformation(@javax.annotation.Nullable final java.util.function.Consumer<GetQueryParameters> q, @javax.annotation.Nullable final java.util.function.Consumer<Map<String, String>> h, @javax.annotation.Nullable final Collection<MiddlewareOption> o) throws URISyntaxException {
        final RequestInformation requestInfo = new RequestInformation() {{
            this.setUri(currentPath, pathSegment, isRawUrl);
            httpMethod = HttpMethod.GET;
        }};
        if (q != null) {
            final GetQueryParameters qParams = new GetQueryParameters();
            q.accept(qParams);
            qParams.AddQueryParameters(requestInfo.queryParameters);
        }
        if (h != null) {
            h.accept(requestInfo.headers);
        }
        if (o != null) {
            requestInfo.addMiddlewareOptions(o.toArray(new MiddlewareOption[0]));
        }
        return requestInfo;
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param body 
     * @return a RequestInformation
     */
    @javax.annotation.Nonnull
    public RequestInformation createPostRequestInformation(@javax.annotation.Nonnull final Attachment body) throws URISyntaxException {
        return createPostRequestInformation(body, null, null);
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param body 
     * @param h Request headers
     * @return a RequestInformation
     */
    @javax.annotation.Nonnull
    public RequestInformation createPostRequestInformation(@javax.annotation.Nonnull final Attachment body, @javax.annotation.Nullable final java.util.function.Consumer<Map<String, String>> h) throws URISyntaxException {
        return createPostRequestInformation(body, h, null);
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @return a RequestInformation
     */
    @javax.annotation.Nonnull
    public RequestInformation createPostRequestInformation(@javax.annotation.Nonnull final Attachment body, @javax.annotation.Nullable final java.util.function.Consumer<Map<String, String>> h, @javax.annotation.Nullable final Collection<MiddlewareOption> o) throws URISyntaxException {
        Objects.requireNonNull(body);
        final RequestInformation requestInfo = new RequestInformation() {{
            this.setUri(currentPath, pathSegment, isRawUrl);
            httpMethod = HttpMethod.POST;
        }};
        requestInfo.setContentFromParsable(httpCore, "application/json", body);
        if (h != null) {
            h.accept(requestInfo.headers);
        }
        if (o != null) {
            requestInfo.addMiddlewareOptions(o.toArray(new MiddlewareOption[0]));
        }
        return requestInfo;
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @return a CompletableFuture of AttachmentsResponse
     */
    public java.util.concurrent.CompletableFuture<AttachmentsResponse> get() {
        try {
            final RequestInformation requestInfo = createGetRequestInformation(null, null, null);
            return this.httpCore.sendAsync(requestInfo, AttachmentsResponse.class, null);
        } catch (URISyntaxException ex) {
            return java.util.concurrent.CompletableFuture.failedFuture(ex);
        }
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param q Request query parameters
     * @return a CompletableFuture of AttachmentsResponse
     */
    public java.util.concurrent.CompletableFuture<AttachmentsResponse> get(@javax.annotation.Nullable final java.util.function.Consumer<GetQueryParameters> q) {
        try {
            final RequestInformation requestInfo = createGetRequestInformation(q, null, null);
            return this.httpCore.sendAsync(requestInfo, AttachmentsResponse.class, null);
        } catch (URISyntaxException ex) {
            return java.util.concurrent.CompletableFuture.failedFuture(ex);
        }
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param h Request headers
     * @param q Request query parameters
     * @return a CompletableFuture of AttachmentsResponse
     */
    public java.util.concurrent.CompletableFuture<AttachmentsResponse> get(@javax.annotation.Nullable final java.util.function.Consumer<GetQueryParameters> q, @javax.annotation.Nullable final java.util.function.Consumer<Map<String, String>> h) {
        try {
            final RequestInformation requestInfo = createGetRequestInformation(q, h, null);
            return this.httpCore.sendAsync(requestInfo, AttachmentsResponse.class, null);
        } catch (URISyntaxException ex) {
            return java.util.concurrent.CompletableFuture.failedFuture(ex);
        }
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @return a CompletableFuture of AttachmentsResponse
     */
    public java.util.concurrent.CompletableFuture<AttachmentsResponse> get(@javax.annotation.Nullable final java.util.function.Consumer<GetQueryParameters> q, @javax.annotation.Nullable final java.util.function.Consumer<Map<String, String>> h, @javax.annotation.Nullable final Collection<MiddlewareOption> o) {
        try {
            final RequestInformation requestInfo = createGetRequestInformation(q, h, o);
            return this.httpCore.sendAsync(requestInfo, AttachmentsResponse.class, null);
        } catch (URISyntaxException ex) {
            return java.util.concurrent.CompletableFuture.failedFuture(ex);
        }
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @return a CompletableFuture of AttachmentsResponse
     */
    public java.util.concurrent.CompletableFuture<AttachmentsResponse> get(@javax.annotation.Nullable final java.util.function.Consumer<GetQueryParameters> q, @javax.annotation.Nullable final java.util.function.Consumer<Map<String, String>> h, @javax.annotation.Nullable final Collection<MiddlewareOption> o, @javax.annotation.Nullable final ResponseHandler responseHandler) {
        try {
            final RequestInformation requestInfo = createGetRequestInformation(q, h, o);
            return this.httpCore.sendAsync(requestInfo, AttachmentsResponse.class, responseHandler);
        } catch (URISyntaxException ex) {
            return java.util.concurrent.CompletableFuture.failedFuture(ex);
        }
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param body 
     * @return a CompletableFuture of Attachment
     */
    public java.util.concurrent.CompletableFuture<Attachment> post(@javax.annotation.Nonnull final Attachment body) {
        try {
            final RequestInformation requestInfo = createPostRequestInformation(body, null, null);
            return this.httpCore.sendAsync(requestInfo, Attachment.class, null);
        } catch (URISyntaxException ex) {
            return java.util.concurrent.CompletableFuture.failedFuture(ex);
        }
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param body 
     * @param h Request headers
     * @return a CompletableFuture of Attachment
     */
    public java.util.concurrent.CompletableFuture<Attachment> post(@javax.annotation.Nonnull final Attachment body, @javax.annotation.Nullable final java.util.function.Consumer<Map<String, String>> h) {
        try {
            final RequestInformation requestInfo = createPostRequestInformation(body, h, null);
            return this.httpCore.sendAsync(requestInfo, Attachment.class, null);
        } catch (URISyntaxException ex) {
            return java.util.concurrent.CompletableFuture.failedFuture(ex);
        }
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @return a CompletableFuture of Attachment
     */
    public java.util.concurrent.CompletableFuture<Attachment> post(@javax.annotation.Nonnull final Attachment body, @javax.annotation.Nullable final java.util.function.Consumer<Map<String, String>> h, @javax.annotation.Nullable final Collection<MiddlewareOption> o) {
        try {
            final RequestInformation requestInfo = createPostRequestInformation(body, h, o);
            return this.httpCore.sendAsync(requestInfo, Attachment.class, null);
        } catch (URISyntaxException ex) {
            return java.util.concurrent.CompletableFuture.failedFuture(ex);
        }
    }
    /**
     * The fileAttachment and itemAttachment attachments for the message.
     * @param body 
     * @param h Request headers
     * @param o Request options for HTTP middlewares
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @return a CompletableFuture of Attachment
     */
    public java.util.concurrent.CompletableFuture<Attachment> post(@javax.annotation.Nonnull final Attachment body, @javax.annotation.Nullable final java.util.function.Consumer<Map<String, String>> h, @javax.annotation.Nullable final Collection<MiddlewareOption> o, @javax.annotation.Nullable final ResponseHandler responseHandler) {
        Objects.requireNonNull(body);
        try {
            final RequestInformation requestInfo = createPostRequestInformation(body, h, o);
            return this.httpCore.sendAsync(requestInfo, Attachment.class, responseHandler);
        } catch (URISyntaxException ex) {
            return java.util.concurrent.CompletableFuture.failedFuture(ex);
        }
    }
    /** The fileAttachment and itemAttachment attachments for the message.  */
    public class GetQueryParameters extends QueryParametersBase {
        /** Include count of items  */
        @javax.annotation.Nullable
        public Boolean count;
        /** Expand related entities  */
        @javax.annotation.Nullable
        public String[] expand;
        /** Filter items by property values  */
        @javax.annotation.Nullable
        public String filter;
        /** Order items by property values  */
        @javax.annotation.Nullable
        public String[] orderby;
        /** Search items by search phrases  */
        @javax.annotation.Nullable
        public String search;
        /** Select properties to be returned  */
        @javax.annotation.Nullable
        public String[] select;
        /** Skip the first n items  */
        @javax.annotation.Nullable
        public Integer skip;
        /** Show only the first n items  */
        @javax.annotation.Nullable
        public Integer top;
    }
}
