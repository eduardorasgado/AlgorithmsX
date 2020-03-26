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

// before anything we need a queue
const { Queue } = require("./queue");

/**
 * BREADTH FIRST SEACH PSEUDOCODE
 *
 *  Create a queue and a variable to store the values of nodes visited.
 *  Place the root node in the queue
 *  Loop as long as there is anything in the queue
 *      - Dequeue a node from the queue and push the value of the node into the
 *        variable that stores the nodes
 *        If there is a left property on the node dequeued - add it to the queue
 *        If there is a right property on the node dequeued - add it to the queue
 *  Return the variable that stores the values
 * */
