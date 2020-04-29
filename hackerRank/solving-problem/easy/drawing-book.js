/*
   https://www.hackerrank.com/challenges/drawing-book/problem
 * Complete the pageCount function below.
 Given n and p, find and print the minimum number of pages Brie must turn in
 order to arrive at page p.

 n pages, p : pageto go
 */
function pageCount(n, p) {
    let backwards = n / p;
    console.log(backwards);
    for(let i = 0;i < n+1; i++) {
        console.log(i);
    }
}

function basicTestSuite() {
    //
    //   0   1   2   3   4    3(5) 2(6)  1(7) 0(8)
    // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17

    //   0   1   1(2)0(3)
    // 0 1 2 3 4 5 6 7

    //   0   1   1 0
    // 0 1 2 3 4 5 6
    // 1
    console.log(pageCount(6, 2));

    // 0
    console.log(pageCount(5, 4));
}
