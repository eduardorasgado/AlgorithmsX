// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    // anagrammatic pairs
    let annPairs;
    let sLen = s.length;
    let repetitionMap = {};
    let i, j, stringValue, letterNumber, complexKey;
    for(i = 0; i< sLen; i++) {
        for(j = i; j< sLen; j++) {
            stringValue = s.slice(i, j+1).split('').sort().join('')
            //console.log(string);
            if(repetitionMap[stringValue] !== undefined) {
                ++repetitionMap[stringValue][0];
                repetitionMap[stringValue].push(s.slice(i, j+1))
            } else {
                repetitionMap[stringValue] = [0, s.slice(i, j+1)];
            }
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

    console.log('------------')
    // 399
    console.log(sherlockAndAnagrams("ifailuhkqqhucpoltgtyovarjsnrbfpvmupwjjjfiwwhrlkpekxxnebfrwibylcvkfealgonjkzwlyfhhkefuvgndgdnbelgruel"));
}

basicTestSuite();
extendedTestSuite();
