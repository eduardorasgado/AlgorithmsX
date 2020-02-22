/**
 *
 *      MULTIPLE POINTERS PATTERN
 *
 *      Creating pointers or values that corresponds to an index or position
 *      and move towards the beginning, end or middle based on a certain condition
 *
 *      Very efficient for solving problems with minimal space complexity as well
 * */

/**
 * Example, find the first two elements that sums zero
 *
 * A NAIVE solution is
 *
 * which has O(n^2) time complexity
 * */
function sumsZero(arr) {
    // O(n^2)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] == 0) return [arr[i], arr[j]];
        }
    }
}

console.log(sumsZero([-3,-2,-1,0,1,2,3]));
console.log(sumsZero([-4,-3,-2,-1,0,1,2,5]));
console.log(sumsZero([0,1,2,3,4]));

/**
 * Implementing multiple pointers pattern
 *
 * */

function sumsZeroMP(arr) {
    // creating the pointers at the corners of array
    let left = 0;
    let right = arr.length - 1;
    let addition;
    // Time complexity = O(n)
    while(left < right) {
        addition = arr[left] + arr[right];
        if(addition == 0) return [arr[left], arr[right]];
        else if(addition > 0) right--;
        else left++;
    }
}
console.log("----------------")
console.log(sumsZeroMP([-3,-2,-1,0,1,2,3]));
console.log(sumsZeroMP([-4,-3,-2,-1,0,1,2,5]));
console.log(sumsZeroMP([0,1,2,3,4]));


/**
 * Understanding the problem
 * implementing a function which accepts a sorted array, and counts the unique values in the array
 * Explanation: count the unique values inside the array
 * input: a sorted array
 * output: integer, represents the unique values inside the input array
 *
 * concrete cases:
 *  ([]) -> 0
 *  ([0,0,0,0,0,0,0]) -> 1
 *  ([1,1,1,1,1,1,1]) -> 1
 *  ([1,2,3,4,5,6,7,8]) -> 8
 *  ([-1, -2, -3,-4,-5,-5,0]) -> 6
 *
 *  naive solution:
 *  countUniqueValues(arr) {
 *      -create a min variable to zero
 *      -create a counter value to zero
 *      -go a for loop over the array
 *          -initialize the min variable to first element in list
 *          -for every element same to min do nothing,
 *          -if an element is different than min then
 *              -set min that element value
 *              -counter increments by 1
 *
 *
 *  }
 * */

function countUniqueValuesNaive(arr) {
    let min = 0;
    let counter = 0;
    if(arr.length > 0) {
        for(let i = 0; i < arr.length; i++) {
            if(i == 0) {
                min = arr[i];
                ++counter;
            }
            if(arr[i] != min) {
                ++counter;
                min = arr[i]
            }
        }
    }

    return counter;
}
console.log(countUniqueValuesNaive([]));
console.log(countUniqueValuesNaive([0,0,0,0,0,0,0]));
console.log(countUniqueValuesNaive([-1, -2, -3,-4,-5,-5,0]));
console.log(countUniqueValuesNaive([1,2,3,4,4,4,7,7,12,12,13]));

// Solution using multiple pointers pattern
// Time complexity: O(n), space complexity: O(n)
function countUniqueValues(arr) {
    // this variable will alter the values inside the array
    let left = 0;
    // this variable will iterate over all the elements to be compared to left
    let right = 1;
    if(arr.length !== 0){
        while(right < arr.length){
            // compare if values are different then we add one to left
            // and set that arr position the arr right value to be able
            // to compare if next array position value is different than
            // past value.
            if (arr[left] != arr[right]) {++left; arr[left] = arr[right];}
            ++right;
        }
        console.log(arr)
        return left+1;
    } else {
        return 0;
    }

}

console.log("---------------")
console.log(countUniqueValues([]));
console.log(countUniqueValues([0,0,0,0,0,0,0]));
console.log(countUniqueValues([-1, -2, -3,-4,-5,-5,0]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));

