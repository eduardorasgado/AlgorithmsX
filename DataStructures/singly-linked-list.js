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
        // pointers
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Adding a new node at the end of the linked list
     *
     * This function should accept a value
     * Create a new node using the value passed to the function
     * If there is no head property on the list, set the head and tail to be the
     * newly created node
     * Otherwise set the next property on the tail to be the new
     * */
    push(value) {
        let node = new Node(value);
        if(this.head == null) {
            this.head = node;
            this.tail = node;
        }
        else {
            // we just traverse the last node to avoid traversing the whole list
            this.tail.setNext(node)
            this.tail = node
        }
        ++this.length;
    }

    // settters and getters
    getHead(){return this.head}
    setHead(newHead){this.head = newHead}
    getTail(){return this.tail}
    setTail(newTail){this.tail = newTail}

    toString(){
        console.log('node is: ', this.getHead());
    }
}

let first = new Node(1);
first.setNext(new Node(2))
first.getNext().setNext(new Node(3))
first.toString()
console.log("--------");

let l1 = new SinglyLinkedList();
l1.push(1)
l1.push(10)
l1.push(100)
l1.push(1000)
l1.push(2000)
l1.toString()
