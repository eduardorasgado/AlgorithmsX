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
 *           PIVOT PSEUDOCODE
 *
 *              - It will help to accept three arguments: an array, a start index,
 *              and an end index(these can default to 0 and the array length minus 1,
 *              respectively).
 *              - Grab the pivot from the start of the array.
 *              - Store the current pivot index in a variable(this will keep track)
 *                  of where the pivot should end up.
 *              - Loop through the array from the start until the end.
 *                  - If the pivot is greater than the current element, increment
 *                  the pivot index variable and then swap the current element with
 *                  the element at the pivot index
 *              - Swap the starting element(i.e. the pivot) with the pivot index
 *
 *          QUICKSORT PSEUDOCODE
 *
 *              - Call the pivot helper on the array
 *              - When the helper returns to you the updated pivot index, recursively
 *                  call the pivot helper on the subarray to the left of that index,
 *                  and the subarray to the right of that index.
 *              - Your base case occurs when you consider a subarray with less than 2 elements
 *
 *
 *         BIG O OF QUICK SORT
 *
 *          Time Complexity: Best: O(n * log n), Average: O(n* logn), Worst: O(n^2)
 *
 *              Explanation
 *                  O(log n): Decompositions
 *
 *                  O(n): Comparisons per decomposition
 *
 *                  O(n^2): In case we have a fully sorted array.
 *                          O(n) decompositions, because every time in recursion is
 *                          a pivot in same place, start of the array(cuz list is
 *                          already sorted).
 *                          0(n) comparisons per decomposition
 *                          then we have O(n*n)
 *
 *          Space Complexity: O(log n)
 *
 *              Explanation: memory space per decomposition in call stack
 *
 *
 *      First I present my own quick sort implementation.
 *      At the end I present the former quicksort algorithm implementation.
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
        let [left, right, pivotList] = partitionCustom(list, pivot)
        return quickSortCustom(left).concat(pivotList).concat(quickSortCustom(right));
    }
    return list;
}

/**
 *  QUICK SORT CUSTOM IMPLEMENTATION.
 *      No array extra variable creating into helper pivot custom function 2.
 * */

/**
function swap(list, i, j) {
    list[j] += list[i];
    list[i] = list[j] - list[i];
    list[j] -= list[i]
}
 **/

const swap = (list, i, j) => ([list[i], list[j]] = [list[j], list[i]]);

function helperPivotCustom2(list, start = 0, listLen = list.length){
    // i,iterating over all the elements within the list
    // pivotIndex, swapping one step after the pivot, it is called pivot index
    // or swap index.
    let [pivot, pivotIndex, i] = [list[start], start, start + 1];
    // rearranging
    while(i < listLen)
        (list[i] < pivot) && // avoid swap same element in array
        (++pivotIndex, (i != pivotIndex) && swap(list, i, pivotIndex)), ++i;
    // now, swapping the pivot with last element less than pivot
    // pivot should not be the element to swap at the same time
    (pivot != list[pivotIndex]) && swap(list, start, pivotIndex)
    return [pivotIndex, list];
}

function quickSortCustom2(list){
    if(list.length <= 1) return list;
    let pivot;
    [pivot, list] = helperPivotCustom2(list);
    let left = list.slice(0, pivot);
    let right = list.slice(pivot + 1);
    return quickSort(left)
        .concat(list[pivot])
        .concat(quickSort(right));
}

/**
 *              === QUICK SORT FINAL IMPLEMENTATION ===
 *
 *      Final algorithm implementation. Optimized. Without creating new lists
 *      using array.slice. and without concatenating different lists.
 * */

// we create no extra list to store sorted array, we sort the same array we receive
// algorithm explanation in helperPivotCustom2 function
function helperPivot(list, start = 0, listLen = list.length){
    let [pivot, pivotIndex, i] = [list[start], start, start + 1];
    while(i < listLen)
        (list[i] < pivot) && // avoid swap same element in array
        (++pivotIndex, (i != pivotIndex) && swap(list, i, pivotIndex)),
        ++i;
    (pivot != list[pivotIndex]) && swap(list, start, pivotIndex)
    return pivotIndex
}

// now we do not slice and create any new list. We apply the actions in same list.
function quickSort(list, start = 0, end = list.length){
    if(start < end-1) {
        let pivotIndex = helperPivot(list, start, end);
        quickSort(list, start, pivotIndex); // left but with no pivot
        quickSort(list, pivotIndex+1, end) // right with no pivot
    }
    return list;
}

let data = Array.apply(null, {length: 100000}).map(Function.call, Math.random);
console.log('data ready, go...');
//console.log(bubbleSort(data))
console.log(quickSort(data));
console.log(quickSort([5, 3, 7, 2, 9, 1, 6, 6, 4, 9, 10, 8]));
//console.log(quickSort([5, 3, 7, 2, 9, 1, 6, 4, 10, 8]));
console.log(quickSort([5, 3, 4, 1, 2, 6, 10, 3]));
