from __future__ import annotations
from dataclasses import dataclass, field
from kiota_abstractions.base_request_builder import BaseRequestBuilder
from kiota_abstractions.get_path_parameters import get_path_parameters
from kiota_abstractions.method import Method
from kiota_abstractions.request_adapter import RequestAdapter
from kiota_abstractions.request_information import RequestInformation
from kiota_abstractions.request_option import RequestOption
from kiota_abstractions.response_handler import ResponseHandler
from kiota_abstractions.serialization import Parsable, ParsableFactory
from typing import Any, Callable, Dict, List, Optional, TYPE_CHECKING, Union

if TYPE_CHECKING:
    from ..........models.attachment import Attachment
    from ..........models.attachment_collection_response import AttachmentCollectionResponse
    from .item.attachment_item_request_builder import AttachmentItemRequestBuilder

class AttachmentsRequestBuilder(BaseRequestBuilder):
    """
    Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments
    """
    def __init__(self,request_adapter: RequestAdapter, path_parameters: Optional[Union[Dict[str, Any], str]] = None) -> None:
        """
        Instantiates a new AttachmentsRequestBuilder and sets the default values.
        Args:
            path_parameters: The raw url or the Url template parameters for the request.
            request_adapter: The request adapter to use to execute the requests.
        """
        super().__init__(request_adapter, "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messages/{message%2Did}/attachments{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}", path_parameters)
    
    def by_attachment_id(self,attachment_id: str) -> AttachmentItemRequestBuilder:
        """
        Gets an item from the GraphPythonv1.users.item.mailFolders.item.childFolders.item.messages.item.attachments.item collection
        Args:
            attachment_id: Unique identifier of the item
        Returns: AttachmentItemRequestBuilder
        """
        if not attachment_id:
            raise TypeError("attachment_id cannot be null.")
        from .item.attachment_item_request_builder import AttachmentItemRequestBuilder

        url_tpl_params = get_path_parameters(self.path_parameters)
        url_tpl_params["attachment%2Did"] = attachment_id
        return AttachmentItemRequestBuilder(self.request_adapter, url_tpl_params)
    
    async def get(self,request_configuration: Optional[AttachmentsRequestBuilderGetRequestConfiguration] = None) -> Optional[AttachmentCollectionResponse]:
        """
        The fileAttachment and itemAttachment attachments for the message.
        Args:
            request_configuration: Configuration for the request such as headers, query parameters, and middleware options.
        Returns: Optional[AttachmentCollectionResponse]
        """
        request_info = self.to_get_request_information(
            request_configuration
        )
        if not self.request_adapter:
            raise Exception("Http core is null") 
        from ..........models.attachment_collection_response import AttachmentCollectionResponse

        return await self.request_adapter.send_async(request_info, AttachmentCollectionResponse, None)
    
    async def post(self,body: Optional[Attachment] = None, request_configuration: Optional[AttachmentsRequestBuilderPostRequestConfiguration] = None) -> Optional[Attachment]:
        """
        Create new navigation property to attachments for users
        Args:
            body: The request body
            request_configuration: Configuration for the request such as headers, query parameters, and middleware options.
        Returns: Optional[Attachment]
        """
        if not body:
            raise TypeError("body cannot be null.")
        request_info = self.to_post_request_information(
            body, request_configuration
        )
        if not self.request_adapter:
            raise Exception("Http core is null") 
        from ..........models.attachment import Attachment

        return await self.request_adapter.send_async(request_info, Attachment, None)
    
    def to_get_request_information(self,request_configuration: Optional[AttachmentsRequestBuilderGetRequestConfiguration] = None) -> RequestInformation:
        """
        The fileAttachment and itemAttachment attachments for the message.
        Args:
            request_configuration: Configuration for the request such as headers, query parameters, and middleware options.
        Returns: RequestInformation
        """
        request_info = RequestInformation()
        request_info.url_template = self.url_template
        request_info.path_parameters = self.path_parameters
        request_info.http_method = Method.GET
        request_info.headers["Accept"] = ["application/json"]
        if request_configuration:
            request_info.add_request_headers(request_configuration.headers)
            request_info.set_query_string_parameters_from_raw_object(request_configuration.query_parameters)
            request_info.add_request_options(request_configuration.options)
        return request_info
    
    def to_post_request_information(self,body: Optional[Attachment] = None, request_configuration: Optional[AttachmentsRequestBuilderPostRequestConfiguration] = None) -> RequestInformation:
        """
        Create new navigation property to attachments for users
        Args:
            body: The request body
            request_configuration: Configuration for the request such as headers, query parameters, and middleware options.
        Returns: RequestInformation
        """
        if not body:
            raise TypeError("body cannot be null.")
        request_info = RequestInformation()
        request_info.url_template = self.url_template
        request_info.path_parameters = self.path_parameters
        request_info.http_method = Method.POST
        request_info.headers["Accept"] = ["application/json"]
        if request_configuration:
            request_info.add_request_headers(request_configuration.headers)
            request_info.add_request_options(request_configuration.options)
        request_info.set_content_from_parsable(self.request_adapter, "application/json", body)
        return request_info
    
    @dataclass
    class AttachmentsRequestBuilderGetQueryParameters():
        """
        The fileAttachment and itemAttachment attachments for the message.
        """
        def get_query_parameter(self,original_name: Optional[str] = None) -> str:
            """
            Maps the query parameters names to their encoded names for the URI template parsing.
            Args:
                original_name: The original query parameter name in the class.
            Returns: str
            """
            if not original_name:
                raise TypeError("original_name cannot be null.")
            if original_name == "count":
                return "%24count"
            if original_name == "expand":
                return "%24expand"
            if original_name == "filter":
                return "%24filter"
            if original_name == "orderby":
                return "%24orderby"
            if original_name == "select":
                return "%24select"
            if original_name == "skip":
                return "%24skip"
            if original_name == "top":
                return "%24top"
            return original_name
        
        # Include count of items
        count: Optional[bool] = None

        # Expand related entities
        expand: Optional[List[str]] = None

        # Filter items by property values
        filter: Optional[str] = None

        # Order items by property values
        orderby: Optional[List[str]] = None

        # Select properties to be returned
        select: Optional[List[str]] = None

        # Skip the first n items
        skip: Optional[int] = None

        # Show only the first n items
        top: Optional[int] = None

    
    @dataclass
    class AttachmentsRequestBuilderGetRequestConfiguration(BaseRequestConfiguration):
        from kiota_abstractions.base_request_configuration import BaseRequestConfiguration

        """
        Configuration for the request such as headers, query parameters, and middleware options.
        """
        # Request query parameters
        query_parameters: Optional[AttachmentsRequestBuilder.AttachmentsRequestBuilderGetQueryParameters] = None

    
    @dataclass
    class AttachmentsRequestBuilderPostRequestConfiguration(BaseRequestConfiguration):
        from kiota_abstractions.base_request_configuration import BaseRequestConfiguration

        """
        Configuration for the request such as headers, query parameters, and middleware options.
        """
    

