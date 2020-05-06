const ex1 = require('./long-data-test-count-triplets/example1');
const ex2 = require('./long-data-test-count-triplets/example2');
const ex3 = require('./long-data-test-count-triplets/example3');
const ex4 = require('./long-data-test-count-triplets/example4');
const ex5 = require('./long-data-test-count-triplets/example5');
const ex6 = require('./long-data-test-count-triplets/example6');
// https://www.hackerrank.com/challenges/count-triplets-1/problem
// Complete the countTriplets function below.
// data array and radio
function countTripletsOptimized(arr,r) {
    let arrLen = arr.length;
    let nFreq = {};
    let n;
    let i = 0;
    while(i< arrLen) {
        n = arr[i];
        nFreq[n] = ++nFreq[n] || 1;
        ++i;
    }
    console.log(nFreq);
}
function countTriplets(arr, r) {
    let triplets = 0;
    let arrLen = arr.length;
    let i, j, k;
    let geoProg = [];
    let geoMap = {}
    let locMap = {}
    for(i = 0; i < arrLen; i++) {
        geoMap[arr[i]] = [arr[i]* Math.pow(r, 1), arr[i]* Math.pow(r, 2)]
        if(locMap[arr[i]] !== undefined) {
            locMap[arr[i]].push(i);
        } else locMap[arr[i]] = [i];
    }

    let g1, g2, lm1, lm2, lm1Len, lm2Len, newG1Elements, nextK;
    for(i = 0; i < arrLen; i++) {
        g1 = geoMap[arr[i]][0];
        g2 = geoMap[arr[i]][1];
        if(geoMap[g1] && geoMap[g2]) {
            lm1 = locMap[g1];
            lm1Len = lm1.length;
            nextK = 0;
            newG1Elements = [];
            for(j = 0; j < lm1Len; j++) {
                if(i < lm1[j]) {
                    newG1Elements.push(lm1[j]);
                    if(geoMap[g2]) {
                        lm2 = locMap[g2];
                        lm2Len = lm2.length;
                        for(k = nextK; k < lm2Len; k++) {
                            if(lm1[j] < lm2[k]) {
                                triplets += (lm2Len - k);
                                nextK = k;
                                break;
                            }
                        }
                    }
                }
            }
            locMap[g1] = newG1Elements;
        }
    }
    return triplets;
}

function baseTestSuite(arr, r, mod=false) {
    let arrList = arr.split(' ').map((e)=> parseInt(e));
    if(mod)
        return countTripletsOptimized(arrList, r);
    return countTriplets(arrList, r);
}

function complexTestSuite() {
    console.log("----------Complex Test Suite-------");
    // 161700
    //console.log("example 1 length: ",ex1.testArray.length);
    //console.log(baseTestSuite(ex1.testArray, ex1.testRatio));
    //console.log(baseTestSuite(ex1.testArray, ex1.testRatio, true));

    // 0
    //console.log("example 2 length: ",ex2.testArray.length);
    //console.log(baseTestSuite(ex2.testArray, ex2.testRatio));

    // 0
    //console.log(baseTestSuite(ex3.testArray, ex3.testRatio));

    // 2 325 652 489
    console.log("example 4 length: ", ex4.testArray.length);
    //console.log(baseTestSuite(ex4.testArray, ex4.testRatio));
    console.log(baseTestSuite(ex4.testArray, ex4.testRatio, true));

    // 0
    //console.log(baseTestSuite(ex5.testArray, ex5.testRatio));

    // 1 667 018 988 625
    //console.log("example 6 length: ", ex6.testArray.length);
    //console.log(baseTestSuite(ex6.testArray, ex6.testRatio));
}

function basicTestSuite() {
    console.log("----------Basic Test Suite-------");
    // 2
    console.log(baseTestSuite("1 2 2 4", 2));
    // 6
    console.log(countTriplets(
        [1, 3, 9, 9, 27, 81], 3));

    // 10
    console.log(countTriplets(
        [1, 3, 9, 9, 27, 27, 81], 3));

    // 4
    console.log(baseTestSuite(
        "1 5 5 25 125", 5));

    //
    console.log(baseTestSuite(
        "1 2 3 9 6 9 18 27 18 54 27 81", 3));
}


basicTestSuite();
complexTestSuite();
