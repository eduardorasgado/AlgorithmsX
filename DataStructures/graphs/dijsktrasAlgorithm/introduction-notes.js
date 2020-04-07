/**
 *      DIJKSTRA'S ALGORITHMS
 *
 *          OBJECTIVES
 *
 *              Understand the importance of Dijkstra's
 *              Implement a Weighted Graph
 *              Walk through the steps of Dijkstra's
 *              Implement Dijkstra's using a naive priority queue
 *              Implement Dijkstra's using a binary heap priority queue
 *
 *          WHAT IS IT
 *
 *              One of the most famous and widely ised algorithms around.
 *
 *              Finds the shortest path between two vertices on a graph.
 *
 *              To find: What is the fastest way to get from point A to point B?
 *
 *              Edsger Dijkstra was a Dutch programmer, physicist, essayist and all
 *              around smarty pants. He helped to adnace the field of computer
 *              science from an "art" to an academic discipline.
 *              Many of his discoveries and algorithms are still commonly used to
 *              this day.
 * */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

/**
 * Min Binary heap priority queue
 */
class PriorityQueue {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    getLeftChildIndex(parentIndex) {
        //
    }
    getRightChildIndex(parentIndex) {
        //
    }
    getParentIndex(childIndex) {
        //
    }
    hasLeftChild(parentIndex) {
        //
    }
    hasRightChild(parentIndex) {
        //
    }
    hasParent(childIndex) {
        //
    }
    getLeftChild(parentIndex) {
        //
    }
    getRightChild(parentIndex) {
        //
    }
    getParent(childIndex) {
        //
    }

    swap(firstIndex, secondIndex) {
        //
    }

    peek() {
        //
    }

    dequeue() {
        //
    }

    enqueue(value) {
        let node = new Node(value);
        if(!this.root) this.root = node;
        ++this.size;
        this.bubbleUp();
        return this;
        //
    }

    bubbleUp() {
        //
    }

    sinkDown() {
        //
    }
}
