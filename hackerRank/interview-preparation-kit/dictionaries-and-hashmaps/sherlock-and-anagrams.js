// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    // anagrammatic pairs
    let sLen = s.length;
    let alpha = 'a b c d e f g h i j k m n o p q r s t u v w x y z';
    let alphaMap = {};
    (function(letters) {
        let letter;
        for(letter of letters.split(' ')) {
            alphaMap[letter] = (letter.codePointAt(0)-96)*37;
        }
    })(alpha);

    let repetitionMap = {};
    let element;
    let i;
    for(i = 0; i< sLen; i++) {
        if(!repetitionMap[s[i]]) repetitionMap[s[i]] = [i];
        else repetitionMap[s[i]].push(i);
    }
    //console.log(repetitionMap);

    let currentWindow, windowLen, j;
    for(element in repetitionMap) {
        if(repetitionMap.hasOwnProperty(element)) {
            if(repetitionMap[element].length > 1) {
                // to compare sums in window and determinate if there is a valid pair
                let firstPairSum, secondPairSum;
                i = repetitionMap[element][0];
                let j = repetitionMap[element].slice(-1)[0];
                let currentWindow = [];
                let windowLen = 2;
                // get through the window and increment window len until len = (j-i)-1
                // if
            }
        }
    }

}

function basicTestSuite() {
    //
    // 4
    // 0
    console.log(sherlockAndAnagrams('abba'));
    console.log(sherlockAndAnagrams('abcd'));

    // 3
    // 10
    console.log(sherlockAndAnagrams('ifailuhkqq'));
    console.log(sherlockAndAnagrams('kkkk'));

    // 5
    console.log(sherlockAndAnagrams('cdcd'));
}

basicTestSuite();
