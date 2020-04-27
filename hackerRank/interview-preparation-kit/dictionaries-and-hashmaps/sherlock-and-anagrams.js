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
    //console.log(alphaMap);

    let repetitionMap = {};
    let element;
    let i;

    for(i = 0; i< sLen; i++) {
        if(!repetitionMap[s[i]]) repetitionMap[s[i]] = [i];
        else {
            repetitionMap[s[i]].push(i);
        }
    }
    let boundaries = [];
    let boundariesOwners = []
    for(element in repetitionMap) {
        if (repetitionMap.hasOwnProperty(element)) {
            if (repetitionMap[element].length > 1) {
                boundaries
                    .push([repetitionMap[element][0],
                        repetitionMap[element].slice(-1)[0]])
                boundariesOwners.push(element)
            }
        }
    }

    //console.log("before boundaries: ", repetitionMap);
    //console.log(boundaries);
    //console.log(boundariesOwners);

    let j = 0;
    for(element in repetitionMap) {
        if(repetitionMap.hasOwnProperty(element)) {
            if(repetitionMap[element].length > 0) {
                let bound;
                j = 0;
                for(bound of boundaries) {
                    let upperBound = repetitionMap[element].slice(-1)[0];
                    let lowerBound = repetitionMap[element][0];
                    if((bound[0] > lowerBound && (upperBound < bound[1] && upperBound > bound[0]))
                        || (((bound[0] < lowerBound) && (bound[1] > lowerBound))
                            && bound[1] < upperBound)) {
                        // merge the bounds
                        if (bound[0] > lowerBound){
                            // repetition map element will absorb bound boundariesOwners
                            repetitionMap[element]
                                .push(repetitionMap[boundariesOwners[j]].slice(-1)[0]);

                            //delete repetitionMap[boundariesOwners[j]]
                        } else {
                            // boundaries owner will absorb repetition mape element
                            repetitionMap[boundariesOwners[j]]
                                .push(repetitionMap[element].slice(-1)[0]);
                            // delete repetitionMap[element];
                        }
                        //console.log("bounds crossed----------")
                    }
                    ++j;
                }
            }
        }
    }
    //console.log(repetitionMap);

    let reviewed = {}
    let currentWindow, windowLen;
    for(element in repetitionMap) {
        if(repetitionMap.hasOwnProperty(element)) {
            if(repetitionMap[element].length > 1) {
                //console.log("--", repetitionMap[element]);
                // to compare sums in window and determinate if there is a valid pair
                let pairSum, lastPairSum;
                i = repetitionMap[element][0];
                j = repetitionMap[element].slice(-1)[0];
                if(!(reviewed[i] && reviewed[j])) {
                    //console.log(element);
                    let windowLen = 1;
                    // get through the window and increment window len until len = (j-i)-1

                    // window length increments until reach
                    while(i+windowLen < j+1) {
                        //console.log("window len loop, ", s[i], i, windowLen);
                        let k, q, z;
                        let elements = [0, 0]

                        for(k= i; k < j+1; k++) {
                            elements[0] = 0;
                            for(z = k; z < k + windowLen; z++){
                                //console.log(z);
                                if(s[z]) {
                                    elements[0] += (s[z].codePointAt(0)-96) * 37;
                                    reviewed[z] = true;
                                }
                            }
                            for(q= k+1; q < j+1; q++) {
                                //console.log(k, q);
                                for(z = q; z < q + windowLen; z++){
                                    if(z < sLen) {
                                        elements[1] += (s[z].codePointAt(0)-96) * 37;
                                        reviewed[z] = true;
                                    }
                                    //console.log("here: ",z);
                                }
                                //console.log("nested: ", s[k], k)
                                if(elements[0] === elements[1]) {
                                    //console.log("elements: ", elements);
                                    ++annPairs;
                                }
                                elements[1] = 0;
                            }
                        }
                        ++windowLen;
                    }
                } // else console.log("element reviewed");
            }
        }
    }
    //console.log(reviewed);

    return annPairs;

}

function extendedTestSuite() {
    console.log("-------------extend test suite----------");
    // 399
    console.log(sherlockAndAnagrams("ifailuhkqqhucpoltgtyovarjsnrbfpvmupwjjjfiwwhrlkpekxxnebfrwibylcvkfealgonjkzwlyfhhkefuvgndgdnbelgruel"));
    // 471
    console.log(sherlockAndAnagrams("gffryqktmwocejbxfidpjfgrrkpowoxwggxaknmltjcpazgtnakcfcogzatyskqjyorcftwxjrtgayvllutrjxpbzggjxbmxpnde"));
    // 370
    console.log(sherlockAndAnagrams("mqmtjwxaaaxklheghvqcyhaaegtlyntxmoluqlzvuzgkwhkkfpwarkckansgabfclzgnumdrojexnrdunivxqjzfbzsodycnsnmw"));
    // 403
    console.log(sherlockAndAnagrams("ofeqjnqnxwidhbuxxhfwargwkikjqwyghpsygjxyrarcoacwnhxyqlrviikfuiuotifznqmzpjrxycnqktkryutpqvbgbgthfges"));
    // 428
    console.log(sherlockAndAnagrams("zjekimenscyiamnwlpxytkndjsygifmqlqibxxqlauxamfviftquntvkwppxrzuncyenacfivtigvfsadtlytzymuwvpntngkyhw"));
    // 412
    console.log(sherlockAndAnagrams("ioqfhajbwdfnudqfsjhikzdjcbdymoecaokeomuimlzcaqkfmvquarmvlnrurdblzholugvwtkunirmnmsatrtbqlioauaxbcehl"));
    // 472
    console.log(sherlockAndAnagrams("kaggklnwxoigxncgxnkrtdjnoeblhlxsblnqitdkoiftxnsafukbdhasdeihlhfrqkfzqhvnsmsgnrayhsyjsniutmgpfjmssfsg"));
    // 457
    console.log(sherlockAndAnagrams("fhithnigqftuzzgpdiquhlsozksxxfreddmsmvqgfgzntphmgggszwtkcbmjsllwtukgqvpvxvmatuanbeossqwtpgzbagaukmta"));
    // 467
    console.log(sherlockAndAnagrams("rqjfiszbigkdqxkfwtsbvksmfrffoanseuenvmxzsugidncvtifqesgreupsamtsyfrsvwlvhtyzgjgnmsowjwhovsmfvwuniasw"));
    // 447
    console.log(sherlockAndAnagrams("dxskilnpkkdxwpeefvgkyohnwxtrrtxtckkdgnawrdjtcpzplywyxmwtemwmtklnclqccklotbpsrkazqolefprenwaozixvlxhu"));
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
extendedTestSuite();
