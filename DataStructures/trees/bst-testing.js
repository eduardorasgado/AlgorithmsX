const { BinarySearchTree, Node } = require("./binary-search-tree");
console.log("======binary search tree======");

let bst = new BinarySearchTree();
bst.root = new Node(22);
bst.root.left = new Node(6);
bst.root.right = new Node(31);
bst.root.left.setLeft(new Node(3));
bst.getroot().getLeft().setRight(new Node(10));
bst.toString();
