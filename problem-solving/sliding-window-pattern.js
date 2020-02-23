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

// Time complexity: O(n^2), Space complexity: O(n)
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


/**
 *      Sliding window solution to maxSubarraySum problem
 *
 *          Solve/simplify
 * */
// get the first sum_subarr_size numbers from the array, set to maxsum
// set maxSum value to tempSum
// iterate over the array from sum_subarr_size position to the end of the array
//      substract the end of the subarr and add actual value to the end of the subarr, set this value to tempsum
//      compare if tempsum is greater than maxSum, if it is then, change its value to maxSum
// return maxSum

// time complexity: O(n), space complexity: O(1)
function maxSubarraySum(arr, sum_subarr_size) {
    if(arr.length == 0) return null;
    if(sum_subarr_size > arr.length) return null;
    let maxSum = 0;
    for (let i = 0; i < sum_subarr_size; i++) {
        maxSum += arr[i];
    }
    let tempSum = maxSum;
    // O(n)
    for (let i = sum_subarr_size; i < arr.length; i++) {
        tempSum = tempSum - arr[i - sum_subarr_size] + arr[i];
        if(tempSum > maxSum) maxSum = tempSum;
    }

    return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)); // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)); // 17
console.log(maxSubarraySum([4,2,1,6], 1)); // 6
console.log(maxSubarraySum([], 4)); // null
console.log(maxSubarraySum([1,1], 2)); // 2
console.log("------------------")


/**
 * Sliding window exam: maxSubarraySum
 *
 *  Given an array of integers and a number, write a function called maxSubarraySum,
 *  which finds the maximum sum of a subarray with the length of the number passed to
 *  the function.
 *
 *  Note that a subarray must consist of consecutive elements form the original array.
 *
 *  Own words:
 *  search for a consecutive n numbers that sums up the max value of all of possible groups. Retreive the sum
 *
 *  Constraints:
 *      Time complexity: O(n), Space Complexity: O(1)
 *
 *  Concrete example
 *  [100, 200, 300] is a sub array of the original array [100,200,300,400], but [100, 300] is not
 *
 *  Solution:
 *      define a variable to add the maxSum
 *      take the first n elements in array from 0 to n and sum up it all, save it into maxSum
 *      create a tempSum and assign maxSum value
 *      iterate over the elements of array
 *          sum the next value and decrease last value to tempsum, assign to tempSum
 *          compare if tempSum is greater than maxSum, if it is then set tempSum value to maxSum
 *      return maxSum
 * */

// Time Complexity: O(n), space complexity: O(1)
function maxSubarraySumExam(list, subArraySize) {
    if(list.length < 1) return null;
    if(list.length < subArraySize) return null
    let maxSum = 0;
    //TC: O(n), SC: O(1)
    for (let i = 0; i < subArraySize; i++) {
        maxSum += list[i];
    }

    let tempSum = maxSum;
    // TC: O(n), SC: O(1)
    for (let i = subArraySize; i < list.length; i++) {
        tempSum = tempSum - list[i - subArraySize] + list[i];
        if(tempSum > maxSum) maxSum = tempSum;
    }
    return maxSum;
}

console.log("===================")
// Concrete examples:
console.log(maxSubarraySumExam([100, 200, 300, 400],2)); //700
console.log(maxSubarraySumExam([1,4,2,10,23,3,1,0,20], 4)); // 39
console.log(maxSubarraySumExam([-3, 4, 0, -2, 6, -1],2)); // 5
console.log(maxSubarraySumExam([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
console.log(maxSubarraySumExam([2,3],3)); // null

/**
 *  SLIDING WINDOW EXAM: minSubArrayLen
 *
 *  Wite a function called minSubArray which accespts two paramenters - an array
 *  of positive integers and a positive integer.
 *  This function should return the minimal length of a contiguous subaray of
 *  which the sum is greater than or equal to the integer passed to the
 *  function. If there isn't one, return 0 instead.
 *
 *  own words:
 *      given a list and a target number, we should get the minimum length of possible
 *      subarrays that sum up the target or even greater than the target. subarray
 *      should be in consecutive position
 *
 *  Notes:
 *      Array is not sorted.
 *      we will analize a sublist inside the list, every element in sublist is contiguous
 *      Consider can be 4 cases to return:
 *          if elements sum up to target
 *          if elements sum up to greater than target
 *          if first element is greater than target then store in possible
 *          if first element is same to target then return 1
 *
 *  naive solution:
 *  - create a minimumSum variable, set to zero
 *  - create two variables, i and j, set them to 0 and 1
 *  - iterate over the array, while i is smaller than arr.length
 *      - if arr[i] equals to target, return 1
 *      - if arr[i] is greater than target then return 1
 *      -iterate over the array from i position to j
 *          -sum every element in that range in array
 *          -if sum is equal or greater to target,
 *              -if minimumSum > 0 and (j - i) < minimumSum
 *                -then set minimumSum value j - i
 *                -break
 *          -j increments
 *  - return minimumSum
 *
 *
 *
 *  target: 39
 *  minimum til moment: 3
 *
 *            i        j
 *  1 4 16 22 5 7 8 9 10
 *
 * */

// Time complexity: O(n^2), space complexity: O(1)
function minSubArrayLen(list, target) {
    let minimumSumLen = list.length;
    for (let i = 0; i < list.length; i++) {
        if(list[i] >= target) return 1;
        let tempSum = list[i];
        for (let j = i+1; j < list.length; j++) {
            tempSum += list[j]
            if(tempSum >= target) {
                //console.log("analysis: i", i,"j: ", j, "tempsum: ",tempSum)
                if(j - i + 1 < minimumSumLen) {
                    minimumSumLen = j - i + 1
                    break;
                }

            }
        }
    }
    return (minimumSumLen == list.length) ? 0 : minimumSumLen;
}

console.log("--------------------------------------------")
// concrete examples:
console.log(minSubArrayLen([2,3,1,2,4,3],7)); // 2
console.log(minSubArrayLen([2,1,6,5,4],9)); // 2
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52)); // 1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)); // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)); // 5
console.log(minSubArrayLen([4,3,3,8,1,2,3],11)); // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)); // 0
