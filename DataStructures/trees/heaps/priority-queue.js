const { MinHeap } = require("./min-heap");
/**
 *      PRIORITY QUEUES
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
 * */

class MinPriorityQueue {
    constructor() {
        this.items = new MinHeap();
    }
}

exports.MinPriorityQueue = MinPriorityQueue;
