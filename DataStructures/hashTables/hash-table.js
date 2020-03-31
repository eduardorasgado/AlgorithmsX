/**
 *      HASH TABLES
 *
 *          WHAT ARE HASH TABLES
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
 *          APPLICATIONS
 *
 *              Hashing is widely used in:
 *                  database indexing
 *                  compilers
 *                  caching,
 *                  password authentication
 *                  and more
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
 * */
