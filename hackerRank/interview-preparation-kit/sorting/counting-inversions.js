// https://www.hackerrank.com/challenges/ctci-merge-sort/problem
// Complete the countInversions function below.
function countInversions(arr) {
    return arr;
}

// merge sort
function merge(left, right) {
    let leftLen =left.length;
    let rightLen = right.length;
    let temp = [];
    let i = 0;
    let j = 0;
    while(i < leftLen && j < rightLen) {
        if(left[i] < right[j]) temp.push(left[i]), ++i;
        else temp.push(right[j]), ++j;
    }
    while (i < leftLen) temp.push(left[i]), ++i;
    while(j < rightLen) temp.push(right[j]), ++j;
    //console.log(left, right, temp);
    return temp;
}
function sorting(arr) {
    let arrLen = arr.length
    if(arrLen === 1) {
        return arr
    };
    let mid = Math.floor(arrLen / 2);
    let first = arr.slice(0, mid);
    let second = arr.slice(mid);
    return merge(
        sorting(first),
        sorting(second)
    );
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

function sortingTestUnit() {
    let arr1 = [2, 1, 2, 3, 3, 4, 6, 5, 8, 7, 1];
    console.log(
        sorting(
            arr1, 0, arr1.length));
}

basicTestSuite();
console.log("----");
sortingTestUnit();
