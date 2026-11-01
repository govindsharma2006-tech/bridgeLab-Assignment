// Q1: Arrow Function Transformer
// Converts traditional function declarations into ES6 arrow functions.
// Demonstrates concise syntax, implicit return, and lexical 'this' binding.

// Traditional function (for reference / comparison)
function squareTraditional(n) {
    return n * n;
}

// Arrow function: single-line implicit return
const square = n => n * n;

// Arrow function: multi-argument, block body
const multiply = (a, b) => {
    const result = a * b;
    return result;
};

// Arrow function: no arguments → parentheses required
const getPI = () => Math.PI.toFixed(5);

// Arrow function: returns an object literal (wrap in parentheses)
const createUser = (name, age) => ({ name, age, isActive: true });

// Arrow function used with array methods
const numbers = [3, 7, 1, 9, 4, 6, 2, 8, 5];
const evens   = numbers.filter(n => n % 2 === 0);
const doubled = numbers.map(n => n * 2);
const total   = numbers.reduce((acc, n) => acc + n, 0);

console.log("=== Q1: Arrow Function Transformer ===\n");

console.log("--- Single-Argument Arrow ---");
console.log(`square(7)  = ${square(7)}`);
console.log(`square(12) = ${square(12)}\n`);

console.log("--- Multi-Argument Arrow ---");
console.log(`multiply(6, 9)  = ${multiply(6, 9)}`);
console.log(`multiply(14, 3) = ${multiply(14, 3)}\n`);

console.log("--- No-Argument Arrow ---");
console.log(`getPI() = ${getPI()}\n`);

console.log("--- Object Literal Arrow ---");
const user = createUser("Govind", 21);
console.log(`createUser("Govind", 21) =`, JSON.stringify(user));
console.log();

console.log("--- Arrow Functions with Array Methods ---");
console.log(`Original  : [${numbers}]`);
console.log(`Evens     : [${evens}]`);
console.log(`Doubled   : [${doubled}]`);
console.log(`Sum Total : ${total}`);

