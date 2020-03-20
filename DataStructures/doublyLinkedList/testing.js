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
