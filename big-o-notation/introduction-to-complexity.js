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
// printAllPairs(100)


/**
 *  INTRODUCTION TO TIME COMPLEXITY
 *
 *  O(2n) = O(n)
 *
 *  O(500) = O(1)
 *
 *  O(n + 10) = O(n)
 *
 *  O(1000n + 50) = O(n)
 *
 *  O(n^2 + 5n + 2) = O(n^2)
 *
 */


function complexNSquare(n) {
    var total = 0;
    // O(n^2)
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            total += (i * j) / 2; // O(n) + 2
        }
    }

    // O(5n + 1)
    for (let i = 0; i <= n; i++) {
        total += 1
    }

    console.log(total)
}

complexNSquare(100000);


/***
 *  BIG O SHORTHANDS
 *
 *  1. Arithmetic operations are constant, e.g. n * 5 / 2 * n;    -> O(3)
 *
 *  2. Variable assignment is contant, e.g.  x = 5; y = n * 3;    -> O(3)
 *
 *  Accesing elements in an array(by index)
 *  or object(by key) is constant    e.g. x = arr[5];             -> 0(2)
 *                                   e.g. port = connection.port; -> O(2)
 */
