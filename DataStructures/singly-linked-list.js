/**
 *      SINGLY LINKED LISTS
 *
 *          Objectives:
 *              * Define what a singly linked list is.
 *              * Compare and contrast linked lists with arrays.
 *              * Implement insertion, removal and traversal methods on singly
 *                  linked lists.
 *
 *      WHAT IS A LINKED LIST
 *
 *          A data structure that contains a head, tail and length property.
 *
 *          Linked Lists consist of nodes, and each node has a value and a pointer
 *          to another node or null.
 *
 *          Each node is only connected to ONE single node.
 *
 *      COMPARISON WITH ARRAYS
 *
 *          Lists
 *              Do not have indexes!
 *              Connected via nodes with a next pointer
 *              Random access is not allowed.
 *
 *          Arrays
 *              Indexed in order!
 *              Insertion and deletion can be expensive
 *              Can quickly be accesed at a specific index
 * */

class Node {

    constructor(val) {
        this.val = val;
        this.next = null;
    }

    // setters and getters
    getValue() {return this.val};
    setValue(newVal) {this.val = newVal}
    getNext() {return this.next;}
    setNext(next) {this.next = next;}
    toString(){console.log(this);}
}

class SinglyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(number) {
        let node = new Node(number);
    }

    // settters and getters
    getHead(){return this.head}
    setHead(newHead){this.head = newHead}
    getTail(){return this.tail}
    setTail(newTail){this.tail = newTail}
}

let first = new Node(1);
first.setNext(new Node(2))
first.getNext().setNext(new Node(3))
first.toString()
