// Q4: Default Parameters & Short-Circuit Evaluator
// Demonstrates ES6 default function parameters, nullish coalescing (??),
// optional chaining (?.), and logical assignment operators.

// ─── Default Parameters ───────────────────────────────────────────────────────

/**
 * Generates a formal greeting with optional role and title defaults.
 * @param {string} name        - Person's name
 * @param {string} role        - Their job role (defaults to "Guest")
 * @param {string} salutation  - Title prefix (defaults to "Mr./Ms.")
 */
function greetEmployee(name, role = "Guest", salutation = "Mr./Ms.") {
    return `Hello, ${salutation} ${name}! Welcome aboard as our ${role}.`;
}

/**
 * Computes compound interest with sensible defaults.
 * @param {number} principal - Loan/deposit amount
 * @param {number} rate      - Annual interest rate (default 7%)
 * @param {number} years     - Duration in years (default 5)
 * @param {number} n         - Compounds per year (default 12 = monthly)
 */
function compoundInterest(principal, rate = 0.07, years = 5, n = 12) {
    const amount = principal * Math.pow(1 + rate / n, n * years);
    return {
        principal,
        rate: `${(rate * 100).toFixed(1)}%`,
        years,
        compoundsPerYear: n,
        finalAmount: amount.toFixed(2),
        interest: (amount - principal).toFixed(2)
    };
}

// ─── Nullish Coalescing (??) ──────────────────────────────────────────────────

const userConfig = { theme: null, fontSize: 0, language: "hi" };

const theme    = userConfig.theme    ?? "dark";       // null  → default
const fontSize = userConfig.fontSize ?? 16;           // 0 is NOT nullish → keeps 0
const language = userConfig.language ?? "en";         // "hi" → keeps "hi"
const timeout  = userConfig.timeout  ?? 3000;         // undefined → default

// ─── Optional Chaining (?.) ──────────────────────────────────────────────────

const company = {
    name: "BridgeLabz",
    ceo: { name: "Narendra Dhaked", email: "ceo@bridgelabz.com" },
    cto: null    // intentionally missing
};

const ceoName  = company?.ceo?.name;         // exists → "Narendra Dhaked"
const ctoName  = company?.cto?.name;         // cto is null → undefined
const cfoEmail = company?.cfo?.email;        // cfo doesn't exist → undefined

// Optional chaining on method calls
const upperName = company?.ceo?.name?.toUpperCase?.();

// ─── Logical Assignment ───────────────────────────────────────────────────────

let configA = { debug: false, maxRetries: null, timeout: undefined };
configA.maxRetries ??= 5;       // null → assign 5
configA.timeout    ??= 3000;    // undefined → assign 3000
configA.debug      ||= true;    // false → assign true

// ─── Output ───────────────────────────────────────────────────────────────────

console.log("=== Q4: Default Parameters & Short-Circuit Evaluator ===\n");

console.log("--- Default Parameters: Greetings ---");
console.log(greetEmployee("Priya"));                                // all defaults
console.log(greetEmployee("Raj", "Software Engineer"));             // custom role
console.log(greetEmployee("Sunita", "Team Lead", "Dr."));           // all custom
console.log();

console.log("--- Default Parameters: Compound Interest ---");
const ci = compoundInterest(100000);   // all defaults
console.log(`Principal       : Rs. ${ci.principal}`);
console.log(`Rate            : ${ci.rate}  (default)`);
console.log(`Years           : ${ci.years}  (default)`);
console.log(`Compounds/Year  : ${ci.compoundsPerYear} (monthly, default)`);
console.log(`Final Amount    : Rs. ${ci.finalAmount}`);
console.log(`Interest Earned : Rs. ${ci.interest}\n`);

console.log("--- Nullish Coalescing (??) ---");
console.log(`theme    = ${theme}   ← null  was replaced by default`);
console.log(`fontSize = ${fontSize}      ← 0 is NOT nullish, kept as-is`);
console.log(`language = ${language}      ← existing value preserved`);
console.log(`timeout  = ${timeout}  ← undefined replaced by default\n`);

console.log("--- Optional Chaining (?.) ---");
console.log(`CEO Name  : ${ceoName}`);
console.log(`CTO Name  : ${ctoName}`);      // undefined (cto is null)
console.log(`CFO Email : ${cfoEmail}`);     // undefined (cfo doesn't exist)
console.log(`CEO Upper : ${upperName}\n`);

console.log("--- Logical Assignment Operators ---");
console.log("Before:", JSON.stringify({ debug: false, maxRetries: null, timeout: undefined }));
console.log("After :", JSON.stringify(configA));

