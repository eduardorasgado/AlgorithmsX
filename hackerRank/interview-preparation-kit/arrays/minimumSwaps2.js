const ex1 = require('./minimum-swaps-long-test-data/examples1');
const ex2 = require('./minimum-swaps-long-test-data/examples2');
const ex3 = require('./minimum-swaps-long-test-data/examples3');

// https://www.hackerrank.com/challenges/minimum-swaps-2/problem
// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let swaps = 0;
    function swap(arr, xIdx, yIdx) {
        [arr[xIdx], arr[yIdx]] = [arr[yIdx], arr[xIdx]];
        ++swaps;
    }
    let arrLen = arr.length;
    // to avoid sum to sortCounter a already sorted element
    let sortedElements = {}
    let sortCounter = 0;
    let i = 0;
    let currentNum;
    while(sortCounter < arrLen) {
        // if are equal then element is already sorted
        currentNum = arr[i]
        if(currentNum-1 !== i) {
            // [4, 2, 3, 1], 4 = arr[i] and 1 = arr[arr[i]-1]  <- position corresponding
            // if not pos corresponding
            if(i+1 !== arr[currentNum-1]){
                // swapping arr[i] element to i = arr[i] position
                swap(arr, i, currentNum-1)
                sortedElements[currentNum] = true;
                ++sortCounter;
            } else {
                // position corresponging elements
                swap(arr, i, currentNum-1);
                sortedElements[i+1] = true;
                sortedElements[currentNum] = true;
                sortCounter += 2;
            }
        } else {
            // elements already sorted
            if(!sortedElements[i+1]) {
                sortedElements[i+1] = true
                ++sortCounter
            }
        }
        //console.log(sortCounter, arr)
        // when got the end of the array, sort remainers
        i = (i===arrLen-1) ? 0 : ++i;
    }
    //console.log(sortedElements);
    //console.log(arr);
    return swaps;
}

const baseTestSuit = (arr) => {
    let elements = arr.split(' ').map(element => parseInt(element));
    return minimumSwaps(elements);
}
const basicTestSuite = () => {
    console.log('------------')
    // correct: 3
    console.log(baseTestSuit("4 3 1 2"));
    console.log('------------')
    // correct: 3
    console.log(baseTestSuit("2 3 4 1 5"));
    console.log('------------')
    // correct: 3
    console.log(baseTestSuit("1 3 5 2 4 6 7"));
    console.log('------------')
    // correct: 9
    console.log(baseTestSuit("3 7 6 9 1 8 10 4 2 5"));
    //  1  2  3  4  5  6  7   8  9  10  indexes
    //  3  7   6  9  1  8  10  4  2  5   final
    //  6  7   3  9  1  8  10  4  2  5      3
    //  6  10  3  9  1  8  7  4  2  5       7
    //  6  10  3  2  1  8  7  4  9  5       9
    //  1  10  3  2  6  8  7  4  9  5       1
    //  1  10  3  2  6  4  7  8  9  5       8
    //  1   5  3  2  6  4  7  8  9  10      10
    //  (1)  5 (3) 6  2  4 (7  8  9  10)     -
    //  (1   2  3) 6 (5) 4 (7  8  9  10)     2, 5
    //  (1   2  3  4  5  6  7  8  9  10      6, 4
    // correct: 91
    //console.log(baseTestSuit("8 45 35 84 79 12 74 92 81 82 61 32 36 " +
    //    "1 65 44 89 40 28 20 97 90 22 87 48 26 56 18 49 71 23 34 59 54 14 " +
    //    "16 19 76 83 95 31 30 69 7 9 60 66 25 52 5 37 27 63 80 24 42 3 50 6 " +
    //    "11 64 10 96 47 38 57 2 88 100 4 78 85 21 29 75 94 43 77 33 86 98 " +
    //    "68 73 72 13 91 70 41 17 15 67 93 62 39 53 51 55 58 99 46"));
}

const longDataTestSuite = () => {
    console.log('------------')
    // r: 49990
    console.log(baseTestSuit(ex1.test));
    console.log('------------')
    // r: 99987
    console.log(baseTestSuit(ex2.test));
    console.log('------------')
    // r: 50000
    console.log(baseTestSuit(ex3.test));
}

console.log(minimumSwaps([4, 3, 2, 1]));
console.log(minimumSwaps([6, 3, 4, 5, 2, 1]));

// 6, 3, 4, 5, 2, 1 <- initial
// 1  3  4  5  2  6
// 1  4  3  5  2  6     / 1  4  3  5  2  6
// 1  5  3  4  2  6
// 1  2  3  4  5  6

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
// 7, 1, 3, 2, 4, 5, 6 <- initial
// 6, 1, 3, 2, 4, 5, 7
// 1, 6, 3, 2, 4, 5, 7
// 1, 2, 3, 6, 4, 5, 7
// 1, 2, 3, 4, 6, 5, 7
// 1, 2, 3, 4, 5, 6, 7
console.log("======================");
basicTestSuite();
longDataTestSuite();
