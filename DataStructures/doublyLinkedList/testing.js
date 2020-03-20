const { DoublyLinkedList, Node } = require('./doubly-linked-list');
let numbers = require('../unsortedNumbers');

//let node = new Node(1);
//let node2 = new Node(2);
//node2.setPrev(node);
//node.setNext(node2);
//node.toString();

let l1 = new DoublyLinkedList();

console.log("=========PUSHING===========");
[1, 10, 100, 1000].map((n) =>{
    l1.push(n);
})
l1.toString();

console.log("=========POPPING===========");
l1.pop().toString();
console.log(l1.pop());
console.log(l1.pop());;
l1.pop();
console.log(l1);
console.log(l1.pop());
