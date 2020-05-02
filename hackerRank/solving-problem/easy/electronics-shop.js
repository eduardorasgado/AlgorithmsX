// https://www.hackerrank.com/challenges/electronics-shop/problem
/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    //return [keyboards, drives, b]
    let kLen = keyboards.length;
    let dLen = drives.length
    let max = -1;
    let currentMax = 0;
    for (let i = 0; i < kLen; i++) {
        for(let j = 0; j < dLen; j++){
            currentMax = keyboards[i] + drives[j]
            if(currentMax <= b) {
                max = Math.max(max, currentMax);
            }
        }
    }
    return max;
}

function baseTestSuite(k, d, b) {
    k = k.split(' ').map((e) => parseInt(e));
    d = d.split(' ').map((e) => parseInt(e));
    return getMoneySpent(k,d,b);
}
function basicTestSuite() {
    // 9
    console.log(baseTestSuite("3 1",
        "5 2 8",
        10));

    // -1
    console.log(baseTestSuite("4",
        "5",
        5));

}

basicTestSuite();
