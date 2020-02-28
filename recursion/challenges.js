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

/**
 * EXAM: IS PALINDROME
 *
 *      Write a recursive function called isPalindrome which returns true
 *      if the string passed to it is a palidrome(reads the same forward and
 *      backwards). Otherwise it returns false
 *
 *      concrete case
 *
 *      t a c o c a t
 *
 *      tt(1) * aa(1) * cc(1) * 1 = 1
 *
 *      awesome
 *      -> ae(0) * wm(0) * eo(0) * 1 = 0
 * */

function isPalindrome(word) {
    if(word.length <= 1) return true;
    return Boolean(Number(
        word[0] == word[word.length-1]) * isPalindrome(word.slice(1, word.length-1)
    ))
}
console.log('====================')
// Concrete cases
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
console.log(isPalindrome('anitalavalatina')); // true
console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('tacocat')); // true
