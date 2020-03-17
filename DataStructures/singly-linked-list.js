const Utils = require('./logUtils');
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
    toString(){Utils.inspectObject(this)}
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
     * Otherwise set the next property on the tail to be the new node and set the
     * tail property o the list to be the newly created node.
     * Increment the length by one.
     * Return the linked list
     * */
    push(value) {
        let node = new Node(value);
        if(this.head == null) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            // we just add the last node to avoid traversing the whole list
            // we take benefit from pointer tail that points to node
            // n1 __nx__>             T1
            // |\       n2 __nx__>    T2
            // h t(t1)  |         n3
            //         t(t2)      |
            //                   t(t3) ...
            this.tail.setNext(node)
            this.tail = node
        }
        ++this.length;
        return this;
    }

    /**
     * Removing a node from the end of the linked List
     */
    pop(){
        // remove only if list length is greater than 1
        if(this.length > 1) {
            let newTail = null;
            let itemToRemove = this.head;
            while(itemToRemove.getNext() != null){
                newTail = itemToRemove;
                itemToRemove = itemToRemove.getNext();
            }
            this.tail = newTail;
            this.tail.setNext(null);
        }else {
            // removing the last element, when list has only one item
            this.tail = this.head = null;
        }
        --this.length;
        return this;
    }

    // settters and getters
    getHead(){return this.head;}
    setHead(newHead){this.head = newHead;}
    getTail(){return this.tail;}
    setTail(newTail){this.tail = newTail;}

    toString(){
        Utils.inspectObject(this);
    }
}

// Understanding how Node class helps to create a singly linked list
// let first = new Node(1);
// first.setNext(new Node(2))
// first.getNext().setNext(new Node(3))
// first.toString()
// console.log("--------");

let l1 = new SinglyLinkedList();

[1, 10, 100, 1000, 2000].map((n) => {
    l1.push(n)
});
l1.toString()
console.log("---------POPPING-----------");

l1.pop().toString();
l1.pop().toString();
l1.pop().toString();
l1.pop().toString();
l1.pop().toString();
console.log("--------PUSHING------------");

[1, 10, 100].map((n) => {
    l1.push(n)
});
l1.toString();
