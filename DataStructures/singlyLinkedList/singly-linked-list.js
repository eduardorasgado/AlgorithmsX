const Utils = require('../logUtils');
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
     *  This function should accept a value
     *  Create a new node using the value passed to the function
     *  If there is no head property on the list, set the head and tail to be the
     *  newly created node
     *  Otherwise set the next property on the tail to be the new node and set the
     *  tail property o the list to be the newly created node.
     *  Increment the length by one.
     *  Return the linked list
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
     *
     *  If there are no nodes in the list, return undefined.
     *  Loop through the list until reach the tail.
     *  Set the next property of the 2nd to last node to be null
     *  Set the tail to be the 2nd to last node
     *  Decrement the length of the list by one
     *  Return the linked list
     */
    pop(){
        // remove nothing if no elements within the list
        if(!this.length) return undefined;
        // remove only if list length is greater than 1
        if(this.length > 1) {
            let itemToRemove = this.head; // current item
            let newTail = itemToRemove;
            while(itemToRemove.getNext()){
                newTail = itemToRemove;
                itemToRemove = itemToRemove.getNext();
            }
            // this affects to head and tail at the same time cuz newTail is a
            // pointer to (last item in head) - 1
            newTail.setNext(null);
            this.tail = newTail;
        }else {
            // removing the last element, when list has only one item
            this.tail = this.head = null;
        }
        --this.length;
        return this;
    }

    /**
     * Removing  a new node from the beginning of the linked list
     *
     *  If there are no nodes, return undefined
     *  Store the current head property in a variable
     *  Set the head property to e the current head's next property
     *  Decrement the length by one
     *  Return the value of the node removed
     */
    shift() {
        // cannot shift an empty list
        if(!this.head) return undefined;
        // in case we have one element within the list we should set tail to be null too
        if(this.length == 1) this.tail = null;

        // current head is a pointer to the node n1
        let currentHead = this.head
        // this head is a pointer to the next node n2
        this.head = currentHead.getNext();

        --this.length;
        // returning last state of head, including n1
        return currentHead;
    }

    /**
     * Adding a new node to the beggining of the linked list
     *
     *  This function should accept a value.
     *  Create a new node using the value passed to the function.
     *  If there is no head property on the list, set the head and tail to be the
     *      newly created node.
     *  Otherwise se the newly created node's next property to be the current head
     *      property on the list.
     *  Set the head property on the list to be that newly created node.
     *  Increment the length of the list by 1
     *  Return the linked list
     */
    unshift(value) {
        let node = new Node(value);
        if(!this.head) this.head = this.tail = node; // no elements within list
        else {
            // n0.next = n1
            node.setNext(this.head);
            // pointing to n0 node
            this.head = node;
        }
        ++this.length;
        return this;
    }

    /**
     * Retreiving a node by its position in the linked list
     *
     *  This function should accept an index
     *  If the index is less than zero or greater than or equal to the length of
     *      the list, return null
     *  Loop through the list until you reach the index and return the node at
     *      that specific index.
     *
     * @param position
     * @returns {Node}
     */
    get(index) {
        if(index >=0 && index <= this.length-1){
            let currentNode = this.head;
            for (let i = 0; i < index; i++)
                currentNode = currentNode.getNext();
            return currentNode;
        }
        // if no elements within list or index refers to over sizze list length
        return null;
    }

    /**
     * Changing the value of a node based on it's position in the linked list
     *
     *  This function should accept a value and an index
     *  Use your get function to find the specific node
     *  If the node is not found return false
     *  If the node is found, set the value of that node to be the value
     *      passed to the function and return true.
     *
     * @param index
     * @param value
     * @returns {boolean}
     */
    set(index, value) {
        let currentNode = this.get(index);
        if(!currentNode) return false;
        currentNode.setValue(value);
        return true;
    }

    /**
     * Adding a node to the linked list at a specific location
     *
     *  If the index is less than zero or greater than the length, return false
     *  If the index is the same as the length, push a new node to the end of the list
     *  If the index is zero, unshift a new node to the start of the list
     *  Otherwise using the GET method, access the node at the index - 1
     *  Set the next property on that node to be the new node
     *  Set the next property on the new node to be the previous next
     *  Increment the length
     *  Return true
     *
     * @param index
     * @param value
     * @returns {boolean}
     */
    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        else if(index == 0) return this.unshift(value);
        else if(index == this.length) this.push(value);
        else {
            let newNode = new Node(value);
            // insert in any place from 1 up to this.length-1
            let currentNode = this.get(index-1);
            let postNode = currentNode.getNext();
            currentNode.setNext(newNode);
            newNode.setNext(postNode);
            ++this.length;
        }
        return true;
    }

    /**
     * Removing a node from the linked list at a specific position
     *
     * @param index
     * @returns {null}
     */
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        else if(index == 0) return this.shift().getValue();
        else if(index == this.length - 1) {
            let lastNode = this.getTail().getValue();
            this.pop();
            return lastNode;
        }
        else {
            let currentNode = this.get(index-1);
            let nodeToRemove = currentNode.getNext();
            let postRemovedNode = nodeToRemove.getNext();
            currentNode.setNext(postRemovedNode);
            --this.length;
            return nodeToRemove.getValue();
        }
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


exports.SinglyLinkedList = SinglyLinkedList;
