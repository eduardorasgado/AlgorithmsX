const { MinHeap } = require("./min-heap");
/**
 *      PRIORITY QUEUES
 *
 *          WHAT ARE PQs?
 *
 *          A priority queue is an abstract data type which is like a regular queue
 *          or stack data structure, but where additionally each element has a
 *          "priority" associated with it. In a priority queue, an element with a
 *          higher priority is served before an element with low priority.
 *
 *          While priority queues are often implemented with heaps, they are
 *          conceptually distinct from heaps. A priority queue is a concept like
 *          a list or a map, just as a list can be impleemented with a linked list
 *          or an array, a priority queue can be implemented with a heap.
 *
 *          To improve performance, priority queues typically use a heap as their
 *          backbone, giving O(log n) performance for inserts and removals,
 *          and O(n) to built initially from a set of n elements.
 *
 *          Is an Abstrack Data Type(ADT) that operates similar to a normal queue
 *          except that each element has a certain priority.
 *
 *          The priority of the elements in the PQ dtermine the order in which
 *          elements are removed from the PQ.
 *
 *          Note: Prority queues only supports comparable data, meaning the data
 *          inserted into the PQ must be able to be ordered in some way either from
 *          least to greatest or greatest to least. This is so that we are able to
 *          assign relative priorities to each element.
 *
 *          APPLICATIONS
 *
 *              Bandwidth management
 *              Discrete event simulation
 *              Dijakstra's algothm
 *              Huffman coding
 *              Best first search Algorithms
 *              ROAM triangualtion algorithm
 *              Prim's algorithm for minimum spanning tree
 *
 *          WHEN AND WHERE IS A PQ USED
 *
 *              Used in certain implementations of dijkstra's Shortest path algorithm
 *
 *              Anytime you need the dynamically fetch the 'next best' or
 *              'next worst' element.
 *
 *              Used in Huffman Coding (which is often used for lossless data
 *              compression).
 *
 *              Best First Search(BFS) algorithms such as A* use PQs to contimuously
 *              grab the next most promising node
 *
 *              Used by Minimum Spanning Tree(MST) algorithms.
 *
 *              They are important for graph theory
 *
 *          BIG O OF PRIORITY QUEUES
 *
 *              Binary Heap construction - O(n)
 *              Polling      - O(log n)
 *              Peeking      - O(1)
 *              Adding       - O(log n)
 *
 *              Other methods:
 *
 *              Naive Removing              - O(n)
 *              Advanced removing with
 *              help from a hash table      - O(log n)
 *              Naive contains              - O(n)
 *              Contains chech wit
 *              help of a hash table        - O(1)
 *
 *              Using a hash tableto help optimize these operations does take up
 *              linear space and also adds some overhead to the binary heap implementation.
 * */

class MinPriorityQueue {
    constructor() {
        this.items = new MinHeap();
    }

    add(value) {
        return this.items.insert(value);
    }

    poll() {
        return this.items.poll();
    }

    show() {
        this.items.show();
    }

    size() {
        return this.items.size;
    }
}

exports.MinPriorityQueue = MinPriorityQueue;
