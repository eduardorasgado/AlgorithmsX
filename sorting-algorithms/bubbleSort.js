let numbers = require('./unsortedNumbers');
let unsorted = numbers.unsortedNumbers;
/**
 *      BUBBLE SORT ALGORITHM
 *
 *      Optimized bubble sort:
 *
 *          register if in any j iteration code did not swap any time, process will
 *          stop, because this means that array is already sorted at that part of process
 * */

function bubbleSort(list) {
    //let times = 0;
    for (let i = list.length - 1; i > 0; --i) {
        //++times;
        let swap = false;
        for (let j = 0; j < i; j++) {
            (list[j] > list[j+1]) && ([list[j], list[j+1]] = [list[j+1], list[j]], swap = true);
        }
        if(!swap) break
    }
    //console.log(times);
    return list;
}


bubbleSort(unsorted)
//console.log(bubbleSort(unsorted));
console.log(bubbleSort([5, 3, 7, 2, 9, 1, 6, 4, 10, 8]));
console.log(bubbleSort([1, 6, 15, 33, 30, 32, 26, 36, 42,45, 46, 47, 48]));
