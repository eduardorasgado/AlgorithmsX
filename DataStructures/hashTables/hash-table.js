/**
 * Represents a key value data structure.
 * The key for this hash table must be a string
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
        // Note: if there is a fixed size then we cannot include more
        // than that amount of elements, if we try to resize it will give wrong
        // data access with old elements.
        this.size = size;
    }

    /**
     * Hash function, to get and set index within the key map given a string key
     * We used a polynomial rolling hash function. More info here:
     *  https://cp-algorithms.com/string/string-hashing.html
     *
     *  PRIME_FACTOR number:
     *   english and lowercase, then PRIME_FACTOR=37
     *   both uppercase and lowercase letters, then PRIME_FACTOR=53
     *   accordingly to the article above
     *
     * @param key
     * @returns {number}
     * @private
     */
    _hash(key) {
        let total = 0; // this will be the index
        const PRIME_FACTOR = 37;
        let primePowered = 1;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            total = (((key[i].charCodeAt(0) - 96) * primePowered) + total) % this.size;
            primePowered *= PRIME_FACTOR;
        }
        return total;
    }

    /**
     * Accepts a key and a value
     * Hash the key
     * Stores the key- value pair in the hash table array via separate chaining
     * Usually we should avoid inserting repeating elements
     */
    set(key, value) {
        // we can verify if we are using a string as key in here
        let index = this._hash(key);
        //console.log("key:", key);
        if(!this.keyMap[index]) this.keyMap[index] = [];
        let elements = this.keyMap[index];
        let elementsLen = elements.length;
        //console.log(elements.length);
        let anyChange;
        // handling possible duplicate key, update or insert
        if(elementsLen > 0){
            anyChange = false;
            for(let i = 0; i < elementsLen; i++) {
                if(elements[i][0] === key) {
                    this.keyMap[index][i][1] = value;
                    anyChange = true;
                }
            }
            if(!anyChange) elements.push([key, value]);
        } else {
            elements.push([key, value]);
        }
    }

    /**
     * * Accepts a key
     * Hashes the key
     * Retreives the key-value pair in the hash table
     * If the key is not found, returns undefined.
     *
     * return an element given a key
     * if there are more than one element within the map at index position, then
     * we iterate over all the elements within that list and return the correct one.
     *
     * @param key
     * @returns {undefined|any}
     */
    get(key) {
        let index = this._hash(key);
        let elements = this.keyMap[index];
        for(let element of elements) {
            // returning the props or value only, not the key
            if(element[0] === key) return element[1];
        }
        return undefined;
    }

    /**
     * Loops through the hash table array and returns an array of keys in the
     * table
     */
    keys() {
        let keys = [];
        for(let elements of this.keyMap) {
            if(elements) {
                for(let object of elements) {
                    keys.push(object[0]);
                }
            }
        }
        return keys;
    }

    /**
     * * Loops through the hash table array and returns an array of values in the
     * table
     * values contains unique elements.
     *
     * @returns {[]}
     */
    values() {
        let values = [];
        for(let elements of this.keyMap) {
            if(elements) {
                for(let object of elements) {
                    if(!values.includes(object[1]))
                        values.push(object[1]);
                }
            }
        }
        return values;
    }
}

exports.HashTable = HashTable;
