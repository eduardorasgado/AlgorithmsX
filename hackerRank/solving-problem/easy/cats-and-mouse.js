// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let catAProb = [Math.abs(z- x), "Cat A"];
    let catBProb = [Math.abs(z - y), 'Cat B'] ;
    if(catAProb[0] == catBProb[0]) return "Mouse C";
    else if (Math.min(catAProb[0], catBProb[0]) == catAProb) {
        return catAProb[1];
    } else {
        return catBProb[1];
    }
}

function basicTestSuite() {
    // Cat B
    console.log(catAndMouse(1, 2, 3));
    // Mouse C
    //1 3 2
    console.log(catAndMouse(1, 3, 2));
}

basicTestSuite();
