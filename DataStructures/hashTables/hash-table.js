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

    /**
     * Accepts a key and a value
     * Hash the key
     * Stores the key- value pair in the hash table array via separate chaining
     */
    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) this.keyMap[index] = [[key, value]];
        else {
            this.keyMap[index].push([key, value]);
        }
    }

    /**
     * return an element given a key
     * if there are more than one element within the map at index position, then
     * we iterate over all the elements within that list and return the correct one.
     * @param key
     * @returns {any|undefined|*}
     */
    get(key) {
        let index = this._hash(key);
        let elements = this.keyMap[index];
        if(elements.length === 1) return elements[0];
        for(let element of elements) {
            if(element[0] === key) return element;
        }
        return undefined;
    }
}

exports.HashTable = HashTable;
