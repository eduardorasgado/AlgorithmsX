// string we have abcac
// 12345678910
// abcacabcac
// aswer: 4

// https://www.hackerrank.com/challenges/repeated-string/problem
// Complete the repeatedString function below.
function repeatedString(s, n) {
    // 5, 100 -> 100/ 5 | 100 % 5
    let aTimes = 0;
    let letter;
    for(letter of s) ((letter === 'a') && ++aTimes); // how many 'a' are there in pattern
    aTimes = Math.floor(n / s.length) * aTimes // 'a's in pattern printed x times until last item index is n
    let considerTimesExtra = n % s.length; // if aTimes not exactly fills the pattern and there is a remaider
    if (considerTimesExtra) // search 'a' repeated from s[0] up to considerTimesExtra
        for(let i = 0; i <= considerTimesExtra - 1; i++)
            (s[i] === 'a') && ++aTimes;
    return aTimes;
}

// correct: 7
// a b a a b a a b a a
console.log(repeatedString('aba', 10));
// correct: 1000000000000
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa...
console.log(repeatedString('a', 1000000000000));
// correct: 4
console.log(repeatedString('abcac', 10));
