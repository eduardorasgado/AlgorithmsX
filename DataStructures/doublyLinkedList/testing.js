const { DoublyLinkedList, Node } = require('./doubly-linked-list');
let numbers = require('../unsortedNumbers');

//let node = new Node(1);
//let node2 = new Node(2);
//node2.setPrev(node);
//node.setNext(node2);
//node.toString();

let l1 = new DoublyLinkedList();
console.log("===DOUBLY LINKED LISTS===")
console.log("=========PUSHING===========");
[1, 10, 100, 1000].map((n) =>{
    l1.push(n);
})
l1.toString();

console.log("=========POPPING===========");
l1.pop().toString();
console.log(l1.pop());
console.log(l1);
console.log(l1.pop());;
l1.pop();
console.log(l1);
console.log(l1.pop());

console.log("=========SHIFTING===========");
[1, 2, 3, 4, 10, 100, 200].map((n) =>{
    l1.push(n);
})
l1.toString();
console.log("shifting");
console.log(l1.shift());
l1.shift().toString();
l1.shift().toString();
l1.shift().toString();
l1.shift().toString();
l1.shift().toString();
l1.shift().toString();
l1.toString()

console.log("=========UNSHIFTING===========");
//[100, 200].map((n) =>{
//    l1.push(n);
//})
console.log(l1);
console.log(l1.unshift(100));
console.log(l1.unshift(50));
console.log(l1.unshift(20));
console.log(l1.unshift(10));
l1.toString();

console.log("=========GETTING===========");
//numbers.unsortedNumbers.map((n) => l1.push(n));
[300,400,500,600,700,800,900,1000].map((n) => l1.push(n));
console.log(l1);
console.log(l1.get(5));
console.log(l1.get(10));
//l1.get(9999).toString();
console.log(l1.get(12000))
let l2 = new DoublyLinkedList();
console.log(l2.get(0));
console.log(l1.get(-1));
console.log("=========SETTING===========");
l1.set(11, 1234);
l1.set(5, 450)
l1.toString();
console.log(l1.set(-1, 12));

console.log("=========INSERTING===========");
l1.insert(0, 5);
l1.insert(l1.length, 1300);
l1.insert(4, 85);
l1.insert(10, 666);
l1.insert(l1.length - 1, 1299);
l1.toString();

console.log("=========REMOVING===========");
l1.remove(0).toString();
console.log(l1.remove(l1.length));
console.log(l1.remove(l1.length - 1));
console.log(l1.remove(5));
console.log(l1.remove(8));
l1.toString();
