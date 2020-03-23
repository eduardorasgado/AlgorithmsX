const utils = require("../logUtils")
/**
 *      QUEUES
 *
 *          OBJECTIVES
 *
 *              Define what a queue is
 *              Understand use cases for a queue
 *
 *          WHAT IS A QUEUE
 *
 *              A FIFO data structure (First In First Out)
 *
 *          USE CASES
 *
 *              Background tasks
 *              Uploading resources
 *              Printing / Task processing
 *
 *          Enqueue - insert element within an array
 *          Dequeue - remove element within an array
 *
 *          BIG O OF QUEUES
 *
 *              Insertion - O(1)  *
 *              Removal   - O(1)  *
 *              Searching - O(n)
 *              Access    - O(n)
 *
 *           * The reason you choose queues.
 *
 *          RECAP
 *
 *              Queues are a FIFO data structure, all elements are first in first
 *              out
 *
 *              Queues are useful for processing task and are foundational for
 *              more complex data structures.
 *
 *              Insertion and removal can be done in O(1)
 * */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    getValue() {return this.value};
    setValue(newVal) {this.value = newVal}
    getNext() {return this.next;}
    setNext(next) {this.next = next;}
    toString(){utils.inspectObject(this)}
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /**
     * @description
     * Insert an element to the queue at the end
     *  Enqueue method is push method on singly linked list
     * @param value
     * @returns {number}
     */
    enqueue(value) {
        let node = new Node(value);
        if(!this.size) this.first = this.last = node;
        else {
            this.last.setNext(node);
            this.last = node;
        }
        return ++this.size;
    }

    /**
     * Remove an element withing the list at the beginning
     *  Dequeue method is shift method in singly linked list
     * @returns {Node|undefined}
     */
    dequeue() {
        if(!this.size) return null;
        if(this.size === 1) this.last = null;
        let oldFirst = this.first;
        this.first = this.first.getNext();
        oldFirst.setNext(null);
        --this.size;
        return oldFirst.getValue();
    }

    toString(){utils.inspectObject(this)}
}

exports.Queue = Queue;
