// Q10: Departmental Employee Evaluator
// Evaluates performance scores using nested arrays, comparison operators, and nested if-else statements.

// Create nested array for departments
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

console.log("=== Q10: Departmental Employee Evaluator ===\n");

const evaluationReport = [];

for (let i = 0; i < departments.length; i++) {
    const departmentName = departments[i][0];
    const score = departments[i][1];
    let rating = "";

    // Nested if-else conditional rating structure
    if (score >= 90) {
        rating = "Excellent";
    } else {
        if (score >= 75) {
            rating = "Good";
        } else {
            if (score >= 60) {
                rating = "Average";
            } else {
                rating = "Needs Improvement";
            }
        }
    }

    // Print evaluation outcome
    console.log(`Department: ${departmentName.padEnd(8, " ")} | Score: ${score} -> Rating: ${rating}`);

    evaluationReport.push({
        Department: departmentName,
        Score: score,
        Rating: rating
    });
}

console.log("\nSummary Table:");
console.table(evaluationReport);
