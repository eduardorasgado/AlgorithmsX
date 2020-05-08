let example1 = require("./fraudulent-activity-long-data-test/example1");
// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem
// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    let expLen = expenditure.length;
    let notificationCounter = 0;
    // first, order the elements
    // using insertion sort due to first all but first time, window is
    // partially sorted
    function sortWindow(arr, toDeleteExp) {
        let arrLen = arr.length;
        let currentVal;
        let toDeleteIdx = 0;
        for(let i = 1; i < arrLen; i++) {
            currentVal = arr[i];
            let j;
            let changed = false;
            for (j = i - 1; j >= 0 && arr[j] > currentVal ; j--) {
                arr[j+1] = arr[j];
                if(arr[j+1] === toDeleteExp) toDeleteIdx = j+1;
            }
            arr[j+1] = currentVal;
            if(currentVal === toDeleteExp) toDeleteIdx = j+1;
        }
        //console.log(arr, toDeleteIdx, toDeleteExp);
        return [arr, toDeleteIdx];
    }
    // get the window of d elements over the expeditures
    let i;
    let j = d;
    let lastLocator = []; // to locate the last shifted
    let sortedWindow = [];
    for(i = 0; i < j; i++) {
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
        [sortedWindow, iDelete] = sortWindow(sortedWindow, lastLocator[i]);
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
        [sortedWindow[iDelete], sortedWindow[d-1]] =
            [sortedWindow[d-1], sortedWindow[iDelete]];
        sortedWindow.pop();
        sortedWindow.push(expenditure[j])
        ++i;
        ++j; // j is the right number next to window
    }
    return notificationCounter;
}

function baseTestSuite(exp, days) {
    exp = exp.split(" ").map(n => parseInt(n));
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
}

basicTestSuite();
longTestSuite();
