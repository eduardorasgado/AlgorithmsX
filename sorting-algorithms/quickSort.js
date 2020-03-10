/**
 *      QUICK SORT ALGORITHM
 *
 *
 *          First I present my own quick sort implementation.
 * */

// partition function will reorder the list based on the pivot difference
function partition(list, pivot) {
    let leftList = [] // the left side of pivots
    let rightList = [] // the right side of pivot
    for (let i = 0; i < list.length; i++){
        if(list[i] < list[pivot]) leftList.push(list[i])
        if(list[i] > list[pivot]) rightList.push(list[i])
    }
    return [leftList, rightList]
}

function quickSort(list) {
    if(list.length > 1) {
        let pivot = list.length - 1;
        let [left, right] = partition(list, pivot)
        return quickSort(left).concat(list[pivot]).concat(quickSort(right));
    }
    return list;
}

let data = Array.apply(null, {length: 100000}).map(Function.call, Math.random)
console.log('data ready, go...')
//console.log(bubbleSort(data))
console.log(quickSort(data));
console.log(quickSort([5, 3, 7, 2, 9, 1, 6, 4, 9, 10, 8]));
console.log(quickSort([5, 3, 4, 1, 2, 6, 10]));
