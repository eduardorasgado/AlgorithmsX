/**
 *  OBJECTS THROUGH THE LENSES OF BIG O
 *
 *  When to use objects:
 *      Whem you dont need order
 *      When you need fast access / insertion and removal
 *
 *
 *
 *  BIG O OF OBJECTS
 *
 *      Insertion - O(1)
 *      Removal   - O(1)
 *      Searching - O(N)
 *      Access    - O(1)
 *
 * */

let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

/**
 *  ARRAYS (Ordered lists)
 *
 *      When to use arrays
 *          - When you need order
 *          - When you need fast access/insertion and removal(sort of..)
 *
 *
 *      Insertion -> depends...
 *          Inserting elements at the beggining of the array cost O(n)
 *          Inserting at the end, O(1)
 *      Removal - It depends...
 *          Removing from the beginning of the array cost O(n)
 *          Removing at the end, O(1)
 *      Searching - O(n)
 *      Access    - O(1)
 *
 *      push() and pop() insert and remove from the end of an array
 *      shift() and unshift() insert and remove from the beggining of an array
 *
 *      so... push, pop cost less than shift and unshift
 * */
