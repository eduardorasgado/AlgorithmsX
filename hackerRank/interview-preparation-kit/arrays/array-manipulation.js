const { dataReader } = require('./array-manipulation-long-test-data/data-reader');
// https://www.hackerrank.com/challenges/crush/problem
// Complete the arrayManipulation function below.
// n = 3/ 10^7
// 1 <= queries.length <= 200, 000
// queries[a, b, k] (a, b ) = 1<= a <=b,
// queries[a, b, k] 0<= k <= 1 billion = 1000 000 000
function arrayManipulation(n, queries) {
    let arr = Array.from({length: n}, () => 0);
    let queriesLen = queries.length;
    let maxAccumulate = 0;
    let maxValue = 0;
    let maxValueRange = [0, 0]
    let startIdx, finalIdx, value;
    let accumulativeForAll = 0;
    let currentForAllValue = 0;
    for(let i = 0; i < queriesLen; i++) {
        startIdx = queries[i][0]-1;
        finalIdx = queries[i][1]-1;
        value = queries[i][2];
        if(finalIdx === n-1 && startIdx === 0) {
            console.log("Acc");
            currentForAllValue = value
            accumulativeForAll += currentForAllValue;
            maxAccumulate += currentForAllValue;
        } else {
            if(value > maxValue) {
                maxValue = value;
                maxValueRange[0] = startIdx;
                maxValueRange[1] = finalIdx;
            }
            if(value != 0) {
                if(maxAccumulate < maxValue) {
                    for(startIdx; startIdx <=  finalIdx; startIdx++) {
                        arr[startIdx] += value;
                        maxAccumulate = Math.max(maxAccumulate, arr[startIdx]+ accumulativeForAll);
                    }
                } else {
                    // maxValue is now maxAccumulate
                    startIdx = Math.max(startIdx, maxValueRange[0]);
                    finalIdx = Math.min(finalIdx, maxValueRange[1]);
                    for(startIdx; startIdx <=  finalIdx; startIdx++) {
                        arr[startIdx] += value;
                        maxAccumulate = Math.max(maxAccumulate, arr[startIdx]+ accumulativeForAll);
                    }
                }

            }
        }
    }
    console.log(maxValue, maxValueRange[0],maxValueRange[1]);
    return maxAccumulate;
}

function longDataTestSuite() {
    // 10 000 000, 100 000   the size of the array and the number of operations.
    // r: 2497169732
    let queries1 = dataReader( "example1.txt");
    //console.log(queries1.slice(queries1.length-100, queries1.length));
    console.log("response: ", arrayManipulation(10000000, queries1))  ;
}

function basicTestSuite() {
    // r: 200
    // 5 3
    console.log("basic suite here");
    console.log("response: ", arrayManipulation(5,
        [[1, 2, 100],
            [2, 5, 100],
            [3, 4, 100]]));

    // r: 10
    // 10 3
    console.log("response: ", arrayManipulation(10,
        [[1, 5, 3],
            [4, 8, 7],
            [6, 9, 1]]));

    // r: 31
    //10 4
    console.log("response: ", arrayManipulation(10,
        [[2, 6, 8],
            [3, 5, 7],
            [1, 8, 1],
            [5, 9, 15]]));
}

basicTestSuite();
longDataTestSuite();
// example
// [0 0 0 0 0 0 0 0 0 0]
// Operations:
//     k a b
// 3 1 5
// 7 4 8
// 1 6 9
// 1  2  3  4  5  6  7  8  9  10
// [0  0  0  0  0  0  0  0  0  0]
// [3  3  3  3  3  0  0  0  0  0]
// [3  3  3 10  10 7  7  7  0  0]
// [3  3  3 10  10 8  8  8  1  0]

// largest value = 10