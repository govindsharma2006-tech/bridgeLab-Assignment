// Q6: Event-Based Counter Simulation
// Simulates click-driven counter updates with nested functions demonstrating function scope.

let count = 0;

/**
 * Increases count by 1 using a nested function to demonstrate function scope.
 */
function increment() {
    function performIncrement() {
        count++;
        return count;
    }

    const currentCount = performIncrement();
    console.log(`[Event: Increment Click (+)] -> Current count: ${currentCount}`);
}

/**
 * Decreases count by 1 using a nested function to demonstrate function scope.
 */
function decrement() {
    function performDecrement() {
        count--;
        return count;
    }

    const currentCount = performDecrement();
    console.log(`[Event: Decrement Click (-)] -> Current count: ${currentCount}`);
}

console.log("=== Q6: Event-Based Counter Simulation ===");
console.log(`Initial Counter State: ${count}\n`);

// Simulating multiple click events
console.log("--- Executing Simulated Click Sequences ---");
increment();
increment();
increment();
decrement();
increment();
decrement();
decrement();

console.log(`\nFinal Counter State: ${count}`);
