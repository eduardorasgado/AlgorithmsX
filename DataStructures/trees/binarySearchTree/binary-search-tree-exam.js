const Utilities = require("../log-utils");
// implementing a binary search tree
// for this we will use a nodes and next property

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }

    getValue() { return this.value; }
    setValue(value) { this.value = value; }
    getLeft() { return this.left; }
    setLeft(left) { this.left = left; }
    getRight() { return this.right; }
    setRight(right) { this.right = right; }
    toString() { Utilities.inspectObject(this) }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // appending or inserting an element within the tree
    // this operation involves ordered elements from left to right
    insert(value) {
        let newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let currentNode = this.root
        while(true) {
            if(value > currentNode.getValue()) {
                if(currentNode.getRight() === null) {
                    currentNode.setRight(newNode);
                    return this;
                }
                currentNode = currentNode.getRight();
            }
            else if(value < currentNode.getValue()) {
                if(currentNode.getLeft() === null){
                    currentNode.setLeft(newNode);
                    return this;
                }
                currentNode = currentNode.getLeft();
            } else {
                // duplicated element
                return undefined;
            }
        }
    }

    search(value) {
        //
    }

    contains(value) {
        //
    }

    toString() {
        Utilities.inspectObject(this);
    }
}

let bst = new BinarySearchTree();
let nums = [10, 15, 6, 20, 3, 8, 15, 10];
nums.map((n) => {
    console.log(bst.insert(n));

})
bst.toString();
