//const { MinHeap } = require("./min-heap");
/**
 *      PRIORITY QUEUES
 *
 *          WHAT ARE PQs?
 *
 *          A priority queue is an abstract data type which is like a regular queue
 *          or stack data structure, but where additionally each element has a
 *          "priority" associated with it. In a priority queue, an element with a
 *          higher priority is served before an element with low priority.
 *
 *          While priority queues are often implemented with heaps, they are
 *          conceptually distinct from heaps. A priority queue is a concept like
 *          a list or a map, just as a list can be impleemented with a linked list
 *          or an array, a priority queue can be implemented with a heap.
 *
 *          To improve performance, priority queues typically use a heap as their
 *          backbone, giving O(log n) performance for inserts and removals,
 *          and O(n) to built initially from a set of n elements.
 *
 *          Is an Abstrack Data Type(ADT) that operates similar to a normal queue
 *          except that each element has a certain priority.
 *
 *          The priority of the elements in the PQ dtermine the order in which
 *          elements are removed from the PQ.
 *
 *          Note: Prority queues only supports comparable data, meaning the data
 *          inserted into the PQ must be able to be ordered in some way either from
 *          least to greatest or greatest to least. This is so that we are able to
 *          assign relative priorities to each element.
 *
 *          APPLICATIONS
 *
 *              Bandwidth management
 *              Discrete event simulation
 *              Dijakstra's algothm
 *              Huffman coding
 *              Best first search Algorithms
 *              ROAM triangualtion algorithm
 *              Prim's algorithm for minimum spanning tree
 *
 *          WHEN AND WHERE IS A PQ USED
 *
 *              Used in certain implementations of dijkstra's Shortest path algorithm
 *
 *              Anytime you need the dynamically fetch the 'next best' or
 *              'next worst' element.
 *
 *              Used in Huffman Coding (which is often used for lossless data
 *              compression).
 *
 *              Best First Search(BFS) algorithms such as A* use PQs to contimuously
 *              grab the next most promising node
 *
 *              Used by Minimum Spanning Tree(MST) algorithms.
 *
 *              They are important for graph theory
 *
 *          BIG O OF PRIORITY QUEUES
 *
 *              Binary Heap construction - O(n)
 *              Polling      - O(log n)
 *              Peeking      - O(1)
 *              Adding       - O(log n)
 *
 *              Other methods:
 *
 *              Naive Removing              - O(n)
 *              Advanced removing with
 *              help from a hash table      - O(log n)
 *              Naive contains              - O(n)
 *              Contains chech wit
 *              help of a hash table        - O(1)
 *
 *              Using a hash tableto help optimize these operations does take up
 *              linear space and also adds some overhead to the binary heap implementation.
 * */
class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }

    getValue() { return this.value; }
    setValue(value) { this.value = value; }
    getPriority() { return this.priority; }
    setPriority(priority) { this.priority = priority; }
}

class MinHeap {
    constructor() {
        this.items = []; // can we use a singly linked list?
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
        [ this.items[firstIndex], this.items[secondIndex] ] =
            [ this.items[secondIndex], this.items[firstIndex] ];
    }

    peek() {
        if(!this.size) return null;
        return this.items[0];
    }

    extractMin() {
        if(!this.size) return undefined;
        let itemExtracted = this.items[0];
        this.items[0] = this.items[this.size - 1];
        this.items.pop();
        --this.size;
        // sink down
        this.sinkDown();
        return itemExtracted;
    }

    /**
     * Inserting a new node and ordering into the heap.
     * @param node
     */
    insert(node) {
        this.items.push(node);
        ++this.size;
        // bubble up
        this.bubbleUp();
        return this;
    }

    /**
     * bubbling up based on priority property of a node
     */
    bubbleUp() {
        let currentIndex = this.size - 1;
        while(this.hasParent(currentIndex) &&
            this.getParent(currentIndex).priority > this.items[currentIndex].priority) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    sinkDown() {
        let currentIndex = 0;
        let smallestChildIndex;
        while(this.hasLeftChild(currentIndex)) {
            smallestChildIndex = this.getLeftChildIndex(currentIndex);

            if(this.hasRightChild(currentIndex) &&
                (this.getRightChild(currentIndex).priority <
                this.getLeftChild(currentIndex).priority))
                smallestChildIndex = this.getRightChildIndex(currentIndex);

            if(this.items[currentIndex].priority >
                this.items[smallestChildIndex].priority)
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


class MinPriorityQueue {
    constructor() {
        this.items = new MinHeap();
    }

    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        return this.items.insert(newNode);
    }

    dequeue() {
        return this.items.extractMin();
    }

    show() {
        this.items.show();
    }

    size() {
        return this.items.size;
    }
}

exports.MinPriorityQueue = MinPriorityQueue;
