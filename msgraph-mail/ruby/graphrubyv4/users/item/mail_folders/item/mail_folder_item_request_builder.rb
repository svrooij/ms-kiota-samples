require 'microsoft_kiota_abstractions'
require_relative '../../../../graphrubyv4'
require_relative '../../../../models/mail_folder'
require_relative '../../../users'
require_relative '../../item'
require_relative '../mail_folders'
require_relative './child_folders/child_folders_request_builder'
require_relative './child_folders/item/mail_folder_item_request_builder'
require_relative './item'
require_relative './message_rules/item/message_rule_item_request_builder'
require_relative './message_rules/message_rules_request_builder'
require_relative './messages/item/message_item_request_builder'
require_relative './messages/messages_request_builder'
require_relative './multi_value_extended_properties/item/multi_value_legacy_extended_property_item_request_builder'
require_relative './multi_value_extended_properties/multi_value_extended_properties_request_builder'
require_relative './single_value_extended_properties/item/single_value_legacy_extended_property_item_request_builder'
require_relative './single_value_extended_properties/single_value_extended_properties_request_builder'

module Graphrubyv4
    module Users
        module Item
            module MailFolders
                module Item
                    ## 
                    # Builds and executes requests for operations under \users\{user-id}\mailFolders\{mailFolder-id}
                    class MailFolderItemRequestBuilder < MicrosoftKiotaAbstractions::BaseRequestBuilder
                        
                        ## 
                        # The childFolders property
                        def child_folders()
                            return Graphrubyv4::Users::Item::MailFolders::Item::ChildFolders::ChildFoldersRequestBuilder.new(@path_parameters, @request_adapter)
                        end
                        ## 
                        # The messageRules property
                        def message_rules()
                            return Graphrubyv4::Users::Item::MailFolders::Item::MessageRules::MessageRulesRequestBuilder.new(@path_parameters, @request_adapter)
                        end
                        ## 
                        # The messages property
                        def messages()
                            return Graphrubyv4::Users::Item::MailFolders::Item::Messages::MessagesRequestBuilder.new(@path_parameters, @request_adapter)
                        end
                        ## 
                        # The multiValueExtendedProperties property
                        def multi_value_extended_properties()
                            return Graphrubyv4::Users::Item::MailFolders::Item::MultiValueExtendedProperties::MultiValueExtendedPropertiesRequestBuilder.new(@path_parameters, @request_adapter)
                        end
                        ## 
                        # The singleValueExtendedProperties property
                        def single_value_extended_properties()
                            return Graphrubyv4::Users::Item::MailFolders::Item::SingleValueExtendedProperties::SingleValueExtendedPropertiesRequestBuilder.new(@path_parameters, @request_adapter)
                        end
                        ## 
                        ## Gets an item from the graphrubyv4.users.item.mailFolders.item.childFolders.item collection
                        ## @param id Unique identifier of the item
                        ## @return a mail_folder_item_request_builder
                        ## 
                        def child_folders_by_id(id)
                            raise StandardError, 'id cannot be null' if id.nil?
                            url_tpl_params = @path_parameters.clone
                            url_tpl_params["mailFolder%2Did1"] = id
                            return Graphrubyv4::Users::Item::MailFolders::Item::ChildFolders::Item::MailFolderItemRequestBuilder.new(url_tpl_params, @request_adapter)
                        end
                        ## 
                        ## Instantiates a new MailFolderItemRequestBuilder and sets the default values.
                        ## @param path_parameters Path parameters for the request
                        ## @param request_adapter The request adapter to use to execute the requests.
                        ## @return a void
                        ## 
                        def initialize(path_parameters, request_adapter)
                            super(path_parameters, request_adapter, "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}{?%24select}")
                        end
                        ## 
                        ## Delete navigation property mailFolders for users
                        ## @param request_configuration Configuration for the request such as headers, query parameters, and middleware options.
                        ## @return a Fiber of void
                        ## 
                        def delete(request_configuration=nil)
                            request_info = self.to_delete_request_information(
                                request_configuration
                            )
                            return @request_adapter.send_async(request_info, nil, nil)
                        end
                        ## 
                        ## The user's mail folders. Read-only. Nullable.
                        ## @param request_configuration Configuration for the request such as headers, query parameters, and middleware options.
                        ## @return a Fiber of mail_folder
                        ## 
                        def get(request_configuration=nil)
                            request_info = self.to_get_request_information(
                                request_configuration
                            )
                            return @request_adapter.send_async(request_info, lambda {|pn| Graphrubyv4::Models::MailFolder.create_from_discriminator_value(pn) }, nil)
                        end
                        ## 
                        ## Gets an item from the graphrubyv4.users.item.mailFolders.item.messageRules.item collection
                        ## @param id Unique identifier of the item
                        ## @return a message_rule_item_request_builder
                        ## 
                        def message_rules_by_id(id)
                            raise StandardError, 'id cannot be null' if id.nil?
                            url_tpl_params = @path_parameters.clone
                            url_tpl_params["messageRule%2Did"] = id
                            return Graphrubyv4::Users::Item::MailFolders::Item::MessageRules::Item::MessageRuleItemRequestBuilder.new(url_tpl_params, @request_adapter)
                        end
                        ## 
                        ## Gets an item from the graphrubyv4.users.item.mailFolders.item.messages.item collection
                        ## @param id Unique identifier of the item
                        ## @return a message_item_request_builder
                        ## 
                        def messages_by_id(id)
                            raise StandardError, 'id cannot be null' if id.nil?
                            url_tpl_params = @path_parameters.clone
                            url_tpl_params["message%2Did"] = id
                            return Graphrubyv4::Users::Item::MailFolders::Item::Messages::Item::MessageItemRequestBuilder.new(url_tpl_params, @request_adapter)
                        end
                        ## 
                        ## Gets an item from the graphrubyv4.users.item.mailFolders.item.multiValueExtendedProperties.item collection
                        ## @param id Unique identifier of the item
                        ## @return a multi_value_legacy_extended_property_item_request_builder
                        ## 
                        def multi_value_extended_properties_by_id(id)
                            raise StandardError, 'id cannot be null' if id.nil?
                            url_tpl_params = @path_parameters.clone
                            url_tpl_params["multiValueLegacyExtendedProperty%2Did"] = id
                            return Graphrubyv4::Users::Item::MailFolders::Item::MultiValueExtendedProperties::Item::MultiValueLegacyExtendedPropertyItemRequestBuilder.new(url_tpl_params, @request_adapter)
                        end
                        ## 
                        ## Update the navigation property mailFolders in users
                        ## @param body The request body
                        ## @param request_configuration Configuration for the request such as headers, query parameters, and middleware options.
                        ## @return a Fiber of void
                        ## 
                        def patch(body, request_configuration=nil)
                            raise StandardError, 'body cannot be null' if body.nil?
                            request_info = self.to_patch_request_information(
                                body, request_configuration
                            )
                            return @request_adapter.send_async(request_info, nil, nil)
                        end
                        ## 
                        ## Gets an item from the graphrubyv4.users.item.mailFolders.item.singleValueExtendedProperties.item collection
                        ## @param id Unique identifier of the item
                        ## @return a single_value_legacy_extended_property_item_request_builder
                        ## 
                        def single_value_extended_properties_by_id(id)
                            raise StandardError, 'id cannot be null' if id.nil?
                            url_tpl_params = @path_parameters.clone
                            url_tpl_params["singleValueLegacyExtendedProperty%2Did"] = id
                            return Graphrubyv4::Users::Item::MailFolders::Item::SingleValueExtendedProperties::Item::SingleValueLegacyExtendedPropertyItemRequestBuilder.new(url_tpl_params, @request_adapter)
                        end
                        ## 
                        ## Delete navigation property mailFolders for users
                        ## @param request_configuration Configuration for the request such as headers, query parameters, and middleware options.
                        ## @return a request_information
                        ## 
                        def to_delete_request_information(request_configuration=nil)
                            request_info = MicrosoftKiotaAbstractions::RequestInformation.new()
                            request_info.url_template = @url_template
                            request_info.path_parameters = @path_parameters
                            request_info.http_method = :DELETE
                            unless request_configuration.nil?
                                request_info.add_headers_from_raw_object(request_configuration.headers)
                                request_info.add_request_options(request_configuration.options)
                            end
                            return request_info
                        end
                        ## 
                        ## The user's mail folders. Read-only. Nullable.
                        ## @param request_configuration Configuration for the request such as headers, query parameters, and middleware options.
                        ## @return a request_information
                        ## 
                        def to_get_request_information(request_configuration=nil)
                            request_info = MicrosoftKiotaAbstractions::RequestInformation.new()
                            request_info.url_template = @url_template
                            request_info.path_parameters = @path_parameters
                            request_info.http_method = :GET
                            request_info.headers.add('Accept', 'application/json')
                            unless request_configuration.nil?
                                request_info.add_headers_from_raw_object(request_configuration.headers)
                                request_info.set_query_string_parameters_from_raw_object(request_configuration.query_parameters)
                                request_info.add_request_options(request_configuration.options)
                            end
                            return request_info
                        end
                        ## 
                        ## Update the navigation property mailFolders in users
                        ## @param body The request body
                        ## @param request_configuration Configuration for the request such as headers, query parameters, and middleware options.
                        ## @return a request_information
                        ## 
                        def to_patch_request_information(body, request_configuration=nil)
                            raise StandardError, 'body cannot be null' if body.nil?
                            request_info = MicrosoftKiotaAbstractions::RequestInformation.new()
                            request_info.url_template = @url_template
                            request_info.path_parameters = @path_parameters
                            request_info.http_method = :PATCH
                            unless request_configuration.nil?
                                request_info.add_headers_from_raw_object(request_configuration.headers)
                                request_info.add_request_options(request_configuration.options)
                            end
                            request_info.set_content_from_parsable(self.request_adapter, "application/json", body)
                            return request_info
                        end

                        ## 
                        # The user's mail folders. Read-only. Nullable.
                        class MailFolderItemRequestBuilderGetQueryParameters
                            
                            ## 
                            # Select properties to be returned
                            attr_accessor :select
                            ## 
                            ## Maps the query parameters names to their encoded names for the URI template parsing.
                            ## @param original_name The original query parameter name in the class.
                            ## @return a string
                            ## 
                            def get_query_parameter(original_name)
                                raise StandardError, 'original_name cannot be null' if original_name.nil?
                                case original_name
                                    when "select"
                                        return "%24select"
                                    else
                                        return original_name
                                end
                            end
                        end
                    end
                end
            end
        end
    end
end
