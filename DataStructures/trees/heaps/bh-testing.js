const { MaxBinaryHeap } = require("./binary-heap");

let heap = new MaxBinaryHeap();
//let items = [31,39,18,27,12, 55, 1, 43]
let items = [20, 22, 10, 3, 4, 15, 21, 29, 25, 33, 1, 32, 5, 6, 9, 7, 4, 15, 1, 3, 32, 48, 120, 110, 30, 89];
//let items
items.map((n) => {
    heap.insert(n);
    //heap.show();
    //console.log("");
});
heap.show();
