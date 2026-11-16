// ============================================================
// Q2: applyOperation(numbers, operation) - Higher-Order Functions
// ============================================================

/**
 * applyOperation - Applies a given operation (callback) to each element
 *                  of a numbers array and returns the resulting array.
 * @param {number[]} numbers   - Array of numbers to process
 * @param {Function} operation - Callback function to apply to each element
 * @returns {number[]} A new array with the operation applied to each element
 */
function applyOperation(numbers, operation) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i])); // Apply the callback to each element
  }
  return result;
}

// ============================================================
// Demonstration
// ============================================================
console.log("=== Q2: Higher-Order Function - applyOperation ===\n");

const numbers = [1, 2, 3, 4];
console.log("Original array:", numbers);
console.log("");

// --- Double each number ---
const doubleOperation = (num) => num * 2;
const doubledNumbers = applyOperation(numbers, doubleOperation);
console.log("--- Double each number ---");
console.log("Operation: num * 2");
console.log("Result:", doubledNumbers); // [2, 4, 6, 8]

console.log("");

// --- Square each number ---
const squareOperation = (num) => num * num;
const squaredNumbers = applyOperation(numbers, squareOperation);
console.log("--- Square each number ---");
console.log("Operation: num * num");
console.log("Result:", squaredNumbers); // [1, 4, 9, 16]

console.log("");

// --- Bonus: Triple each number using an inline arrow callback ---
console.log("--- Bonus: Triple each number (inline callback) ---");
const tripledNumbers = applyOperation(numbers, (num) => num * 3);
console.log("Result:", tripledNumbers); // [3, 6, 9, 12]

console.log("\n✅ applyOperation demonstrates Higher-Order Functions (HOF):");
console.log("   A function that accepts another function as an argument.");
