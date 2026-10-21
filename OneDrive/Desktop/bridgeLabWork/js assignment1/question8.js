let currentSalary = 50000;
const annualIncrementRate = 10;

const salaryProjectionTable = [];
let projectedSalary = currentSalary;

console.log("=== Employee 5-Year Salary Projection ===");
console.log(`Starting Base Salary  : ₹${currentSalary.toLocaleString()}`);
console.log(`Annual Increment Rate : ${annualIncrementRate}%\n`);

for (let year = 1; year <= 5; year++) {
    const incrementAmount = projectedSalary * (annualIncrementRate / 100);
    projectedSalary += incrementAmount;
    const roundedSalary = Math.round(projectedSalary);

    salaryProjectionTable.push({
        "Year": `Year ${year}`,
        "Increment Amount (₹)": Math.round(incrementAmount),
        "Projected Salary (₹)": roundedSalary
    });
}

console.table(salaryProjectionTable);
