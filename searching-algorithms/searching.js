const america = require('./states-of-america');
const nameData = require('./names');
const numberData = require('./sortedNums')

//console.log(america.states);
//console.log(nameData.names);

let states = america.states;
let names = nameData.names;
let sortedNums = numberData.numbers;

console.log(states.indexOf('Oklahoma'));
console.log(states.indexOf('Chihuahua'));


/**
 * SEARCHING ALGORITHMS
 *
 *      Objectives
 *          - Describe what a searching algorithm is
 *          - Implement linear search on arrays
 *          - Implement binary search on sorted arrays
 *          - Implement a naive string searching algorithm
 *          - IMplement the KMP string searching algorithm
 *
 *
 * LINEAR SEARCH ALGORITHM
 * */

function searchElement(list, target) {
    // Time complexity, Best: O(1), average: O(n), worst: O(n)
    for(let i = 0; i < list.length; i++) if(list[i] === target) return i;
    return -1;
}

//console.log(searchElement(names, 'Tyler'));
//console.log(searchElement(states, 'Iowa'));
//console.log(searchElement(names, 'Tonie'))
//console.log(names.includes('Tyler'))
//console.log(searchElement(sortedNums, 72845))

/**
 *  Binary Search
 *
 *      Works only on sorted arrays
 *      It is part of divide and conquer paradigm solitions out there
 * */


// Time complexity, best: O(1), average: O(log n), worst: O(log n)
function binarySearch(list, target) {
    let left = 0;
    let right = list.length - 1;
    while(left <= right) {
        let mid = Math.floor((right + left) / 2);
        if(target > list[mid]) left = mid + 1
        else if(target < list[mid]) right = mid - 1;
        else return mid // list[mid] === target
    }
    return -1;
}

// 72845
console.log(binarySearch(sortedNums, 72845));
console.log(binarySearch(sortedNums, 98975));
console.log(binarySearch(names, 'Kalani'));

/**
 *      BINARY SEARCH TIME COMPLEXITY
 *
 * How to get the worst time complexity of binary search
 *
 * imagine we have this arrray:
 *
 *      [2, 4, 5, 9, 11, 14, 15, 19, 21, 25, 28, 30, 50, 52, 60]
 *
 * then, we want to search for the 13 value, which is not within the list
 *
 * lets start the search: 13 (i= index)
 *
 *          [2, 4, 5, 9, 11, 14, 15, 19, 21, 25, 28, 30, 50, 52, 60]  <-- 1
 *              mid: i8 = 19
 *
 *          [2, 4, 5, 9, 11, 14, 15]           <-- 2
 *              mid: 7 + 0 / 2 = floor(i3.5) = 9
 *
 *          [11, 14, 15]                        <-- 3
 *              mid: 6 + 4 / 2 = i5 = 14
 *
 *          [11]                               <-- 4
 *              mid = l = r = -1, 13 didnt find
 *
 * It took 4 steps to get the result in a 16 elements array
 *
 *      log 16 = 4;   <-- O(log n)
 *      2^4 = 16
 *
 * In this case we got 4 steps for 16 elements, if we want to add another step
 * we will need to double the number of elements.
 * log 32 = 5
 * */
