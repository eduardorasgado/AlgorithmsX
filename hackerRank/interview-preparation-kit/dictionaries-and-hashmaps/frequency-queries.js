// https://www.hackerrank.com/challenges/frequency-queries/problem
// Complete the freqQuery function below.
// Return an integer array consisting of all the outputs of queries of type 3
function freqQuery(queries) {

    // return printings or array of the printings
    return queries;
}

// convert the string with line break into an array
function arrayConstructor(str, results = false) {
    let newArr = [];
    let strSplitted = str.split("\n");
    let strData;
    let e;
    if(results) {
        for(strData of strSplitted) {
            // TODO
        }
    } else { // data case
        for(strData of strSplitted) {
            if(strData.length>= 3) {
                e = strData.split(" ");
                newArr.push([parseInt(e[0]), parseInt(e[1])])
            }
        }
    }
    return newArr
}

function baseTestSuite(arr) {
    if(arr.length > 0) {
        return freqQuery(arrayConstructor(arr));
    }
    return "NO DATA PRESENTED";
}

function basicTestSuite() {
    // r: 0 1
    let ex1 = "1 5\n" +
        "1 6\n" +
        "3 2\n" +
        "1 10\n" +
        "1 10\n" +
        "1 6\n" +
        "2 5\n" +
        "3 2";
    console.log(baseTestSuite(ex1));

    // r: 0 1
    let ex2 = "3 4\n" +
        "2 1003\n" +
        "1 16\n" +
        "3 1";
    console.log(baseTestSuite(ex2));

    let ex3 = "1 3\n" +
        "2 3\n" +
        "3 2\n" +
        "1 4\n" +
        "1 5\n" +
        "1 5\n" +
        "1 4\n" +
        "3 2\n" +
        "2 4\n" +
        "3 2";
    console.log(baseTestSuite(ex3));
}

basicTestSuite();
