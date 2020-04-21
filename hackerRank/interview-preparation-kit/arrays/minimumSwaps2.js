const ex1 = require('./minimum-swaps-long-test-data/examples1');
const ex2 = require('./minimum-swaps-long-test-data/examples2');
const ex3 = require('./minimum-swaps-long-test-data/examples3');

// https://www.hackerrank.com/challenges/minimum-swaps-2/problem
// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let swaps = 0;
    let pvt, pIdx, i
    function helper(arr, s, arrLen){
        pvt = arr[s]; pIdx = s;
        for(i = s+1; i < arrLen; i++) {
            if(arr[i] < pvt) {
                ++pIdx;
                if (i !== pIdx) {
                    [arr[i], arr[pIdx]] = [arr[pIdx], arr[i]]
                    ++swaps;
                }
            }
        }
        if(pvt !== arr[pIdx]) {
            [arr[s], arr[pIdx]] = [arr[pIdx], arr[s]];
            ++swaps;
        }
    }
    (function qSort(arr, start = 0, end = arr.length) {
        if(start < end-1) {
            helper(arr, start, end);
            qSort(arr, start, pIdx);
            qSort(arr, pIdx+1, end);
        }
        return arr;
    })(arr);
    //console.log(arr);
    return swaps;
}

const baseTestSuit = (arr) => {
    let elements = arr.split(' ').map(element => parseInt(element));
    return minimumSwaps(elements);
}
const basicTestSuite = () => {
    // correct: 3
    console.log(baseTestSuit("4 3 1 2"));
    // correct: 3
    console.log(baseTestSuit("2 3 4 1 5"));
    // correct: 3
    console.log(baseTestSuit("1 3 5 2 4 6 7"));
    // correct: 9
    console.log(baseTestSuit("3 7 6 9 1 8 10 4 2 5"));
    // correct: 91
    console.log(baseTestSuit("8 45 35 84 79 12 74 92 81 82 61 32 36 " +
        "1 65 44 89 40 28 20 97 90 22 87 48 26 56 18 49 71 23 34 59 54 14 " +
        "16 19 76 83 95 31 30 69 7 9 60 66 25 52 5 37 27 63 80 24 42 3 50 6 " +
        "11 64 10 96 47 38 57 2 88 100 4 78 85 21 29 75 94 43 77 33 86 98 " +
        "68 73 72 13 91 70 41 17 15 67 93 62 39 53 51 55 58 99 46"));
}

const longDataTestSuite = () => {
    // r: 49990
    console.log(baseTestSuit(ex1.test));
    // r: 99987
    console.log(baseTestSuit(ex2.test));
    // r: 50000
    console.log(baseTestSuit(ex3.test));
}

basicTestSuite();
longDataTestSuite();
