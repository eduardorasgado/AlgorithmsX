const fs = require('fs');
// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let catAProb = [Math.abs(z- x), "Cat A"];
    let catBProb = [Math.abs(z - y), "Cat B"] ;
    if(catAProb[0] == catBProb[0]) return "Mouse C";
    else if (Math.min(catAProb[0], catBProb[0]) == catAProb) {
        return catAProb[1];
    } else {
        return catBProb[1];
    }
}

function dataReaderBase(textName) {
    let content = fs.readFileSync(
        `./test-data/${textName}.txt`, 'utf-8');

    return  content.split("\r");
}

function dataTestCollector(testType, textName) {
    let lines = dataReaderBase(textName);
    let newData = [];
    let line;
    if(testType === "results") {
        // removing last element cuz it is thrash
        newData.push(lines[0]);
        for(line of lines.slice(1, lines.length-1)) {
            if(line.length > 1) {
                line = line.split('\n');
                newData.push(line[1]);
            }
        }
    }
    else if(testType === "data") {
        // reading every line in file
        for(line of lines) {
            line = line.split(' ');
            // adding if complete data within line array
            if(line.length >=3)
                newData.push([parseInt(line[0]), parseInt(line[1]), parseInt(line[2])]);
        }
    } else {
        throw Error;
    }
    return newData;
}

function basicTestSuite() {
    // Cat B
    console.log(catAndMouse(1, 2, 3));
    // Mouse C
    //1 3 2
    console.log(catAndMouse(1, 3, 2));
}

function complexTestSuite() {
    let queries = dataTestCollector('data', 'cats-and-mouse-data');
    let results = dataTestCollector('results', 'cats-and-mouse-results');
    let queriesLen = queries.length;
    let test, testResult;

    if(queriesLen === results.length) {
        for(let i = 0; i< queriesLen; i++) {
            test = queries[i];
            testResult = catAndMouse(test[0], test[1], test[2]);
            console.log(test, results[i] == testResult,
                "CORRECT: ", results[i], "TEST: ", testResult)
        }
    } else {
        console.log("LONG TEST DATA DOES NOT MATCH THE RESULTS");
    }
}

basicTestSuite();
console.log("-----------");
complexTestSuite();
