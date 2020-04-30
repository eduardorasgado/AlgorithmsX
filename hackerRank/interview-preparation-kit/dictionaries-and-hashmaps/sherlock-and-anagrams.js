// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    // anagrammatic pairs
    let annPairs;
    let sLen = s.length;
    let alpha = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
    let alphaMap = {};
    (function(letters) {
        let letter;
        for(letter of letters.split(' ')) {
            alphaMap[letter] = (letter.codePointAt(0)-96) * 37;
        }
    })(alpha);
    //console.log(alphaMap);

    let repetitionMap = {};
    let i, j, stringValue, letterNumber, complexKey;
    for(i = 0; i< sLen; i++) {
        stringValue = 0;
        letterNumber = 0;
        for(j = i; j< sLen; j++) {
            stringValue += alphaMap[s[j]];
            ++letterNumber;
            //stringList = string.split('')
            //console.log(string);
            complexKey = stringValue + letterNumber;
            if(repetitionMap[complexKey] !== undefined) {
                ++repetitionMap[complexKey][0];
                repetitionMap[complexKey].push(s.slice(i, j+1))
            } else {
                repetitionMap[complexKey] = [0, s.slice(i, j+1)];
            }
            //repetitionMap[string] = stringList
        }
    }
    let element;
    annPairs = 0;
    for(element in repetitionMap) {
        if(repetitionMap.hasOwnProperty(element)){
            annPairs += (repetitionMap[element][0] *(repetitionMap[element][0]+1)) / 2;
        }
    }

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
    console.log('------------')
    // 4
    // 0
    console.log(sherlockAndAnagrams('abba'));
    console.log('------------')
    console.log(sherlockAndAnagrams('abcd'));

    console.log('------------')
    // 3
    // 10
    console.log(sherlockAndAnagrams('ifailuhkqq'));
    console.log('------------')
    console.log(sherlockAndAnagrams('kkkk'));

    console.log('------------')
    // 20
    // 5
    console.log(sherlockAndAnagrams('kkkkk'));
    console.log(sherlockAndAnagrams('cdcd'));
}

basicTestSuite();
extendedTestSuite();
