// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    // anagrammatic pairs
    let annPairs = 0;
    let sLen = s.length;
    let alpha = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
    let alphaMap = {};
    (function(letters) {
        let letter;
        for(letter of letters.split(' ')) {
            alphaMap[letter] = (letter.codePointAt(0)-96);
        }
    })(alpha);
    console.log(alphaMap);

    let repetitionMap = {};
    let element;
    let i, j, stringValue, stringList;
    for(i = 0; i< sLen; i++) {
        stringValue = 0;
        for(j = i; j< sLen; j++) {
            stringValue += alphaMap[s[j]];
            //stringList = string.split('')
            //console.log(string);
            if(repetitionMap[stringValue] !== undefined) {
                ++repetitionMap[stringValue][0];
                repetitionMap[stringValue].push(s.slice(i, j+1))
            } else {
                repetitionMap[stringValue] = [1, s.slice(i, j+1)];
            }
            //repetitionMap[string] = stringList
        }
    }
    console.log(repetitionMap);

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
    // 5
    console.log(sherlockAndAnagrams('cdcd'));
}

basicTestSuite();
//extendedTestSuite();
