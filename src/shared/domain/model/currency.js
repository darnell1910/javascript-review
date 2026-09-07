import ValidationError from '../errors.js';

/**
 * Value Object representing a currency with a specific code.
 */
export class Currency {
    /**
     * List of valid currency codes.
     * @type {string[]}
     */
    static #VALID_CODES = ['USD', 'EUR', 'GBP', 'JPY'];
    #code;

    /**
     * Creates a new Currency instance with the specified currency code.
     * @param code
     */
    constructor(code) {
        if (!Currency.#VALID_CODES.includes(code)) {
            throw new ValidationError (`Invalid currency code: ${code}. Must be one of ${Currency.#VALID_CODES.join(', ')}`);

        }
        this.#code = code;
        Object.freeze(this);
    }
    /**
     * Returns the currency code.
     * @returns {string} The currency code.
     */
    get code() {
        return this.#code;
    }

    /**
     * Checks if this Currency instance is equal to another Currency instance.
     * @param other - the other Currency instance to compare with
     * @returns {boolean}- true if both Currency instances have the same code, false otherwise
     */
    equals(other) {
        return other instanceof Currency && this.#code === other.#code;
    }
    toString() {
        return this.#code;
    }
}