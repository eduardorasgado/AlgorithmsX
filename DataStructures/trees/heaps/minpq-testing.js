const { MinPriorityQueue } = require("./priority-queue");

let minpq = new MinPriorityQueue();

let items = [[14, 2], [4, 1], [8, 3],
            [1, 6], [3, 4], [22, 5],
            [20, 2], [200, 1], [0.5, 7]]
items.map((n) => {minpq.enqueue(n[0], n[1]);})
minpq.show();
//console.log(minpq.dequeue());;
//minpq.show();
//minpq.enqueue(2);
//minpq.show();
//console.log(minpq.dequeue());
//minpq.enqueue(4);
//minpq.show();
//console.log(minpq.dequeue());
//minpq.enqueue(5);
//minpq.enqueue(9)
//minpq.show();
//console.log('size is ',minpq.size());
let currentSize = minpq.size();
for(let i = 0; i < currentSize; i++) {
    console.log(minpq.dequeue());
    minpq.show();
    console.log(" ");
}
console.log("removing from a 0 length PQ: ", minpq.dequeue());
minpq.show();

