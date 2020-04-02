/**
 * Represents a key value data structure.
 * @class
 */
class HashTable {
    /**
     * size is by default 53, because with 53(prime number) there are smaller
     * chances to get collisions
     * @param size
     */
    constructor(size = 53) {
        this.keyMap = new Array(size);
        this.size = size;
    }

    /**
     * Hash function, to get and set index within the key map given a string key
     * @param key
     * @returns {number}
     * @private
     */
    _hash(key) {
        let total = 0;
        let PRIME = 7;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            total = ((key[i].charCodeAt(0) - 96) * PRIME + total) % this.size;
        }
        return total;
    }

    set() {
        //
    }

    get() {
        //
    }
}
