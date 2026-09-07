export class PurchaseOrderID{
    #value;
    constructor(value){
        if(!validateUuid(value)){
            throw new ValidationError(`Invalid PurchaseOrderID: ${value}. Must be a valid UUID.`);
        }
        this.#value = value;
        Object.freeze(this);
    }

    static generate(){
        return new PurchaseOrderID(generateUuid());
    }

    get value() {
        return this.#value;
    }

    equals(other) {
        return other instanceof PurchaseOrderID && this.#value === other.#value;
    }

    toString() {
        return this.#value;
    }
}