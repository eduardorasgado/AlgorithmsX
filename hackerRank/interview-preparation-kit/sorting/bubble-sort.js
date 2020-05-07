// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem
// Complete the countSwaps function below.
function countSwaps(a) {
    let swaps = 0;
    let n = a.length;

    function swap(first, second) {
        [a[first], a[second]] = [a[second], a[first]]
        ++swaps;
    }
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                swap(j, j+1);
            }
        }

    }

    console.log(`Array is sorted in ${swaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length-1]}`);
}

function baseTestSuite(str) {
    str = str.split(" ").map(n => parseInt(n));
    return countSwaps(str);
}

function basicTestSuite() {
    console.log("----");
    //Array is sorted in 0 swaps.
    //    First Element: 1
    //Last Element: 3
    baseTestSuite("1 2 3");
    console.log("----");
    // Array is sorted in 3 swaps.
    //     First Element: 1
    // Last Element: 3
    baseTestSuite("3 2 1");
    console.log("----");

    //Array is sorted in 3 swaps.
    //    First Element: 1
    //Last Element: 6
    baseTestSuite("6 4 1");
    console.log("----");
}

basicTestSuite();
