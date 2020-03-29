/**
 *      MAX BINARY HEAP
 *
 *          A max binary heap is a binary tree where each row deeper is smaller
 *          than the above row.
 *
 *          We can use an array to emulate a binary tree, there are 3 formulas to
 *          use to get access to parents and children:
 *
 *          A parent:       floor((childIndex - 1) / 2)
 *          A left child:   (parentIndex * 2) + 1
 *          A right child:   (parentIndex * 2) + 2
 *
 * */
class MaxHeap {
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
}

let heap = new MaxHeap();
//heap.items = [40, 100, 40, 10, 15, 50, 50];
heap.items = [100, 40, 50, 10, 15, 50, 40];
heap.size = 7;
console.log(heap.getParent(2));
console.log(heap.getParent(4));
console.log(heap.getParent(5));
console.log("hijo derecho ",heap.getRightChild(2));
console.log("hijo izquierdo ",heap.getLeftChild(2));
console.log("hijo derecho ",heap.getRightChild(1));
console.log("hijo izquierdo ",heap.getLeftChild(1));
