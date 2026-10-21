// Q3: Math Utility Dashboard
// Scientific calculator utility module using Math methods and template literals.

const x = 16.75;

// Required Math method calculations
const roundedValue = Math.round(x);
const squareRootValue = Math.sqrt(x).toFixed(4);
const powerValue = Math.pow(x, 3).toFixed(2);
const randomNumBetween10And50 = Math.floor(Math.random() * 41) + 10;

// Formatted result summary using template literals
const mathSummary = `
========================================
       MATH UTILITY DASHBOARD
========================================
Input Number (x)         : ${x}
----------------------------------------
Rounded Value (round)    : ${roundedValue}
Square Root (sqrt)       : ${squareRootValue}
Power of 3 (pow(x, 3))   : ${powerValue}
Random Number (10 to 50) : ${randomNumBetween10And50}
========================================`;

console.log("=== Q3: Math Utility Dashboard ===");
console.log(mathSummary);
