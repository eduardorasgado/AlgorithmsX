class Node {
    constructor(priority, value) {
        this.value = value;
        this.priority = priority;
    }

    getValue() {return this.value;}
    setValue(value) { this.value = value; }
    getPriority() {return this.priority;}
    setPriority(priority) { this.priority = priority; }
}

/**
 * Min Binary heap priority queue
 */
class PriorityQueue {
    constructor() {
        this.items = [];
        this.size = 0;
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
        return this.getLeftChild(parentIndex) < this.size;
    }
    hasRightChild(parentIndex) {
        return this.getRightChild(parentIndex) < this.size;
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
        //
    }

    peek() {
        //
    }

    dequeue() {
        //
    }

    enqueue(priority, value) {
        let node = new Node(priority, value);
        this.items[this.size] = node;
        ++this.size;
        this.bubbleUp();
        return this;
        //
    }

    bubbleUp() {
        //
    }

    sinkDown() {
        //
    }
}

exports.PriorityQueue = PriorityQueue;
