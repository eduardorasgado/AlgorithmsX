/**
 *          COUNTING SORT
 *  Counting sort is a sorting thechnique based on keys between a
 *  specific range.
 *
 *  It works b counting the nuber of objects having distingct key values
 *  Then doind some arithmetic to calculate the position of each object
 *  in the output sequence
 *  visual explanation: https://www.youtube.com/watch?v=7zuGmKfUt7s
 *
 *      BIG O NOTATION
 *      Time Complexity
 *          O(n + k) where n is the number of elements in input array
 *              and k is the range of input
 *      Space complexity
 *          O(n + k)
 *
 *  The problem with the previous counting sort was that we could not
 *  sort the elements if we have negative numbers in it. Because there
 *  are no negative array indices
 *
 * */
function countingSort(arr, min , max) {
    // It is preferable to calculate min and max here inside the algorithm

    let arrLen = arr.length;
    // consider the range of the elements and create a count array
    // to store the count of each unique objects
    let countingArr = Array.from({length: max-min+1}, () => 0)
    for (let i = 0; i < arrLen; i++) {
        ++countingArr[arr[i]-min];
    }
    // accumulate all the elements i-1 in next positions and so on
    let cArrLen = countingArr.length;
    for (let i = 1; i < cArrLen; i++) {
        countingArr[i] += countingArr[i-1]
    }
    // since we end up with countingArr[cArrLen - 1] elements
    // we place the objects in their correct positions and decrease the count by one
    let sortedArr = Array.from({length: countingArr[cArrLen-1]});
    for (let i = 0; i < arrLen; i++) {
        if(countingArr[arr[i]-min]) {
            sortedArr[countingArr[arr[i]-min]-1] = arr[i];
            --countingArr[arr[i] - min];
        }
    }
    // optional: Copy the output array to original array.
    return sortedArr;
}

function baseTestSuite(arr, min, max) {
    arr = arr.split(" ").map(n => parseInt(n));
    return countingSort(arr, min, max);
}

function test() {
    // data range of 0 to 9
    console.log(baseTestSuite("1 4 1 2 7 5 2", 0, 9));
    console.log(baseTestSuite("1 4 1 2 7 5 2 0", 0, 9));
    // data range of 10 to 50
    console.log(baseTestSuite("10 40 10 20 40 45 22 50 32", 10, 50));
}

test();
