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
 *      My own first implementation of radix sort comes first:
 * */

function bucket(list, digitPlace) {
    let i = 0;
    let actualStringLen = 0;
    // to accumulate all the elements
    let bucket = [...Array(10)].map(e => Array(0));
    while (i< list.length){
        https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript/28203456#28203456
        actualStringLen = Math.max(Math.floor(Math.log10(Math.abs(list))), 0) + 1;
        if(actualStringLen - 1 < digitPlace){
            // locate all numbers with a length bellow the digit place in the beggining of the list
            bucket[0].push(list[i]);
        }
        else {
            // https://stackoverflow.com/questions/13955738/javascript-get-the-second-digit-from-a-number
            let actualElementNth = Math.floor((list[i] / Math.pow(10, digitPlace)) % 10);
            bucket[actualElementNth].push(list[i]);
        }
        ++i;
    }

    return bucket.flat(1);

}

function radixSortCustom(list, actualStringLen = 0, digitPlace = 0) {
    // digit place go from 0 up to the list max element length
    if(digitPlace == 0) actualStringLen = 6;
    console.log(digitPlace)
    if(digitPlace + 1 == actualStringLen) return list;
    return radixSortCustom(bucket(list, digitPlace), actualStringLen, ++digitPlace);
}

let unsortedNums = numbers.unsortedNumbers;
unsortedNums.splice(0, Math.floor(unsortedNums.length / 2))
console.log(radixSortCustom([170, 45, 75, 90, 802, 24, 2, 66]));
console.log(radixSortCustom(unsortedNums));


