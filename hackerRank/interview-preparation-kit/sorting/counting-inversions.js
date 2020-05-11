// https://www.hackerrank.com/challenges/ctci-merge-sort/problem
// Complete the countInversions function below.
function countInversions(arr) {
    return arr;
}

function baseTestSuite(arr) {
    arr = arr.split(" ").map(n => parseInt(n));
    return countInversions(arr);
}

function basicTestSuite() {
    // 2
    console.log(baseTestSuite("2 4 1"));
    // 0
    console.log(baseTestSuite("1 1 1 2 2"));
    // 4
    console.log(baseTestSuite("2 1 3 1 2"));
    // 2 1 3 1 2, out of order are 2, 1 | 2, 1 | 3, 1 | 3, 2
    // swapping
    // 1 2 3 1 2
    // 1 1 3 2 2
    // 1 1 2 3 2
    // 1 1 2 2 3
    // we performed a total of 4 swaps to correct inversions
}
