const util = require('util');

const inspectObject = (object) => {
    console.log(util.inspect(object,
        {showHidden: false, depth: null, colors: true}));
}

class Node {
    constructor(val){
        this.val = val
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        let node = new Node(value)
        if(!this.length) {this.head = node; this.tail = node;}
        else {
            node.prev = this.tail;
            this.tail.next = node
            this.tail = node;
        }
        ++this.length;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let lastTail = this.tail;
        if(this.length > 1) {
            lastTail.prev.next = null;
            this.tail = lastTail.prev;
            lastTail.prev = null;
        } else {
            this.head = this.tail = null;
        }
        --this.length;
        return lastTail;
    }

    unshift(value) {
        let node = new Node(value);
        if(!this.head) this.head = this.tail = node;
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        ++this.length;
        return this;
    }

    shift(){
        if(!this.head) return undefined;
        let lastHead = this.head;
        this.head = lastHead.next;
        this.head.prev = null;
        lastHead.next = null;
        --this.length;
        return lastHead;
    }

    get(index) {
        if(!this.head) return null;
        if(index < 0 || index >= this.length) return null;
        let half = Math.floor(this.length / 2);
        let i;
        let node;
        if(index < half) {
            i = 0;
            node = this.head;
            while(i < index) {
                node = node.next;
                ++i;
            }
        } else {
            i = this.length - 1;
            node = this.tail;
            while(i > index) {
                node = node.prev;
                --i;
            }
        }
        return node;
    }

    set(index, value) {
        let node = this.get(index)
        if(!node) return false;
        node.val = value;
        return true;
    }

    remove(index){
        if(index == undefined) return undefined
        if(!this.head) return undefined;
        if(index < 0 || index >= this.length) return undefined;
        if(index == 0) return this.shift();
        if(index == this.length - 1) return this.pop();

        let nodeToRemove = this.get(index);
        nodeToRemove.prev.next = nodeToRemove.next;
        nodeToRemove.next.prev = nodeToRemove.prev;
        nodeToRemove.prev = nodeToRemove.next = null;

        --this.length;
        return nodeToRemove;
    }

}

let node = new Node(3);
let l1 = new DoublyLinkedList();
l1.push(5)
l1.push(10)
l1.push(14)
l1.unshift(4)
l1.unshift(3)
l1.shift();
inspectObject(l1.shift());
l1.unshift(4)
l1.unshift(3)
l1.unshift(2)
l1.unshift(1)
l1.unshift(0)
inspectObject(l1);
inspectObject(l1.get(4));
l1.set(4, 444)
l1.remove(4);
l1.remove(0);
l1.remove(l1.length - 1);
inspectObject(l1);
console.log(l1.remove(undefined));


