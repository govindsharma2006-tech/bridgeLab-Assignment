// Q7: Closure & Higher-Order Function Factory
// Demonstrates closures for private state, currying, function factories,
// memoization, and higher-order functions (HOFs) that accept/return functions.

// ─── 1. Closure: Private Counter Factory ─────────────────────────────────────

/**
 * Creates an independent counter with private state via closure.
 * @param {number} start - Initial value (default 0)
 * @param {number} step  - Increment/decrement step (default 1)
 */
function createCounter(start = 0, step = 1) {
    let count = start;   // private — not accessible from outside

    return {
        increment()  { count += step; return count; },
        decrement()  { count -= step; return count; },
        reset()      { count = start; return count; },
        getValue()   { return count; }
    };
}

// ─── 2. Closure: Bank Account ────────────────────────────────────────────────

function createBankAccount(ownerName, initialBalance = 0) {
    let balance = initialBalance;
    const transactions = [];

    return {
        deposit(amount) {
            balance += amount;
            transactions.push({ type: "deposit",    amount, balance });
            console.log(`  [+] Deposited Rs. ${amount} → Balance: Rs. ${balance}`);
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log(`  [!] Insufficient funds (Balance: Rs. ${balance})`);
                return;
            }
            balance -= amount;
            transactions.push({ type: "withdrawal", amount, balance });
            console.log(`  [-] Withdrew  Rs. ${amount} → Balance: Rs. ${balance}`);
        },
        getBalance()      { return balance; },
        getStatement()    { return transactions; }
    };
}

// ─── 3. Currying ─────────────────────────────────────────────────────────────

// Converts a binary function into a curried version
const curry = fn => a => b => fn(a, b);

const add       = (a, b) => a + b;
const multiply  = (a, b) => a * b;

const curriedAdd      = curry(add);
const curriedMultiply = curry(multiply);

const add10   = curriedAdd(10);          // partial application
const triple  = curriedMultiply(3);

// ─── 4. Function Factory ─────────────────────────────────────────────────────

/**
 * Returns a function that applies a fixed discount percentage.
 * @param {number} discountPercent - Discount rate (e.g. 20 for 20%)
 */
function createDiscountApplier(discountPercent) {
    const rate = discountPercent / 100;
    return price => {
        const savings = price * rate;
        return { original: price, discount: savings.toFixed(2), final: (price - savings).toFixed(2) };
    };
}

const applyStudentDiscount = createDiscountApplier(15);
const applyFestiveDiscount  = createDiscountApplier(30);

// ─── 5. Memoization ──────────────────────────────────────────────────────────

function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return { result: cache.get(key), cached: true };
        }
        const result = fn(...args);
        cache.set(key, result);
        return { result, cached: false };
    };
}

function heavyFactorial(n) {
    if (n <= 1) return 1;
    return n * heavyFactorial(n - 1);
}
const memoFactorial = memoize(n => heavyFactorial(n));

// ─── Output ───────────────────────────────────────────────────────────────────

console.log("=== Q7: Closure & Higher-Order Function Factory ===\n");

// Counter
console.log("--- 1. Counter Factory (Closure) ---");
const counterA = createCounter(0, 1);
const counterB = createCounter(100, 10);   // independent state
console.log(`counterA: ${counterA.increment()}, ${counterA.increment()}, ${counterA.increment()}`);
console.log(`counterB: ${counterB.decrement()}, ${counterB.decrement()}`);
counterA.reset();
console.log(`counterA reset → ${counterA.getValue()}\n`);

// Bank Account
console.log("--- 2. Bank Account (Closure) ---");
const account = createBankAccount("Govind Meena", 5000);
account.deposit(3000);
account.withdraw(1500);
account.withdraw(8000);   // should fail
console.log(`  Final Balance: Rs. ${account.getBalance()}`);
console.log(`  Transactions : ${account.getStatement().length} recorded\n`);

// Currying
console.log("--- 3. Currying ---");
console.log(`add10(25)  = ${add10(25)}`);
console.log(`add10(7)   = ${add10(7)}`);
console.log(`triple(8)  = ${triple(8)}`);
console.log(`triple(15) = ${triple(15)}\n`);

// Discount Factory
console.log("--- 4. Function Factory: Discount Applier ---");
const laptop = applyStudentDiscount(45000);
console.log(`Student Discount (15%) on Rs. 45000:`);
console.log(`  Discount: Rs. ${laptop.discount} | Final: Rs. ${laptop.final}`);

const course = applyFestiveDiscount(8000);
console.log(`Festive Discount (30%) on Rs. 8000:`);
console.log(`  Discount: Rs. ${course.discount} | Final: Rs. ${course.final}\n`);

// Memoization
console.log("--- 5. Memoization ---");
const r1 = memoFactorial(10);
console.log(`factorial(10) = ${r1.result} | cached: ${r1.cached}`);
const r2 = memoFactorial(10);   // same arg, should hit cache
console.log(`factorial(10) = ${r2.result} | cached: ${r2.cached}`);
const r3 = memoFactorial(7);
console.log(`factorial(7)  = ${r3.result} | cached: ${r3.cached}`);

