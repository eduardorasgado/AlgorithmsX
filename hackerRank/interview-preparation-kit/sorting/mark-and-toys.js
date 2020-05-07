//https://www.hackerrank.com/challenges/mark-and-toys/problem
// Complete the maximumToys function below.
function maximumToys(prices, k) {
    let pricesLen = prices.length;
    (function sorting() {
        let i;
        // getting the most significant digit
        // getting the number of digits of max number within the list
        let msd = 0
        for(i = 0; i < pricesLen; i++) {
            // length of number
            msd = Math.max(msd,
                Math.max(Math.floor(Math.log10(Math.abs(prices[i]))), 0) + 1
            );
        }
        let j, buckets, currentDigit;
        // loop based radix sort
        for(i = 0; i < msd; i++) {
            currentDigit = 0;
            // for digits accumulative process
            buckets = Array.from({length: 10}, () => []);
            for(j = 0; j < pricesLen; j++) {
                // get the current number in position i within number arr[j]
                currentDigit = Math.floor(
                    (Math.abs(prices[j]) / Math.pow(10, i)) % 10);
                buckets[currentDigit].push(prices[j]);
            }
            prices = [].concat(...buckets);
        }

    })();

    let nToys = 0
    let total = 0
    let price;
    for(price of prices) {
        if(total + price <= k) {
            total += price;
            ++nToys;
        } else break;
    }
    return nToys;
}

function baseTestSuite(budget, toys) {
    toys = toys.split(" ").map(n => parseInt(n));
    return maximumToys(toys, budget);
}

function basicTestSuite() {
    // r: 3 toys
    console.log(baseTestSuite(7, "1 2 3 4"));
    // r: 3 toys
    console.log(baseTestSuite(7, "4 3 2 1"));
    // r: 4 toys
    console.log(baseTestSuite(50,
        "1 12 5 111 200 1000 10"));
}

basicTestSuite();
