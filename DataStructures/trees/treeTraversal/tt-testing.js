const { BSTree } = require("./treeTraversal")

let bst = new BSTree();
//let nums = [20, 22, 10, 3, 4, 15, 21, 29, 25, 33, 1, 32, 5, 6, 9, 7, 4, 15];
let nums = [10, 15, 6, 20, 3, 8, 15, 10];
nums.map((n) => {
    bst.insert(n);
})
bst.toString();
console.log("---------BREADTH FIRST SEARCH------");
console.log("---------PRE ORDER------");
console.log(bst.deepFirstSeachPreOrder());
console.log(bst.dfsPreOrder());
console.log("---------POST ORDER------");
console.log(bst.deepFirstSearchPostOrder());
