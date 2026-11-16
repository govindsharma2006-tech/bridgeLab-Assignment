// ============================================================
// Q1: greetUser(name, callback) - Callback Function Demo
// ============================================================

/**
 * showEndMessage - A callback function that prints a welcome message
 */
function showEndMessage() {
  console.log("Welcome to the course!");
}

/**
 * greetUser - Greets the user by name, then executes a callback
 * @param {string} name - The name of the user
 * @param {Function} callback - A callback function to execute after greeting
 */
function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  // After greeting, execute the callback function
  callback();
}

// ============================================================
// Demonstration
// ============================================================
console.log("=== Q1: Callback Function Demo ===\n");

// Call greetUser with "Alice" and the showEndMessage callback
console.log("--- Calling greetUser('Alice', showEndMessage) ---");
greetUser("Alice", showEndMessage);

console.log("");

// Using an inline anonymous callback
console.log("--- Calling greetUser with inline anonymous callback ---");
greetUser("Bob", function () {
  console.log("Thanks for joining us, Bob!");
});

console.log("");

// Using an arrow function as a callback
console.log("--- Calling greetUser with arrow function callback ---");
greetUser("Charlie", () => {
  console.log("Arrow callback executed — Welcome, Charlie!");
});

console.log("\n✅ Callback flow: greetUser runs first, then callback is invoked.");
