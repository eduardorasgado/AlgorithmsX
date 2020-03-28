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
 *          BFS VS DFS WHEN TO USE THEM?
 *
 *              It depends.
 *
 *              BREADTH FIRST SEARCH
 *              json is a good way to apply
 *
 *              DEEP FIRST SEARCH
 *              in order is commonly used in BST's
 *                  We can use this because we get all nodes in the tree in their
 *                  underlying order
 *              Pre order, can be used to "export" a tree strructure so that is
 *                  easyly reconstructed or copied.
 *
 *          RECAP
 *
 *              Trees are non linear data structures that contain a root and child
 *              nodes
 *
 *              Binary trees can have values of any type, but at most two children
 *              for each parent
 *
 *              Binary Search Trees are a more specific version of binary trees
 *              where every node to the left of a parent is less than it's value and
 *              every node to the right is greater.
 *
 *              We can search through Trees using BFS and DFS
 *
 * */

class BSTree extends BinarySearchTree {
    constructor() {
        super();
    }


    /**
     * BREADTH FIRST SEACH
     *
     *  Traversing the whole tree one time per node bur in level order:
     *     ->      ____10______
     *     ->  __ 6__    ->    15__
     *     -> 3 ->   8   ->       20
     *
     * STEPS
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
            let child;
            for(child in dequeued)
                if(dequeued.hasOwnProperty(child) && child !== 'value')
                    if(dequeued[child])
                        queue.enqueue(dequeued[child])
        }
        return visited;
    }

    /**
     *      DEPTH FIRST SEARCH - PRE ORDER
     *
     *          ____10______
     *      __ 6__          15__
     *     3      8            20
     *
     *     preOrder = [10, 6, 3, 8, 15, 20]
     *
     * STEPS
     *  Create a variable to store the values of nodes visited
     *  Store the root of the bst in a variable called current
     *  Write a helper function which accepts a node
     *      - Push the value of the node to the variable that stores the values
     *      - If the node has a left property, call the helper function with the
     *        left property on the node
     *      - If the node has a right property, call the helper function with the
     *        right property on the node
     *  Invoke the helper function with the current variable
     *  Return the array of values
     *
     * @returns {[]}
     */
    deepFirstSeachPreOrder() {
        let visited = []
        // current root will store the base root for every child, to be reassigned later
        let currentRoot = this.root;
        visited.push(currentRoot.getValue());
        let child;
        // pre order for every children node has
        for(child in currentRoot) {
            if(currentRoot.hasOwnProperty(child) && child !== "value") {
                if(currentRoot[child]){
                    this.root = currentRoot[child];
                    visited = visited.concat(this.deepFirstSeachPreOrder());
                }
            }
        }
        this.root = currentRoot; // root reasignation to recover the original root in recursion backwards
        // if no left and right, means current was a leaf
        return visited;
    }

    // other way to do this dfs preorder method
    dfsPreOrder() {
        let visited = [];
        function traverse(node) {
            visited.push(node.getValue());
            // pre order can be applied to any kind of tree
            let prop;
            for(prop in node) {
                if(node.hasOwnProperty(prop) && prop !== 'value') {
                    if(node[prop]) traverse(node[prop])
                }
            }
        }
        traverse(this.root);
        return visited;
    }

    /**
     * *      DEEP FIRST SEARCH - POST ORDER
     *
     *          ____10______
     *      __ 6__          15__
     *     3      8            20
     *
     *     postOrder = [3, 8, 6, 20, 15, 10]
     *
     * STEPS
     *  Create a variable to store the values of nodes visited
     *  Store the root of the bst in a variable called current
     *  Write a helper function which accepts a node
     *      - Push the value of the node to the variable that stores the values
     *      - If the node has a left property, call the helper function with the
     *        left property on the node
     *      - If the node has a right property, call the helper function with the
     *        right property on the node
     *  Invoke the helper function with the current variable
     *  Return the array of values
     *
     * @returns {[]}
     */
    deepFirstSearchPostOrder() {
        let visited = [];
        function traverse(node) {
            let prop;
            for(prop in node) {
                if(node.hasOwnProperty(prop) && prop !== 'value') {
                    if(node[prop]) traverse(node[prop])
                }
            }
            visited.push(node.getValue());
        }
        traverse(this.root);
        return visited;
    }


    /**
     *      DEEP FIRST SEARCH TREE - IN ORDER
     *      In case of binary search trees (BST),
     *      Inorder traversal gives nodes in non-decreasing order
     *
     *          ____10______
     *      __ 6__          15__
     *     3      8            20
     *
     *     inOrder = [3, 6, 8, 10, 15, 20]
     *
     * STEPS
     *  Create a variable to store the values of nodes visited
     *  Store the root of the bst in a variable called current
     *  Write a helper function which accepts a node
     *      - If the node has a left property, call the helper function with the
     *        left property on the node
     *        - Push the value of the node to the variable that stores the values
     *      - If the node has a right property, call the helper function with the
     *        right property on the node
     *  Invoke the helper function with the current variable
     *  Return the array of values
     *
     * @returns {[]}
     */
    deepFirstSearchInOrder() {
        let visited = [];
        function travese(node){
            // it is not like the other methods because it is just for Binary Search Trees
            // left
            if(node.getLeft())
                travese(node.getLeft())
            visited.push(node.getValue());
            // right
            if(node.getRight())
                travese(node.getRight())
        }
        travese(this.root)
        return visited;
    }
}

exports.BSTree = BSTree;
