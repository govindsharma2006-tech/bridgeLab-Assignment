function evaluateStudentPerformance(marks) {
    const subjectCount = marks.length;
    let totalMarks = 0;
    let hasFailedAnySubject = false;

    for (let i = 0; i < subjectCount; i++) {
        const mark = marks[i];
        totalMarks += mark;
        
        if (mark < 35) {
            hasFailedAnySubject = true;
        }
    }

    const maxMarks = subjectCount * 100;
    const average = totalMarks / subjectCount;
    const overallPercentage = (totalMarks / maxMarks) * 100;

    console.log(`Marks: [${marks.join(", ")}]`);
    console.log(`Total: ${totalMarks}/${maxMarks} | Average: ${average.toFixed(2)} | Percentage: ${overallPercentage.toFixed(2)}%`);

    if (hasFailedAnySubject) {
        console.log("Result: Detained (Failed minimum 35 marks requirement in one or more subjects)");
    } else if (overallPercentage >= 85) {
        console.log("Result: Promoted with Distinction");
    } else if (overallPercentage >= 50 && overallPercentage <= 84.99) {
        console.log("Result: Promoted");
    } else {
        console.log("Result: Detained");
    }
    console.log("--------------------------------------------------");
}

console.log("--- Test Case 1: Distinction ---");
evaluateStudentPerformance([88, 92, 85, 90, 89]);

console.log("--- Test Case 2: Promoted ---");
evaluateStudentPerformance([65, 72, 58, 80, 70]);

console.log("--- Test Case 3: Detained (< 50%) ---");
evaluateStudentPerformance([45, 48, 42, 49, 46]);

console.log("--- Test Case 4: Validation Triggered (Subject < 35) ---");
evaluateStudentPerformance([95, 90, 32, 92, 88]);
