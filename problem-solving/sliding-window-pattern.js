/**
 *  SLIDING WINDOW PATTERN
 *
 *      This pattern involves creating a window which can either be an array or
 *      number from one position to another.
 *
 *      Depending on a certain condition, the window either increases or closes
 *      (and new window is created).
 *
 *      Very useful for keeping track of a subset of data in an array/string etc.
 *
 *
 *      Example:
 *      Write a function called maxSubarraySum which accepts an array of integers
 *      and a number called n, the function should claculate the maximum sum of n
 *      consecutive elements in the array
 *
 *          concrete examples:
 *              mss([1,2,5,2,8,1,5],2) -> 10
 *              mss([1,2,5,2,8,1,5],4) -> 17
 *              mss([4,2,1,6], 1) -> 6
 *              mss([], 4) -> null
 *
 *      naive solution:
 *          create a max variable, initialize it ti zero
 *          create a list of n elements, the first n elements within the arr,
 *          iterate over the array to arr.length - n
 *              sum n consecutive elements,
 *              compare sum to max
 *                  if sum is equals o max then max is sum now
 *          return max
 * */

// O(n^2)
function maxSubarraySumNaive(arr, n) {
    if(arr.length === 0 ) return null;
    if(arr.length < n ) return null;
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = i; j < i+n; j++){
            sum += arr[j];
        }
        if(sum > max) max = sum;
    }
    return max;
}

console.log(maxSubarraySumNaive([1,2,5,2,8,1,5],2)); // 10
console.log(maxSubarraySumNaive([1,2,5,2,8,1,5],4)); // 17
console.log(maxSubarraySumNaive([4,2,1,6], 1)); // 6
console.log(maxSubarraySumNaive([], 4)); // null
console.log(maxSubarraySumNaive([1,1], 2)); // 2
console.log("------------------")
