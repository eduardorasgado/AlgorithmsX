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

    /**
     * Getting max element within the tree
     * @returns {null|*}
     */
    peek() {
        if(!this.size) return null;
        return this.items[0];
    }

    /**
     * Removing max element within the tree
     * @returns {*}
     */
    poll() {
        let item = this.items[0];
        this.items[0] = this.items[this.size - 1];
        --this.size;
        this.items.pop();
        this.heapifyDown();
        return item;
    }

    /**
     * Inserting a new node in the correct place
     * @param value
     * @returns {MaxHeap}
     */
    insert(value) {
        this.items[this.size] = value;
        ++this.size;
        // heapify up
        this.heapifyUp()
        return this;
    }

    /**
     * bubbling the element in last position from the bottom to the first row
     * while current element is greater than its parent.
     */
    heapifyUp() {
        let currentIndex = this.size - 1;
        // looping while there is a parent and parent is smaller than child
        while(this.hasParent(currentIndex) &&
            this.items[currentIndex] > this.getParent(currentIndex)) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex)
        }
    }

    /**
     * bubbling the element from first row(max position) to botton row while
     * current index element is smaller than  its greatest child.
     */
    heapifyDown() {
        let currentIndex = 0;
        let greatestChildIndex;
        while(this.hasLeftChild(currentIndex)) {
            // this variable will be the index of the greatest value between left
            // and right children
            greatestChildIndex = this.getLeftChildIndex(currentIndex);
            if(this.hasRightChild(currentIndex) &&
                this.getRightChild(currentIndex) > this.getLeftChild(currentIndex))
                greatestChildIndex = this.getRightChildIndex(currentIndex);

            // if parent is smaller than child then they will be swapped otherwise stop loop
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

heap.insert(100);
heap.insert(20);
heap.insert(33);
heap.insert(1);
heap.insert(22);
heap.insert(99);
console.log(heap.items);
