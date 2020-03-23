console.log("---------array based queue implementation---------");
/**
 * The problem with both implementations is:
 *  v1 - pop method take O(n) time compl. since shift operation reindex every element
 *          within the queue
 *  v2 - push method take O(n) time compl. since unshift operation reindex every
 *          element within the queue
 */

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

