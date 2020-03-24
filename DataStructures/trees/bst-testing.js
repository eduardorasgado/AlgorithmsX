const { BinarySearchTree, Node } = require("./binary-search-tree");
console.log("======binary search tree======");

let bst = new BinarySearchTree();
// bst.root = new Node(22);
// bst.root.left = new Node(6);
// bst.root.right = new Node(31);
// bst.root.left.setLeft(new Node(3));
// bst.getroot().getLeft().setRight(new Node(10));
// bst.toString();
let nums = [20, 22, 10, 3, 4, 15, 21, 29, 25, 33, 1, 32, 5, 6, 9, 7, 4, 15];
//let nums = [10, 15, 6, 20, 3, 8, 15, 10];
nums.map((n) => {
    console.log(bst.insert(n));

})
bst.toString();
