// ============================================================
// Q7: Closures — makeMultiplier Factory Function
// ============================================================

console.log("=== Q7: Closures — makeMultiplier ===\n");

/**
 * makeMultiplier - A factory function that creates and returns a new function.
 *                  The returned function "closes over" the 'multiplier' variable.
 *
 * @param {number} multiplier - The fixed multiplier value to close over
 * @returns {Function} A function that multiplies any number by 'multiplier'
 */
function makeMultiplier(multiplier) {
  // The inner function CLOSES OVER 'multiplier' from the outer scope.
  // Even after makeMultiplier() finishes executing, the returned function
  // still remembers and accesses 'multiplier' via closure.
  return function (number) {
    return number * multiplier;
  };
}

// ============================================================
// Demonstration
// ============================================================

// Create a 'triple' function that always multiplies by 3
const triple = makeMultiplier(3);
console.log("const triple = makeMultiplier(3);");
console.log("triple(5)  =", triple(5));  // 15
console.log("triple(10) =", triple(10)); // 30
console.log("triple(0)  =", triple(0));  // 0

console.log("");

// Create a 'double' function that always multiplies by 2
const double = makeMultiplier(2);
console.log("const double = makeMultiplier(2);");
console.log("double(4)  =", double(4));  // 8
console.log("double(7)  =", double(7));  // 14

console.log("");

// Create a 'square' (multiply by itself is different, but demo any multiplier)
const tenX = makeMultiplier(10);
console.log("const tenX = makeMultiplier(10);");
console.log("tenX(6)   =", tenX(6));    // 60
console.log("tenX(100) =", tenX(100));  // 1000

// ============================================================
// Closure Explanation
// ============================================================
console.log("\n--- How Closure Works ---");
console.log(
  "1. makeMultiplier(3) is called → a new function is created and returned."
);
console.log(
  "2. The inner function captures (closes over) 'multiplier = 3' from the outer scope."
);
console.log(
  "3. Even after makeMultiplier() finishes, the inner function STILL has access to 'multiplier'."
);
console.log(
  "4. Each call to makeMultiplier() creates a NEW closure with its OWN 'multiplier' value."
);
console.log(
  "   So 'triple' and 'double' are independent closures with different captured values."
);
console.log(
  "\n✅ Closure = inner function retaining access to outer function's variables after the outer function has returned."
);
