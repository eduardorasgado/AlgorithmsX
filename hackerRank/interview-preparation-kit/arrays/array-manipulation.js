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
    let maxAccumulated = 0;
    let startIdx, finalIdx, value;
    let groups = [[queries[0][0]-1, queries[0][1]-1]];
    let allAccumulated = [0];
    let i;
    let j = 0;
    for(i = 0; i < queriesLen; i++) {
        startIdx = queries[i][0]-1;
        finalIdx = queries[i][1]-1;
        value = queries[i][2];
        // new range is out of current groups element's ranges
        if ((startIdx < groups[j][0] && finalIdx < groups[j][0]) ||
            (startIdx > groups[j][1] && finalIdx > groups[j][1])){
            ++j;
            groups[j] = [startIdx, finalIdx];
            allAccumulated.push(0)
        }
        allAccumulated[j] += value;
    }
    //console.log(groups)
    //console.log(allAccumulated)
    let newMaxAccList = []
    let maxIdx = 0;
    let idxToDelete = [0];
    let currentGroup = [groups[0][0], groups[0][1]];
    let k;
    let groupsLen = groups.length;
    //console.log("acc", allAccumulated);
    while(groupsLen > 0) {
        newMaxAccList[maxIdx] = allAccumulated[0];
        //console.log("max", maxIdx);
        for(i = 1; i < groupsLen; i++) {
            if (!((currentGroup[0] < groups[i][0] && currentGroup[1] < groups[i][0]) ||
                (currentGroup[0] > groups[i][1] && currentGroup[1] > groups[i][1]))) {
                newMaxAccList[maxIdx] += allAccumulated[i];
                idxToDelete.push(i);
            }
        }
        //console.log(groups);
        //console.log("idx: ", idxToDelete, allAccumulated);
        //console.log(groups.length);
        // delete all in idx
        k = 0;
        let toDelete;
        // filter elements already paired and accumulated
        groups = groups.filter((element, index) => {
            toDelete = index !== idxToDelete[k];
            if(toDelete) k++;
            return toDelete;
        })
        k = 0;
        allAccumulated = allAccumulated.filter((element, index) => {
            toDelete = index !== idxToDelete[k];
            if(toDelete) k++;
            return toDelete;
        })
        //
        //break;
        ++maxIdx;
        groupsLen = groups.length;
        if(groupsLen > 0) {
            currentGroup = [groups[0][0], groups[0][1]];
            idxToDelete = [0];
        }
    }
    maxAccumulated = Math.max(...newMaxAccList);
    //console.log("deleted: ", groups.length, allAccumulated.length)
    //console.log("final max: ", newMaxAccList);
    //return allAccumulated;
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
