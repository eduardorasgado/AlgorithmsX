let strict;
strict = 'use strict';
/***
 * add up to function
 * */
function addUpEvery(n, sum) {
    return n > 0 ? addUpEvery(n-1, sum += n) : sum;
}

function addUpEvery2(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i
    }
    return total
}

console.log(addUpEvery(10000, 0));
console.log(addUpEvery2(100000000, 0));
