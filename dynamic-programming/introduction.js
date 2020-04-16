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
 *              Fibonaccin Sequence
 *                  It is an example where DP can be applicable.
 *                  Every number after the first two is the sum of the two preceding ones
 * */

// 1, 1, 2, 3, 5, 8, 13 ...
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

function fibonacci(num) {
    //
}

console.log(fibonacciNotRecursive(7));
console.log(fibonacci(7));
