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
 *  TIME AND SPACE COMPLEXITY
 *
 *  Time:
 *      Operations
 *      Comparison
 *      Loop stuff
 *      Pointer references
 *      Function cals to outside
 *
 *  Space:
 *      Variables
 *      Data structurres
 *      Allocations
 *      Function call
 *
 */

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
 *  O(log n) -> we generally see this time comp. when we are applying divide and conquer algorithms
 *
 */


function complexNSquare(n) {
    var total = 0;
    // O(4*n^2)
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            total += (i * j) / 2; // O(4)
        }
    }

    // O(n + 2)
    for (let i = 0; i <= n; i++) {
        total += 1
    }

    console.log(total)
}

// complexNSquare(100000);


/***
 *  BIG O SHORTHANDS
 *
 *  1. Arithmetic operations are constant, e.g. n * 5 / 2 * n;    -> O(3)
 *
 *  2. Variable assignment is contant, e.g.  x = 5; y = n * 3;    -> O(3)
 *
 *  3. Accesing elements in an array(by index)
 *  or object(by key) is constant    e.g. x = arr[5];             -> 0(2)
 *                                   e.g. port = connection.port; -> O(2)
 *
 *  4. In a loop, the complexity is the length
 *      of the loop time the complexity of
 *      whatever happens inside of the loop
 *                       e.g. Arr.map(e -> e.map(a-> something))  -> 0(n * n) = O(n^2)
 *
 *
 */

// Printing at least five numbers from 1 to n
function logAtLeast5(n) {
    /**
     * O(n)
     */
    for (let i = 1; i <= Math.max(5,  n); i++) {
        console.log(i)
    }
}

// printing just the first five numbers from 1 to n
function logAtMost5(n) {
    /**
     * O(5) = O(1)
     */
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i)
    }
}

logAtLeast5(3)
console.log("------------------")
logAtMost5(4)

/**
 *
 * TIME COMPLEXITY
 *  So next is the order of Big O time complexity
 *
 *  O(1) < O(log n) < O(n) < O(n log n) < O(n^2)
 */


/**
 * Determine the time complexity for the following function
 * */

function logUpTo(n) {
    // O(n)
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

function logAtMost10(n) {
    // O(1)
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

function logAtLeast10(n) {
    // O(n)
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}


function onlyElementsAtEvenIndex(array) {
    // 3
    var newArray = Array(Math.ceil(array.length / 2));
    // O(n + 4)
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

function subtotals(array) {
    // 2
    var subtotalArray = Array(array.length);
    // O(n* n) = O(n^2 + 5) = O(n^2)
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

// END OF THE EXAM

/*
*  SPACE COMPLEXITY
*    Space complexity will sometimes be [determined by the language] and how this handles all the allocations
*   function calls and so on.
* */


// O(n) + 3 , if we didnt have x allocation inside the loop we could get O(1) space complexity
// function and array takes memory
function onlyElementsAtEvenIndex(array) {
    // allocation
    var newArray = Array(Math.ceil(array.length / 2));
    for (let i = 0; i < array.length; i++) {
        // allocation
        var x = array[i]
    }
    return newArray;
}

/**
 *  SPACE COMPLEXITY IN JS: Rules of Thumb
 *
 *  Most primitive(booleans, numbers, undefined, null) are constant space
 *
 *  String require O(n) space (where n is the string length)
 *
 *  Reference types are generally O(n), where n is the length(for arrays) or the numner of keys(for objects)
* */

// O(1)
function sum(arr) {
    // another number
    let total = 0;
    // another number :i
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total;
}


//
function double(arr) {
    // creating a new array
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        // // O(n) <- array is growing in memory
        newArr.push(2 * arr[i])
    }
    return newArr;
}

/*
* SPACE COMPLEXITY EXAM
* */

// o(1)
function logUpTo(n) {
    // Every time is created a new i and last is lost
    // O(1)
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

// O(1)
function logAtMost10(n) {
    // space for i every time it is created O(1)
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// O(1)
function logAtMost10(n) {
    // space for i every time it is created till we get up to ten
    // O(1)
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}


// O(n)
function onlyElementsAtEvenIndex(array) {
    // O(1)
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            // array is growing up and js is allocating new space in memory
            // O(n)
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}


// O(n) because in for loop i we are getting i, j loops but O(n) + O(n), c
// corresponding subtotal creation and subtotalArray growing up in memory allocation
function subtotals(array) {
    // O(n)
    var subtotalArray = Array(array.length);
    // O(n)
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        // here array is growing in length and using more and more memory allocation
        // O(n)
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

/*
*
*    LOGARITHMS
*
* What is a logarithm:
*   A logarithm is actually the inverse of the exponential, it means
*
*       log 2 (8) = 3;  inverse will be 2^3 = 8
*
*       log2(value) = exponent -> 2^exponent = value
*
*   A logarithm graph curve is then inverse to exponential.
*       log === log2
*
*   IMPORTANT:
*
*   - Certain searching algorithms have logarithmic time complexity
*
*   - Efficient sorting algorithms involve logarithms.
*
*   - Recursion sometimes involves logarithmic space complexity
*
* */
