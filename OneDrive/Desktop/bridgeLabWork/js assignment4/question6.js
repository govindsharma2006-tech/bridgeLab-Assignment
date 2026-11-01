// Q6: Employee Management System (Classes + Object Methods)
// Models employees with class methods, annual salary, bonus, and reduce() for totals.

class Employee {
    /**
     * @param {number} id         - Employee ID
     * @param {string} name       - Full name
     * @param {string} department - Department name
     * @param {number} salary     - Monthly gross salary in Rs.
     */
    constructor(id, name, department, salary) {
        this.id         = id;
        this.name       = name;
        this.department = department;
        this.salary     = salary;
    }

    /**
     * Returns the annual salary (monthly × 12).
     * @returns {number} Annual salary
     */
    getAnnualSalary() {
        return this.salary * 12;
    }

    /**
     * Applies a bonus percentage to the monthly salary.
     * @param {number} percent - Bonus percentage (e.g., 15 for 15%)
     */
    applyBonus(percent) {
        const bonusAmount = (this.salary * percent) / 100;
        this.salary += bonusAmount;
        console.log(
            `  ✅ ${this.name.padEnd(18)} | Bonus: +${percent}% (Rs. ${bonusAmount.toFixed(0)}) → New Monthly: Rs. ${this.salary.toFixed(2)}`
        );
    }

    /**
     * Returns a formatted summary row.
     * @returns {string} One-line employee summary
     */
    getSummary() {
        return (
            `  ${String(this.id).padEnd(5)} | ` +
            `${this.name.padEnd(20)} | ` +
            `${this.department.padEnd(15)} | ` +
            `Monthly: Rs. ${this.salary.toFixed(2).padStart(9)} | ` +
            `Annual: Rs. ${this.getAnnualSalary().toFixed(2).padStart(11)}`
        );
    }
}

// ── Create 5 employee objects ─────────────────────────────────────────────────

const employees = [
    new Employee(1001, "Govind Meena",    "Engineering",  72000),
    new Employee(1002, "Priya Sharma",    "Design",       58000),
    new Employee(1003, "Arjun Patel",     "Marketing",    49000),
    new Employee(1004, "Sunita Verma",    "Engineering",  85000),
    new Employee(1005, "Rahul Gupta",     "HR",           41000),
];

// ── Display all employees ─────────────────────────────────────────────────────

console.log("=== Q6: Employee Management System ===\n");
console.log("--- Employee Directory ---");
console.log(
    `  ${"ID".padEnd(5)} | ${"Name".padEnd(20)} | ` +
    `${"Department".padEnd(15)} | Monthly Salary   | Annual Salary`
);
console.log("  " + "─".repeat(80));
employees.forEach(emp => console.log(emp.getSummary()));

// ── Annual salary for each ────────────────────────────────────────────────────

console.log("\n--- Annual Salary Per Employee ---");
employees.forEach(emp =>
    console.log(`  ${emp.name}: Rs. ${emp.getAnnualSalary().toLocaleString('en-IN')} / year`)
);

// ── Apply performance bonuses ─────────────────────────────────────────────────

console.log("\n--- Applying Performance Bonuses ---");
employees[0].applyBonus(15);   // Engineering star
employees[3].applyBonus(20);   // Senior engineer
employees[1].applyBonus(10);   // Designer
employees[4].applyBonus(8);    // HR

// ── Total annual payout using reduce() ───────────────────────────────────────

const totalAnnualPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
const avgAnnualSalary   = totalAnnualPayout / employees.length;
const highestPaid       = employees.reduce((a, b) => a.salary > b.salary ? a : b);
const lowestPaid        = employees.reduce((a, b) => a.salary < b.salary ? a : b);

console.log("\n--- Company Payroll Summary (After Bonuses) ---");
console.log(`  Total Annual Payout   : Rs. ${totalAnnualPayout.toLocaleString('en-IN')}`);
console.log(`  Average Annual Salary : Rs. ${avgAnnualSalary.toFixed(2)}`);
console.log(`  Highest Paid Employee : ${highestPaid.name} (Rs. ${highestPaid.getAnnualSalary().toLocaleString('en-IN')} / yr)`);
console.log(`  Lowest Paid Employee  : ${lowestPaid.name} (Rs. ${lowestPaid.getAnnualSalary().toLocaleString('en-IN')} / yr)`);

// Department-wise breakdown
console.log("\n--- Department-Wise Annual Spend ---");
const deptGroups = employees.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + emp.getAnnualSalary();
    return acc;
}, {});
Object.entries(deptGroups).forEach(([dept, total]) =>
    console.log(`  ${dept.padEnd(15)}: Rs. ${total.toLocaleString('en-IN')}`)
);
