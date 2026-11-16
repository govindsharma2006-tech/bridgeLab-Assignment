// ============================================================
// Q8: Custom Array.prototype.myMap() — Mimicking built-in map()
// ============================================================

console.log("=== Q8: Custom Array.prototype.myMap() ===\n");

/**
 * Array.prototype.myMap - Custom implementation of the built-in Array.map()
 *
 * How it works:
 *  - Iterates over each element in the array (using 'this')
 *  - Calls the provided callback with (element, index, array)
 *  - Pushes the return value into a new result array
 *  - Returns the new array (does NOT mutate the original)
 *
 * @param {Function} callback - Function to apply to each element.
 *                              Receives (currentValue, index, array)
 * @returns {Array} A new array with the callback's results
 */
Array.prototype.myMap = function (callback) {
  const resultArray = []; // New array to hold transformed values

  for (let i = 0; i < this.length; i++) {
    // Call the callback with the current element, its index, and the full array
    const transformedValue = callback(this[i], i, this);
    resultArray.push(transformedValue);
  }

  return resultArray;
};

// ============================================================
// Demonstration
// ============================================================

const numbers = [1, 2, 3];
console.log("Original array:", numbers);
console.log("");

// --- Double each number using myMap ---
console.log("--- myMap: num * 2 ---");
const doubled = numbers.myMap((num) => num * 2);
console.log("Result:", doubled); // [2, 4, 6]

// --- Square each number ---
console.log("\n--- myMap: num ** 2 ---");
const squared = numbers.myMap((num) => num ** 2);
console.log("Result:", squared); // [1, 4, 9]

// --- Convert numbers to strings ---
console.log("\n--- myMap: num.toString() ---");
const strings = numbers.myMap((num) => num.toString());
console.log("Result:", strings); // ['1', '2', '3']

// --- Using index parameter ---
console.log("\n--- myMap: using index ---");
const withIndex = numbers.myMap((num, index) => `[${index}]: ${num}`);
console.log("Result:", withIndex); // ['[0]: 1', '[1]: 2', '[2]: 3']

// ============================================================
// Compare with built-in map()
// ============================================================
console.log("\n--- Comparison with built-in map() ---");
const builtIn = numbers.map((num) => num * 2);
const custom  = numbers.myMap((num) => num * 2);
console.log("Built-in map():", builtIn); // [2, 4, 6]
console.log("Custom myMap(): ", custom);  // [2, 4, 6]
console.log("Results match: ", JSON.stringify(builtIn) === JSON.stringify(custom)); // true

console.log("\n✅ myMap() correctly mimics Array.prototype.map() by:");
console.log("   - NOT mutating the original array");
console.log("   - Returning a NEW array with transformed values");
console.log("   - Passing (element, index, array) to the callback");
