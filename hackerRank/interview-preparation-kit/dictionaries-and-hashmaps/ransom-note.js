const ex1 = require('./long-data-test-ransom-note/example1');
// https://www.hackerrank.com/challenges/ctci-ransom-note/problem
// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    // should print Yes or No
    let noteLen = note.length;
    let magazineLen = magazine.length;
    let wordTable = {'counter': 0, 'length': 0};

    let i;
    for(i = 0; i < noteLen; i++) {
        if(wordTable[note[i]] && wordTable[note[i]][0] !== 0) {
            wordTable[note[i]][0] = ++wordTable[note[i]][0];
        } else {
            // repetition of words, repetition in magz
            wordTable[note[i]] = [1, 0]
        }
        ++wordTable['length'];
    }

    for(i = 0; i < magazineLen; i++) {
        if(wordTable[magazine[i]] &&
            wordTable[magazine[i]][0] !== wordTable[magazine[i]][1]){
            ++wordTable['counter'];
            ++wordTable[magazine[i]][1];
        }

    }
    if(wordTable['counter'] === wordTable['length'])
        return 'Yes';
    return  'No';
}

function baseSuite(mag, rn) {
    return checkMagazine(mag.split(' '), rn.split(' '));
}

function basicTestSuite() {
    // Yes
    let mag =[ 'give',' me', 'one', 'grand', 'today', 'night'];
    let rn = ['give','one', 'grand', 'today'];
    console.log(checkMagazine(mag, rn));

    // No
    mag =['two', 'times', 'three', 'is', 'not', 'four'];
    rn = ['two', 'times', 'two', 'is', 'four'];
    console.log(checkMagazine(mag, rn));

    // No
    mag = 'ive got a lovely bunch of coconuts';
    rn =  'ive got some coconuts';
    console.log(baseSuite(mag, rn));

    // Yes
    mag = 'Hacker Rank was sold to Oracle Inc in 2024';
    rn = 'Hacker in 2024';
    console.log(baseSuite(mag, rn));

    // Yes
    mag = 'h ghq g xxy wdnr anjst xxy wdnr h h anjst wdnr';
    rn = 'h ghq';
    console.log(baseSuite(mag, rn));
}

function longDataTestSuite() {
    let mag = ex1.magazine;
    let note = ex1.note;
    console.log(baseSuite(mag, note));
}

basicTestSuite();
longDataTestSuite();
