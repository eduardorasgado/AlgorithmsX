const { SinglyLinkedList } = require('../DataStructures/singlyLinkedList/singly-linked-list')
/**
 *      DYNAMIC PROGRAMMING
 *
 *          OBJECTIVES
 *              Define what dynamic programming is
 *              Explain what overlapping subproblems are
 *              Understand what optimal substructure is
 *              Solve more challenging problems using dynamic programming
 *
 *          WHAT IT IS?
 *              A method for solving a complex problem by breaking it down into a
 *              collection of simpler subproblems in a recursive manner, solving
 *              each of those subproblems just once, and storing their solution.
 *
 *              It only works on problems with Optimal Substructure and Overlapping
 *              subproblems.
 *
 *              In computer science, if a problem can be solved optimally by breaking it
 *              into sub-problems and then recursively finding the optimal solutions
 *              to the sub-problems, then it is said to have optimal substructure.
 *
 *              If sub-problems can be nested recursively inside larger problems,
 *              so that dynamic programming methods are applicable
 *
 * */

// 1, 1, 2, 3, 5, 8, 13, 21 ...
function fibonacciNotRecursive(num) {
    let tempSum;
    let last = 0;
    let sum = 1;
    while(num-- > 1) {
        tempSum = sum;
        sum += last;
        last = tempSum
    }
    return sum;
}

console.log(fibonacciNotRecursive(7));
console.log(" ");

/**
 *      FIBONACCI USING DYNAMIC PROGRAMMING(WITHOUT MEMOIZATION)
 *          Big O of this fibonacci is pretty bad!
 *          Big O(2^n), really mathematically correct is O(1.6^n) due to next
 *          explanation:
 *          https://stackoverflow.com/questions/360748/computational-complexity-of-fibonacci-sequence
 * @param num
 * @returns {number|*}
 */
function fibonacci(num = 0) {
    if (num <= 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(7));

let fibSet = [0, 1]
function fibonacciSet(num) {
    if(num === 1) return fibSet.splice(0, 1);
    fibSet.push(fibSet[fibSet.length - 1] + fibSet[fibSet.length - 2])
    fibonacciSet(num-1);
}

fibonacciSet(40);
console.log(fibSet);

/**
 * FIBONACCI WITH NO STACK OVERFLOW OR CALL STACK EXCEEDED.
 *  This implementation involves O(n). Max is 1476 due to next fib number in next iteration
 *  is infinity.
 *
 * @param num
 * @returns {number}
 */
function fibonacciFast(num) {
    let fibSet = [0, 1];
    while(num !== 1) {
        let temp = fibSet[0];
        fibSet[0] = fibSet[1];
        fibSet[1] = temp + fibSet[0];
        --num;
    }
    return fibSet[1];
}

console.log("after 1476 fibonacci requested element, get infinity");
console.log(fibonacciFast(1476));

/**
 *          WHAT IS IT(DP)?(Continuation)
 *
 *              Fibonacci Sequence
 *                  It is an example where DP can be applicable.
 *                  Every number after the first two is the sum of the two preceding ones
 *                  It overlaps subproblems every iteration, there are repeated branches
 *                  example:
 *                                                  _________________fib(5)____________________
 *                                               fib(4)                +               _______fib(3)_______
 *                       _______fib(3)____      +   _______fib(2)_____           ____fib(2)___  +        fib(1)
 *                 ____fib(2)___  +     fib(1)    fib(1)     +      fib(0)     fib(1)   +   fib(0)
 *              fib(1)   +   fib(0)
 *
 *                1      +     0   +      1    +     1      +         0      +   1     +    0             1   =  5
 *
 *                  Look at how many times fib(2) had to be calculated, it was 3 times.
 *
 *          WHAT IT IS NOT(DP)?
 *
 *              Merge sort -
 *                                     mergeSort([10, 5, 4, 2])
 *                      [10, 5]                  merge              [4, 2]
 *                    mergeSort([10, 5])                      mergeSort([4, 2])
 *                    [10]   merge     [5]                   [4]   merge   [2]
 *               mergeSort([10])    mergeSort([5])       mergeSort([4])  mergeSort([2])
 *
 *               No overlaping subproblems!
 *
 *         OVERLAPING SUBPROBLEMS
 *              A problem is said to have overlapping subproblems if it can be broken
 *              down into subproblems which are reused several times.
 *
 *              NOTE: All cases for that problems should follow this rule with no exception.
 *              We can find special cases for some problems we can apply dynamic programming
 *              even if those problems are not applicable for dynamic programming due to average cases,
 *              even tho we cannot apply DP programming for these problems due to isolated cases are not
 *              the whole set of cases.
 *
 *          OPTIMAL SUBSTRUCTURE
 *              A problem is said to have optimal substructure if an optimal solution can
 *              be constructed from optimal solutions of its subproblems.
 * */


/***
 *          ENTER DYNAMIC PROGRAMMING
 *
 *              Using past knowledge to make solving a future problem easier
 *
 *          MEMOIZATION
 *
 *              Adding to the above deffinition of DP,
 *              "A method for solving a complex problem by breaking it down into
 *              a collection of simpler subproblems, solving each of those subproblems
 *              JUST ONCE, and storing their solution."
 */

// answer memory structure
let memoryTable = {};
function fibonacciRethink(num = 0) {
    if (num <= 2) return 1;
    // if exists reassing if not exist assign next fibo callback
    memoryTable[num-1] = memoryTable[num-1] || fibonacciRethink(num - 1);
    memoryTable[num-2] = memoryTable[num-2] || fibonacciRethink(num - 2);
    return memoryTable[num-1] + memoryTable[num-2];
}

console.log("-----WHAT IF WE COULD REMEMBER OLD VALUES----");
console.log(fibonacciRethink(1476));
