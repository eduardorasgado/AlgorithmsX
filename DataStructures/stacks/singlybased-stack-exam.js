const Utilities = require("../logUtils");

// implementing a singly linked list based traversal
// Stacks are a LIFO structure, First input First Output
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    getValue() { return this.value; }
    setValue(value) { this.value = value; }
    getNext() { return this.next; }
    setNext(next) { this.next = next; }
    toString() { Utilities.inspectObject(this) }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // push
    // push method is based on unshift method of singly linked list
    push(value) {
        if(value == undefined) return undefined;
        let newNode = new Node(value);
        if(!this.head) this.head = this.tail = newNode;
        else {
            newNode.setNext(this.head);
            this.head = newNode;
        }
        ++this.length;
        return newNode;
    }

    // push method is based on shift method of singly linked list
    pop() {
        if(!this.head) return undefined;
        if(this.length === 1) this.tail = null;
        let popped = this.head;
        this.head = this.head.getNext();
        popped.setNext(null);
        --this.length;
        return popped;
    }

    toString() { Utilities.inspectObject(this) }
}


let s1 = new Stack();
console.log("----pushing----");
console.log(s1.push("FIRST"));
console.log(s1.push("SECOND"));
console.log(s1.push("THIRD"));
console.log(s1.push("FOURTH"));
s1.toString();
console.log("----popping----");
s1.pop().toString();
s1.toString()
console.log(s1.pop());
s1.toString()
console.log(s1.pop());
s1.toString()
console.log(s1.pop());
s1.toString();
console.log(s1.pop());
