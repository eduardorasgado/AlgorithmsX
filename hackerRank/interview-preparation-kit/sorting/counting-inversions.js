// https://www.hackerrank.com/challenges/ctci-merge-sort/problem
// Complete the countInversions function below.
// constaints
//1 <= n <= 10^5
// 1 <= arr[i] <= 10^7
function countInversions(arr) {
    let arrLen = arr.length;
    let inv = 0;
    let i, k;
    for(i = 0; i < arrLen-1; i++) {
        for (k = i+1; k < arrLen; k++) {

            if(arr[i] > arr[k]) ++inv;
        }
    }
    return inv;
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
    return temp;
}
function sorting(arr, start, end) {
    if(end - start === 1) {
        return [arr[start]];
    };
    let mid = start + Math.floor((end - start) / 2);
    return merge(
        sorting(arr, start, mid),
        sorting(arr, mid, end)
    );
}

function baseTestSuite(arr) {
    arr = arr.split(" ").map(n => parseInt(n));
    return countInversions(arr);
}

function longTestSuite() {
    let data = Array.apply(null, {length: 100000}).map(Function.call, Math.random);
    console.log(countInversions(data));
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
    console.log(baseTestSuite("7 5 3 1"));
}

function sortingTestUnit() {
    let arr1 = [2, 1, 2, 3, 3, 4, 6, 5, 8, 7, 1];
    console.log(
        sorting(
            arr1, 0, arr1.length));

    let arrHuge = Array.apply(null, {length: 100000}).map(Function.call, Math.random)
    console.log(sorting(arrHuge, 0, arrHuge.length)
        .slice(-Math.floor(arrHuge.length / 8)));
}

console.log("----");
basicTestSuite();
//sortingTestUnit();
console.log("----");
longTestSuite()
