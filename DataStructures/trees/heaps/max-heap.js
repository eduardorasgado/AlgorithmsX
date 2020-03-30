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

    swap(firstIndex, secondIndex) {
        [ this.items[firstIndex], this.items[secondIndex] ] =
            [ this.items[secondIndex], this.items[firstIndex] ]
    }

    peek() {
        if(!this.size) return null;
        return this.items[0];
    }

    poll() {
        let item = this.items[0];
        this.items[0] = this.items[this.size - 1];
        --this.size;
        this.items.pop();
        this.heapifyDown();
        return item;
    }

    insert(value) {
        this.items[this.size] = value;
        ++this.size;
        // heapify up
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.size - 1;
        while(this.hasParent(currentIndex) &&
            this.items[currentIndex] > this.getParent(currentIndex)) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex)
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        let greatestChildIndex;
        while(this.hasLeftChild(currentIndex)) {
            greatestChildIndex = this.getLeftChildIndex(currentIndex);
            if(this.hasRightChild(currentIndex) &&
                this.getRightChild(currentIndex) > this.getLeftChild(currentIndex))
                greatestChildIndex = this.getRightChildIndex(currentIndex);

            if(this.items[currentIndex] < this.items[greatestChildIndex])
                this.swap(currentIndex, greatestChildIndex);
            else break;
            currentIndex = greatestChildIndex;
        }
    }
}

let heap = new MaxHeap();
//heap.items = [40, 100, 40, 10, 15, 50, 50];
let items = [100, 40, 50, 10, 15, 50, 40];
items.map((n) => {
    heap.insert(n);
});
console.log(heap.items);
console.log(heap.peek());
heap.poll();
console.log(heap.items);
heap.poll();
console.log(heap.items);
heap.poll();
console.log(heap.items);
heap.poll();
console.log(heap.items);
