const { Queue } = require("./queue");

console.log("------Singly linked list based queue implementation------");

let q1 = new Queue();
q1.enqueue("FIRST")
q1.toString();
q1.enqueue("SECOND")
q1.toString();
q1.enqueue("THIRD");
q1.toString();
console.log("dequeueing...");
console.log(q1.dequeue());
q1.toString();
console.log(q1.dequeue());
q1.toString();
console.log(q1.dequeue());
q1.toString();
console.log(q1.dequeue());
