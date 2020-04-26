// https://www.hackerrank.com/challenges/two-strings/problem
// Complete the twoStrings function below.
// O(n+m)
function twoStrings(s1, s2) {
    let s2Len = s2.length;
    let s1Len = s1.length;
    let s1Map = {};
    let i;
    // O(n)
    for(i = 0;i < s1Len; i++) {
        if(!s1Map[s1[i]]) {
            s1Map[s1[i]] = true;
        }
    }


    // O(m)
    for(i = 0;i < s2Len; i++) {
        if(s1Map[s2[i]]) {
            return('YES');
        }
    }
    return('NO');
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
    console.log(twoStrings("wouldyoulikefries",
        "abcabcabcabcabcabc"));
    console.log(twoStrings("hackerrankcommunity",
        "cdecdecdecde"));
    console.log(twoStrings("jackandjill",
        "wentupthehill"));
    console.log(twoStrings("writetoyourparents",
        "fghmqzldbc"));

    // YES
    // NO
    console.log(twoStrings('aardvark',
    'apple'));
    console.log(twoStrings('beetroot',
    'sandals'));
}

basicTestSuite();
