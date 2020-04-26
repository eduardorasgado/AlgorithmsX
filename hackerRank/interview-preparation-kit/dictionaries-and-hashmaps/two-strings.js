// https://www.hackerrank.com/challenges/two-strings/problem
// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let s2Len = s2.length;
    let s1Len = s1.length;
    let s1Map = {};
    let i;
    for(i = 0;i < s1Len; i++) {
        if(!s1Map[s1[i]]) {
            s1Map[s1[i]] = true;
        }
    }

    let flag = false;
    for(i = 0;i < s2Len; i++) {
        if(s1Map[s2[i]]) {
            console.log('YES');
            flag = true;
            break;
        }
    }
    if(!flag) console.log('NO');
}

function basicTestSuite() {
    //YES, NO
    console.log(twoStrings("hello",
        "world"));

    console.log(twoStrings("hi",
        "world"));

    // 4
    // NO
    // YES
    // YES
    // NO
    twoStrings("wouldyoulikefries",
        "abcabcabcabcabcabc");
    twoStrings("hackerrankcommunity",
        "cdecdecdecde");
    twoStrings("jackandjill",
        "wentupthehill");
    twoStrings("writetoyourparents",
        "fghmqzldbc");

    // YES
    // NO
    twoStrings('aardvark',
    'apple');
    twoStrings('beetroot',
    'sandals');
}

basicTestSuite();
