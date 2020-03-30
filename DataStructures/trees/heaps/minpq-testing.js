const { MinPriorityQueue } = require("./priority-queue");

let minpq = new MinPriorityQueue();

let items = [14, 4, 8, 1, 3, 22]
items.map((n) => {minpq.add(n);})
minpq.show();
console.log(minpq.poll());;
minpq.show();
minpq.add(2);
minpq.show();
console.log(minpq.poll());
minpq.add(4);
minpq.show();
console.log(minpq.poll());
minpq.add(5);
minpq.add(9)
minpq.show();
console.log('size is ',minpq.size());
let currentSize = minpq.size();
for(let i = 0; i < currentSize; i++) {
    console.log(minpq.poll());
}
console.log(minpq.poll());
minpq.show();

