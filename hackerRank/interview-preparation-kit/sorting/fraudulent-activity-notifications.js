// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem
// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    let notificationCounter = 0;
    // first, order the elements
    // using radix sort
    function sortWindow(arr) {
        // calculate a msd
        let arrLen = arr.length
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
        for(i = 0; i < msd; i++){
            let buckets = new Array.from({length: 10}, () => []);
            for (j = 0; j < arrLen; j++) {
                // sorting using the current digit at position i for every element in arr
                currentDigit = Math.Math.floor(
                    (Math.abs(arr[j] / Math.pow(10, i))) % 10
                );
                buckets[currentDigit].push(arr[j]);
            }
            arr = [].concat(...buckets);
        }

    }
    // get the window of d elements over the expeditures
    let i = 0;
    let j = d;
        //every time calculate the median for elements within window
        // if 2 X media >  arr[windowLength+1] then add one to notificationCounter

    return notificationCounter;
}

function baseTestSuite(exp, days) {
    exp = exp.split(" ").map(n => parseInt(n));
    return activityNotifications(exp, days);
}

function basicTestSuite() {
    console.log(baseTestSuite(
        "2 3 4 2 3 6 8 4 5", 5));

    console.log(baseTestSuite(
        "1 2 3 4 4", 4));
}

basicTestSuite();
