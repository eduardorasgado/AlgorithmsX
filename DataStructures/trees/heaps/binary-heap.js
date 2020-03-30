/**
 *          HEAPS
 *
 *              Heaps can have more than one child nodes up to n, but
 *              we can implement a binary heap where it has two nodes per parent
 *
 *              This is a valid Heap:
 *
 *                                   _________ 0
 *                                   |     |   |
 *                            _______1     1   1
 *                            |      |     |
 *                            2      2     2
 *                            |
 *                            3
 *              because it satisfies the heap invariant, Heaps like these are often
 *              seen in binomial heaps. But it is not a
 *
 *              Here we have a Heap variant, it might look weird but even tho it is
 *              a heap:
 *
 *                             _____0
 *                            |    |
 *                       _____2     3   __6
 *                      |           |  |  |
 *                ______5     ______6__|  |   __7______
 *               |      |    |      |     |  |  |     |
 *               6     11    7      6     7__|  8     9
 *
 *               again, it is not a valid binary heap, but a heap.
 *
 *               Next is not a valid heap:
 *
 *                             _____8_______
 *                            |            |
 *                       _____6_          _6______
 *                      |       \____ ___/       |
 *                      2            4           2
 *               Because this structure is not a tree, it contains a cycle,
 *               Heaps must be trees.
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
     * STEPS:
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

    /**
     * Poll method. Removes the maximun element, the highest value
     *  Briefly:
     *    Remove the root
     *    Replace with the most recently added
     *    Adjust(Sink Down)
     *
     *  Sink down: The procedure for deleting the root form the heap and restoring
     *  the properties is called down-heap(also known as bubble down, percolate down,
     *  sift down, tickle down, heapify down, cascade down and extrack min/ max)
     *
     * STEPS:
     *  Swap the first value in the values property with the last one
     *  Pop from the values property, so you can return the value at the end.
     *  Have the new root "sink down" to the correct spot.
     *      Your parent index starts at 0(root)
     *      Find the index if the left child 2* index + 1 (make sure it is not out
     *      of bounds)
     *      Find the index of the right child 2* index + 2(make sure it is not out
     *      if bounds)
     *      If the left or right child is greater than the element then swap. If both
     *      left and right children are larger, swap with the largest child
     *      The child index you swapped to now becomes the new parent index
     *      Keep looping and swapping until neither child is larger than the element
     *      Return the old root.
     */
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length === 0) return undefined; // to avoid max reassignment
        this.values[0] = end;
        this.sinkDown();
        return max;
    }

    /**
     * @see extractMax
     */
    sinkDown() {
        let currentIndex = 0;
        const length = this.values.length;
        const element = this.values[currentIndex];
        while(true) {
            let leftChildIndex = (2 * currentIndex) + 1;
            let rightChildIndex = (2 * currentIndex) + 2;
            let leftChild, rightChild;
            let swap = null;
            if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if(leftChild > element) swap = leftChildIndex
            }
            if(rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if((!swap && rightChild > element)
                || (swap && rightChild > leftChild))
                    swap = rightChildIndex;
            }
            if(!swap) break;
            this.values[currentIndex] = this.values[swap];
            this.values[swap] = element;
            currentIndex = swap;
        }
    }

    /**
     * Prints the tree out in a non array form, but a tree.
     */
    show() {
        let x = -1; // to be sure (x + 1) * 2 will return 0 at the first iteration
        let row = "";
        let valuesLen = this.values.length;
        this.values.forEach((value, index) => {
            if(index% 2 !== 0 || index === 0) row += "["
            row += `${value} `;
            if(index% 2 === 0) row += "]"
            // ensure that index is part of the serie: 0, 2, 6, 14, 30... 2(x(t-1) + 1)
            // to print a tree row in new line
            if(index === ((x + 1) * 2) || index === valuesLen - 1){
                if(index % 2 !== 0) row += "]"; // if bottom row length is not even
                let lastRowLen = row.length;
                console.log(
                    this.gettingSpacesToShow(valuesLen, lastRowLen) + row)
                x = index;
                row = "";
            }
        })
    }

    /**
     * show helper, set a certain amount of spaces to show all the nodes symmetrically
     * @param valuesLen
     * @param lastRowLen
     * @returns {string}
     */
    gettingSpacesToShow(valuesLen, lastRowLen) {
        let spaces = "";
        for(let i = 0; i < (valuesLen - Math.floor(lastRowLen / 2)); i++) {
            spaces += " ";
        }
        return spaces;
    }

}

exports.MaxBinaryHeap = MaxBinaryHeap;
