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
