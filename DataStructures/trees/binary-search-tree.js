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

    getroot() {return this.root;}
    setroot(root) {this.root = root;}

    toString() {
        Utils.inspectObject(this);
    }
}

exports.BinarySearchTree = BinarySearchTree;
exports.Node = Node;
