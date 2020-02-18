/**
 * SOLVING PROBLEM PATTERNS
 *  Master problem solving common patterns
 *
 *  Some patterns:
 *      Frecuency Counter
 *      Multiple Pointers
 *      Sliding window
 *      Divide and Conquer
 *      Dynamic Programming
 *      Greedy Algorithms
 *      BackTracking
 *      There are many more...
 *
 * */


/**
 * FRECUENCY COUNTER PATTERN
 *
 *  This pattern uses objects or sets to collect values/fequency of values
 *
 *  This can often avoid the need for nested loops or O(n^2) operations with arrays/strings
 */

// We have here a naive solution for our proble
// NAIVE means not the best possible solution
// Example: find if a list is the squares of some another list, return false if not
// O(n^2)
function sameList(list1, list2) {
    if (list1.length == list2.length) {
        // O(n)
        for (let i = 0; i < list1.length; i++) {
            // O(n) , searching in list2 if it has an index where it is located param value
            let index_in_l2 = list2.indexOf(list1[i] ** 2);
            if(index_in_l2 == -1) return false;
            list2.splice(index_in_l2, 1);
        }
        return true;
    }
    return false;
}

// trues
console.log(sameList([1,2,3,2], [9,1,4,4]));
console.log(sameList([1,2,2,2], [4,1,4,4]));
// false
console.log(sameList([1,1,9,2], [81,1,1,1]));

