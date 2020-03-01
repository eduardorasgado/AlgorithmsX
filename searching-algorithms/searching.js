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
 * */


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
console.log(binarySearch(names, 'Kalani'));
