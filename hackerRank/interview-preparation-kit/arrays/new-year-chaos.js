const exOne = require('./new-year-chaos-test-long-data/examples1');
const exTwo = require('./new-year-chaos-test-long-data/examples2');
const exThree = require('./new-year-chaos-test-long-data/examples3');
/**
 * Print an integer denoting the minimum number of bribes needed to get the queue
 * into its final state. Print Too chaotic if the state is invalid,
 * i.e. it requires a person to have bribed more than 2 people.
 * @param q
 */
// https://www.hackerrank.com/challenges/new-year-chaos/problem
// Complete the minimumBribes function below.
function minimumBribes(q) {
    let maxPosition = q.length;
    let steps = 0;
    // Used to mimic possible bribes until we get to final position
    let initialState = Array.from({length: maxPosition}, (_, i) => i+1);
    // will store final position indexes difference with initial position for every element
    let afterTable = {};
    // same as above, but will not change, for info request only
    const afterTableStatic = {};
    // to avoid expensive cost of index searching in initial state
    let initialStateIndexes = {};

    // getting all the elements with - after position and + after posiition
    // - value: it is sure q[i] bribe a position
    // + value: moved forward its position lastly or as a result of - values movement
    // 0 value: ordered
    let i;
    for(i = 0; i < maxPosition; i++) {
        afterTable[q[i]] = ((i+1) - q[i]);
        afterTableStatic[q[i]] = i;
        initialStateIndexes[i+1] = i;
    }

    // hacker test purpose
    //let chaoticMsg = false;
    let tempValue;
    let currentElementLocation= 0;
    let element;
    let elementMinusOne;
    let elementMinusOneIndex
    let elementMinusTwo;
    let elementMinusTwoIndex;
    for(element in afterTable) {
        if(afterTable.hasOwnProperty(element)) {
            if(afterTable[element] < -2) {
                // hacker test purpose
                //chaoticMsg = true;
                //console.log('Too chaotic');
                //break;

                // for local testing
                return 'Too chaotic';

            }
            if(afterTable[element] < 0) {
                currentElementLocation = parseInt(element);
                // look backwards last two elements in initial state
                //second element
                elementMinusOne = initialState[currentElementLocation-2];
                // first element
                elementMinusTwo = initialState[currentElementLocation-3];
                // if element-2 is greater than element-1 then do nothin
                // if this was false, that means both were swapped before
                if(elementMinusOne > elementMinusTwo) {
                    // search for its orders within q array, if they are in same order do nothing
                    elementMinusOneIndex = afterTableStatic[elementMinusOne]
                    elementMinusTwoIndex = afterTableStatic[elementMinusTwo]
                    // if they are inverted, swap them before swap element
                    if(elementMinusTwoIndex > elementMinusOneIndex) {
                        // swap in initialState
                        [initialState[initialStateIndexes[elementMinusOne]],
                            initialState[initialStateIndexes[elementMinusTwo]]] =
                            [initialState[initialStateIndexes[elementMinusTwo]],
                                initialState[initialStateIndexes[elementMinusOne]]];
                        // change indexes in initialStateIndexes
                        [initialStateIndexes[elementMinusOne],
                            initialStateIndexes[elementMinusTwo]] =
                            [initialStateIndexes[elementMinusTwo],
                                initialStateIndexes[elementMinusOne]];
                        // update afterTable
                        afterTable[elementMinusOne] =
                            (afterTable[elementMinusOne] < 0) ? ++afterTable[elementMinusOne]
                                : --afterTable[elementMinusOne];
                        afterTable[elementMinusTwo] =
                            (afterTable[elementMinusTwo] < 0) ? ++afterTable[elementMinusTwo]
                                : --afterTable[elementMinusTwo];
                        ++steps
                    }
                }

                // relocate until afterTable is 0
                while(afterTable[element] < 0) {
                    //console.log(initialState);
                    tempValue = initialState[currentElementLocation-1];
                    initialState[currentElementLocation-1] = initialState[currentElementLocation-2];
                    initialState[currentElementLocation-2] = tempValue;

                    // storing initial state indexes to avoid search for elements in second iteration over all afterTable elements
                    initialStateIndexes[initialState[currentElementLocation-1]] = currentElementLocation-1
                    initialStateIndexes[initialState[currentElementLocation-2]] = currentElementLocation-2

                    // update current movement debt  from table, movements done to get final state are removed
                    // new steps to get final states are computed, until 0 movements in every element are debt
                    afterTable[element] += 1;
                    afterTable[initialState[currentElementLocation-1]] -=1;
                    // because element change its location with left element in initialState
                    currentElementLocation -= 1;
                    ++steps;
                }
            }
        }
    }
    return steps;
    // hacker test purpose
    //if(!chaoticMsg) console.log(steps);
}

function stringToArray(string) {
    return string.split(' ').map((element) => parseInt(element));
}

const testSuiteLongData1 = () => {
    console.log('---critique data test---');
    //[test1, test2, test3, test4, test5,
    //    test6, test7, test8, test9, test10]
    // 67
    // 66
    // 65
    //console.log(stringToArray(test1).length)
    // test2, test5
    [exTwo.test1, exTwo.test2, exTwo.test5 ].forEach((test) => {
        console.log(minimumBribes(stringToArray(test)));
    })
}

const testSuiteLongData2 = () => {
    console.log('---critique data test---');
    // 709
    // Too chaotic
    // 704
    // Too chaotic
    // Too chaotic
    // Too chaotic
    // 691
    // 731
    // 733
    // Too chaotic
    // test2, test5
    [ exOne.test1, exOne.test2,  exOne.test3, exOne.test4,
        exOne.test5, exOne.test6, exOne.test7, exOne.test8,
        exOne.test9,exOne.test10].forEach((test) => {
        console.log(minimumBribes(stringToArray(test)));
    })
}

const testSuiteLongData3 = () => {
    console.log('---critique data test---');
    // 115173
    // Too chaotic
    // 115013
    // Too chaotic
    [ exThree.test1, exThree.test2,  exThree.test3, exThree.test4,].forEach((test) => {
        console.log(minimumBribes(stringToArray(test)));
    })
}
const testSuite = () => {
    // correct: 3
    console.log(minimumBribes([2, 1, 5, 3, 4]));
    // 2 1 5 3 4  0     2 1 5
    // 1 2 5 3 4  1
    // 1 2 3 5 4  2
    // 1 2 3 4 5  3

    // Too chaotic
    console.log(minimumBribes([2, 5, 1, 3, 4]));
    // 2, 5, 1, 3, 4   0
    // 2, 1, 5, 3, 4   1
    // 2, 1, 3, 5, 4   2
    // 2, 1, 3, 5, 4   Too chaotinc

    //correct: Too chaotic
    console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]));
    // original     1   2   3   4   5   6   7   8
    // queue        5,  1,  2,  3,  7,  8,  6,  4
    // this is how we get from original queue to bribed queue

    // from original queue:
    //          1   2   3   4   5   6   7   8
    //          1   2   3   5   4   6   7   8     [4, 5] 5
    //          1   2   5   3   4   6   7   8     [3, 5] 5
    //          1   2   5   3   4   6   7   8     [3, 5] 5  <- third movement means Too chaotic

    // result:
    // queue        5,  1,  2,  3,  7,  8,  6,  4


    //correct: 7
    console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
    // original     1   2   3   4   5   6   7   8
    // queue        1,  2,  5,  3,  7,  8,  6,  4
    // this is how we get from original queue to bribed queue

    // from original queue:
    //          1   2   3   4   5   6   7   8
    //          1   2   3   4   5   7   6   8   [6, 7]     7
    //          1   2   3   5   4   7   6   8   [4, 5]     5
    //          1   2   5   3   4   7   6   8   [5, 3]     5
    //          1   2   5   3   7   4   6   8   [4, 7]     7
    //          1   2   5   3   7   4   8   6   [6, 8]     8
    //          1   2   5   3   7   8   4   6   [4, 8]     8
    //          1   2   5   3   7   8   6   4   [4, 6]     6
    // result:
    // queue    1,  2,  5,  3,  7,  8,  6,  4

    //correct: 4
    console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]));
    // original     1   2   3   4   5   6   7   8
    // queue        1   2   5   3   4   7   8   6
    // this is how we get from original queue to bribed queue

    // from original queue:
    //          1   2   3   4   5   6   7   8
    //          1   2   3   5   4   6   7   8    [4, 5]     5
    //          1   2   5   3   4   6   7   8    [3, 5]     5
    //          1   2   5   3   4   7   6   8    [6, 7]     7
    //          1   2   5   3   4   7   8   6    [6, 8]     8

    // result:
    // queue    1,  2,  5,  3,  7,  8,  6,  4
}

testSuite();
testSuiteLongData1();
testSuiteLongData2()
testSuiteLongData3()

