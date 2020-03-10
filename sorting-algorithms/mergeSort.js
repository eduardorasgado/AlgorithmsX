/**
 *      MERGE SORT ALGORITHM
 *
 *              - It is a combination of two things - merging and sorting
 *
 *              - Exploits the fact that arrays of 0 or 1 elements are always sorted.
 *
 *              - Works by decomposing an array into smaller arrays of 0 or 1 elements,
 *                  then building up a newly sorted array
 *
 *      Merging arrays (merge function)
 *          - In order to implement merge sort, it is useful to first implement a function
 *          responsible for merging two sorted arrays
 *          - Give two arrays which are sorted, this helper function should create a new
 *          array which is a so sorted, and consists of all of the elements in the two
 *          input arrays.
 *          - This function should run in O(n + m) time and O(n + m) space and should
 *          not modify the parameters passed to it.
 *
 *          Pseudocode
 *              - Create an empty array, take a look at the smallest values in each
 *              input array
 *              - While there are still values we havent looked at...
 *                  i. If the value in the first array is smaller than the value
 *                  in the second array, push the value in the first array into our
 *                  results and move on to the next value in the first array
 *                  ii. If the value in the first array is larger than the value in
 *                  the second array, push the value in the second array into our results
 *                  and move on to the next value in the second array
 *                  iii. Once we exhaust one array, push in all remaining values from
 *                  the other array
 *
 *      MERGE SORT ALGORITHM PSEUDOCODE
 *
 *              - Break up the attay into halves until you have arrays that are empty or have
 *              one element.
 *              - Once you have smaller sorted arrays, merge those arrays with other sorted
 *              arrays until you are back at the full length of the array
 *              - Once the array has been merged back together, return the merged(and sorted)
 *              array.
 * */

// time and space: O(n + m)
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
    // one of the indexes results be same to length it means every element in that list
    // were inserted in newList, so while loop in this list will not be performed.
    // example: from example above we finished with: newList[ 1, 2, 3, 5, 7, 9 ],
    // right list in index 2 which is 9, was left and it is included now.
    while(i < left.length) newList.push(left[i]), ++i;
    while (j < right.length) newList.push(right[j]), ++j;
    return newList;
}

function mergeSort(array) {
    let len = array.length;
    if(len > 1) {
        let mid = Math.ceil(len / 2);
        return merge(  //
            mergeSort(array.slice(0, mid)), // first and left mid half
            mergeSort(array.slice(mid)));   // second and right mid half
    }
    // returning array of one element within, e.g. [4]
    else return array
}

let data = Array.apply(null, {length: 100000}).map(Function.call, Math.random)
console.log('data ready, go...')
//console.log(bubbleSort(data))
console.log(mergeSort(data));
console.log(mergeSort([5, 3, 7, 2, 9, 1, 6, 4, 9, 10, 8]));
//console.log(mergeSort([5, 3, 4, 1, 2]));
console.log(merge([1, 10, 50], [2, 14, 99, 100]));
