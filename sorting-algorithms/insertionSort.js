const numbers = require('./unsortedNumbers');
/**
 *      INSERTION SORT
 *
 *          Builds up the sort by gradually creating a larger left half which
 *          is always sorted
 * */
let unsortedNums = numbers.unsortedNumbers;

// Time complexity: O(n^2)
function insertionSortv2(list) {
    for (let i = 1; i < list.length; i++) {
        let pos = 0;
        // looking for new position for list[i], in left ordered window
        for (let j = 0; j < i; j++) {
            if(list[i] > list[j]) pos = j+1;
        }
        // insertig the list[i] element in pos index within left half window
        // recolocating every element in left window on place forward, up to the i position
        let actualVal = 0;
        let pastValue = list[pos];
        list[pos] = list[i];
        for(let j=pos + 1; j <= i; j++) {
            actualVal = list[j];
            list[j] = pastValue;
            pastValue = actualVal;
        }
        //console.log(list)
    }
    return list;
}

// swapping j and j-1 until list[j] > list[j-1]
function insertionSortv3(list) {
    for (let i = 1; i < list.length; i++)
        for (let j = i; j > 0 && list[j] < list[j-1]; j--)
            [list[j], list[j-1]] = [list[j-1], list[j]]
    return list;
}

// assigning j index value to j+1 until we get proper j position for current value
function insertionSort(list) {
    for (let i = 1; i < list.length; i++) {
        let currentValue = list[i];
        let j;
        for (j = i - 1; j >= 0 && list[j] > currentValue ; j--) {
            list[j+1] = list[j];
        }
        list[j+1] = currentValue;
    }
    return list;
}

console.log(insertionSort(unsortedNums));
console.log(insertionSort([5, 3, 7, 2, 9, 1, 6, 4, 9, 10, 8]));
console.log(insertionSort([5, 3, 4, 1, 2]));
