const {MaxHeap} = require("./max-heap");
let heap = new MaxHeap();
//heap.items = [40, 100, 40, 10, 15, 50, 50];
let items = [100, 40, 50, 10, 15, 50, 40];
items.map((n) => {
    heap.insert(n);
});
heap.show();
console.log(heap.peek());
heap.poll();
console.log(heap.items);
heap.poll();
console.log(heap.items);
heap.poll();
console.log(heap.items);
heap.poll();
console.log(heap.items);

heap.insert(100);
heap.insert(20);
heap.insert(33);
heap.insert(1);
heap.insert(22);
heap.insert(99);
heap.show();
let heapLen = heap.size
for (let i = 0; i < heapLen; i++) {
    console.log(heap.poll());
    heap.show();
    console.log(" ");

}
console.log(heap.poll());
console.log(heap.poll());
heap.show();
