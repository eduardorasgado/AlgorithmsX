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
    constructor() {
        this.size = 0;
        this.items = [];
    }

    getLeftChildIndex(parentIndex) {
        return (parentIndex * 2) + 1;
    }
    getRightChildIndex(parentIndex) {
        return (parentIndex * 2) + 2;
    }
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.size;
    }

    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.size;
    }

    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    getLeftChild(parentIndex) {
        if(!this.hasLeftChild(parentIndex)) return null;
        return this.items[this.getLeftChildIndex(parentIndex)];
    }

    getRightChild(parentIndex) {
        if(!this.hasRightChild(parentIndex)) return null;
        return this.items[this.getRightChildIndex(parentIndex)];
    }

    getParent(childIndex) {
        if(!this.hasParent(childIndex)) return null;
        return this.items[this.getParentIndex(childIndex)];
    }

    // helper function to swapping the elements in bubbling methods.
    swap(firstIndex, secondIndex) {
        this.items[firstIndex] += this.items[secondIndex];
        this.items[secondIndex] = this.items[firstIndex] - this.items[secondIndex];
        this.items[firstIndex] -= this.items[secondIndex];
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
    insert(value) {
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

let mh = new MinHeap();
// mh.items = [13, 16, 31, 41, 51, 100, 41];
// mh.size = 7;
// // get elements testing
// console.log(mh.getParent(6));
// console.log('hijo derecho ', mh.getRightChild(1));
// console.log('hijo izquierdo ', mh.getLeftChild(1));
// console.log('hijo derecho 2 ', mh.getRightChild(2));
// console.log('hijo izquierdo 2 ', mh.getLeftChild(2));
// // swap testing
// console.log(mh.items[0], mh.items[1]);
// mh.swap(0, 1)
// console.log(mh.items[0], mh.items[1]);

let itemsToInsert = [13, 16, 31, 41, 51, 100, 41];

itemsToInsert.map((element) => {
    mh.insert(element);
})
console.log(mh.items);
