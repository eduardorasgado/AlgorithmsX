const { dataReader } = require('./array-manipulation-long-test-data/data-reader');
// https://www.hackerrank.com/challenges/crush/problem
// Complete the arrayManipulation function below.
// n = 3/ 10^7
// 1 <= queries.length <= 200, 000
// queries[a, b, k] (a, b ) = 1<= a <=b,
// queries[a, b, k] 0<= k <= 1 billion = 1000 000 000
// solution time complexity: O(n+m)
function arrayManipulation(n, queries) {
    let maxAccumulated = 0;
    let cages = Array.from({length: n+2}, () => 0);
    let additionMax = 0;
    //let cagesValues = [];
    let querie
    for(querie of queries) {
        // start adds
        cages[querie[0]] += querie[2];
        // end sust
        cages[querie[1]+1] -= querie[2];
    }
    let boundary;
    for(boundary of cages) {
        additionMax += boundary;
        maxAccumulated = Math.max(maxAccumulated, additionMax)
    }

    return maxAccumulated;
}

function longDataTestSuite() {
    // 10 000 000, 100 000   the size of the array and the number of operations.
    // r: 2 497 169 732
    let queries1 = dataReader( "example1.txt");
    //console.log(queries1.slice(queries1.length-100, queries1.length));
    console.log("response: ", arrayManipulation(10000000, queries1))  ;
}

function basicTestSuite() {
    // r: 200
    // 5 3
    console.log("basic suite here");
    console.log("response:" +
        " ", arrayManipulation(5,
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

    // 33
    console.log("response: ", arrayManipulation(10,
        [[2,  6,  8],
                [3,  5,  7],
                [1,  8,  1],
                [5,  8,  15],
                [9,  10, 15],
                [10, 10, 17],
                [1,  2,  1],
                [2,  4,  3],
                [10, 10, 1]]));
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
