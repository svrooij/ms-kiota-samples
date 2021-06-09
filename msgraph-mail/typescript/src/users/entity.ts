import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class Entity implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown> = new Map<string, unknown>();
    /** Read-only.  */
    private _id?: string | undefined;
    /**
     * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData () {
        return this._additionalData;
    };
    /**
     * Gets the id property value. Read-only.
     * @returns a string
     */
    public get id () {
        return this._id;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T> () : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["id", (o, n) => { (o as unknown as Entity).id = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize (writer: SerializationWriter) : void {
        writer.writeStringValue("id", this.id);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData (value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the id property value. Read-only.
     * @param value Value to set for the id property.
     */
    public set id (value: string | undefined) {
        this._id = value;
    };
}
