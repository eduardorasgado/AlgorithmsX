
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

    getValue() {return this.value;}
    setValue(value) {this.value = value;}
    getNext() {return this.next;}
    setNext(next) {this.next = next;}
    getPrev() {return this.prev;}
    setPrev(prev) {this.prev = prev;}

}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    getHead() {return this.head;}
    setHead(head) {this.head = head;}
    getTail() {return this.tail;}
    setTail(tail) {this.tail = tail;}
    getLength() {return this.length;}
}

exports.DoublyLinkedList = DoublyLinkedList;
exports.Node = Node;
