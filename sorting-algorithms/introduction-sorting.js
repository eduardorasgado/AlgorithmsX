let numbers = require('./unsortedNumbers')
let unsortedNums = numbers.unsortedNumbers;
/**
 *      SORTING ALGORITHMS
 *
 *
 *      A naive sort:
 *
 *      5, 3, 7, 2, 9, 1, 6, 4, 10, 8
 *      i  j
 *      5
 *
 * */

function naiveSorting(unsortedList) {
    for (let i = 0; i < unsortedList.length; i++) {
        let min = unsortedList[i];
        for (let j = i+1; j < unsortedList.length; j++) {
            if(unsortedList[j] <= min){
                min = unsortedList[j];
                if(unsortedList[i] > unsortedList[j]){ // swapping the nums
                    unsortedList[i] += unsortedList[j];
                    unsortedList[j] = unsortedList[i]-unsortedList[j];
                    unsortedList[i] -= unsortedList[j]
                }
            }
        }
    }
    return unsortedList;
}

console.log(naiveSorting([5, 3, 7, 2, 9, 1, 6, 4, 10, 8]));
console.log(naiveSorting(unsortedNums));
console.log(naiveSorting(['Steele', 'Colt', 'Data Structures', 'Algorithms', 'Eduardo', 'Programmer']));

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

console.log(`This is not sorted by builtin: ${[5, 3, 7, 2, 9, 1, 6, 4, 10, 8].sort(numberCompare)}`);
