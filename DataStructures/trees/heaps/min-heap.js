/**
 *      MIN HEAPS
 *          A min heap is a binary Heap but with a certain order in its elements.
 *          Typically represented as an array,
 *
 *          We have some formulas:
 *
 *              - Arr[(i -1) / 2] returns its parent node.
 *              - Arr[(2 * i) + 1] returns its left child node.
 *              - Arr[(2 * i) + 2] returns its right child node.
 *
 */
class MinHeap {
    constructor(capacity) {
        this.size = 0;
        this.items = [];
    }

    getLeftChildIndex(parentIndex) {
        //
    }
    getRightChildIndex(parentIndex) {
        //
    }
    getParentIndex(childIndex) {
        //
    }

    hasLeftChild(parentIndex) {
        //
    }

    hasRightChild(parentIndex) {
        //
    }

    hasParent(childIndex) {
        //
    }

    getLeftChild(parentIndex) {
        //
    }

    getRightChild(parentIndex) {
        //
    }

    getParent(childIndex) {
        //
    }

    // helper function to swapping the elements in bubbling methods.
    swap() {
        //
    }

    // removing the minimum element
    peek() {
        //
    }

    // removing the last element
    poll() {
        //
    }

    // inserting a new element
    insert() {
        //
    }

    // bubbling from deeper level to root
    heapifyUp() {
        //
    }

    // bubbling from the root element to the deeper level
    heapifyDown() {
        //
    }
}
