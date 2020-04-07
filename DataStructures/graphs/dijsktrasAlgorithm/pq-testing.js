const { PriorityQueue } = require("./priorityQueue");

let pq = new PriorityQueue();
pq.enqueue(4, "FIRST");
pq.enqueue(5, "SECOND");
pq.enqueue(3, "THIRD");
pq.enqueue(3, "FOURTH");
pq.enqueue(4, "FIFTH");
pq.enqueue(2, "SIXTH");
pq.enqueue(1, "SEVENTH");
pq.enqueue(1, "EIGHTH");
pq.enqueue(2, "NINTH");
pq.enqueue(3, "TENTH");
pq.enqueue(5, "11TH");
pq.enqueue(6, "12TH");

pq.show();
console.log("");
pq.dequeue();
pq.show();
console.log("");
pq.dequeue();
pq.show();

console.log("");
pq.dequeue();
pq.show();

console.log("");
pq.dequeue();
pq.show();

console.log("");
pq.dequeue();
pq.show();
