const numbers = require("./unsortedNumbers");

/**
 *      RADIX SORT
 *
 *          It is not a comparison based sorting algorithm
 *
 *              Comparison based sorting algorithm get a n log n as the best
 *              time complexity.
 *              Radix sort change this complexity and can do better performance
 *
 *          Radix Sort is a special sorting algorithm that works on lists and numbers.
 *          It exploits the fact that information about the size of a number is
 *          encoded in the number of digits.
 *
 *          More digits means a bigger number.
 *
 *      HELPER FUNCTIONS
 *
 *          In order to implement radix sort, it is helpful to build a few helper
 *          functions first:
 *
 *          getDigit(num, place) - returns the digit in num at the given place value
 *
 *          digitCount(num) - returns the number of digits in num.
 *
 *          mostDigits(nums) - given an array of numbers, returns the number of
 *              digits in the largets numbers in the list
 *
 *      RADIX SORT PSEUDOCODE
 *
 *          Define a function that accepts list of numbers.
 *          Figure out how many digits the largest number has.
 *          Loop from k = 0 up to the largest numeber of digits
 *          For each iteration of the loop:
 *              Create buckets for each digit, 0 to 9
 *              Place each number in the corresponding bucket based on its
 *              k-th digit
 *
 *
 *      My own first implementation of radix sort comes first:
 * */

// return the length of digit
// digitCount
function getDigitsWithin(element) {
    // https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript/28203456#28203456
    return Math.max(Math.floor(Math.log10(Math.abs(element))), 0) + 1;
}

// get the actual number in position 'place' within num
function getDigit(num, place){
    // https://stackoverflow.com/questions/13955738/javascript-get-the-second-digit-from-a-number
    return Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);
}

// return the number of digits of max number within a list
// mostDigits
function mostSignificantDigit(list) {
    let maxNum = 0;
    for (let i = 0; i < list.length; i++) {
        maxNum = Math.max(maxNum, getDigitsWithin(list[i]));
    }
    return maxNum;
}

function bucket(list, actualDigitLocation) {
    let [i,actualElementNth] = [0, 0];
    // to accumulate all the elements
    let bucket = [...Array(10)].map(e => Array(0));
    while (i< list.length){
        actualElementNth = getDigit(list[i], actualDigitLocation)
        bucket[actualElementNth].push(list[i]);
        ++i;
    }
    return bucket.flat(1);
}

function radixSortRecursiveSolution(list, MSDigit = 0,
                                    actualDigitLocation = 0) {
    // digit place go from 0 up to the list max element length
    if(actualDigitLocation == 0)
        MSDigit = mostSignificantDigit(list);
    if(actualDigitLocation == MSDigit) return list;
    return radixSortRecursiveSolution(bucket(list, actualDigitLocation),
                MSDigit, ++actualDigitLocation);
}

function radixSort(list) {
    let mostSDigit = mostSignificantDigit(list);
    for (let i = 0; i < mostSDigit; i++) {
        list = bucket(list, i);
    }
    return list;
}

let unsortedNums = numbers.unsortedNumbers;
console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));
console.log(radixSort(unsortedNums));

