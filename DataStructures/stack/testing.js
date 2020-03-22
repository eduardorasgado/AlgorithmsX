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
