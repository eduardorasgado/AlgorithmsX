const Utils = require("./log-utils");
/**
 *  BINARY SEARCH TREE
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
        }else {
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
    }

    getroot() {return this.root;}
    setroot(root) {this.root = root;}

    toString() {
        Utils.inspectObject(this);
    }
}

exports.BinarySearchTree = BinarySearchTree;
exports.Node = Node;
