const numbers = require('./unsortedNumbers');
/**
 *      SELECTION SORT
 *
 *          Similar to bubble sort, but instead of first placing large
 *          values into sorted position, it places small values into sorted
 *          position.
 * */
let unsortedNums = numbers.unsortedNumbers;

function naiveSelectionSort(list) {
    return list;
}

console.log(naiveSelectionSort(unsortedNums));
