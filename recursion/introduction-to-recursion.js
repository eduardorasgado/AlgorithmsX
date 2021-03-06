/**
 *  RECURSION
 *
 *      Objectives
 *
 *          Define what recursion is and how it can be used.
 *          Understand the two essential components of a recursive function
 *          Visualize the call stack to better debug and undestand recursive functions
 *          Use helper method recursion and pure recursion to solve more difficult problems
 *
 *
 * Formal Definition:
 *  A process(a function in our case) that calls itself
 *
 * Where we can find recursion in real life:
 *
 *      JSON.parse/ JSON.stringigy
 *      document.getElementById and DOM traversal algorithms
 *      Object traversal
 *
 *
 *
 * RECURSION: THE CALL STACK
 *
 *  Let's talk about functions
 *      In almost all program languages, there is a built in data structure that
 *      manages what happens when functions are invoked: the call stack
 *
 *  Any time a funtion is invoked it is placed (pushed) on the top of the call stack
 *
 *  When JS sees the return keyword or when the function ends, the interpreter will remove(pop)
 *
 * */

function takeShower() {
    return "Showering";
}

function eatBreakfast() {
    let meal = cookFood();
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()* items.length)]
}

function wakeUp(){
    console.log(takeShower());
    console.log(eatBreakfast());
    console.log("Ok ready to go to work");
}

wakeUp();

/**
 * Why do i care about the callstack?
 *
 *  You are used to functions beeing pushed on the callstack and popped off when they are done.
 *
 *
 *  HOW RECURSIVE FUNCTIONS WORK
 *
 *      Invoke the same function with a different input until you reach your base case.
 *
 *
 *  BASE CASE
 *           The condition when the recursion ends.
 *           This is the most important concept to undestand
 *
 *  Two essential parts of any recursive function
 *      Base case: end of the recursion
 *      Different Input: every time we call the function we intent to send different data to get different output
**/

function sumUp(number, sum) {
    if(number == 0) return sum;
    sum = sum + number
    return sumUp(number - 1, sum);
}
console.log("--------------------")
console.log(sumUp(5, 0));

function countDown(number) {
    console.log(number)
    if(number != 0) countDown(number - 1);
}

function countDownClassroom(number) {
    if(number <= 0){
        console.log(number);
        return;
    }
    console.log(number);
    countDownClassroom(number - 1)
}

console.log("--------------------")
console.log(countDown(5));
console.log(countDownClassroom(5));


// Refactoring my bad recursive function into this one
function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log("--------------------");
console.log(sumRange(5));

function factorialOf(num) {
    if(num == 1) return 1;
    return num * factorialOf(num - 1);
}

console.log("--------------------");
console.log(factorialOf(5));
console.log(factorialOf(2));
console.log(factorialOf(6));
console.log(factorialOf(7));


/**
 * 5 - 3 - 1
 *
 * */

function isEven(num) {
    if (num == 0) return true
    if(num == 1) return false
    return isEven(num - 2);
}

console.log("=========================")
console.log(isEven(13));
console.log(isEven(18));
console.log(isEven(99));
console.log(isEven(84));


/**
 *
 *      HELPER METHOD RECURSION PATTERN
 *
 *          We have two functions, nested
 *
 * The next is the structure, this pattern follows
 * */

function outer(input) {
    var outerScopedVar = [];
    function helper(helperInput) {
        helper(helperInput--);
    }

    helper(input);

    return outerScopedVar;
}

/**
 * EXAMPLE: Collecting all odd values within an array
 * */

function collectOddValues(arr) {
    // empty array, this will be filled with odd values
    let result = [];

    // will add odd values to result array, every time it slice input from zero position
    function helper(input) {
        if(input.length === 0) {
            return;
        }

        if(input[0] % 2 !== 0) {
            result.push(input[0]);
        }
        helper(input.slice(1));
    }

    helper(arr);
    return result;
}

console.log('-------------');
console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));

/**
 * Pure recursion
 *
 *  A way to avoid using helper recursion pattern
 *  Sometimes it is better to use helper recursion for readability
 *
 *  Tips for pure recursion:
 *      - For arrays, use methods like slice, the spread operator, and concat
 *          that make copies of arrays so you do not mutate them
 *
 *      - Remember that strings are inmutable so you will need to use methods
 *          like slice, substr, or substring to make copies of strings
 *
 *      - To make copies of objects use Object.assign, or the spread operator
 *
 * Example
 *
 * [ 1 2 3 4 5]
 *
 * returned [1].concat([3].concat([5].concat([]))) -> [1 3 5]
 *
 * */

function collectOddValuesPure(arr) {
    let newArr = Array();
    if(arr.length === 0) return newArr;
    if(arr[0] % 2 !== 0) newArr.push(arr[0]);

    newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));
    return newArr;
}

// own implementation
function collectOddValuesPureV2(arr, odds = []) {
    if(arr[0] % 2 !== 0) odds.push(arr[0]);
    if (arr.length === 1) return odds;
    // passing the rest of the elements but the first
    [a, ...rest] = arr
    return collectOddValuesPureV2(rest, odds)
}

console.log('-------------')
console.log(collectOddValuesPure([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));
console.log('odds',collectOddValuesPureV2([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));


/**
 *      RECURSION EXAM
 * */

/**
 *      write a function called power which accepts a base and an exponent. The
 *      function should return the power of the base to the exponent.
 *      The function should mimic the functionality of Math.pow, do not worry
 *      about negative bases and exponents
 *
 *
 *      Concrete problem
 *      power(2, 2)
 *      2  1  0
 *      2*(2*(1))
 * */

// 0(2^n)
function power(base, exponent) {
    if(exponent === 0) return 1;
    return base * (power(base, exponent-1));
}

console.log('..........................')
console.log(power(2, 0)) // 1
console.log(power(2, 2)) // 4
console.log(power(2, 4)) // 16
console.log(power(-2, 2)) // 4


/**
 *      Write a function factorial which accepts a number and returns the factorial
 *      of that number. A factorial is the product of an integer and allthe
 *      integers bellow it.
 * */

function factorial(number) {
    if(number === 0) return 1;
    return number * factorial(number - 1);
}

console.log('..........................')
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040


/**
 *      Write a function called productOfArray, which takes in an array of numbers
 *      and returns the product of them all
 * */

function productOfArray(arr) {
    if(arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

console.log('..........................')
console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,2,3, 10]));

/**
 *      Write a function called recursiveRange which accepts a number and adds
 *      up all the numbers from 0 to the number passsed to the function
 * */

function recursiveRange(number) {
    if(number === 0) return 0
    return number + recursiveRange(number-1);
}

console.log('..........................')
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55


/**
 *      Write a recursive function called fib which accepts a number and returns the
 *      nth number in the fibonacci sequence. Recall that the Fibinacci sequence
 *      is the sequence of whole numbers 1,1,2,3,5,8... which starts with 1 and 1
 *      and where every number thereafter is equal to the sum of the previous two
 *      numbers
 *
 *
 *      O(2^n)
 * */

function fib(number, tillHere = 1, lastNumbers = [1,1]) {
    if(tillHere === 2 || tillHere === 1) return fib(number, tillHere + 1);

    else if(tillHere > 2 && tillHere < number) {
        let ln1 = lastNumbers[0];
        let ln2 = lastNumbers[1];
        let lastTwo = [ln2, ln1 + ln2];
        return fib(number, tillHere + 1, lastTwo);
    }
    return lastNumbers[0] + lastNumbers[1];

}

/**
 * example 1:
 *                     4
 *         fib(3)           +              fib(2)
 *     fib(2) +  fib(1)                      1
 *      1           1
 *
 *      r=3
 *
 * example 2:
 *                           6
 *           fib(5) 5       +            fib(4)
 *    fib(4)    +    fib(3)               3
 *    3                2
 *
 *   r=8
 * */
function fibClass(n) {
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);

}

console.log('..........................')
console.log(fib(4)); // 3
console.log(fib(6)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
