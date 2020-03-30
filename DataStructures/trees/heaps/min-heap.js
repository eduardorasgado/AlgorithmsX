const { inspectObject } = require('../log-utils');
/**
 *      MIN HEAPS OR MIN BINARY HEAP
 *
 *          A min heap is a binary Heap but with a certain order in its elements.
 *          Typically represented as an array,
 *
 *          We have some formulas:
 *
 *              - Arr[(i -1) / 2] returns its parent node.
 *              - Arr[(2 * i) + 1] returns its left child node.
 *              - Arr[(2 * i) + 2] returns its right child node.
 *
 *          A Min-Heap is a complete binary tree in which the value in each internal
 *          node is smaller than or equal to the values in the children of that node.
 *
 *          Mapping the elements of a heap into an array is trivial: if a node is
 *          stored a index k, then its left child is stored at index 2k + 1 and
 *          its right child at index 2k + 2.
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

    /**
     * helper function to swapping the elements in bubbling methods.
     *
     * @param firstIndex
     * @param secondIndex
     */
    swap(firstIndex, secondIndex) {
        this.items[firstIndex] += this.items[secondIndex];
        this.items[secondIndex] = this.items[firstIndex] - this.items[secondIndex];
        this.items[firstIndex] -= this.items[secondIndex];
    }

    /**
     * gettting the minimum element within the list
     *
     * @returns {null|*}
     */
    peek() {
        if(!this.size) return null;
        return this.items[0];
    }

    /**
     * removing the minimum element
     *
     * @returns {null|*}
     */
    poll() {
        if(!this.size) return undefined;
        let item = this.items[0];
        this.items[0] = this.items[this.size - 1];
        --this.size;
        this.items.pop();
        this.heapifyDown();
        return item;
    }

    /**
     * inserting a new element
     *
     * @param value
     */
    insert(value) {
        this.items[this.size] = value;
        ++this.size;
        this.heapifyUp()
        return this;
    }

    /**
     * bubbling from deeper level to root
     */
    heapifyUp() {
        let currentIndex = this.size - 1;
        // looping and swapping elements while parent is greater than child.
        while(this.hasParent(currentIndex) &&
        this.items[currentIndex] < this.getParent(currentIndex)) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    /**
     * bubbling from the root element to the deeper level
     */
    heapifyDown() {
        let currentIndex = 0;
        let smallerChildIndex;
        while(this.hasLeftChild(currentIndex)) {
            // this variable is the index of the smaller element between the left
            // and right children.
            smallerChildIndex = this.getLeftChildIndex(currentIndex);
            if(this.hasRightChild(currentIndex) &&
                this.getRightChild(currentIndex) < this.getLeftChild(currentIndex)) {
                smallerChildIndex = this.getRightChildIndex(currentIndex);
            }
            // if parent is greater than children then values will be swapped otherwise stop looping
            if(this.items[currentIndex] > this.items[smallerChildIndex])
                this.swap(currentIndex, smallerChildIndex);
            else break;
            currentIndex = smallerChildIndex;
        }
    }

    /**
     * Prints the tree out in a non array form, but a tree.
     */
    show() {
        let x = -1; // to be sure (x + 1) * 2 will return 0 at the first iteration
        let row = "";
        let valuesLen = this.size;
        this.items.forEach((value, index) => {
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

exports.MinHeap = MinHeap;
