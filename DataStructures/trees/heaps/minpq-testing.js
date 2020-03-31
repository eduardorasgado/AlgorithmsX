const { MinPriorityQueue } = require("./priority-queue");

let minpq = new MinPriorityQueue();

let items = [["CODE", 2], ["EAT", 1], ["CLEAN HOUSE", 3],
            ["CHESS", 6], ["FUCK", 4], ["SHARE LOVE", 5],
            ["DO HOMEWORK", 2], ["SLEEP", 1], ["GO PARTYING", 7]]
console.log("--------enqueueing------- ");
console.log(" ");
items.map((n) => {
    minpq.enqueue(n[0], n[1]);
    minpq.show();
    console.log(" ");
    console.log(" ");
})
minpq.show();
console.log(" ");
console.log("--------dequeueing------- ");
let currentSize = minpq.getSize();
for(let i = 0; i < currentSize; i++) {
    console.log(minpq.dequeue());
    minpq.show();
    console.log(" ");
    console.log(" ");
}
console.log("removing from a 0 length PQ: ", minpq.dequeue());
minpq.show();

