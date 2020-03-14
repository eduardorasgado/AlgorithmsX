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
 *          My own first implementation of radix sort
 * */

function bucket(list, digitPlace) {
    let i = 0;
    let actualStringNum = '';
    // to accumulate all the elements
    let bucket = [...Array(10)].map(e => Array(0));
    while (i< list.length){
        // https://stackoverflow.com/questions/13955738/javascript-get-the-second-digit-from-a-number
        let actualStringLen = Math.max(Math.floor(Math.log10(Math.abs(list[i]))), 0) + 1
        if(actualStringLen - 1 < digitPlace){
            // locate all numbers with a length bellow the digit place in the beggining of the list
            bucket[0].push(list[i]);
        }
        else {
            let actualElementNth = Math.floor((list[i] / Math.pow(10, digitPlace)) % 10);
            bucket[actualElementNth].push(list[i])
        }
        ++i;
    }
    //bucket.flat(1);
    console.log(bucket);
}

function radixSortCustom(list, digitPlace = 0) {
    // digit place go from 0 up to the list max element length
    bucket(list, digitPlace);
}

console.log(radixSortCustom([170, 45, 75, 90, 802, 24, 2, 66]));


