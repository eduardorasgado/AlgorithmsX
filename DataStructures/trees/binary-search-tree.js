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
            node = this.locatePreNode(newNode, node);
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
    locatePreNode(newNode, node) {
        // duplicated element is not inserted.
        if(node.getValue() === newNode.getValue()) return null;
        else if(newNode.getValue() < node.getValue()) {
            if(node.getLeft() != null)
                return this.locatePreNode(newNode, node.getLeft());
            // inserting the node
            node.setLeft(newNode);
            node = node.getLeft();
        }
        else if(newNode.getValue() > node.getValue()) {
            if(node.getRight() != null)
                return this.locatePreNode(newNode, node.getRight());
            // inserting the node
            node.setRight(newNode);
            node =node.getRight();
        }
        return node;
    }

    insertV2(value) {
        if(!this.root) {
            this.root = new Node(value);
            return this.root;
        }else {
            let newRoot = this.root
            if(value > this.root.getValue()) {
                if(this.root.getRight() != null) {
                    this.root = this.root.getRight();
                } else {
                    this.root.setRight(new Node(value));
                    return this.root.getRight();
                }

            } else if(value < this.root.getValue()){
                if(this.root.getLeft() != null) {
                    this.root = this.root.getLeft();
                } else {
                    this.root.setLeft(new Node(value));
                    return this.root.getLeft();
                }
            } else {
                return null;
            }
            value = this.insertV2(value)
            this.root = newRoot;
            return value;
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
