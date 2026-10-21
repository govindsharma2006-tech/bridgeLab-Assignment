// Q4: Array Performance Analyzer
// Analyzes student scores using Math utilities and array methods (map, filter, reduce).

// Generate an array of 8 random scores between 30 and 100 using map()
const placeholderArray = Array.from({ length: 8 });
const scores = placeholderArray.map(() => Math.floor(Math.random() * 71) + 30);

// Highest and lowest score using Math.max(...arr) and Math.min(...arr)
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Average score using reduce()
const totalScore = scores.reduce((accumulator, current) => accumulator + current, 0);
const averageScore = (totalScore / scores.length).toFixed(2);

// Number of students who passed (>= 50) using filter()
const passingScores = scores.filter(score => score >= 50);
const passedCount = passingScores.length;

// Score breakdown using map()
const scoreBreakdown = scores.map((score, index) => ({
    Student: `Student ${index + 1}`,
    Score: score,
    Status: score >= 50 ? "Passed" : "Failed"
}));

console.log("=== Q4: Array Performance Analyzer ===");
console.log("Generated 8 Random Scores:", scores);
console.log("\nIndividual Student Breakdown:");
console.table(scoreBreakdown);

// Summary output
const summaryOutput = `
========================================
      ARRAY PERFORMANCE SUMMARY
========================================
Evaluated Scores   : [${scores.join(", ")}]
----------------------------------------
Highest Score      : ${highestScore}
Lowest Score       : ${lowestScore}
Average Score      : ${averageScore}
Passing Count      : ${passedCount} out of ${scores.length}
Passing Percentage : ${((passedCount / scores.length) * 100).toFixed(1)}%
========================================`;

console.log(summaryOutput);
