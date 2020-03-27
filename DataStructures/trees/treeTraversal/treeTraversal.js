const Utilities = require("../log-utils");
const { Queue } = require("./queue");
const { BinarySearchTree } = require("./binary-search-tree")
/**
 *      TREE TRAVERSAL
 *
 *          WHAT IS TREE TRAVERSAL
 *              Whatever tree, visiting every node once.
 *              In computer science, tree traversal (also known as tree search) is a
 *              form of graph traversal and refers to the process of visiting (checking
 *              and/or updating) each node in a tree data structure, exactly once.
 *              Such traversals are classified by the order in which the nodes are visited.
 *
 *
 *          TRAVERSING A TREE
 *
 *              Two ways:
 *                  - Breadth-first Search (BFS)
 *                      Level order
 *
 *                  - Depth-first Search (DFS)
 *                      In order
 *                      Preorder
 *                      PostOrder
 *
 *
 *
 *          APPLICATIONS
 *
 *              Pre-order traversal can be used to make a prefix expression (Polish notation)
 *              from expression trees: traverse the expression tree pre-orderly.
 *              For example, traversing the depicted arithmetic expression
 *              in pre-order yields "+ * A - B C + D E".
 *
 *              Post-order traversal can generate a postfix representation
 *              (Reverse Polish notation) of a binary tree. Traversing the depicted
 *              arithmetic expression in post-order yields "A B C - * D E + +";
 *              the latter can easily be transformed into machine code to evaluate
 *              the expression by a stack machine.
 *
 *              In-order traversal is very commonly used on binary search trees
 *              because it returns values from the underlying set in order, according
 *              to the comparator that set up the binary search tree (hence the name).
 *
 *              Post-order traversal while deleting or freeing nodes and values can
 *              delete or free an entire binary tree. Thereby the node is freed after freeing its children.
 *              Also the duplication of a binary tree yields a post-order sequence of actions,
 *              because the pointer copy to the copy of a node is assigned to the corresponding
 *              child field N.child within the copy of the parent N immediately
 *              after returncopy in the recursive procedure. This means that the parent
 *              cannot be finished before all children are finished.
 *
 *
 *           BREADTH FIRST SEARCH
 *              Searching at the same level at a time
 *
 *
 * */

class BSTree extends BinarySearchTree {
    constructor() {
        super();
    }


    /**
     * * BREADTH FIRST SEACH
     *
     *  Traversing the whole tree one time per node bur in level order:
     *     ->      ____10______
     *     ->  __ 6__    ->    15__
     *     -> 3 ->   8   ->       20
     *
     *  Create a queue and a variable to store the values of nodes visited.
     *  Place the root node in the queue
     *  Loop as long as there is anything in the queue
     *      - Dequeue a node from the queue and push the value of the node into the
     *        variable that stores the nodes
     *      - If there is a left property on the node dequeued - add it to the queue
     *      - If there is a right property on the node dequeued - add it to the queue
     *  Return the variable that stores the values
     *
     * @returns {[]}
     */
    breadthFirstSearch() {
        let visited = [];
        let queue = new Queue();
        queue.enqueue(this.root);
        while(queue.getLength()) {
            let dequeued = queue.dequeue();
            visited.push(dequeued.getValue());
            for(let child in dequeued){
                // for every child within current dequeued BST node, but value prop.
                // this mean we can use BFS method in every node existing
                // comparison with value is for every non child prop within the node constructor
                if(dequeued.hasOwnProperty(child) && child !== "value") {
                    queue.enqueue(dequeued[child])
                }
            }
        }
        return visited
    }

    bfsExam() {
        let visited = [];
        let queue = new Queue();
        let currentNode = this.root;
        queue.enqueue(currentNode);
        let dequeued;
        while(queue.getLength()){
            dequeued = queue.dequeue();
            visited.push(dequeued.getValue());
            if(dequeued.getLeft())
                queue.enqueue(dequeued.getLeft());
            if(dequeued.getRight())
                queue.enqueue(dequeued.getRight());
        }
        return visited;
    }

    /**
     *      DEPTH FIRST SEARCH - Pre Order
     *
     *          ____10______
     *      __ 6__          15__
     *     3      8            20
     *
     *     preOrder = [10, 6, 3, 8, 15, 20]
     *
     * @param value
     */
    deepFirstSeachPreOrder() {
        let visited = []
        // current root will store the base root for every child and
        let currentRoot = this.root;
        visited.push(currentRoot.getValue());
        if(currentRoot.getLeft()) {
            this.root = currentRoot.getLeft();
            visited = visited.concat(this.deepFirstSeachPreOrder());
        }
        //console.log("post",currentRoot)
        if(currentRoot.getRight()) {
            this.root = currentRoot.getRight();
            visited = visited.concat(this.deepFirstSeachPreOrder());
        }
        this.root = currentRoot;
        // if no left and right, means current was a leaf
        return visited;
    }
}

exports.BSTree = BSTree;