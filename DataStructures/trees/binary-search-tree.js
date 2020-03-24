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
     * Main inserting function, get the conditions to call the 'inserting' method.
     * related to the other nodes
     * @param value
     * @returns {boolean}
     */
    insert(value){
        let newNode = new Node(value);
        if(!this.root) this.root = newNode;
        else {
            let node = this.root;
            node = this.inserting(newNode, node);
            // cannot insert duplicates
            if(!node) return false;
        }
        return true;
    }

    /**
     * Inserting an element within the tree, the position is actually sorted
     * @param newNode
     * @param node
     * @returns {null|*}
     */
    inserting(newNode, node) {
        if(node.getValue() === newNode.getValue()) return null;
        else if(newNode.getValue() < node.getValue()) {
            if(node.getLeft() != null)
                return this.inserting(newNode, node.getLeft());
            node.setLeft(newNode);
            node = node.getLeft();
        }
        else if(newNode.getValue() > node.getValue()) {
            if(node.getRight() != null)
                return this.inserting(newNode, node.getRight());
            node.setRight(newNode);
            node =node.getRight();
        }
        return node;
    }

    getroot() {return this.root;}
    setroot(root) {this.root = root;}

    toString() {
        Utils.inspectObject(this);
    }
}

exports.BinarySearchTree = BinarySearchTree;
exports.Node = Node;
