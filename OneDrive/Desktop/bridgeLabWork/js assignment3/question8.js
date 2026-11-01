// Q8: Map & Set Data Structure Manager
// Demonstrates ES6 Map (keyed collections) and Set (unique value store)
// with real-world use-cases: frequency counters, deduplication, and lookups.

// ─── 1. Map: Product Inventory ───────────────────────────────────────────────

const inventory = new Map([
    ["Laptop",   { price: 45000, stock: 12 }],
    ["Mouse",    { price: 850,   stock: 80 }],
    ["Keyboard", { price: 1200,  stock: 55 }],
    ["Monitor",  { price: 18000, stock: 20 }],
    ["Webcam",   { price: 3500,  stock: 34 }]
]);

// Update stock
inventory.get("Laptop").stock -= 3;

// Add new product
inventory.set("Headphones", { price: 2200, stock: 48 });

// Check and delete
const hasTablet = inventory.has("Tablet");
inventory.delete("Webcam");

// Total inventory value
let totalValue = 0;
inventory.forEach((details, product) => {
    totalValue += details.price * details.stock;
});

// ─── 2. Map: Word Frequency Counter ──────────────────────────────────────────

const paragraph = "JavaScript is great and JavaScript makes the web dynamic and great for building apps";
const freqMap = new Map();

paragraph.split(" ").forEach(word => {
    const lower = word.toLowerCase();
    freqMap.set(lower, (freqMap.get(lower) || 0) + 1);
});

// Sort by frequency (descending)
const sortedWords = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

// ─── 3. Set: Unique Tags Deduplication ───────────────────────────────────────

const rawTags = ["JavaScript", "ES6", "React", "JavaScript", "Node.js", "ES6", "React", "CSS", "HTML"];
const uniqueTags = new Set(rawTags);

// Set operations
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([3, 4, 5, 6, 7]);

// Union
const union = new Set([...setA, ...setB]);

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));

// Difference (A - B)
const difference = new Set([...setA].filter(x => !setB.has(x)));

// ─── 4. Set: Visited Pages Tracker ───────────────────────────────────────────

const visitedPages = new Set();
const userNavigation = ["/home", "/products", "/home", "/cart", "/products", "/checkout", "/home"];

userNavigation.forEach(page => visitedPages.add(page));

// ─── 5. Map vs Object: key flexibility ───────────────────────────────────────

const objectKey = { type: "sensor" };
const functionKey = () => "temperature";

const metaMap = new Map();
metaMap.set(objectKey,   "Object used as key");
metaMap.set(functionKey, "Function used as key");
metaMap.set(42,          "Number used as key");
metaMap.set(true,        "Boolean used as key");

// ─── Output ───────────────────────────────────────────────────────────────────

console.log("=== Q8: Map & Set Data Structure Manager ===\n");

console.log("--- 1. Map: Product Inventory ---");
console.log(`Tablet in inventory : ${hasTablet}`);
console.log(`Webcam deleted      : ${!inventory.has("Webcam")}`);
console.log(`Products tracked    : ${inventory.size}`);
inventory.forEach((d, name) =>
    console.log(`  ${name.padEnd(12)} | Price: Rs. ${d.price.toString().padStart(6)} | Stock: ${d.stock}`)
);
console.log(`Total Inventory Value: Rs. ${totalValue.toLocaleString()}\n`);

console.log("--- 2. Map: Word Frequency Counter ---");
console.log(`Paragraph: "${paragraph}"`);
console.log(`Top 5 Words:`);
sortedWords.slice(0, 5).forEach(([word, count]) =>
    console.log(`  "${word}" → ${count} time(s)`)
);
console.log();

console.log("--- 3. Set: Deduplication ---");
console.log(`Raw Tags (${rawTags.length})   : [${rawTags}]`);
console.log(`Unique Tags (${uniqueTags.size}) : [${[...uniqueTags]}]\n`);

console.log("--- 4. Set: Math Operations ---");
console.log(`Set A         : {${[...setA]}}`);
console.log(`Set B         : {${[...setB]}}`);
console.log(`Union         : {${[...union]}}`);
console.log(`Intersection  : {${[...intersection]}}`);
console.log(`Difference A-B: {${[...difference]}}\n`);

console.log("--- 5. Set: Navigation Tracker ---");
console.log(`Navigation log : [${userNavigation}]`);
console.log(`Unique Pages   : ${visitedPages.size}`);
visitedPages.forEach(p => console.log(`  → ${p}`));
console.log();

console.log("--- 6. Map: Non-String Keys ---");
metaMap.forEach((value, key) =>
    console.log(`  Key (${typeof key}): ${value}`)
);

