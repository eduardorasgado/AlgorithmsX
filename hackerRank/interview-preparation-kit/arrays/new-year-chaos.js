/**
 * Print an integer denoting the minimum number of bribes needed to get the queue
 * into its final state. Print Too chaotic if the state is invalid,
 * i.e. it requires a person to have bribed more than 2 people.
 * @param q
 */
// https://www.hackerrank.com/challenges/new-year-chaos/problem
// Complete the minimumBribes function below.
function minimumBribes(q) {
    // 1 4 2 3
}

// correct: 3
console.log(minimumBribes([2, 1, 5, 3, 4]));
// 2 1 5 3 4  0     2 1 5
// 1 2 5 3 4  1
// 1 2 3 5 4  2
// 1 2 3 4 5  3

// Too chaotic
console.log(minimumBribes([2, 5, 1, 3, 4]));
// 2, 5, 1, 3, 4   0
// 2, 1, 5, 3, 4   1
// 2, 1, 3, 5, 4   2
// 2, 1, 3, 5, 4   Too chaotinc

//correct: Too chaotic
console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]));
// original     1   2   3   4   5   6   7   8
// queue        5,  1,  2,  3,  7,  8,  6,  4
// this is how we get from original queue to bribed queue

// from original queue:
//          1   2   3   4   5   6   7   8

// result:
// queue        5,  1,  2,  3,  7,  8,  6,  4


//correct: 7
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
// original     1   2   3   4   5   6   7   8
// queue        1,  2,  5,  3,  7,  8,  6,  4
// this is how we get from original queue to bribed queue

// from original queue:
//          1   2   3   4   5   6   7   8
//          1   2   3   4   5   7   6   8   [6, 7]     7
//          1   2   3   5   4   7   6   8   [4, 5]     5
//          1   2   5   3   4   7   6   8   [5, 3]     5
//          1   2   5   3   7   4   6   8   [4, 7]     7
//          1   2   5   3   7   4   8   6   [6, 8]     8
//          1   2   5   3   7   8   4   6   [4, 8]     8
//          1   2   5   3   7   8   6   4   [4, 6]     6
// result:
// queue    1,  2,  5,  3,  7,  8,  6,  4

//correct: 4
console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]));
// original     1   2   3   4   5   6   7   8
// queue        1   2   5   3   4   7   8   6
// this is how we get from original queue to bribed queue

// from original queue:
//          1   2   3   4   5   6   7   8
//          1   2   3   5   4   6   7   8    [4, 5]     5
//          1   2   5   3   4   6   7   8    [3, 5]     5
//          1   2   5   3   4   7   6   8    [6, 7]     7
//          1   2   5   3   4   7   8   6    [6, 8]     8

// result:
// queue    1,  2,  5,  3,  7,  8,  6,  4

