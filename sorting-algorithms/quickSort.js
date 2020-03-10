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
 *          PIVOT HELPER (PARTITION)
 *
 *              In order to implement quick sort it is useful to first implement
 *              a function responsible arranging elements, in an array or either
 *              side of a pivot.
 *
 *              Given an array, this helper function should designate an element
 *              as the pivot.
 *
 *              It should then rearrange elements in the array so that all values
 *              less than the  pivot are moved to the left of the pivot, and all
 *              values greater than the pivot should be moved to the right of the
 *              pivot.
 *
 *              The order of elements on either side of the pivot does not matter.
 *
 *              The helper should do this in place, that is, it should not create
 *              a new array.
 *
 *              When complete, the helper should return the index of the pivot.
 *
 *      First I present my own quick sort implementation.
 * */

// partition function will reorder the list based on the pivot difference
// Note: In quick sort we should not create a new array into helper function.
function partitionCustom(list, pivot) {
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

function quickSortCustom(list) {
    if(list.length > 1) {
        let pivot = list.length - 1;
        let [left, right, pivotList] = partition(list, pivot)
        return quickSort(left).concat(pivotList).concat(quickSort(right));
    }
    return list;
}

// --------------------------

function helperPivot(list, pivot){
    console.log('before partition: ',list, 'pivot', pivot)
    // rearranging
    let i = 1; // iterating over all the elements within the list
    let j = 1; // swapping one step after the pivot
    while(i < list.length){
        // TODO: Check what is going on with dupplicate entries.
        if(list[i] < list[pivot]){
            if(i != j){
                list[j] += list[i];
                list[i] = list[j] - list[i];
                list[j] -= list[i];
            }
            j++;
        }

        i++;
    }
    // now, swapping the pivot with last element less than pivot
    if(list[pivot] != list[j-1]){
        list[0] += list[j-1];
        list[j-1] = list[0] - list[j-1];
        list[0] -= list[j-1];
    }

    console.log('after partition: ',list)

    return [j-1, list]
}

function quickSort(list, pivot = 0){
    if(list.length <= 1) return list;
    [pivot, list] = helperPivot(list, pivot);
    let left = list.slice(0, pivot);
    let right = list.slice(pivot+1);
    console.log(list[pivot])
    return quickSort(left, 0).concat(list[pivot]).concat(quickSort(right), 0);
}

let data = Array.apply(null, {length: 100000}).map(Function.call, Math.random);
console.log('data ready, go...');
//console.log(bubbleSort(data))
//console.log(quickSort(data));
//console.log(quickSort([5, 3, 7, 2, 9, 1, 6, 6, 4, 9, 10, 8]));
console.log(quickSort([5, 3, 7, 2, 9, 1, 6, 4, 10, 8]));
//console.log(quickSort([5, 3, 4, 1, 2, 6, 10, 3]));
