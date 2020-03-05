let numbers = require('./unsortedNumbers')
let unsortedNums = numbers.unsortedNumbers;
/**
 *      SORTING ALGORITHMS
 *
 *
 *  We implement a not optimized bubble sort
 *
 *      A naive bubble sort:
 *      5, 3, 7, 2, 9, 1, 6, 4, 10, 8
 *
 *      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
 *                              i   j
 *
 *
 * */

// not optimized bubble sort
function naiveSorting(unsortedList) {
    for (let i = 0; i < unsortedList.length; i++) {
        for (let j = i+1; j < unsortedList.length; j++) {
            if(unsortedList[i] > unsortedList[j]){ // swapping the nums
                unsortedList[i] += unsortedList[j];
                unsortedList[j] = unsortedList[i]-unsortedList[j];
                unsortedList[i] -= unsortedList[j]
            }
        }
    }
    return unsortedList;
}

console.log(naiveSorting([5, 3, 7, 2, 9, 1, 6, 4, 10, 8]));
console.log(naiveSorting(unsortedNums));
console.log(`Naive sorting does not orders strings: 
    ${naiveSorting(['Steele', 'Colt', 'Data Structures', 'Algorithms', 'Eduardo', 'Programmer'])}`);

/**
 *      BUILD IN SORT METHOD IN JAVASCRIPT
 *
 *      [].sort()
 * */

function builtinSort(list) {
    // bizarre form to sort arrays, based on unicode codepoints
    return list.sort();
}

console.log(builtinSort(['Steele', 'Colt', 'Data Structures', 'Algorithms', 'Eduardo', 'Programmer']));
console.log(`This is not sorted by builtin: ${builtinSort([5, 3, 7, 2, 9, 1, 6, 4, 10, 8])}`);

/**
 * .sort builtin function has a different way to sort but it can accept a function
 * as its method to compare between the elements in array. So you can pass this function
 * as parameter to .sort
 * */
function numberCompare(num1, num2) {
    // if num1 is greater than 0, it returns true, otherwise num2 is greater than num1
    // and will return false.
    return num1 - num2;
}
function numberCompareInverted(num1, num2) {
    return num2 - num1;
}

console.log([5, 3, 7, 2, 9, 1, 6, 4, 10, 8].sort(numberCompare));
console.log([5, 3, 7, 2, 9, 1, 6, 4, 10, 8].sort(numberCompareInverted));
