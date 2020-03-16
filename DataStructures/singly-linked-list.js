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
    constructor() {
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
    }
}
