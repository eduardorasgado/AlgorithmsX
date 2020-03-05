const numbers = require('./unsortedNumbers');
/**
 *      SELECTION SORT
 *
 *          Similar to bubble sort, but instead of first placing large
 *          values into sorted position, it places small values into sorted
 *          position.
 *
 *          Time Complexity
 *
 *              Better than bubble sort
 *              Still best: O(n), avg and worst: O(n^2)
 * */
let unsortedNums = numbers.unsortedNumbers;

function selectionSort(list) {
    for (let i = 0; i < list.length-1; i++) {
        let min = i; // storing index of minimum value
        for (let j = i+1; j < list.length; j++)
            (list[j] < list[min]) && (min = j);
        (min != i) && ([list[i], list[min]] = [list[min], list[i]])
    }
    return list;
}

console.log(selectionSort(unsortedNums));
console.log("------");
console.log(selectionSort([5, 3, 7, 2, 9, 1, 6, 4, 10, 8]));
console.log(selectionSort([1, 6, 15, 33, 30, 32, 26, 36, 42, 45, 46, 47, 48]));
