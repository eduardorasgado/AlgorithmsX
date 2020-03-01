const america = require('./states-of-america');
const nameData = require('./names');

//console.log(america.states);
//console.log(nameData.names);

let states = america.states;
let names = nameData.names;

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
    // Time complexity O(n)
    for(let i = 0; i < list.length; i++) if(list[i] === target) return i;
    return -1;
}

console.log(searchElement(names, 'Tyler'));
console.log(searchElement(states, 'Iowa'));
console.log(names.includes('Tyler'))
