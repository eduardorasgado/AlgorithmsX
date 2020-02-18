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


/*
* PROBLEM SOLVING STRATEGIES
*
*   3. Break it Down
*
*       Explicitly write out the steps you need to take.
*           This forces you to think about the code you will write before you write it, and helps you catch any
*           lingering conceptual issues or misunderstandings before you dive in and have to worry about details
*           (e.g. language syntax) as well
*
* */

function charCountExplanation(str) {
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string;
}

function charCountPseudoCode(str) {
    // make object to return at end
    // loop over string, for each character...
    // if the char is a number/letter AND a key in object, add one to count
    // if the char is a number/letter AND not object, add it to the object and set value to 1
    // if character is something else (space, period, etc.) dont do anything
    // return object at end
}

/**
 * PROBLEM SOLVING STRATEGIES
 *      4. Solve / Simplify
 *          If you can...
 *          But if you can't... Solve a simpler problem
 *
 *          Simplify
 *              i. Find the core difficulty in what you're trying to do
 *              ii. Temporarily ignore that difficulty
 *              iii. Write a simplified solution
 *              iv. Then incorporate that difficulty back in.
 */

function charCount(str) {
    // make object to return at end
    let result = {}
    // loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        // if the char is a number/letter AND a key in object, add one to count
        if(char.match(/^[0-9a-zA-Z]+$/)){
            if(result[char] > 0) {
                result[char]++;
                // if the char is a number/letter AND not object, add it to the object and set value to 1
            } else result[char] = 1;
        }
    }
    // if character is something else (space, period, etc.) dont do anything
    // return object at end
    return result;
}

console.log(charCount("Your PIN code is: 1234"))
console.log("-------------")

 /*
 * My own implementation
 * @param paraph: string
 * @returns {TypeError|{}|*}
 */
function countLetters(paraph = "") {
    // O(n)

    if(typeof(paraph) == "string") {
        arr = Array.from(paraph.toLowerCase());
        let letter_counter = {};
        // O(n)
        arr.forEach((e) => {
            // On(1)
            e.match(/^[0-9a-zA-Z]+$/) && (!letter_counter.hasOwnProperty(e) ?
                letter_counter[e] = 1 :
                letter_counter[e] ++);
        })
        return letter_counter;
    }
    return new TypeError("something wrong, not a string");
}


console.log(countLetters("aminoacids"));

console.log(countLetters("Can the outputs be determined from the inputs? In other words, did I have " +
    "*enough information to solve the problem? (You may not be able to answer this question until you set " +
    "about solving the problem. That's okay; it's still worth considering the question at this early stage."));

console.log(countLetters("aaaab 1241412"));
console.log(countLetters(""));
console.log(countLetters());
console.log(countLetters(1));


/**
 *    PROBLEM SOLVING STRATEGIES
 *
 *      5. Look back and refactor
 *
 *          Refactoring questions
 * */

function charCount(str) {
    // make object to return at end
    let result = {}
    // loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        // if the char is a number/letter AND a key in object, add one to count
        if(char.match(/^[0-9a-zA-Z]+$/)){
            if(result[char] > 0) {
                result[char]++;
                // if the char is a number/letter AND not object, add it to the object and set value to 1
            } else result[char] = 1;
        }
    }
    // if character is something else (space, period, etc.) dont do anything
    // return object at end
    return result;
}
