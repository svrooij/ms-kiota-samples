import MicrosoftKiotaAbstractions

extension Swiftconsoleapp.Models.Microsoft.Graph {
    public class DateTimeTimeZone : AdditionalDataHolder {
        public var additionalData: [String:Any] = [String:Any]()
        public var dateTime: String?
        public var timeZone: String?
    }
}
