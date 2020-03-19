const { SinglyLinkedList } = require('./singly-linked-list');

// Understanding how Node class helps to create a singly linked list
// let first = new Node(1);
// first.setNext(new Node(2))
// first.getNext().setNext(new Node(3))
// first.toString()
// console.log("--------");

let l1 = new SinglyLinkedList();

[1, 10, 100, 1000, 2000].map((n) => {
    l1.push(n);
});
l1.toString();
console.log("---------POPPING-----------");

l1.pop().toString();
l1.pop().toString();
l1.pop().toString();
l1.pop().toString();
l1.pop().toString();
console.log(l1.pop()); // cannot pop when length is equal to 0
console.log("--------PUSHING------------");

[1, 10, 100, 200, 1000].map((n) => {
    l1.push(n);
});
l1.toString();
console.log("--------SHIFTING------------");
l1.shift().toString();
l1.shift().toString();
l1.shift();
l1.toString();
l1.shift();
l1.toString();
l1.shift().toString();
l1.toString();
console.log(l1.shift()); // cannot remove if exists no elements within the list

console.log("--------UNSHIFTING------------");
l1.unshift(900).toString();
l1.unshift(500).toString();
l1.unshift(321).toString();
l1.toString();
console.log("-------GETTING-------------");
l1.get(0).toString();
l1.get(1).toString();
console.log(l1.get(-1));
l1.get(2).toString();
console.log(l1.get(3));
// removing every element within the linked list
l1.shift();
l1.shift();
l1.shift();
l1.toString();
// trying to get from an empty list
console.log(l1.get(0));

console.log("-------SETTING-------------");
[1, 10, 100, 1000, 2000].map((n) => {
    l1.push(n);
});
console.log("before..");
l1.toString();
//--------
console.log(l1.set(2, 123));;
console.log(l1.set(5, 4000)); // cannot set
console.log(l1.set(4, 2100));;
//--------
console.log("after...");
l1.toString();
console.log("-------INSERTING-------------");
l1.toString();
console.log(l1.insert(0, 0.5)); // appending at the beggining
l1.toString();
console.log(l1.insert(-1, 0));
console.log(l1.insert(l1.length, 2500)); // appending at the end of the list
console.log(l1.insert(3, 110));
l1.toString();
console.log('actual length is: ',l1.length);
console.log(l1.insert(l1.length-1, 2455)); // appending at the last index
l1.toString();
