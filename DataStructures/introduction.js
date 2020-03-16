/**
 *      DATA STRUCTURES
 *
 *          There are so many data structures over this world, some of them are:
 *
 *              Binary Search trees
 *              Queues
 *              Singly Linked Lists
 *              Undirected Unweighted Graphs
 *              Binary Heaps
 *              Directed Graphs
 *              Hash Tables
 *              Doubly Linked Lists
 *              Stacks
 *              A lot of them even more...
 *
 *      WHAT DO THEY DO?
 *
 *          Data structures are collections of values, the relationships among them
 *          and the functions or operations that can be applied to the data
 *
 * */

class LinkedList {
    constructor(size) {
        this.size = size;
        this.count = 0
        this.bucket = null;
        this.createList();
    }

    createList() {
        this.bucket = new Array()
    }

    getSize(){
        return this.size;
    }

    append(element){
        if(typeof element == 'number') {
            if(this.count+1 <= this.size){
                this.bucket.push(element);
                ++this.count;
            }
        }
    }

    show(){
        console.log(this.bucket)
    }
}

let mylist = new LinkedList(5);
mylist.append(6);
mylist.append(7);
mylist.append(8);
mylist.append(8);
mylist.append(9);
mylist.append(10);
mylist.append(12);
mylist.show();
console.log(mylist.getSize());
