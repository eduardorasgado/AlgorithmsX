/**
 *      DATA STRUCTURES
 *
 *          There are so many data structures over this world, some of them are:
 *
 *              Binary Search trees
 *              Queues
 *              Singly Linked Lists
 *              Undirected Unweighted Graphs
 *              Binary Heaps
 *              Directed Graphs
 *              Hash Tables
 *              Doubly Linked Lists
 *              Stacks
 *              A lot of them even more...
 *
 *      WHAT DO THEY DO?
 *
 *          Data structures are collections of values, the relationships among them
 *          and the functions or operations that can be applied to the data
 *
 *      WHY SO MANY?
 *
 *          Different data structures excel at different things. Some are highly
 *          specialized, while others(like arrays) are more generally used.
 *
 *      WHY CARE?
 *
 *          The more time you spend as a developer, the more likelu you will need
 *          to use one of these data structures.
 *
 *          You have already worked with many of them unknowingly.
 *
 *          And of course... interviews.
 *
 *      USES OF DATA STRUCTURES
 *
 *          There is no one "BEST" data structure. The all excel in different situations.
 *          Otherwise why bother learning all of them.
 *
 *          Working with map/ location data? Use a graph!
 *          Need an ordered list with fast inserts/
 *              removals at the beginning and end? Use a linked list!
 *          Web scraping nested html? Use a tree
 *          Need to write a scheduler(with priorities)? Use a binary heap!
 *
 * */


/**
 * CLASSES: BLUEPRINT TO USE FOR DATA STRUCTURES
 *
 *  A blueprint for creating objects with pre-defined properties and methods.
 *
 *  Classes in JS are just syntactic sugar and we have prototypes behind the scenes.
 *
 *  We are going to implmement data structures as classes.
 * */

class Point {
    constructor(x, y, name = '') {
        this.x = x;
        this.y = y;
        this.name = name;
    }

    // class method
    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const sum = (dx * dx) + (dy * dy);
        const hyp = Math.sqrt(sum)
        return hyp;
    }

    // instance method
    setPointName(name) {
        this.name = name;
    }
}

p1 = new Point(5, 5);
p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
