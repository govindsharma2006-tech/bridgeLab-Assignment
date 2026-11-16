console.log("=== Q2: Micro vs Macro Task Order ===");

console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then callback");
});

console.log("Synchronous log");

console.log("End");

console.log("\nExpected order: Start → Synchronous log → End → Microtask → Macrotask");
console.log("Microtasks (Promise.then) run before macrotasks (setTimeout)");
console.log("because the microtask queue is drained completely before the event loop");
console.log("picks the next macrotask from the macrotask queue.");
