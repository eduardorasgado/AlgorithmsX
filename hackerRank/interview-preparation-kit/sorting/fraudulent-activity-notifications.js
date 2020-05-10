let example1 = require("./fraudulent-activity-long-data-test/example1");
// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem
// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    let expLen = expenditure.length;
    let notificationCounter = 0;
    let windowPosLocator = {};
    // first, order the elements
    // using insertion sort due to first all but first time, window is
    // partially sorted
    function sortWindow(arr) {
        let arrLen = arr.length;
        let currentVal;
        for(let i = 1; i < arrLen; i++) {
            currentVal = arr[i];
            let j;
            let changed = false;
            for (j = i - 1; j >= 0 && arr[j] > currentVal ; j--) {
                arr[j+1] = arr[j];
            }
            arr[j+1] = currentVal;
        }
        //console.log(arr, toDeleteIdx, toDeleteExp);
        return arr;
    }
    // get the window of d elements over the expeditures
    let i;
    let j = d;
    let lastLocator = []; // to locate the last shifted
    let sortedWindow = [];
    let max = 0;
    for(i = 0; i < j; i++) {
        (i === 0) ? max = expenditure[i] : Math.max(max, expenditure[i]);
        sortedWindow[i] = expenditure[i];
        lastLocator[i] = expenditure[i];
    }

    let dayOfExp = d;
    let median, median2;
    i = 0;
    let iDelete = 0;

    while (i <= expLen - d - 1){
        // sorting the window
        // sortWindow return location of lastLocator[i] to be able to delete it at O(1)
        if(i === 0 || sortedWindow[sortedWindow.length-1] < max){
            //console.log(sortedWindow[sortedWindow.length - 1], max);
            sortedWindow = sortWindow(sortedWindow);
            max = sortedWindow[sortedWindow.length-1];
            //console.log(sortedWindow);
        }
        //console.log(sortedWindow);
        //console.log(lastLocator[i], iDelete);
        //every time calculate the median for elements within window
        if(d % 2 === 0) {
            median = sortedWindow[(d/2) - 1];
            median2 = sortedWindow[(d/2)];
            median = (median + median2) / 2
        } else {
            median = sortedWindow[Math.floor(d/2)];
        }
        // if 2 X media >  arr[windowLength+1] then add one to notificationCounter
        if(median * 2 <= expenditure[j]) {
            ++notificationCounter;
        }
        // sliding the window
        lastLocator.push(expenditure[j]);
        //remove from sortedWindow
        //[sortedWindow[iDelete], sortedWindow[d-1]] =
        //    [sortedWindow[d-1], sortedWindow[iDelete]];
        //sortedWindow.pop();
        sortedWindow.splice(sortedWindow.indexOf(lastLocator[i]), 1);
        sortedWindow.push(expenditure[j]);
        ++i;
        ++j; // j is the right number next to window
    }
    return notificationCounter;
}

// another version
function fan(expenditure, d) {
    let expLen = expenditure.length;
    // creating the sub elements
    let exps = [];
    let lastDays = [[]];
    let i;
    for(i = 0; i < d; i++) {
        lastDays[0].push(expenditure[i])
    }
    let j = 0;
    for(i = 1; i < expLen - d; i++) {
        lastDays[i] = Object.assign([], lastDays[i-1]);
        lastDays[i][d-1], lastDays[i][j % (d-1)] =
            lastDays[i][j % (d-1)], lastDays[i][d-1];
        lastDays[i].pop();
        lastDays[i].push(expenditure[d-1]);
        j++;
    }
    console.log(lastDays);
}

function baseTestSuite(exp, days, mod = false) {
    exp = exp.split(" ").map(n => parseInt(n));
    if(mod) return fan(exp, days);
    return activityNotifications(exp, days);
}

function longTestSuite() {
    // r 492
    console.log(baseTestSuite(example1.expeditures,
        example1.days));
}

function basicTestSuite() {
    // 1
    console.log(baseTestSuite(
        "10 20 30 40 50", 3));
    // 2
    console.log(baseTestSuite(
        "2 3 4 2 3 6 8 4 5", 5));
    // 0
    console.log(baseTestSuite(
        "1 2 3 4 4", 4));

    console.log("-------mod-----");
    console.log(baseTestSuite(
        "10 20 30 40 50", 3, true));
    // 2
    console.log(baseTestSuite(
        "2 3 4 2 3 6 8 4 5", 5, true));
    // 0
    console.log(baseTestSuite(
        "1 2 3 4 4", 4, true));
}

basicTestSuite();
//longTestSuite();
