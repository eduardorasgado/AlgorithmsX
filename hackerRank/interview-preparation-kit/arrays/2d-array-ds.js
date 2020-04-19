// https://www.hackerrank.com/challenges/2d-array/problem
// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let hourGlassTolerance = arr.length - 2;
    let maxSum = -Infinity;
    let currentSum = 0;
    let j;
    let jTolerance = arr[0].length - 2;
    let hourGlassPattern = [[0, 0], [0, 1], [0, 2], [1, 1], [2, 0], [2, 1], [2, 2]];
    let patternLocated;
    for(let i = 0; i < hourGlassTolerance; i++) {
        for(j = 0; j< jTolerance; j++) {
            for(patternLocated of hourGlassPattern) {
                currentSum += arr[i+patternLocated[0]][j+ patternLocated[1]]
            }
            maxSum = Math.max(maxSum, currentSum);
            currentSum = 0;
        }

    }
    // Print the largest (maximum) hourglass sum found in arr
    return maxSum;
}

let arr1 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]
console.log(hourglassSum(arr1));

let arr2 = [
    [-9, -9, -9,  1, 1, 1],
    [0 , -9,  0,  4, 3, 2],
    [-9, -9, -9,  1, 2, 3],
    [0 ,  0,  8,  6, 6, 0],
    [0 ,  0,  0, -2, 0, 0],
    [0 ,  0,  1,  2, 4, 0]
];
console.log(hourglassSum(arr2));

let arr3 = [
    [2, 1, 1, 4, 5, 0, 1],
    [4, 1, 2, 0, 4, 0, 1],
    [1, 1, 1, 0, 3, 0, 1],
    [0, 0, 2, 4, 4, 0, 1],
    [0, 0, 0, 2, 0, 0, 1]
];
console.log(hourglassSum(arr3));

let arr4 = [
    [2, 1, 1, 4],
    [4, 1, 2, 0],
    [1, 1, 1, 0],
];
console.log(hourglassSum(arr4));

let arr5 = [
    [-1, -1, 0 ,-9 ,-2 ,-2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
];
console.log(hourglassSum(arr5));
