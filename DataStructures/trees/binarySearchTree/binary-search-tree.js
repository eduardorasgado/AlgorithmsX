const Utils = require("../log-utils");
/**
 *          BINARY SEARCH TREES
 *
 *              Each node can have at most two children at the bianry part,
 *              that means 0, 1 or 2 children for parent.
 *
 *              There is an ordered pattern in the whole tree
 *
 *              For example:
 *
 *                 _____10_____
 *                 |          |
 *              ___6__       15
 *              |    |        |
 *              3    8        20
 *
 *          HOW BINARY SEARCH TREE WORK
 *
 *              Every parent node has at most two children
 *
 *              Every node to the left of a parent node is always less than the
 *              parent
 *
 *              Every node to the right of a parent node is always greater than
 *              the parent
 *
 *              Next is not a binary search tree:
 *
 *                 _____10_____
 *                 |          |
 *              ___8__        25
 *              |    |        |
 *              3    6        20
 *
 *              because it is unordered.
 *
 *              Next is neither a BST:
 *                 _______10_________
 *                 |      |         |
 *              ___8__    4        15
 *              |    |             |
 *              2    1            37
 *
 *              because it has three children  in the first row
 *
 *         BIG O OF BST
 *
 *              Insertion - O(log n)
 *              Searching - O(log n)
 *
 *              averages and best cases
 *                  2x number of nodes: 1 extra step
 *                  4x number of nodes: 2 extra steps
 *                  8x number of nodes: 3 extra steps
 *
 *              but it is not guaranteed, lets take this example
 *
 *                  3__
 *                    17___
 *                        19___
 *                            32__
 *                               34__
 *                                  64__
 *                                     86__
 *                                        91
 *
 *              and yes, this is a valid binary search tree
 *              and in this case the time complexity is O(n)
 * */

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
    getValue() {return this.value;}
    setValue(value) {this.value = value;}
    getRight() {return this.right;}
    setRight(right) {this.right = right;}
    getLeft() {return this.left;}
    setLeft(left) {this.left = left;}

    toString() {
        Utils.inspectObject(this);
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * @description
     * Inserting an element within the tree, the position is actually sorted
     *
     *  Create a new node
     *  Starting at the root
     *      Check if there is a root, if not, the root now becomes that new node
     *      If there is a root, check if the value of the new node is greater than
     *          or less than the value of the root
     *      If it is greater
     *          Check to see if there is a node to the right
     *              If there is , move to that node and repeat theres steps
     *              If there is not, add that node as the right property
     *      If it less
     *          Check to see if there is a node to the left
     *              If there is, move to that node and repeat these steps
     *              If there is not, add that node as the left property
     *
     * @param value
     * @returns {null|BinarySearchTree}
     */
    insert(value) {
        let node = new Node(value);
        if(!this.root) {
            this.root = node;
            return this;
        }
        // avoiding affect this.root
        let currentNode = this.root
        while(true){
            if(value > currentNode.getValue()) {
                if(currentNode.getRight() === null) {
                    currentNode.setRight(node);
                    return this;
                }
                currentNode = currentNode.getRight();

            } else if(value < currentNode.getValue()){
                if(currentNode.getLeft() === null) {
                    currentNode.setLeft(node);
                    return this;
                }
                currentNode = currentNode.getLeft();
            } else return undefined;
        }
    }

    /**
     * Finding a node in a BST
     *
     *  Starting at the root
     *    Check if there is a root, check if the value of the new node is the value
     *    we are  looking for.
     *    If we found it, we are done.
     *    If not, check to see if the value is greater than or less than the value
     *    of the root
     *    If it is greater
     *      Check to see if there is a node to the right
     *          If there is, move to that node and repeat these steps
     *          If there is not, we done searching
     *   If it is less
     *      Chech to see if there is a node to the left
     *          If there is, move to that node and repeat these steps
     *          If there is not, we are done searching.
     *
     * @param value
     * @returns {Node|null}
     */
    search(value) {
        if(!this.root) return null;
        return this.getCertainNode(value);
    }

    /**
     * Return whether a value exists within tree or not.
     * @param value
     * @returns {boolean}
     */
    contains(value) {
        if(!this.root) return false;
        else return !!this.getCertainNode(value);
    }

    getCertainNode(value) {
        let currentNode = this.root;
        while(currentNode) {
            if(value > currentNode.getValue())
                currentNode = currentNode.getRight();

            else if(value < currentNode.getValue())
                currentNode = currentNode.getLeft();

            else return currentNode;
        }
        return null;
    }

    getroot() {return this.root;}
    setroot(root) {this.root = root;}

    toString() {
        Utils.inspectObject(this);
    }
}

exports.BinarySearchTree = BinarySearchTree;
exports.Node = Node;
