const utils = require('../logUtils')
/**
 *      DOUBLY LINKED LISTS
 *
 *      Objectives:
 *
 *          Construct a Doubly Linked List
 *
 *          Compare and contrast Doubly and Singly Linked Lists
 *
 *          Implement basic operations on a Doubly linked List
 *
 *      WE KNOW WHAT LISTS ARE... BUT DOUBLY?
 *
 *          Almost identical to Singly Linked lists, except every node has another
 *          pointer, to the previous node.
 *                       ____________________
 *                      |                   |
 *               null<- 12  ->  9  -> 5 -> 14 ->null
 *                         <-     <-    <-
 *
 *      COMPARISONS WITH SINGLY LINKED LIST
 *
 *          More memory == more flexibility
 *          It's almost always a trade off
 *
 *          sll = one direction pointer
 *          dll = both/ two direction pointers
 *
 * */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    // GETTERS AND SETTERS
    getValue() {return this.value;}
    setValue(value) {this.value = value;}
    getNext() {return this.next;}
    setNext(next) {this.next = next;}
    getPrev() {return this.prev;}
    setPrev(prev) {this.prev = prev;}

    toString() {
        console.log(utils.inspectObject(this))
    }

}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // GETTERS AND SETTERS
    getHead() {return this.head;}
    setHead(head) {this.head = head;}
    getTail() {return this.tail;}
    setTail(tail) {this.tail = tail;}
    getLength() {return this.length;}

    toString() {
        console.log(utils.inspectObject(this))
    }

    /**
     * Adding a node to the end of the doubly linked list
     *
     * @param value
     * @returns {DoublyLinkedList}
     */
    push(value) {
        let node = new Node(value);
        if(!this.length) this.head = this.tail = node;
        else {
            let lastNode = this.tail;
            this.tail = node;
            this.tail.setPrev(lastNode);
            lastNode.setNext(this.tail);
        }
        ++this.length;
        return this;
    }
}

exports.DoublyLinkedList = DoublyLinkedList;
exports.Node = Node;
