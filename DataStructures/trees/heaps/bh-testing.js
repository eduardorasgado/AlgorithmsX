const { MaxBinaryHeap } = require("./binary-heap");

let heap = new MaxBinaryHeap();
//let items = [31,39,18,27,12, 55, 1, 43]
let items = [20, 22, 10, 3, 4, 15, 21, 29, 25, 33, 1, 32, 5, 6, 9, 7, 4, 15, 1, 3, 32, 48, 120, 110, 30, 89, 18, 17, 16, 15, 14, 13, 12, 11];
//let items
items.map((n) => {
    heap.insert(n);
    //heap.show();
    //console.log("");
});
heap.show();
console.log("----etracting everything----");
console.log(heap.extractMax());
let heapLen = heap.values.length;
for(let i = 0; i < heapLen; i++) {
    console.log(heap.extractMax());
    heap.show();
    console.log(" ");
}
console.log(heap.extractMax());
console.log(heap.extractMax());
heap.show();
