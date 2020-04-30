const ex1 = require('./long-data-test-count-triplets/example1');
const ex2 = require('./long-data-test-count-triplets/example2');
const ex3 = require('./long-data-test-count-triplets/example3');
const ex4 = require('./long-data-test-count-triplets/example4');
const ex5 = require('./long-data-test-count-triplets/example5');
const ex6 = require('./long-data-test-count-triplets/example6');
// https://www.hackerrank.com/challenges/count-triplets-1/problem
// Complete the countTriplets function below.
// data array and radio
function countTriplets(arr, r) {
    let triplets = 0;
    let arrLen = arr.length;

    return triplets;
}

function baseTestSuite(arr, r) {
    let arrList = arr.split(' ').map((e)=> parseInt(e));
    return countTriplets(arrList, r);
}

function complexTestSuite() {
    console.log("----------Complex Test Suite-------");
    // 161700
    console.log(baseTestSuite(ex1.testArray, ex1.testRatio));

    // 0
    console.log(baseTestSuite(ex2.teestArray, ex2.testRatio));

    // 0
    console.log(baseTestSuite(ex3.testArray, ex3.testRatio));

    // 2325652489
    console.log(baseTestSuite(ex4.testArray, ex4.testRatio));
    // 0
    console.log(baseTestSuite(ex5.testArray, ex5.testRatio));

    // 1667018988625
    console.log(baseTestSuite(ex6.testArray, ex6.testRatio));
}

function basicTestSuite() {
    console.log("----------Basic Test Suite-------");
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
//complexTestSuite();
