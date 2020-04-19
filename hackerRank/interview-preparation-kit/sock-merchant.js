// Complete the sockMerchant function below.
function sockMerchant(n, arr) {
    if(n < 1) return 0;
    let counter = 0;
    let repeated = {}
    for(let i = 0; i< n; i++) {
        repeated[arr[i]] = repeated[arr[i]] ? ++repeated[arr[i]] : 1;
        if (repeated[arr[i]] % 2 === 0) {
            ++counter;
        }
    }
    return counter;
}

function testing(arr) {
    return sockMerchant(arr.length, arr)
}

console.log(testing([10, 20, 20, 10, 10, 30, 50, 10, 20]));
