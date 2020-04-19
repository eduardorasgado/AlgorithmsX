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
    let initialState = Array.from({length: maxPosition}, (_, i) => i+1);
    let afterTable = {};
    let initialStateIndexes = {};

    // getting all the elements with - after position and + after posiition
    // - value: it is sure q[i] bribe a position
    // + value: moved forward its position lastly or as a result of - values movement
    // 0 value: ordered
    let i;
    for(i = 0; i < maxPosition; i++) {
        afterTable[q[i]] = ((i+1) - q[i]);
        initialStateIndexes[i+1] = i;
    }

    let tempValue;
    let currentElementLocation= 0;
    for(let element in afterTable) {
        if(afterTable.hasOwnProperty(element)) {
            if(afterTable[element] < -2) return 'Too chaotic';
            if(afterTable[element] < 0) {
                // relocate until afterTable is 0
                currentElementLocation = parseInt(element);
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
    //console.log('after, ap table    ', afterTable)
    //console.log('after: ', initialState)
    // swap last elements after last negative elements were swapped
    for(let element in afterTable) {
        if (afterTable.hasOwnProperty(element)) {
            if (afterTable[element] < 0) {
                let currentIndex = initialStateIndexes[element];
                tempValue = initialState[currentIndex];
                initialState[currentIndex] = initialState[currentIndex-1];
                initialState[currentIndex-1] = tempValue;

                afterTable[element] += 1;
                afterTable[initialState[currentIndex]] -=1;
                ++steps;
            }
        }
    }
    //console.log(initialStateIndexes);
    //console.log('after, ap table    ', afterTable)
    //console.log('after: ', initialState)
    return steps;
}

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

