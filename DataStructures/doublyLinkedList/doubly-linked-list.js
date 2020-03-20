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
 * @class
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

/**
 * Creates a Doubly Linked List object
 * @class
 */
class DoublyLinkedList {
    constructor() {
        // pointers to nodes
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
     * @description
     * Adding a node to the end of the doubly linked list
     *
     *  Create a new node with the value passed to the function
     *  If the head property is null set the head and tail to be the newly created
     *      node
     *  If not, set the next property on the tail to be that node
     *  Set the previous property on the newly created node to be the tail
     *  Set the tail to be the newly created node
     *  Increment the length
     *  Return the doubly linked list.
     *
     * @param value
     * @returns {DoublyLinkedList}
     */
    push(value) {
        let newNode = new Node(value);
        if(!this.length) this.head = this.tail = newNode;
        else {
            let oldlastNode = this.tail;
            newNode.setPrev(oldlastNode)
            this.tail = newNode;
            oldlastNode.setNext(this.tail);
        }
        ++this.length;
        return this;
    }

    /**
     *  @description
     *  Removing a node from the end of the doubly linked list
     *
     *  If there is no head, return undefined
     *  Store the current tail in a variable to return later
     *  If the length is 1, set the head and tail to be null
     *  Update the tail to be the previous node
     *  Set the newTail's next to null
     *  Decrement the length
     *  Return the value removed.
     *
     * @returns {null|undefined}
     */
    pop() {
        if(!this.length) return undefined;
        let oldTail = this.tail;
        if(this.length > 1) {
            this.tail = oldTail.getPrev();
            this.tail.setNext(null);
            // Every linked node to oldTail must disappear.
            oldTail.setPrev(null);
        } else {
            this.head = this.tail = null;
        }
        --this.length;
        return oldTail;
    }
}

exports.DoublyLinkedList = DoublyLinkedList;
exports.Node = Node;
