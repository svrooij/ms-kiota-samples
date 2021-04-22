package graphjavav4.utilities.users.mailFolders.messages.attachments;

import com.microsoft.kiota.serialization.Parsable;
import com.microsoft.kiota.serialization.ParseNode;
import com.microsoft.kiota.serialization.SerializationWriter;
import graphjavav4.utilities.users.Attachment;
import java.util.function.BiConsumer;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
public class AttachmentsResponse implements Parsable {
    @javax.annotation.Nullable
    public List<Attachment> value;
    @javax.annotation.Nullable
    public String nextLink;
    /**
     * Serialiazes information the current object
     * @param writer Serialization writer to use to serialize this model
     * @return a void
     */
    public void serialize(@javax.annotation.Nonnull final SerializationWriter writer) {
        Objects.requireNonNull(writer);
        writer.writeCollectionOfObjectValues("value", value);
        writer.writeStringValue("nextLink", nextLink);
        writer.writeAdditionalData(this.additionalData);
    }
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    @javax.annotation.Nonnull
    private final Map<String, Object> additionalData = new HashMap<>();
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @return a Map<String, Object>
     */
    @javax.annotation.Nonnull
    public Map<String, Object> getAdditionalData() {
        return additionalData;
    }
    /**
     * The serialization information for the current model
     * @return a Map<String, BiConsumer<T, ParseNode>>
     */
    @javax.annotation.Nonnull
    public <T> Map<String, BiConsumer<T, ParseNode>> getDeserializeFields() {
        final Map<String, BiConsumer<T, ParseNode>> fields = new HashMap<>(2);
        fields.put("value", (o, n) -> { ((AttachmentsResponse)o).value = n.getCollectionOfObjectValues(Attachment.class); });
        fields.put("nextLink", (o, n) -> { ((AttachmentsResponse)o).nextLink = n.getStringValue(); });
        return fields;
    }
}
