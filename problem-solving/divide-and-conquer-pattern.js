/**
 *  DIVIDE AND CONQUER PATTERN
 *      This pattern involves dividing a data set into smaller chunks and then
 *      repeating a process with a subset of data
 *
 *      This pattern can trmendously decrease time complexity
 *
 *
 *
 *      BINARY SEARCH
 *          This algorithm is applied to sorted arrays
 *          https://en.wikipedia.org/wiki/Binary_search_algorithm
 * */

// O(n)
function binarySeach(arr, target) {
    if(arr.length < 1) return -1;
    let left = 0;
    let right = arr.length -1;
    let mid = 0;
    while(left <= right) {
        mid = Math.floor(((right + left) / 2));
        (target > arr[mid]) && (left = mid + 1);
        (target < arr[mid]) && (right = mid - 1);
        if(target == arr[mid]) return mid;
    }
    return -1;
}

console.log(binarySeach([1,2,3,5,7,8,10,13,15,17,19,22], 13)); // 7
console.log(binarySeach([5,12,15,18], 15)); // 2
console.log(binarySeach([5,12,15,18], 13)); // -1
console.log(binarySeach([], 1)) -1
console.log("---------------");
