// https://www.hackerrank.com/challenges/frequency-queries/problem
// Complete the freqQuery function below.
// Return an integer array consisting of all the outputs of queries of type 3
function freqQuery(queries) {
    let qLen = queries.length;
    let output = [];
    let opt;
    let dataElement = 0;
    let dataFreq = {};
    let freqTable = {} // store the frequencies and how many elements has it
    for(let i = 0; i < qLen; i++) {
        opt = queries[i][0];
        dataElement = queries[i][1];
        // core ---
        // adding element
        if(opt === 1) {
            if(dataFreq[dataElement]) {
                // decrease the repetitions of current
                --freqTable[dataFreq[dataElement]++];
                // increase the repetitions of new freq
                freqTable[dataFreq[dataElement]] =
                    ++freqTable[dataFreq[dataElement]] || 1
            } else {
                // if does not exists, then just add to freqTable
                dataFreq[dataElement] = 1;
                freqTable[1] = ++freqTable[1] || 1;
            }
        }
        // removing element
        else if(opt === 2) {
            // remove only if exists
            if(dataFreq[dataElement]) {
                --freqTable[dataFreq[dataElement]--];
                freqTable[dataFreq[dataElement]] =
                    ++freqTable[dataFreq[dataElement]] || 1;
            }
        }
        else if(opt === 3) {
            if(freqTable[dataElement]) output.push(1);
            else output.push(0);
        }
        // end core ----
    }

    // return printings or array of the printings
    return output;
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

    // 0 1 1
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
