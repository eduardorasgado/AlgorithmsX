let strict;
strict = 'use strict';
const { performance } = require('perf_hooks');
/***
 * add up to function
 * */
function addUpEvery(n, sum) {
    return n > 0 ? addUpEvery(n-1, sum += n) : sum;
}

function addUpEvery3(n) {
    return n * (n + 1) / 2
}

function addUpEvery2(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i
    }
    return total
}

/**
 * Up AND DOWN ALGORITHM
 * counting up to max and counting down to min
 *
 * O(n)
 */
function upAndDown(n) {
    // O(n)
    for (let i = 0; i < n; i++) {
        console.log(i)
    }

    // O(n)
    for (let i = n; i >= 0; i--) {
        console.log(i)
    }
}

/**
 * print all pairs algorithm
 * Given the nested for loops we got
 *
 * On(n * n) = O(n^2)
 *
 */

function printAllPairs(n) {
    // O(n)
    for (let i = 0; i < n; i++) {
        // O(n)
        for (let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }
}

console.log(addUpEvery(10000, 0));
let t1 = performance.now();
console.log(addUpEvery2(1000000000, 0));
let t2 = performance.now();
let t1a2 = performance.now();
console.log(addUpEvery3(100000000000000000000000, 0));
let t2a2 = performance.now();
console.log(`Time elapsed algorithm 2: ${t2 - t1} / 1000 seconds`)
console.log(`Time elapsed algorithm 2: ${t2a2 - t1a2} / 1000 seconds`)
console.log("up and down algorithm");
// upAndDown(100000)
console.log("print all pairs algorithm");
printAllPairs(100)

