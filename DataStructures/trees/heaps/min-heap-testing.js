const { MinHeap } = require("./min-heap");
let mh = new MinHeap();
// mh.items = [13, 16, 31, 41, 51, 100, 41];
// mh.size = 7;
// // get elements testing
// console.log(mh.getParent(6));
// console.log('hijo derecho ', mh.getRightChild(1));
// console.log('hijo izquierdo ', mh.getLeftChild(1));
// console.log('hijo derecho 2 ', mh.getRightChild(2));
// console.log('hijo izquierdo 2 ', mh.getLeftChild(2));
// // swap testing
// console.log(mh.items[0], mh.items[1]);
// mh.swap(0, 1)
// console.log(mh.items[0], mh.items[1]);

let itemsToInsert = [13, 41, 100, 16, 51, 31, 41]

itemsToInsert.map((element) => {
    mh.insert(element).show();
    console.log(" ");
})
console.log("----");
console.log(mh.peek());
console.log(mh.poll());
console.log("----");
mh.show();
console.log(mh.size);
