/*
*  ALGORITHMS AND PROBLEM SOLVING PATTERNS
*
*  PROBLEM SOLVING STRATEGIES
*       Understand the problem
*       Explore Concrete examples
*       Break it down
*       Solve/Simplify
*       Look Back and refactor
*
*
* 1. Understand the problem
*
*   1. Can I restate the problem in my own words?
*   2. What are the inputs that go into the problem?
*   3. What are the outputs that should come from the solution to the problem?
*   4. Can the outputs be determined from the inputs? In other words, did I have
*       enough information to solve the problem? (You may not be able to answer this question until you set
*       about solving the problem. That's okay; it's still worth considering the question at this early stage.)
*   5. How should I label the important pieces of data that are a part of the problem?
*
*
* 2. Explore Concrete examples
*
*   Coming up with examples can help you undestand the problem better
*
*   Examples also provide sanity checks that your eventual solution works how it should
*
*   Explore examples:
*       Start with Simple Examples
*       Progress to more complex examples
*       Explore examples with empty inputs
*       Explore examples wih invalid inputs
* */

//EXAMPLE: write a function whick takes in a string and returns counts of each character in the string

/**
 * counting all letters inside a string and return a list with all the chars and times repeated inside the paraph
 *
 * input: string
 * output: dictionary with letter: number_repeated
 *
 * Labeling: string: paraph
 *           counter: dictionary {lettter: times}
 * */
function countLetters(paraph = "") {
    // O(n)
    arr = Array.from(paraph.toLowerCase());
    letter_counter = {};
    // O(n)
    arr.forEach((element) => {
        // On(1)
        !letter_counter.hasOwnProperty(element) ?
            letter_counter[element] = 1 :
            letter_counter[element] += 1;
    })
    return letter_counter;
}

console.log(countLetters("aminoacids"));

console.log(countLetters("Can the outputs be determined from the inputs? In other words, did I have " +
    "*enough information to solve the problem? (You may not be able to answer this question until you set " +
    "about solving the problem. That's okay; it's still worth considering the question at this early stage."));

console.log(countLetters("aaaab 1241412"));
console.log(countLetters(""));
console.log(countLetters());
