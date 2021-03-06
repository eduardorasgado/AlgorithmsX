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
console.log("------------------")

// O(n)
function sameListOn(list1, list2) {
    if(list1.length == list1.length) {
        let acc1 = 0;
        let acc2 = 0;
        for(let number of list1) {acc1 += number *  number}
        for(let number of list2) {acc2 += number}
        return acc1  == acc2;
    }
    return false
}

console.log(sameListOn([1,2,3,2], [9,1,4,4]));
console.log(sameListOn([1,2,2,2], [4,1,4,4]));
// false
console.log(sameListOn([1,1,9,2], [81,1,1,1]));
console.log("-----------------------");


// Solution implementing the frecuency counter pattern: O(n)
function sameListFC(list1, list2){
    if(list1.length != list2.length) return false;

    // get the frecuency of each element in both list
    // O(2*n) = O(n)
    let counter1 = freq_counter(list1);
    let counter2 = freq_counter(list2);

    // O(n)
    for(let number in counter1) {
        // if list 2 element results from list1 element power 2
        // O(1)
        if(!(number ** 2 in counter2)) return false;
        // if actual number frecuency in list1 is same that in list2
        // O(1)
        if(counter1[number] != counter2[number ** 2]) return false;
    }
    // if nothing return false, it means list2 is square list of every element in list2
    return true;
}

function freq_counter(list, counter = {}) {
    for(let number of list) {counter[number] = (counter[number] || 0) + 1}
    return counter;
}

console.log(sameListFC([1,2,3,2], [9,1,4,4]));
console.log(sameListFC([1,2,2,2], [4,1,4,4]));
// false
console.log(sameListFC([1,1,9,2], [81,1,1,1]));
console.log("-----------------------");


/*
*   ANAGRAMS
*
*       Given two string , write a function to determine if the second
*       string is an anagram of the first one.
* */

function anagramDiscover(str1, str2) {
    // get all the frecuencies from both strings
    if(str1.length != str2.length) return false;
    let counter = {}
    // creating a letter frecuency dictionary for string 1
    for(let element of str1) counter[element] = (++counter[element] || 0) + 1;

    // compare if element in counter exists in counter2
    for(let key of str2) {
        // checking if element in str1 exists in str2
        if(!(counter[key])) return false;
        // if element in str1 exists then it decreases the freq in counter
        // to verify freqs in str2 and str1 are the same
        counter[key] --;

    }
    // if list1 has same letters in same frecuency, no matter order the we return true
    return true;
}


console.log(anagramDiscover('', '')); // true
console.log(anagramDiscover('aaz', 'zza')); // false
console.log(anagramDiscover('anagram', 'nagaram')); // true
console.log(anagramDiscover('rat', 'car')); // false
console.log(anagramDiscover('awesome', 'awesom')); // false
console.log(anagramDiscover('awesomee', 'awesome')); // false
console.log(anagramDiscover('qwerty', 'qeywrt')); // true
console.log(anagramDiscover('texttwisttime', 'timetwisttext')); // true


// Solve the next problem:
// write a function called sameFrequency. Given two positive integers, find out
// if the two numbers have the same frequency  of digits
// Solution have to be Time: O(n)
/**
 *
 * Naive solution
 * 1. Define a dictionary called counter
 * 1.1. Convert both values to strings
 * 2. Iterate over the elements in one of the numbers
 *  2.1. Whenever we see a new element, create an attribute in counter, initialize
 *      it to 1
 *  2.2. Whenever we see a repeated element, increase to one.
 * 3. iterate over the elements if value 2(string)
 *      if we see element we should see the frequency by removing in one the element
 *
 *
 * */
function sameFrequency(val1, val2) {
    let str1 = val1.toString();
    let str2 = val2.toString();
    let counter = {};
    // Time complexity: O(n), space complexity O(n)
    for(let element of str1) {
        counter[element] = (counter[element] | 0) + 1;
    }

    let lookup = '';
    // Time complexity: O(n), space complexity: O(n)
    for (let i = 0; i < str2.length; i++) {
         lookup = str2[i];
        if(counter[lookup]) counter[lookup]--;
        else return false;
    }
    return true;
}

console.log("--+++++++++++++++--")
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); //false
