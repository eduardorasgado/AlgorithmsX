let example1 = require("./fraudulent-activity-long-data-test/example1");
// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem
// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    let expLen = expenditure.length;
    let notificationCounter = 0;
    // first, order the elements
    // using radix sort
    function sortWindow(arr, toDeleteExp) {
        // calculate a msd
        let arrLen = arr.length;
        let toDeleteIdx = 0;
        let i;
        let msd = 0;
        // getting the most significat digit from all the numbers in array
        for(i = 0; i < arrLen; i++) {
            msd = Math.max(msd,
                Math.max(Math.floor(Math.log10(Math.abs(arr[i]))) , 0) + 1
            );
        }
        // sorting loop based
        // sorting using buckets
        let currentDigit;
        let j;
        let currentPos = 0;
        let currentBucket
        let bucketsLength; // store the length of all the buckets
        let bucketPresent = 0; // stores the bucket in where toDeleteExp was found
        for(i = 0; i < msd; i++){
            let buckets = Array.from({length: 10}, () => []);
            bucketsLength = Array.from({length: 10}, () => 0);
            for (j = 0; j < arrLen; j++) {
                // sorting using the current digit at position i for every element in arr
                currentDigit = Math.floor(
                    (Math.abs(arr[j] / Math.pow(10, i))) % 10
                );
                buckets[currentDigit].push(arr[j]);
                ++bucketsLength[currentDigit];
                
                if(arr[j] === toDeleteExp) {
                    bucketPresent = currentDigit;
                    toDeleteIdx = bucketsLength[currentDigit] - 1;
                }
            }

            arr = [].concat(...buckets);
        }
        j = 0;
        for(let j; j < 10; j++) {
            if(bucketsLength[j] < bucketPresent) {
                 toDeleteIdx += bucketsLength[j];
            }
        }
        //console.log(arr, toDeleteIdx)
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
        [sortedWindow, iDelete] = sortWindow(sortedWindow, lastLocator[i-1]);
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
