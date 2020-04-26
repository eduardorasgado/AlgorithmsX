// https://www.hackerrank.com/challenges/ctci-ransom-note/problem
// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    // should print Yes or No
    let noteLen = note.length;
    let magazineLen = magazine.length;
    let wordTable = {'counter': 0, 'length': 0};
    let word = '';
    let i;
    for(i = 0; i < noteLen; i++) {
        if(note[i] !== ' ') {
            word += note[i];
        } else {
            wordTable[word] = true;
            ++wordTable['length'];
            word = '';
        }
    }
    word = '';
    for(i = 0; i < magazineLen; i++) {
        if(magazine[i] !== ' ') {
            word += magazine[i];
        } else {
            if(wordTable[word])
                ++wordTable['counter'];
            word = '';
        }
    }
    if(wordTable['counter'] === wordTable['length'])
        return 'Yes';
    return  'No';
}

function basicTestSuite() {
    // Yes
    let mag = 'give me one grand today night';
    let rn = 'give one grand today';
    console.log(checkMagazine(mag, rn));

    // No
    mag = 'two times three is not four';
    rn = 'two times two is four';
    console.log(checkMagazine(mag, rn));

    // No
    mag = 'ive got a lovely bunch of coconuts';
    rn = 'ive got some coconuts';
    console.log(checkMagazine(mag, rn));

    mag = 'Hacker Rank was sold to Oracle Inc in 2024';
    rn = 'Hacker in 2024';
    console.log(checkMagazine(mag, rn));
}

basicTestSuite();
