// Q9: Odd–Even Number Analyzer
// Classifies numbers 1 to 30 into FizzBuzz, Even, or Odd categories using %, push(), and conditionals.

// Step 1: Accept numbers 1–30 in an array using a loop
const numbers = [];
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Step 2: Classify numbers and store results in a new array
const results = [];

console.log("=== Q9: Odd-Even Number Analyzer (1 to 30) ===\n");

for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    let classification = "";

    // If divisible by both 3 and 5 -> "FizzBuzz"
    if (num % 3 === 0 && num % 5 === 0) {
        classification = "FizzBuzz";
    } else if (num % 2 === 0) {
        // Else if even -> "Even"
        classification = "Even";
    } else {
        // Else -> "Odd"
        classification = "Odd";
    }

    // Print individual result to console
    console.log(`Number ${num.toString().padStart(2, " ")} -> ${classification}`);

    // Store results in new array
    results.push({
        Number: num,
        Type: classification
    });
}

console.log("\nSummary Table:");
console.table(results);
