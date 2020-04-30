const ex1 = require('./long-data-test-count-triplets/example1');
const ex2 = require('./long-data-test-count-triplets/example2');
// https://www.hackerrank.com/challenges/count-triplets-1/problem
// Complete the countTriplets function below.
// data array and radio
function countTriplets(arr, r) {
    let triplets = 0;
    let arrLen = arr.length;
    let geoProg = [];
    // extracting all the elements with a common factor with r
    let i;
    for(i = 0; i < arrLen; i++) {
        if(arr[i] % r === 0 || arr[i] === 1) geoProg.push(arr[i]);
    }
    console.log(geoProg);

    let progSet = [];
    let progMap = {};
    let geoProgLen = geoProg.length;
    for(i = 0; i< geoProgLen; i++) {
        if(progMap[geoProg[i]]) {
            ++progMap[geoProg[i]]
        } else {
            progMap[geoProg[i]] = 1;
            progSet.push(geoProg[i])
        }

    }
    //console.log(progMap);
    let progSetLen = progSet.length;
    //console.log(progSet, progMap[progSet[0]]);
    // get all the triplets
    let j, k, q, first, second, third;
    for(i = 0; i <= progSetLen-3; i++) {
        //console.log("element: ", progSet[i]);
        first = progSet[i];
        for(q = 0; q < progMap[first]; q++) {
            second = progSet[i+1]
            for(j = 0; j < progMap[second]; j++) {
                third = progSet[i+2]
                for(k = 0; k < progMap[third]; k++) {
                    //console.log(i, i+1, i+2, " - ", first, second, third)
                    ++triplets;
                }
            }
        }
    }
    return triplets;
}

function baseTestSuite(arr, r) {
    let arrList = arr.split(' ').map((e)=> parseInt(e));
    return countTriplets(arrList, r);
}

function complexTestSuite() {
    // 161700
    console.log(baseTestSuite(ex1.testArray, ex1.testRadio));

    // 0
    console.log(baseTestSuite(ex2.teestArray, ex2.testRatio));
}

function basicTestSuite() {
    // 2
    console.log(baseTestSuite("1 2 2 4", 2));
    // 6
    console.log(countTriplets(
        [1, 3, 9, 9, 27, 81], 3));

    // 12
    console.log(countTriplets(
        [1, 3, 9, 9, 27, 27, 81], 3));

    // 4
    console.log(baseTestSuite(
        "1 5 5 25 125", 5));
}


basicTestSuite();
complexTestSuite();
