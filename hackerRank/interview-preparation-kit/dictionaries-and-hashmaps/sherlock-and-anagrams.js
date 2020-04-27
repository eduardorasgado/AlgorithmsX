// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    // anagrammatic pairs
    let annPairs = 0;
    let sLen = s.length;
    let alpha = 'a b c d e f g h i j k m n o p q r s t u v w x y z';
    let alphaMap = {};
    (function(letters) {
        let letter;
        for(letter of letters.split(' ')) {
            alphaMap[letter] = (letter.codePointAt(0)-96)*37;
        }
    })(alpha);
    console.log(alphaMap);

    let repetitionMap = {};
    let element;
    let i;
    for(i = 0; i< sLen; i++) {
        if(!repetitionMap[s[i]]) repetitionMap[s[i]] = [i];
        else repetitionMap[s[i]].push(i);
    }
    console.log(repetitionMap);

    let currentWindow, windowLen, j;
    for(element in repetitionMap) {
        if(repetitionMap.hasOwnProperty(element)) {
            if(repetitionMap[element].length > 1) {
                console.log("--", repetitionMap[element]);
                // to compare sums in window and determinate if there is a valid pair
                let pairSum, lastPairSum;
                i = repetitionMap[element][0];
                let j = repetitionMap[element].slice(-1)[0];
                let windowLen = 1;
                // get through the window and increment window len until len = (j-i)-1

                // window length increments until reach
                while(i+windowLen < j+1) {
                    console.log("window len loop, ", s[i], i, windowLen);
                    let k, q, z;
                    let elements = [0, 0]

                    for(k= i; k < j+1; k++) {
                        elements[0] = 0;
                        for(z = k; z < k + windowLen; z++){
                            //console.log(z);
                            if(s[z]) elements[0] += (s[z].codePointAt(0)-96) * 37;
                        }
                        for(q= k+1; q < j+1; q++) {
                            console.log(k, q);
                            for(z = q; z < q + windowLen; z++){
                                if(z < sLen) elements[1] += (s[z].codePointAt(0)-96) * 37;
                                console.log("here: ",z);
                            }
                            //console.log("nested: ", s[k], k)
                            if(elements[0] === elements[1]) {
                                console.log("elements: ", elements);
                                ++annPairs;
                            }
                            elements[1] = 0;
                        }
                    }
                    ++windowLen;
                }
            }
        }
    }

    return annPairs;

}

function basicTestSuite() {
    //
    // 4
    // 0
    //console.log(sherlockAndAnagrams('abba'));
    //console.log(sherlockAndAnagrams('abcd'));

    // 3
    // 10
    //console.log(sherlockAndAnagrams('ifailuhkqq'));
    //console.log(sherlockAndAnagrams('kkkk'));

    // 5
    console.log(sherlockAndAnagrams('cdcd'));
}

basicTestSuite();
