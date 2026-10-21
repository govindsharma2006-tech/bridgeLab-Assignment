const categoryNames = ["Food", "Travel", "Rent", "Bills", "Leisure"];
const expenses = [425.50, 150.75, 1200.00, 275.20, 180.40];

console.log("=== Monthly Expense Breakdown ===");
for (let i = 0; i < expenses.length; i++) {
    console.log(`${categoryNames[i]}: $${expenses[i].toFixed(2)}`);
}

let totalExpenses = 0;
for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i];
}

const averageExpense = totalExpenses / expenses.length;

const taxRate = 0.10;
let finalAmount = totalExpenses;
const taxAmount = finalAmount * taxRate;
finalAmount += taxAmount;

console.log("\n=== Expense Summary ===");
console.log(`Subtotal Expenses : $${totalExpenses.toFixed(2)}`);
console.log(`Average Expense   : $${averageExpense.toFixed(2)}`);
console.log(`Tax Applied (10%) : $${taxAmount.toFixed(2)}`);
console.log(`Final Amount Due  : $${finalAmount.toFixed(2)}`);
