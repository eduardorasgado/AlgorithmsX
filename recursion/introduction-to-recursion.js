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
