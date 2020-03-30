/**
 *          HEAPS
 *
 *          BINARY HEAPS
 *
 *              OBJECTIVES
 *                  - Define what a binary heap is
 *                  - Compare and contrast min and max heaps
 *                  - Implement basic methods on heaps
 *                  - Understand where heaps are used in the real world and what other
 *                      data structures can be constructed from heaps.
 *
 *              WHAT IS A BINARY HEAP
 *
 *                  Very similar to a binary search tree, but with some different
 *                  rules.
 *                  In a MaxBInaryHeap, parent nodes are always larger than child
 *                  nodes.
 *                  In a MinBInaryHeap, parent nodes are always smaller than child
 *                  nodes.
 *
 *                  Next is not a binary heap:
 *
 *                           ______33_____
 *                       ___18___       __41
 *                      12      27     39
 *
 *                  this, is a binary search tree
 *
 *              MAX BINARY HEAP
 *
 *                  Each parent has at most two children nodes
 *
 *                  The value of each parent node is always greater than its child
 *                  nodes.
 *
 *                  In a max Binary Heap the parent is greater than the children,
 *                  but there are no guarantees between sibling nodes.
 *
 *                  A binary heap is as compact as possible. All the children of
 *                  node are as full as they can be and left children are filled
 *                  out first.
 *
 *              MIN BINARY HEAP
 *
 *                  Same as binary heap but the parent is smaller than the children.
 *
 *              WHY DO WE NEED TO KNOW THIS?
 *
 *                  Binary heaps are used to implement Priority Queues, which are
 *                  VERY commonly used data structures.
 *
 *                  They are also used quite a bit, with graph traversal algorithms.
 *
 *              REPRESENTING A HEAP
 *
 *                  Commonly there is an easy way, by using arrays:
 *
 *                          100_______
 *                               |    |
 *                               19  36_______________
 *                               ______________   |   |
 *                                        |   |   |   |
 *                                       17  12  25  5
 *                                       |   |    |  |__________________________
 *                                       |   |    |________________________  |  |
 *                                       |   |_____________________    |  |  |  |
 *                                       |__________________   |   |   |  |  |  |
 *                                                      |   |  |   |   |  |  |  |
 *                                                      9  15  6  11  13  8  1  4
 *
 *                   arr= [ 100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4 ]
 *               indexes=    0   1   2   3   4   5   6  7  8   9  10  11 12  13 14
 *                                       p              lc rc
 *
 *                  where
 *                      p = parent
 *                      lc = left child
 *                      rc = right child
 *
 *                  then we can locate a pattern between the parent and children indexes...
 *
 *                  For any index of an array n...
 *                      The left child is stored at 2n + 1
 *                      The right child is at 2n + 2
 *
 *                 For any child node at index n...
 *                      Its parent is at index floor((n-1) / 2)
 *
 * */

// the classroom max binary heap implementation
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    /**
     * adding a new node
     *
     *  Push the value into the values property on the heap
     *  Bubble Up(the larger values will bubble up to the correct spot):
     *      Create a variable called index which is the length of the values
     *      property - 1
     *      Create a variable called parentIndex which is the floor of
     *      (index - 1) / 2
     *      Keep looping as long as the values element at the parentIndex is less
     *      than the values element at the child index
     *          Swap the value of the values element at the parent Index with the value
     *          of the element property at the child index
     *          Set the index to be the parentIndex and start over
     *
     */
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
        return this;
    }

    /**
     * Bubbling the elements from bottom to max value(top) while parent is
     * smaller than children
     *
     * @see insert
     */
    bubbleUp() {
        let currentIndex = this.values.length - 1;
        const element = this.values[currentIndex];
        while(currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            let parent = this.values[parentIndex];
            if(element <= parent) break;
            this.values[parentIndex] = element;
            this.values[currentIndex] = parent;
            currentIndex = parentIndex;
        }
    }

}

exports.MaxBinaryHeap = MaxBinaryHeap;
