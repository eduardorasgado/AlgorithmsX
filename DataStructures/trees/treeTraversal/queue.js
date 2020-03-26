const Utils = require("../log-utils");

// implementing a queue using singly linked list
// queues are FIFO structures
// FIRST INPUT FIRST OUTPUT

// singly node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    getValue() { return this.value; }
    setValue(value) { this.value = value; }
    getNext() { return this.next; }
    setNext(next) { this.next = next; }
    toString() { Utils.inspectObject(this) }
}

// queues are based on singly linked list operations
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // inserting element into the queue
    // using singly linked list push method
    unqueue(value) {
        if(value == undefined) return this;
        let newNode = new Node(value);
        if(!this.head) this.head = this.tail = newNode;
        else {
            this.tail.setNext(newNode);
            this.tail = newNode;
        }
        ++this.length;
        return this;
    }

    // removing the first element was inserted into the queue
    // using the shift method of a singly linked list
    dequeue() {
        if(!this.head) return undefined;
        if(this.head === this.tail) this.tail = null;
        let dequeued = this.head;
        this.head = this.head.getNext()
        dequeued.setNext(null);
        --this.length;
        return dequeued.getValue();
    }

    toString() { Utils.inspectObject(this) }
}

exports.Queue = Queue;
