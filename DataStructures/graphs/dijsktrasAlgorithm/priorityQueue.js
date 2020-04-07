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
        [this.items[firstIndex], this.items[secondIndex]] =
            [this.items[secondIndex], this.items[firstIndex]];
    }

    /**
     * return the minimum priority node within the PQ
     * @returns {undefined|*}
     */
    peek() {
        if(!this.size) return undefined;
        return this.items[0];
    }

    dequeue() {
        let nodeToDelete = this.items[0];
        this.items[0] = this.items[this.size - 1];
        this.items.pop();
        --this.size;
        this.sinkDown();
        return nodeToDelete;
    }

    /**
     * Insert a node with certain priority at last position and then
     * it reorders until it reach a correct position given min PQ
     * @param priority
     * @param value
     * @returns {PriorityQueue}
     */
    enqueue(priority, value) {
        let node = new Node(priority, value);
        this.items[this.size] = node;
        ++this.size;
        this.bubbleUp();
        return this;
        //
    }

    /**
     * Reorders last element within the PQ by bubbling up or heapify up
     * operation.
     */
    bubbleUp() {
        let currentIndex = this.size - 1;
        while(this.hasParent(currentIndex)
        && this.items[currentIndex].priority < this.getParent(currentIndex).priority){
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    /**
     * Reorder the root of the heap(tree) and sends every element unordered to the
     * bottom of the heap until parent is smaller than children
     */
    sinkDown() {
        let currentIndex = 0;
        let smallestChildIndex;
        while(this.hasLeftChild(currentIndex)) {
            smallestChildIndex = this.getLeftChildIndex(currentIndex);
            if(this.getRightChild(currentIndex).priority
                < this.items[smallestChildIndex].priority) {
                smallestChildIndex = this.getRightChildIndex(currentIndex);
            }
            if(this.items[currentIndex].priority
                > this.items[smallestChildIndex].priority)
                this.swap(currentIndex, smallestChildIndex);
            else break;
            currentIndex = smallestChildIndex;
        }
    }

    show() {
        let x = -1; // to be sure (x + 1) * 2 will return 0 at the first iteration
        let row = "";
        let valuesLen = this.size;
        this.items.forEach((node, index) => {
            if(index% 2 !== 0 || index === 0) row += "[";
            row += `${node.value}(${node.priority}) `;
            if(index% 2 === 0) row += "]"
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

    gettingSpacesToShow(valuesLen, lastRowLen) {
        let spaces = "";
        for(let i = 0; i < (valuesLen - Math.floor(lastRowLen / 4)); i++) {
            spaces += " ";
        }
        return spaces;
    }
}

exports.PriorityQueue = PriorityQueue;
