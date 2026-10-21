// Q1: Scope Conflict Resolver
// Demonstrates proper variable scoping (global vs local scope) in payroll calculation.

// Global variable definition
const bonus = 5000;

/**
 * Calculates and logs employee salary based on employment status and scoping rules.
 * @param {boolean} isPermanent - Indicates if the employee is permanent
 * @param {string} employeeName - Name of the employee for reporting
 */
function calculateSalary(isPermanent, employeeName = "Employee") {
    // Local scope variable
    const salary = 40000;
    let totalSalary = salary;

    // Add bonus only if the local variable isPermanent is true
    if (isPermanent) {
        totalSalary += bonus; // Accessing global variable 'bonus'
        console.log(`[Permanent] ${employeeName}: Base Salary = Rs. ${salary}, Bonus = Rs. ${bonus} -> Total Salary = Rs. ${totalSalary}`);
    } else {
        console.log(`[Contract] ${employeeName}: Base Salary = Rs. ${salary}, Bonus = Rs. 0 -> Total Salary = Rs. ${totalSalary}`);
    }

    return totalSalary;
}

// Demonstrating calculations with different isPermanent values
console.log("=== Q1: Scope Conflict Resolver ===");
console.log(`Global variable 'bonus' declared as: Rs. ${bonus}\n`);

// Case 1: Permanent employee (bonus added)
calculateSalary(true, "Alice (Permanent)");

// Case 2: Non-permanent employee (bonus not added)
calculateSalary(false, "Bob (Contractor)");

// Demonstrating how changing isPermanent affects execution while keeping global scope intact
console.log(`\nVerifying global bonus variable remains untouched: Rs. ${bonus}`);
