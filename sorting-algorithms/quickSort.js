/**
 *      QUICK SORT ALGORITHM
 *
 *          Like merge sort, exploits the fact that arrays of 0 or 1 element are
 *          always sorted.
 *
 *          Works by selecting one element (called the "pivot") and finding the
 *          index where the pivot should end up in the sorted array.
 *
 *          Once the pivot is positioned appropriately, quick sort can be applied
 *          on either side of the pivot
 *
 *      First I present my own quick sort implementation.
 * */

// partition function will reorder the list based on the pivot difference
function partition(list, pivot) {
    let leftList = []; // the left side of pivots
    let rightList = []; // the right side of pivot
    let pivotList = [];
    let pivotVal = list[pivot]
    for (let i = 0; i < list.length; i++){
        if(list[i] < pivotVal) leftList.push(list[i])
        else if(list[i] > pivotVal) rightList.push(list[i])
        else pivotList.push(pivotVal);
    }
    return [leftList, rightList, pivotList]
}

function quickSort(list) {
    if(list.length > 1) {
        let pivot = list.length - 1;
        let [left, right, pivotList] = partition(list, pivot)
        return quickSort(left).concat(pivotList).concat(quickSort(right));
    }
    return list;
}

let data = Array.apply(null, {length: 100000}).map(Function.call, Math.random)
console.log('data ready, go...')
//console.log(bubbleSort(data))
//console.log(quickSort(data));
console.log(quickSort([5, 3, 7, 2, 9, 1, 6, 6, 4, 9, 10, 8]));
console.log(quickSort([5, 3, 4, 1, 2, 6, 10, 3]));
