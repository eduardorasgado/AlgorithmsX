const { DoublyLinkedList, Node } = require('./doubly-linked-list');
let numbers = require('../unsortedNumbers');

let node = new Node(1);
let node2 = new Node(2);
node2.setPrev(node);
node.setNext(node2);

console.log(node);

let l1 = new DoublyLinkedList();

