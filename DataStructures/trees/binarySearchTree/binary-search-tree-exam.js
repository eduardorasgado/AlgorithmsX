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
        if(value == undefined) return undefined;
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

    // search a certain element and return the node.
    search(value) {
        if(value == undefined) return null;
        if(!this.root) return null;
        return this.getNode(value);

    }

    contains(value) {
        if(value == undefined) return false;
        if(!this.root) return false;
        return !!this.getNode(value);
    }

    getNode(value) {
        let currentNode = this.root;
        while(currentNode) {
            if(value > currentNode.getValue()) {
                currentNode = currentNode.getRight();
            }
            else if(value < currentNode.getValue()) {
                currentNode = currentNode.getLeft();
            } else {
                return currentNode;
            }
        }
        return null;
    }

    toString() {
        Utilities.inspectObject(this);
    }
}

let bst = new BinarySearchTree();
//let nums = [10, 15, 6, 20, 3, 8, 15, 10];
let nums = [20, 22, 10, 3, 4, 15, 21, 29, 25, 33, 1, 32, 5, 6, 9, 7, 4, 15];
nums.map((n) => {
    console.log(bst.insert(n));

})
//bst = new BinarySearchTree();
bst.toString();
console.log("===searching===");
console.log(bst.search(6));
console.log(bst.search(15));
console.log(bst.search(10));
console.log(bst.search(11));
console.log("===contains===");
console.log(bst.contains(29));
console.log(bst.contains(32));
console.log(bst.contains(9));
console.log(bst.contains(3));
console.log(bst.contains(124));
console.log(bst.contains(0));
