// Q3: Spread & Rest Operator Toolkit
// Uses the spread (...) operator to clone, merge, and expand iterables,
// and the rest (...) parameter to collect variable-length arguments.

// ─── SPREAD: Arrays ───────────────────────────────────────────────────────────

const fruits  = ["Apple", "Mango", "Banana"];
const veggies = ["Carrot", "Spinach", "Broccoli"];

// Merge arrays without mutating originals
const groceries = [...fruits, ...veggies];

// Clone an array (shallow copy)
const fruitsCopy = [...fruits];
fruitsCopy.push("Grapes");    // does NOT affect original

// Spread into Math functions (finds max without a loop)
const prices = [150, 480, 320, 990, 210, 670];
const maxPrice = Math.max(...prices);
const minPrice = Math.min(...prices);

// ─── SPREAD: Objects ─────────────────────────────────────────────────────────

const defaults = { theme: "dark", language: "en", notifications: true };
const userPrefs = { language: "hi", fontSize: "16px" };

// Merge objects — later keys win on conflict
const finalConfig = { ...defaults, ...userPrefs };

// Clone an object and override one field
const premiumConfig = { ...finalConfig, notifications: false, plan: "premium" };

// ─── REST: Parameters ─────────────────────────────────────────────────────────

/**
 * Accepts any number of scores and returns a summary object.
 * @param {string} subject - Subject label
 * @param {...number} scores - One or more score values
 */
function analyzeScores(subject, ...scores) {
    const total   = scores.reduce((s, v) => s + v, 0);
    const average = (total / scores.length).toFixed(2);
    const highest = Math.max(...scores);
    const lowest  = Math.min(...scores);
    return { subject, count: scores.length, total, average, highest, lowest };
}

// ─── REST: Destructuring ──────────────────────────────────────────────────────

const [captain, viceCaptain, ...squad] = [
    "Rohit", "Virat", "Gill", "Pant", "Jadeja", "Bumrah"
];

// ─── Output ───────────────────────────────────────────────────────────────────

console.log("=== Q3: Spread & Rest Operator Toolkit ===\n");

console.log("--- Spread: Array Merge ---");
console.log(`Fruits    : [${fruits}]`);
console.log(`Veggies   : [${veggies}]`);
console.log(`Groceries : [${groceries}]\n`);

console.log("--- Spread: Shallow Clone ---");
console.log(`Original fruits (unaffected) : [${fruits}]`);
console.log(`Cloned fruitsCopy (modified) : [${fruitsCopy}]\n`);

console.log("--- Spread into Math ---");
console.log(`Prices  : [${prices}]`);
console.log(`Max     : ${maxPrice}`);
console.log(`Min     : ${minPrice}\n`);

console.log("--- Spread: Object Merge ---");
console.log("defaults   :", JSON.stringify(defaults));
console.log("userPrefs  :", JSON.stringify(userPrefs));
console.log("finalConfig:", JSON.stringify(finalConfig));
console.log("premiumCfg :", JSON.stringify(premiumConfig));
console.log();

console.log("--- Rest: Variable Arguments ---");
const mathResult = analyzeScores("Mathematics", 88, 92, 76, 95, 83);
console.log(`Subject  : ${mathResult.subject}`);
console.log(`Count    : ${mathResult.count}`);
console.log(`Total    : ${mathResult.total}`);
console.log(`Average  : ${mathResult.average}`);
console.log(`Highest  : ${mathResult.highest}`);
console.log(`Lowest   : ${mathResult.lowest}\n`);

console.log("--- Rest: Destructuring ---");
console.log(`Captain     : ${captain}`);
console.log(`Vice Captain: ${viceCaptain}`);
console.log(`Squad       : [${squad}]`);

