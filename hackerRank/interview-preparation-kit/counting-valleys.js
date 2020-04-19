// Complete the countingValleys function below.
function countingValleys(n, s) {
    let valleys = 0
    let seaLevel = 0;
    let currentLevel = 0;
    let inAValley = false;
    for(let i = 0; i < n; i++) {
        if(s[i] === 'D') {
            --currentLevel;
        }
        else if(s[i] === 'U') {
            ++currentLevel;
        }
        if(currentLevel<seaLevel) inAValley = true
        if(inAValley && currentLevel>= seaLevel){
            inAValley = !inAValley;
            ++valleys;
        }
    }
    return valleys;
}


function testing(arr) {
    return countingValleys(arr.length, arr)
}

function testing2(steps) {
    let arr = steps.split('');
    return countingValleys(arr.length, arr)
}

console.log(testing(['U','D','D','D','U','D','U','U']));
console.log(testing2("UDDDUDUU"));
console.log(testing2("DDUUDDUDUUUD"));

//third test:
//-          /\
// \  /\    /
//  \/  \/\/
