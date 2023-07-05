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
    from .........models.message import Message
    from .attachments.attachments_request_builder import AttachmentsRequestBuilder
    from .extensions.extensions_request_builder import ExtensionsRequestBuilder
    from .multi_value_extended_properties.multi_value_extended_properties_request_builder import MultiValueExtendedPropertiesRequestBuilder
    from .single_value_extended_properties.single_value_extended_properties_request_builder import SingleValueExtendedPropertiesRequestBuilder
    from .value.content_request_builder import ContentRequestBuilder

class MessageItemRequestBuilder(BaseRequestBuilder):
    """
    Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}
    """
    def __init__(self,request_adapter: RequestAdapter, path_parameters: Optional[Union[Dict[str, Any], str]] = None) -> None:
        """
        Instantiates a new MessageItemRequestBuilder and sets the default values.
        Args:
            path_parameters: The raw url or the Url template parameters for the request.
            request_adapter: The request adapter to use to execute the requests.
        """
        super().__init__(request_adapter, "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messages/{message%2Did}{?%24select,%24expand}", path_parameters)
    
    async def delete(self,request_configuration: Optional[MessageItemRequestBuilderDeleteRequestConfiguration] = None) -> None:
        """
        Delete navigation property messages for users
        Args:
            request_configuration: Configuration for the request such as headers, query parameters, and middleware options.
        """
        request_info = self.to_delete_request_information(
            request_configuration
        )
        if not self.request_adapter:
            raise Exception("Http core is null") 
        return await self.request_adapter.send_no_response_content_async(request_info, None)
    
    async def get(self,request_configuration: Optional[MessageItemRequestBuilderGetRequestConfiguration] = None) -> Optional[Message]:
        """
        The collection of messages in the mailFolder.
        Args:
            request_configuration: Configuration for the request such as headers, query parameters, and middleware options.
        Returns: Optional[Message]
        """
        request_info = self.to_get_request_information(
            request_configuration
        )
        if not self.request_adapter:
            raise Exception("Http core is null") 
        from .........models.message import Message

        return await self.request_adapter.send_async(request_info, Message, None)
    
    async def patch(self,body: Optional[Message] = None, request_configuration: Optional[MessageItemRequestBuilderPatchRequestConfiguration] = None) -> None:
        """
        Update the navigation property messages in users
        Args:
            body: The request body
            request_configuration: Configuration for the request such as headers, query parameters, and middleware options.
        """
        if not body:
            raise TypeError("body cannot be null.")
        request_info = self.to_patch_request_information(
            body, request_configuration
        )
        if not self.request_adapter:
            raise Exception("Http core is null") 
        return await self.request_adapter.send_no_response_content_async(request_info, None)
    
    def to_delete_request_information(self,request_configuration: Optional[MessageItemRequestBuilderDeleteRequestConfiguration] = None) -> RequestInformation:
        """
        Delete navigation property messages for users
        Args:
            request_configuration: Configuration for the request such as headers, query parameters, and middleware options.
        Returns: RequestInformation
        """
        request_info = RequestInformation()
        request_info.url_template = self.url_template
        request_info.path_parameters = self.path_parameters
        request_info.http_method = Method.DELETE
        if request_configuration:
            request_info.add_request_headers(request_configuration.headers)
            request_info.add_request_options(request_configuration.options)
        return request_info
    
    def to_get_request_information(self,request_configuration: Optional[MessageItemRequestBuilderGetRequestConfiguration] = None) -> RequestInformation:
        """
        The collection of messages in the mailFolder.
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
    
    def to_patch_request_information(self,body: Optional[Message] = None, request_configuration: Optional[MessageItemRequestBuilderPatchRequestConfiguration] = None) -> RequestInformation:
        """
        Update the navigation property messages in users
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
        request_info.http_method = Method.PATCH
        if request_configuration:
            request_info.add_request_headers(request_configuration.headers)
            request_info.add_request_options(request_configuration.options)
        request_info.set_content_from_parsable(self.request_adapter, "application/json", body)
        return request_info
    
    @property
    def attachments(self) -> AttachmentsRequestBuilder:
        """
        The attachments property
        """
        from .attachments.attachments_request_builder import AttachmentsRequestBuilder

        return AttachmentsRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def content(self) -> ContentRequestBuilder:
        """
        The Content property
        """
        from .value.content_request_builder import ContentRequestBuilder

        return ContentRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def extensions(self) -> ExtensionsRequestBuilder:
        """
        The extensions property
        """
        from .extensions.extensions_request_builder import ExtensionsRequestBuilder

        return ExtensionsRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def multi_value_extended_properties(self) -> MultiValueExtendedPropertiesRequestBuilder:
        """
        The multiValueExtendedProperties property
        """
        from .multi_value_extended_properties.multi_value_extended_properties_request_builder import MultiValueExtendedPropertiesRequestBuilder

        return MultiValueExtendedPropertiesRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def single_value_extended_properties(self) -> SingleValueExtendedPropertiesRequestBuilder:
        """
        The singleValueExtendedProperties property
        """
        from .single_value_extended_properties.single_value_extended_properties_request_builder import SingleValueExtendedPropertiesRequestBuilder

        return SingleValueExtendedPropertiesRequestBuilder(self.request_adapter, self.path_parameters)
    
    @dataclass
    class MessageItemRequestBuilderDeleteRequestConfiguration(BaseRequestConfiguration):
        from kiota_abstractions.base_request_configuration import BaseRequestConfiguration

        """
        Configuration for the request such as headers, query parameters, and middleware options.
        """
    
    @dataclass
    class MessageItemRequestBuilderGetQueryParameters():
        """
        The collection of messages in the mailFolder.
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
            if original_name == "expand":
                return "%24expand"
            if original_name == "select":
                return "%24select"
            return original_name
        
        # Expand related entities
        expand: Optional[List[str]] = None

        # Select properties to be returned
        select: Optional[List[str]] = None

    
    @dataclass
    class MessageItemRequestBuilderGetRequestConfiguration(BaseRequestConfiguration):
        from kiota_abstractions.base_request_configuration import BaseRequestConfiguration

        """
        Configuration for the request such as headers, query parameters, and middleware options.
        """
        # Request query parameters
        query_parameters: Optional[MessageItemRequestBuilder.MessageItemRequestBuilderGetQueryParameters] = None

    
    @dataclass
    class MessageItemRequestBuilderPatchRequestConfiguration(BaseRequestConfiguration):
        from kiota_abstractions.base_request_configuration import BaseRequestConfiguration

        """
        Configuration for the request such as headers, query parameters, and middleware options.
        """
    

