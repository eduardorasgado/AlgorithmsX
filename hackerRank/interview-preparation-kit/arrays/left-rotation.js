
// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
// Complete the rotLeft function below.
function rotLeft(a, d) {
    // a has [size of d, left rotations to perform]
    // d is the array of a[0] size
    let remainer = a.splice(d);
    return remainer.concat(a);
}
// correct:
console.log(rotLeft([1, 2, 3, 4, 5], 4));

// corrent:
console.log(rotLeft(
    [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51], 10
));

console.log(rotLeft(
    [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], 13
));
