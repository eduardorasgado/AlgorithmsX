/**
 * RECURSION PROBLEMS
 *
 * EXAM: REVERSE
 *      Write a recursive function called reverse which accepts a string and
 *      returns a new string in reverse
 * */

function reversev2(word, count = 0) {
    ++count;
    if(count == word.length) return word[0];
    return word[word.length - count] + reverse(word, count)
}

function reverse(word) {
    if(word.length == 1) return word[0];
    return word[word.length - 1] + reverse(word.slice(0, word.length-1))
}

console.log(reverse('awesome'));
console.log(reverse('reverse'));
console.log(reverse('rithmschool'));

/**
 * EXAM: IS PALINDROME
 *
 *      Write a recursive function called isPalindrome which returns true
 *      if the string passed to it is a palidrome(reads the same forward and
 *      backwards). Otherwise it returns false
 *
 *      concrete case
 *
 *      t a c o c a t
 *
 *      tt(1) * aa(1) * cc(1) * 1 = 1
 *
 *      awesome
 *      -> ae(0) * wm(0) * eo(0) * 1 = 0
 * */

function isPalindrome(word) {
    if(word.length <= 1) return true;
    return Boolean(Number(
        word[0] == word[word.length-1]) * isPalindrome(word.slice(1, word.length-1)
    ))
}
console.log('============ispalindrome========')
// Concrete cases
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
console.log(isPalindrome('anitalavalatina')); // true
console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('at')); // false
console.log(isPalindrome('aa')); // true


/**
 *  EXAM: SOME RECURSIVE
 *
 *          Write a recursive function called someRecursive which accepts an array
 *          and a callback. The function returns true if a single value in the
 *          array returns true when passed to the callback. Otherwise returns false
 * */

// concrete callback
const isOdd = val => val % 2 !== 0;

function someRecursive(arr, callback){
    if(arr.length < 1) return false;
    return Boolean(Number(
        callback(arr[0]) + someRecursive(arr.slice(1), callback)
    ));
}

console.log('====================')
// concrete cases
console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,5,8], val => val > 10)); // false
console.log(someRecursive([4,15,8], val => val > 10)); // true

/**
 *      EXAM: FLATTEN
 *              Write a recursive function called flatten which accepts an array
 *              of arrays and returns a new array with all values flattened.
 *
 *              Concrete example:
 *
 *                  [1,2,3,[4,5]]
 *
 *                  [1,2,3].concat(flatten([4,5]))
 *
 *                  [1]+[2]+[3]+flatten([4,5])+[]
 *                                 [4]+[5]+[]
 *
 *                  [1,[2,[3,4],[[5, 6]]]]
 *
 *                  [1]+flatten([2,[3,4],[5,6]])
 *                           [2]+flatten([3,4]) + flatten([5,6])
 *                                  [3]+[4]     + [5] + [6]
 *                   [1,2,3,4,5,6]
 * */

function flattenNotRefactored(list) {
    if(list.length == 0) return [];
    let element = list[0]
    if(typeof element == 'object') return flatten(list[0]).concat(flatten(list.slice(1)));
    return [element].concat(flatten(list.slice(1)));
}

function flatten(list) {
    if(list.length == 0) return [];
    let element = (typeof list[0] == 'object') ? flatten(list[0]) : [list[0]];
    return element.concat(flatten(list.slice(1)));
}

console.log("---------------")
console.log(flatten([1,2,3,[4,5],[6,7]])); // [1,2,3,4,5]
console.log(flatten([1,[2,[3,4,5],[6,7]]])); // [1,2,3,4,5]
console.log(flatten([[1],[[[2]]],[[[[3]]]]])); // [1,2,3]


/**
 * EXAM: CAPITALIZE FIRST
 *
 *      Write a recursive function called capitalizeFirst. Given an array of
 *      strings, capitalize the first letter of each string in the array
 * */

function capitalizeFirst(stringsArr) {
    if(stringsArr.length === 0) return [];
    let cap = stringsArr[0][0].toUpperCase() + stringsArr[0].slice(1);
    return [cap].concat(capitalizeFirst(stringsArr.slice(1)));
}

console.log("------------")
console.log(capitalizeFirst(['car', 'taco', 'banana']));


/**
 *  EXAM: NESTED EVEN SUM
 *
 *      Write a recursive function called nestedEvenSum. Return the sum of all
 *      even numbers in an object which may contain nested objects.
 * */
var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

function nestedEvenSum(object) {
    let sum = 0;
    for(let key in object){
        let content = object[key];
        if (typeof content == 'object') sum += nestedEvenSum(content);
        else if( typeof content == 'number') sum += (content % 2 === 0) ? content : 0;
    }
    return sum;
}

console.log("-----------");
console.log(nestedEvenSum(obj1)); // 6
console.log("---");
console.log(nestedEvenSum(obj2)); // 10


/**
 *  EXAM: CAPITALIZE WORDS
 *
 *      Write a recursive function called capitalize word. Given an array of
 *      words, return a new array containing each word capitalized.
 * */

function capitalizeWords(words) {
    if(words.length === 0) return [];
    return [words[0].toUpperCase()].concat(capitalizeWords(words.slice(1)));
}

console.log("******************")
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
