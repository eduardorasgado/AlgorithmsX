const { MinPriorityQueue } = require("./priority-queue");

let minpq = new MinPriorityQueue();

let items = [14, 4, 8, 1, 3, 22]
items.map((n) => {minpq.enqueue(n);})
minpq.show();
console.log(minpq.dequeue());;
minpq.show();
minpq.enqueue(2);
minpq.show();
console.log(minpq.dequeue());
minpq.enqueue(4);
minpq.show();
console.log(minpq.dequeue());
minpq.enqueue(5);
minpq.enqueue(9)
minpq.show();
console.log('size is ',minpq.size());
let currentSize = minpq.size();
for(let i = 0; i < currentSize; i++) {
    console.log(minpq.dequeue());
}
console.log(minpq.dequeue());
minpq.show();

