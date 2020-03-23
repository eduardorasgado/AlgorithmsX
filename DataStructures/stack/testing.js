const { Stack } = require("./stack");
/**
 * implementing a stack using an Array.
 */
console.log('-----array implementation of stack-------')
let stack = [];
stack.push('my');
stack.push('name');
stack.push('is');
stack.push('Eduardo');
console.log(stack);
stack.pop();
console.log(stack);
stack = []
stack.unshift('create new file');
stack.unshift('resize file');
stack.unshift('cloned out wrinkle');
console.log(stack);
console.log(stack.shift());
console.log(stack.shift());
console.log(stack);

console.log('-----linked list implementation of stack-------')
let s1 = new Stack();
s1.push('create new file');
s1.push('resize file');
s1.push('cloned out wrinkle');
s1.toString();
s1.pop();
//s1.pop();
s1.toString();
