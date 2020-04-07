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
        [this.items[firstIndex], this.items[secondIndex]] =
            [this.items[secondIndex], this.items[firstIndex]];
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
        let currentIndex = this.size - 1;
        while(this.hasParent(currentIndex)
        && this.items[currentIndex].priority < this.getParent(currentIndex).priority){
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    sinkDown() {
        //
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
