const Utils = require('../logUtils')
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
        Utils.inspectObject(this);
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

    /**
     * @description
     * Adding a node to the end of the doubly linked list
     *
     *    Create a new node with the value passed to the function
     *    If the head property is null set the head and tail to be the newly created
     *      node
     *    If not, set the next property on the tail to be that node
     *    Set the previous property on the newly created node to be the tail
     *    Set the tail to be the newly created node
     *    Increment the length
     *    Return the doubly linked list.
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
     *    If there is no head, return undefined
     *    Store the current tail in a variable to return later
     *    If the length is 1, set the head and tail to be null
     *    Update the tail to be the previous node
     *    Set the newTail's next to null
     *    Decrement the length
     *    Return the value removed.
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

    /**
     * * @description
     * Removing a node from the beginning of the list
     *
     *  If length is 0, return undefined
     *  Store the current head property in a variable(we will call it old head)
     *  If the length is one
     *      Set the head to be null
     *      Set the tail to be null
     *  Update the head to be the next of the old head
     *  Set the head's prev property to null
     *  Set the old head's next to null
     *  Decrement the length
     *  Return old head.
     *
     * @returns {Node|undefined}
     */
    shift() {
        let lastHead = this.head;
        if(!this.head) return undefined;
        if(this.length > 1){
            this.head = lastHead.getNext();
            this.head.setPrev(null);
            // removing any pointer from node to be returned(removed)
            lastHead.setNext(null);
        } else {
            this.head = this.tail = null;
        }
        --this.length;
        return lastHead;
    }

    /**
     * @description
     * Adding a node to the beginning of the list
     *
     *  Create a new node with the value passed to the function
     *  If the length is 0
     *      Set the head to be the new node
     *      Set the tail to be the new node
     *  Otherwise
     *      Set the prev property on the head of the list to be the new node
     *      Set the next property on the new node to be the head property
     *      Update the head to be the new node
     *  Increment the length
     *  Return the list.
     *
     * @param value - whaterver the user wants to append to list
     * @returns {DoublyLinkedList}
     */
    unshift(value) {
        let newNode = new Node(value);
        if(!this.head) this.head = this.tail = newNode;
        else {
            this.head.setPrev(newNode)
            newNode.setNext(this.head);
            this.head = newNode;
        }
        ++this.length;
        return this;
    }

    /**
     * @description
     * Accessing a node in a list by its position
     *
     *  If the index is less than 0 or greater or equial to the length, return null
     *  If the index is less than or equal to half the length of the list
     *      Loop through the list starting from the head and loop towards the middle
     *      Return the noce once it is found
     *  If the index is greater than half the length of the list
     *      Loop through the list starting from the tail and loop towards the middle
     *      Return the node once it is found.
     *
     * @param index
     * @returns {Node|null}
     */
    get(index) {
        if(this.head && index > 0 && index < this.length) {
            // search into two halves
            let half = Math.floor(this.length / 2);
            let currentNode;
            let i;
            if(index < half){
                // looking for from beggining
                i = 0
                currentNode = this.head;

                while (i < index) {
                    currentNode = currentNode.getNext();
                    ++i;
                }
            } else {
                // looking for from end
                i = this.length - 1
                currentNode = this.tail;
                while (i > index) {
                    currentNode = currentNode.getPrev();
                    --i;
                }
            }
            return currentNode;
        }
        return null;
    }

    /**
     * @description
     * Replacing the value of a node to the in a doubly linked list
     *
     *  Create a variable which is the result of the get method at the index passed
     *  to the function
     *      If the get method returns a valud node, se the value of that node to
     *      be the value passed to the function
     *      Return true
     *  Otherwise, return false.
     *
     * @param index
     * @param value
     * @returns {boolean}
     */
    set(index, value) {
        let node = this.get(index);
        if(!node) return false;
        node.setValue(value);
        return true;
    }

    /**
     * @description
     * Adding a node in a doubly linked list by a certain position
     *
     *  If the index is less than zero or greater than or rquial to the length
     *      return false
     *  If the index is 0, unshift
     *  If the index is the same as the length, push
     *  Use th eget method to access the index - 1
     *  Set the next and prev properties on the correct nodes to linked everything
     *      together
     *  Set the next and prev propeertties on the correct nodes to link everything
     *      together
     *  Increment the length
     *  Return true.
     *
     * @param index
     * @param value
     * @returns {boolean}
     */
    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        else if(index === this.length) this.push(value);
        else if(index === 0) this.unshift(value);
        else {
            // adding a node between 1 and length - 1
            let newNode = new Node(value);

            // course solution
            // let nodeBeforeIndex = this.get(index-1);
            // newNode.setPrev(nodeBeforeIndex);
            // newNode.setNext(nodeBeforeIndex.getNext());
            // nodeBeforeIndex.getNext().setPrev(newNode);
            // nodeBeforeIndex.setNext(newNode);

            let lastNode = this.get(index);
            // updating newNode next and prev
            newNode.setPrev(lastNode.getPrev());
            newNode.setNext(lastNode);
            // updating last node at index - 1 position's next as new node
            lastNode.getPrev().setNext(newNode)
            // update last node at index position's prev as new node
            lastNode.setPrev(newNode)

            ++this.length;
        }
        return true;
    }

    /**
     * @description
     * Removing a node in a list by a certain position
     *
     * @param index
     * @returns {Node|undefined} the node removed
     */
    remove(index) {
        if(!this.head || index < 0 || index >= this.length) return undefined;
        else if(index === 0) return this.shift();
        else if(index === this.length - 1) return this.pop();
        else {
            // removing an element between 1 and length -1
            let beforeNode = this.get(index-1);
            let nodeToRemove = beforeNode.getNext()
            nodeToRemove.getNext().setPrev(beforeNode);
            beforeNode.setNext(nodeToRemove.getNext());

            // any pointers within deleted node should dissapear
            nodeToRemove.setNext(null)
            nodeToRemove.setPrev(null)
            --this.length;
            return nodeToRemove;
        }
    }

    // GETTERS AND SETTERS
    getHead() {return this.head;}
    setHead(head) {this.head = head;}
    getTail() {return this.tail;}
    setTail(tail) {this.tail = tail;}
    getLength() {return this.length;}

    /**
     * @override toString method from object
     */
    toString() {
        Utils.inspectObject(this);
    }
}

exports.DoublyLinkedList = DoublyLinkedList;
exports.Node = Node;
