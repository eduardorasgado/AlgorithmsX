const numbers = require('./unsortedNumbers');
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
 *
 *      My own first implementation of radix sort comes first:
 * */

// return the length of digit
function getDigitswithin(element) {
    return Math.max(Math.floor(Math.log10(Math.abs(element))), 0) + 1;
}

// get the actual number in position 'place' within num
function getDigitCustom(num, place){
    return Math.floor((num / Math.pow(10, place)) % 10);
}

function bucket(list, digitPlace) {
    let i = 0;
    let actualStringLen = 0;
    // to accumulate all the elements
    let bucket = [...Array(10)].map(e => Array(0));
    while (i< list.length){
        https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript/28203456#28203456
        actualStringLen = getDigitswithin(list[i]);
        if(actualStringLen - 1 < digitPlace){
            // locate all numbers with a length bellow the digit place in the beggining of the list
            bucket[0].push(list[i]);
        }
        else {
            // https://stackoverflow.com/questions/13955738/javascript-get-the-second-digit-from-a-number
            let actualElementNth = getDigitCustom(list[i], digitPlace)
            bucket[actualElementNth].push(list[i]);
        }
        ++i;
    }
    return bucket.flat(1);
}

function radixSortCustom(list, actualStringLen = 0, digitPlace = 0) {
    // digit place go from 0 up to the list max element length
    // TODO: GET A WAY TO COMPUTE ACTUALSTRINGLEN FROM MAX, OR ALTERNATIVE BASE CASE
    if(digitPlace == 0) actualStringLen = 6;
    console.log(digitPlace)
    if(digitPlace + 1 == actualStringLen) return list;
    return radixSortCustom(bucket(list, digitPlace), actualStringLen, ++digitPlace);
}

/**
 *      RADIX SORT OPTIMIZED FORMER IMPLEMENTATION
 *
 *      We should use helpers.
 *
 * */

let unsortedNums = numbers.unsortedNumbers;
console.log(radixSortCustom([170, 45, 75, 90, 802, 24, 2, 66]));
console.log(radixSortCustom(unsortedNums));


