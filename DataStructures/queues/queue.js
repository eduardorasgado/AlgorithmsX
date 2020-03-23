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
     *  Push method is the same implemented on singly linked list
     * @param value
     * @returns {Queue}
     */
    push(value) {
        let node = new Node(value);
        if(!this.size) this.first = this.last = node;
        else {
            this.last.setNext(node);
            this.last = node;
        }
        ++this.size;
        return this;
    }

    /**
     * Remove an element withing the list at the beginning
     */
    pop() {
    }

    toString(){utils.inspectObject(this)}
}

exports.Queue = Queue;
