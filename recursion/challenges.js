/**
 * RECURSION PROBLEMS
 *
 * EXAM: REVERSE
 *      Write a recursive function called reverse which accepts a string and
 *      returns a new string in reverse
 * */

function reversev2(word, count = 0) {
    ++count;
    if(count == word.length) return word[0];
    return word[word.length - count] + reverse(word, count)
}

function reverse(word) {
    if(word.length == 1) return word[0];
    return word[word.length - 1] + reverse(word.slice(0, word.length-1))
}

console.log(reverse('awesome'));
console.log(reverse('reverse'));
console.log(reverse('rithmschool'));
