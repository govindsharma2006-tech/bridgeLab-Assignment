console.log("=== Q9: Debugging the Event Loop ===\n");

console.log("Predicted output order:");
console.log("1. Script start");
console.log("2. Script end");
console.log("3. Promise callback");
console.log("4. Timeout callback");
console.log("\nActual execution:");

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

setTimeout(() => {
  console.log("\nExplanation:");
  console.log("Synchronous code runs first (call stack).");
  console.log("Then microtasks (Promise.then) run — they drain before the event loop continues.");
  console.log("Finally macrotasks (setTimeout) run — picked one at a time by the event loop.");
}, 10);
