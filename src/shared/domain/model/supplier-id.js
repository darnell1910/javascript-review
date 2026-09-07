export class supplierId {
    #value;

    constructor(value) {
        if (!validateUuid(value)) {
            throw new ValidationError(`Invalid supplierId: ${value}. Must be a valid UUID.`);
        }
        this.#value = value;
        Object.freeze(this);
    }

    static generate() {
        return new supplierId(generateUuid());
    }

    get value() {
        return this.#value;
    }

    equals(other) {
        return other instanceof supplierId && this.#value === other.#value;
    }

    toString() {
        return this.#value;
    }
}