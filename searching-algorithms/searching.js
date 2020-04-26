const america = require('./states-of-america');
const nameData = require('./names');
const numberData = require('./sortedNums')

//console.log(america.states);
//console.log(nameData.names);

let states = america.states;
let names = nameData.names;
let sortedNums = numberData.numbers;

console.log(states.indexOf('Oklahoma'));
console.log(states.indexOf('Chihuahua'));


/**
 * SEARCHING ALGORITHMS
 *
 *      Objectives
 *          - Describe what a searching algorithm is
 *          - Implement linear search on arrays
 *          - Implement binary search on sorted arrays
 *          - Implement a naive string searching algorithm
 *          - IMplement the KMP string searching algorithm
 *
 *
 * LINEAR SEARCH ALGORITHM
 * */

function searchElement(list, target) {
    // Time complexity, Best: O(1), average: O(n), worst: O(n)
    for(let i = 0; i < list.length; i++) if(list[i] === target) return i;
    return -1;
}

//console.log(searchElement(names, 'Tyler'));
//console.log(searchElement(states, 'Iowa'));
//console.log(searchElement(names, 'Tonie'))
//console.log(names.includes('Tyler'))
//console.log(searchElement(sortedNums, 72845))

/**
 *  Binary Search
 *
 *      Works only on sorted arrays
 *      It is part of divide and conquer paradigm solitions out there
 * */


// Time complexity, best: O(1), average: O(log n), worst: O(log n)
function binarySearch(list, target) {
    let left = 0;
    let right = list.length - 1;
    while(left <= right) {
        let mid = Math.floor((right + left) / 2);
        if(target > list[mid]) left = mid + 1
        else if(target < list[mid]) right = mid - 1;
        else return mid // list[mid] === target
    }
    return -1;
}

// 72845
console.log("=======================");
console.log(binarySearch(sortedNums, 72845));
console.log(binarySearch(sortedNums, 98975));
console.log(binarySearch(names, 'Kalani'));

/**
 *      BINARY SEARCH TIME COMPLEXITY
 *
 * How to get the worst time complexity of binary search
 *
 * imagine we have this arrray:
 *
 *      [2, 4, 5, 9, 11, 14, 15, 19, 21, 25, 28, 30, 50, 52, 60]
 *
 * then, we want to search for the 13 value, which is not within the list
 *
 * lets start the search: 13 (i= index)
 *
 *          [2, 4, 5, 9, 11, 14, 15, 19, 21, 25, 28, 30, 50, 52, 60]  <-- 1
 *              mid: i8 = 19
 *
 *          [2, 4, 5, 9, 11, 14, 15]           <-- 2
 *              mid: 7 + 0 / 2 = floor(i3.5) = 9
 *
 *          [11, 14, 15]                        <-- 3
 *              mid: 6 + 4 / 2 = i5 = 14
 *
 *          [11]                               <-- 4
 *              mid = l = r = -1, 13 didnt find
 *
 * It took 4 steps to get the result in a 16 elements array
 *
 *      log 16 = 4;   <-- O(log n)
 *      2^4 = 16
 *
 * In this case we got 4 steps for 16 elements, if we want to add another step
 * we will need to double the number of elements.
 * log 32 = 5
 * */

/**
 *      NAIVE STRING SEARCH ALGORITHM
 *
 *      Find how many times a substring matches inside a string
 *
 *      concrete case:
 *
 *          w o w o m g z o m g
 *                        i
 *
 *          o m g
 *          j
 * */

function naiveStringSearch(string, substring) {
    // this variable will store how many times substring is repeated within
    // string
    let matches = 0;
    let matchLetter = 0;
    // O(n * m) n and m are length of the string and substring respectively
    for(let i = 0; i < string.length; i++) {
        matchLetter = (string[i] == substring[matchLetter]) ? ++matchLetter : 0;
        if(matchLetter == substring.length) ++matches, matchLetter = 0;
    }
    return matches
}

console.log("=======================");
console.log(naiveStringSearch('wowomgzomg', 'omg'));
console.log(naiveStringSearch('loop over the longer string with the boys', 'the'));
console.log(naiveStringSearch('loop over the longer account low longer with the boys', 'longer'));
console.log(naiveStringSearch('wowbmz3ng', 'omg'));
console.log(naiveStringSearch('my house is blue and yours is red', 'and'));

/**
 *  KMP ALGORITHM
 *
 *      Knuth Morris Pratt Pattern Searching algorithm uses degenerating property
 *      of the pattern and improves the worst case complexity to O(n)
 *
 *      Degenerating property, means pattern having same sub-patterns appearing
 *      more than once in the pattern, are considered
 *
 *      To Find the occurrences of a word W within a main text T.
 *
 *      1. preprocess the pattern
 *
 *                  i m
 *          pat = [ A B X A B ]
 *
 *
 *          [ 0 0 0 0 0]
 *
 *          lps = // create a longest proper prefix which is also suffix
 *          lps is know as aux array too
 *
 *
 *                m i
 *          pat = a c a b a c a c d
 *
 *          lps = 0 0 1 2 3 2 0
 *
 *     2. look for the pattern in the string, we will use the lps created above
 *
 *     iterate over the first n elements in the pattern from index 0 to n in
 *     the string
 *     if there is a mismatch we will take the m_index in which this mismatch was located
 *     take the element in lps in position m_index minus 1 and we will go forward from the
 *     mismatch location as if the location of ths mismatch is 0 position
 *     if no mismatch was found we will
 *      add one to match counter
 *      go forward in n places, n will be in lps last element and movement will go
 *      from 0 position in actual comparison window
 *      if we reach last element in window with las element in string, we stop.
 *
 * */

function getLPS(pattern) {
    let lps = [0] // 0 for the first pos, since one len string has no prefix or suffix

    let i = 1;
    let m = 0; // this var will help to get the index of first mismatch
    while(i < pattern.length) {
        // if prefix = suffix till m-1
        if(pattern[i] == pattern[m]) {
            m += 1;
            lps.push(m);
            i += 1;
        }
        // when there is a mismach we will check the index of previous possible
        // prefix, note; this does not increment i
        else if(pattern[i] !== pattern[m] && m != 0) m = lps[m - 1];
        else {
            // if m = 0 then it has to move to next position
            lps.push(0);
            i += 1;
        }
    }
    console.log(lps);
    return lps;
}

/**
 * concrete case:
 *            0 1 2 3 4 5 6 7 8
 *      lps = 0 0 1 0 1 2 3 2 0
 *      j = 2
 *                           .
 *      0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
 *      a c f a c a b a c a b  a  c  a  c  d  k
 *                    .
 *      0 1 2 3 4 5 6 7 8
 *      a c a b a c a c d
 *
 * */
function kmpv2(word, pattern){
    // preprocessing the pattern
    let lps = getLPS(pattern);
    //console.log(lps);
    let matchCounter = 0;
    let i = 0; // actual iteration over word in base position
    let j = 0; // actual iteration over word plus pattern and pattern itself
    while(i + j < word.length) {
        // detecting if there is a mismatch
        // i3 + j2 = i5
        // detecting if a pattern mismatch was found
        if(word[i + j] == pattern[j]) ++j, (j >= pattern.length) && ++matchCounter;
        else {
            // when we have a mismatch but comparing first element in string
            // with first element in pattern
            // or first element in pattern and next in i position in text
            if(j === 0) i++; // console.log("falsy", word[i + j])
            else {
                // if there is a mismatch
                // we found two mismatch situations: when lps in j position is 0
                // and when it is not zero
                let jForward = lps[j-1];
                // ? go forward from next to mismatch (m + 1) in string and  0 position in pattern
                // : go forward aligning from mismatch in string and j position in pattern
                (jForward == 0) ?
                    (i = i + j + 1, j = 0 ):
                    (i = i + j - jForward, j = jForward)
            }
        }
    }
    return matchCounter;
}

// https://medium.com/@giri_sh/string-matching-kmp-algorithm-27c182efa387
function kmp(T, W) {
    let aux = getLPS(W);
    let i = 0;
    let j = 0;
    let matchCounter = 0;

    while(j < T.length){
        if(W[i] != T[j]) {
            if (i == 0) j += 1;
            else i = aux[i-1];
        } else {
            i += 1;
            j += 1;
            if(i == W.length) ++matchCounter, i = aux[i-1];
        }
    }
    return matchCounter;
}
console.log("------kmp-----");
console.log(kmp("acfacabacabacacdkacfacabacabacacdk", "acabacacd")); // 1
console.log("----");
console.log(kmp("acfacebacebacacdk", "acebacecd")); // 0
console.log(kmp("ABC ABCDAB ABCDABCDABDE", "ABCDABD")); // 1
console.log(kmp("ABC ABCDAB ABCDABCDABDE", "ABC")); // 4
console.log(kmp("elementalmetal", 'tal')); // 2
console.log(kmp("aantimatteraan", "aan")); // 2
console.log(kmp("ifailuhkqqifailuhkqq", "ifailuhkqq")); // 2
console.log(kmp("abba", "abba")); // 2
