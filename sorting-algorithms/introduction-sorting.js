/**
 *      SORTING ALGORITHMS
 *
 *
 *      A naive sort:
 *
 *      5, 3, 7, 2, 9, 1, 6, 4, 10, 8
 *      i  j
 *      5
 *
 * */

function naiveSorting(unsortedList) {
    for (let i = 0; i < unsortedList.length; i++) {
        let min = unsortedList[i];
        for (let j = i+1; j < unsortedList.length; j++) {
            if(unsortedList[j] <= min){
                min = unsortedList[j];
                if(unsortedList[i] > unsortedList[j]){ // swapping the nums
                    unsortedList[i] += unsortedList[j];
                    unsortedList[j] = unsortedList[i]-unsortedList[j];
                    unsortedList[i] -= unsortedList[j]
                }
            }
        }
    }
    return unsortedList;
}

console.log(naiveSorting([5, 3, 7, 2, 9, 1, 6, 4, 10, 8]));
