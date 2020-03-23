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
}
