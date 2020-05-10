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
    function sortWindow(arr, expToDelete) {
        let arrLen = arr.length;
        let currentVal;
        let idxToDelete = 0;
        for(let i = 1; i < arrLen; i++) {
            currentVal = arr[i];
            let j;
            let changed = false;
            for (j = i - 1; j >= 0 && arr[j] > currentVal ; j--) {
                arr[j+1] = arr[j];
                if(arr[j+1] === expToDelete) idxToDelete = j+1
            }
            arr[j+1] = currentVal;
            if(arr[j+1] === expToDelete) idxToDelete = j+1
        }
        //console.log(arr, toDeleteIdx, toDeleteExp);
        return [arr, idxToDelete];
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
    let expToDelete = 0;
    let manualIdx = false;
    while (i <= expLen - d - 1){
        // sorting the window
        // sortWindow return location of lastLocator[i] to be able to delete it at O(1)
        if(i === 0 || sortedWindow[sortedWindow.length-1] < max){
            //console.log(sortedWindow[sortedWindow.length - 1], max);
            [sortedWindow, iDelete] = sortWindow(sortedWindow, expToDelete);
            max = sortedWindow[sortedWindow.length-1];
            manualIdx = false;
            //console.log(sortedWindow);
        } else {
            manualIdx = true;
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
        expToDelete = lastLocator[i];
        //remove from sortedWindow
        //[sortedWindow[iDelete], sortedWindow[d-1]] =
        //    [sortedWindow[d-1], sortedWindow[iDelete]];
        //sortedWindow.pop();
        if(manualIdx) {
            sortedWindow.splice(sortedWindow.indexOf(lastLocator[i-1]), 1);
        } else {
            //console.log("to delete id: ", iDelete, "element: ", expToDelete);
            sortedWindow.splice(iDelete, 1);
        }
        sortedWindow.push(expenditure[j]);
        ++i;
        ++j; // j is the right number next to window
    }
    return notificationCounter;
}

// another version
function fan(expenditure, d) {
    //
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

    //console.log("-------mod-----");
    //console.log(baseTestSuite(
    //    "10 20 30 40 50", 3, true));
    //// 2
    //console.log(baseTestSuite(
    //    "2 3 4 2 3 6 8 4 5", 5, true));
    //// 0
    //console.log(baseTestSuite(
    //    "1 2 3 4 4", 4, true));
}

basicTestSuite();
longTestSuite();
