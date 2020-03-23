const Utils  = require("../logUtils");
/**
 *  STACKS
 *
 *      OBJECTIVES
 *        - Define what a stack is
 *        - Undestand use cases for a stack
 *        - Implement operations on a stack data structure
 *
 *      WHAT IS A STACK?
 *
 *          A LIFO data structure (Last In, First out).
 *
 *          The last element added to the stack will be the first element removed
 *          from the stack.
 *
 *      HOW IS IT USED?
 *
 *          Think about a stack of plates, or a stack of markers, or a stack
 *          of... anything.
 *          As you pile it up the last thing(or the topmost thing) is what gets
 *          removed first.
 *
 *      HOW WE WILL VISUALIZE A STACK
 *
 *          A series of nodes
 *
 *          last    size = 4     first
 *          ________________________
 *          |                      |
 *          10  <-  2  <-  22  <- 7
 *
 *      WHERE STACKS ARE USED
 *
 *          - Managing function invocations
 *          - Undo/Redo
 *          - Routing (the history object) is treated like a stack.
 *
 *      There is more than one way to implement a stack
 *
 * */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    getValue() {return this.val};
    setValue(newVal) {this.val = newVal}
    getNext() {return this.next;}
    setNext(next) {this.next = next;}
    toString(){Utils.inspectObject(this)}
}

/**
 * Stack implementation using a linked list
 * @class
 */
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /**
     * * Add a value to the top of the stack
     * pushing at the beggining of the stack(unshift in a singly linked list)
     *
     * @param value
     * @returns {Stack}
     */
    push(value) {
        let node = new Node(value);
        if(!this.first) this.first = this.last = node; // no elements within list
        else {
            let currentFirst = this.first;
            this.first = node;
            node.setNext(currentFirst);
        }
        ++this.size;
        return this;
    }

    /**
     * Removing at the beginning of the list
     *
     * Based on singly linked list shift method.
     * Removing at the beginning of the stack
     *
     * @returns {null|undefined}
     */
    pop() {
        if(!this.first) return undefined;
        if(this.size === 1) this.last = null;
        let currentHead = this.first
        this.first = currentHead.getNext();

        --this.size;
        return currentHead;
    }

    toString(){
        Utils.inspectObject(this);
    }
}

exports.Stack = Stack;
