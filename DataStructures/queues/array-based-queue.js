console.log("---------array based queue implementation---------");
// using push and shift
let arrayBasedQueueV1 = [];
arrayBasedQueueV1.push("FIRST");
arrayBasedQueueV1.push("SECOND");
arrayBasedQueueV1.push("THIRD");
console.log(arrayBasedQueueV1);
arrayBasedQueueV1.shift();
console.log(arrayBasedQueueV1);
arrayBasedQueueV1.shift();
console.log(arrayBasedQueueV1);
arrayBasedQueueV1.shift();
console.log(arrayBasedQueueV1);
console.log(arrayBasedQueueV1.shift());

// using unshift and pop
let arrayBasedQueueV2 = [];
arrayBasedQueueV2.unshift("FIRST");
arrayBasedQueueV2.unshift("SECOND");
arrayBasedQueueV2.unshift("THIRD");
console.log(arrayBasedQueueV2);
arrayBasedQueueV2.pop();
console.log(arrayBasedQueueV2);
arrayBasedQueueV2.pop();
console.log(arrayBasedQueueV2);
arrayBasedQueueV2.pop();
console.log(arrayBasedQueueV2);

