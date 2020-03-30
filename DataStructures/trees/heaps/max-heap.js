/**
 *      MAX BINARY HEAP
 *
 *          A max binary heap is a binary tree where each row deeper is smaller
 *          than the above row.
 *
 *          We can use an array to emulate a binary tree, there are 3 formulas to
 *          use to get access to parents and children:
 *
 *          A parent:       floor((childIndex - 1) / 2)
 *          A left child:   (parentIndex * 2) + 1
 *          A right child:   (parentIndex * 2) + 2
 *
 * */
class MaxHeap {
    constructor() {
        this.size = 0;
        this.items = [];
    }

    getLeftChildIndex(parentIndex) {
        return (parentIndex * 2) + 1;
    }

    getRightChildIndex(parentIndex) {
        return (parentIndex * 2) + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.size;
    }

    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.size;
    }

    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    getLeftChild(parentIndex) {
        if(!this.hasLeftChild(parentIndex)) return null;
        return this.items[this.getLeftChildIndex(parentIndex)];
    }

    getRightChild(parentIndex) {
        if(!this.hasRightChild(parentIndex)) return null;
        return this.items[this.getRightChildIndex(parentIndex)];
    }

    getParent(childIndex) {
        if(!this.hasParent(childIndex)) return null;
        return this.items[this.getParentIndex(childIndex)];
    }

    swap(firstIndex, secondIndex) {
        [ this.items[firstIndex], this.items[secondIndex] ] =
            [ this.items[secondIndex], this.items[firstIndex] ]
    }

    /**
     * Getting max element within the tree
     * @returns {null|*}
     */
    peek() {
        if(!this.size) return null;
        return this.items[0];
    }

    /**
     * * Removing max element within the tree
     *
     * @returns {undefined|*}
     */
    poll() {
        if(this.size === 0) return undefined
        let item = this.items[0];
        this.items[0] = this.items[this.size - 1];
        --this.size;
        this.items.pop();
        this.heapifyDown();
        return item;
    }

    /**
     * Inserting a new node in the correct place
     * @param value
     * @returns {MaxHeap}
     */
    insert(value) {
        this.items[this.size] = value;
        ++this.size;
        // heapify up
        this.heapifyUp()
        return this;
    }

    /**
     * bubbling the element in last position from the bottom to the first row
     * while current element is greater than its parent.
     */
    heapifyUp() {
        let currentIndex = this.size - 1;
        // looping while there is a parent and parent is smaller than child
        while(this.hasParent(currentIndex) &&
            this.items[currentIndex] > this.getParent(currentIndex)) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex)
        }
    }

    /**
     * bubbling the element from first row(max position) to botton row while
     * current index element is smaller than  its greatest child.
     */
    heapifyDown() {
        let currentIndex = 0;
        let greatestChildIndex;
        while(this.hasLeftChild(currentIndex)) {
            // this variable will be the index of the greatest value between left
            // and right children
            greatestChildIndex = this.getLeftChildIndex(currentIndex);
            if(this.hasRightChild(currentIndex) &&
                this.getRightChild(currentIndex) > this.getLeftChild(currentIndex))
                greatestChildIndex = this.getRightChildIndex(currentIndex);

            // if parent is smaller than child then they will be swapped otherwise stop loop
            if(this.items[currentIndex] < this.items[greatestChildIndex])
                this.swap(currentIndex, greatestChildIndex);
            else break;
            currentIndex = greatestChildIndex;
        }
    }

    /**
     * Prints the tree out in a non array form, but a tree.
     */
    show() {
        let x = -1; // to be sure (x + 1) * 2 will return 0 at the first iteration
        let row = "";
        let valuesLen = this.size;
        this.items.forEach((value, index) => {
            if(index% 2 !== 0 || index === 0) row += "["
            row += `${value} `;
            if(index% 2 === 0) row += "]"
            // ensure that index is part of the serie: 0, 2, 6, 14, 30... 2(x(t-1) + 1)
            // to print a tree row in new line
            if(index === ((x + 1) * 2) || index === valuesLen - 1){
                if(index % 2 !== 0) row += "]"; // if bottom row length is not even
                let lastRowLen = row.length;
                console.log(
                    this.gettingSpacesToShow(valuesLen, lastRowLen) + row)
                x = index;
                row = "";
            }
        })
    }

    /**
     * show helper, set a certain amount of spaces to show all the nodes symmetrically
     * @param valuesLen
     * @param lastRowLen
     * @returns {string}
     */
    gettingSpacesToShow(valuesLen, lastRowLen) {
        let spaces = "";
        for(let i = 0; i < (valuesLen - Math.floor(lastRowLen / 2)); i++) {
            spaces += " ";
        }
        return spaces;
    }
}

exports.MaxHeap = MaxHeap;
