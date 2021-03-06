/**
 *      HASH TABLES
 *
 *          OBJECTIVES
 *
 *              Explain what a hash table is
 *              Define what a hashing algorithm is
 *              Discuss what makes a good hashing algorithm
 *              Understand how collision occur in hash table
 *              Handle collisions using separate chining or linear probing
 *
 *          WHAT ARE HASH TABLES
 *
 *              Hash tables are used to store key value pairs
 *              They are like arrays, but the keys are not irdered.
 *              Unilike arrays, hash tables are fast for all of the following operations:
 *              finding values, adding new values and removing values.
 *
 *              It is a data structure that implements an associative array abstract
 *              data type (ADT), a structure that can map keys to values.
 *
 *              In many situations, hash tables turn out to be on average more efficient
 *              than search trees or any other table lookup structure.
 *
 *              Hash tables are very efficient in fast retreival of data.
 *
 *              Used to index large amounts of data
 *
 *              Address of each key calculated using the key itself
 *
 *              Collisions are resolved with open or closed addressing
 *
 *          HASH FUNCTION (HASH CODE)
 *
 *              A hash table uses a hash function to compute an index, also called hash
 *              code, into an array of buckets or slots, from which the desired value
 *              can be found.
 *
 *              Ideally, the hash function will assign each key to a unique bucket,
 *              but most hash table designs employ an imperfect has function, which might
 *              cause hash collisions where the hash function generates the same index for
 *              more than one key. Such collisions are always accommodated in some way.
 *
 *              Objectives of Hash function
 *
 *                  Minimize collisions
 *                  Uniform distribution of hash values
 *                  Easy to calculate
 *                  Resolve any collision - through including any suitable method
 *                                          to resolve them.
 *
 *          COLLISION RESOLUTION
 *
 *              Open Addressing
 *                  - Linear probing
 *                  - Plus 3 rehash
 *                  - Quadreatic probing (failed attempts)^2
 *                  - Double Hashing
 *
 *              Closed addressing
 *                  - Chaining
 *
 *          WHY SHOULD I CARE
 *
 *              Nearly every programming language has some sort of hash table
 *              data structure.
 *              Because of their speed, hash tables are very commonly used!.
 *
 *          APPLICATIONS
 *
 *              Hashing is widely used in:
 *                  database indexing
 *                  compilers
 *                  caching,
 *                  password authentication

 *                  and more
 *
 *          HASH TABLES IN THE WILD
 *
 *              - Dictionaries in python
 *              - Objects and Maps in Javascript - with some restrictions but are
 *                  basically hash tables
 *              - Maps in Java, Golang and scala
 *              - Hashes in Ruby
 *
 *          BIG O OF HASH TABLES
 *
 *              Deppending on how good implemented is your hash function will affect
 *              how efficient is your hash table
 *
 *                  Searching
 *                      Best case scenario(good implementation) - O(1)
 *                      Worst case scenario(bad implementation) - O(n)
 *
 *              It depends, but supposing a good implementation(best case):
 *                  Insertion, deletion and retrieval occur in constant time.
 *
 *              Average cases:
 *
 *                  Insert    - O(1)
 *                  Deletion  - O(1)
 *                  Access    - O(1)
 *
 *         RECAP
 *
 *          HT are collections of key-value pairs
 *          HT can find values quickly given a key
 *          HT can add new key-values quickly
 *          HT store data in a large array, and work by hashing the keys
 *          A good hash should be fast, distribute keys uniformly, and be
 *            deterministic
 *          Separate chaining and linear probing are two stratgies used to deal
 *            with two keys that hash to the same index.
 * */

/**
 * THE HASH PART
 *  To implement a hash table we will be using an array.
 *  In order to look up values by key, we need a way to cnvert keys into valid array
 *  indeces.
 *  A function that performs this task is called a hash function
 *
 *  WHAT MAKES A GOOD HASH? (not a cryptographically secure one)
 *      Fast
 *      Does not cluster outputs at specific indeces, but distributes uniformly
 *      Deterministic (same input yields same output)
 *
 */
// basic hash function
function hash(key, arrayLength) {
    let total = 0;
    for (let keyChar of key) {
        let keyAscii = keyChar.charCodeAt(0) - 96
        total = (keyAscii + total) % arrayLength;
    }
    return total;
}

/**
 *  REFINING OUR HASH
 *      Problems with our current hash fuction
 *
 *          Only hashes strings (we wont worry about this)
 *          Not constant time - linear in key length
 *          Could be a little more random.
 * */
let colorsToAdd = ["pink", "blue", "black",
    "white", "red", "orange", "green", "cyan", "maroon", "grey"];

console.log("hash results: \n");
colorsToAdd.map((color) => {
    console.log(color, hash(color, colorsToAdd.length));
})

/***
 *      USE OF PRIME NUMBERS
 *
 *  The prime number in the hash is helpful in spreading out the keys more uniformly.
 *  It is also helpful if the array that you are putting values has a prime length
 *
 *  We set a minimun set of elements to iterate over for a fast hash function.
 *
 *  @see HashTable._hash for more information in same folder this file is located.
 *
 * @param key
 * @param arrayLen
 * @returns {number}
 */
function hashRevisited(key, arrayLen) {
    let total = 0;
    let PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++) {
        let keyAscii = key[i].charCodeAt(0) - 96
        total = (keyAscii * PRIME + total) % arrayLen;
    }
    return total;
}

//console.log("\nhash revisited results:");
//colorsToAdd.map((color) => {
//    console.log(color, hashRevisited(color, colorsToAdd.length));
//})

/**
 *      DEALING WITH COLLISIONS
 *
 *      Even with a large array and a great hash function, collisions are inevitable.
 *      There are many strategies for dealing with collision, but we will focus on two:
 *
 *          Separate Chaining
 *              With separate chaining, at each index in our array we store values
 *              using a more sophisticated data structure(array or linked list)
 *          Linear Probing
 *              With linear probing, when we find a collision, we search through
 *              the array to find the next empty slot
 *              Unlike with separate chaining, this allows us to store a single
 *              key- value at each index.
 * */
