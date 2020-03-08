/**
 *      MERGE SORT ALGORITHM
 *
 *              - It is a combination of two things - merging and sorting
 *              - Exploits the fact that arrays of 0 or 1 elements are always sorted.
 * */

function merge(left, right) {
    let newList = [];
    let i = 0;
    let j = 0;
    // adding elements to new list, sorting by comparing left and right elements
    // until it reach last element in one of them
    // example:  left[ 3, 5, 7 ] right[ 1, 2, 9 ] new list[ 1, 2, 3, 5, 7 ]
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) newList.push(left[i]), ++i;
        else newList.push(right[j]), ++j;
    }
    // adding left elements from both lists to new list
    // those elements were'nt added. note that i and j do not restart to 0
    // example: from example above we finished with: newList[ 1, 2, 3, 5, 7, 9 ]
    while(i < left.length) newList.push(left[i]), ++i;
    while (j < right.length) newList.push(right[j]), ++j;
    return newList;
}

function mergeSort(array) {
    let len = array.length;
    if(len > 1) {
        let mid = Math.ceil(len / 2);

        let first = array.slice(0, mid);
        let last = array.slice(mid, len);

        let m1 = mergeSort(first);
        let m2 = mergeSort(last);

        return merge(m1, m2);
    }
    // returning array of one element within, e.g. [4]
    else return array
}

//let data = Array.apply(null, {length: 100000}).map(Function.call, Math.random)
console.log('data ready, go...')
//console.log(bubbleSort(data))
//console.log(mergeSort(data));
console.log(mergeSort([5, 3, 7, 2, 9, 1, 6, 4, 9, 10, 8]));
//console.log(mergeSort([5, 3, 4, 1, 2]));

