// Q9: Iterator, Generator & Symbol Protocol
// Implements custom iterables using Symbol.iterator, generator functions (function*),
// and demonstrates lazy sequence generation with yield.

// ─── 1. Custom Iterable: Range ────────────────────────────────────────────────

/**
 * Creates a range object that is iterable via for...of.
 * @param {number} start - Range start (inclusive)
 * @param {number} end   - Range end   (inclusive)
 * @param {number} step  - Step size   (default 1)
 */
function createRange(start, end, step = 1) {
    return {
        [Symbol.iterator]() {
            let current = start;
            return {
                next() {
                    if (current <= end) {
                        const value = current;
                        current += step;
                        return { value, done: false };
                    }
                    return { value: undefined, done: true };
                }
            };
        }
    };
}

// ─── 2. Generator: Fibonacci Sequence ────────────────────────────────────────

/**
 * Infinite generator that yields Fibonacci numbers on demand.
 * Uses yield — execution pauses until .next() is called.
 */
function* fibonacci() {
    let [a, b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// ─── 3. Generator: Paginated Data ────────────────────────────────────────────

const products = [
    "Laptop", "Mouse", "Keyboard", "Monitor", "Webcam",
    "Headphones", "Charger", "USB Hub", "Desk Lamp", "Speaker"
];

/**
 * Generator that yields one "page" of items at a time.
 * @param {Array} data     - Full dataset
 * @param {number} perPage - Items per page
 */
function* paginate(data, perPage = 3) {
    for (let i = 0; i < data.length; i += perPage) {
        yield data.slice(i, i + perPage);
    }
}

// ─── 4. Generator: ID Sequence ────────────────────────────────────────────────

/**
 * Generates unique sequential IDs with an optional prefix.
 */
function* idGenerator(prefix = "ID") {
    let n = 1;
    while (true) {
        yield `${prefix}-${String(n++).padStart(4, "0")}`;
    }
}

// ─── 5. Generator: Tree Traversal (Depth-First) ───────────────────────────────

const fileTree = {
    name: "root",
    children: [
        { name: "src",  children: [
            { name: "index.js",  children: [] },
            { name: "utils.js",  children: [] }
        ]},
        { name: "tests", children: [
            { name: "app.test.js", children: [] }
        ]},
        { name: "package.json", children: [] }
    ]
};

function* traverseTree(node) {
    yield node.name;
    for (const child of node.children) {
        yield* traverseTree(child);   // delegate to sub-generator
    }
}

// ─── Output ───────────────────────────────────────────────────────────────────

console.log("=== Q9: Iterator, Generator & Symbol Protocol ===\n");

// Custom Range
console.log("--- 1. Custom Iterable Range ---");
const evens = createRange(2, 20, 2);
const rangeValues = [...evens];
console.log(`Even numbers 2–20 : [${rangeValues}]`);

for (const val of createRange(1, 5)) {
    process.stdout ? process.stdout.write(`${val} `) : null;  // Node
}
// Fallback for browser: collect and log
const oneToFive = [...createRange(1, 5)];
console.log(`Range 1-5         : [${oneToFive}]`);
console.log(`Range 0-100 step10: [${[...createRange(0, 100, 10)]}]\n`);

// Fibonacci
console.log("--- 2. Generator: Fibonacci ---");
const fib = fibonacci();
const first10Fib = Array.from({ length: 10 }, () => fib.next().value);
console.log(`First 10 Fibonacci: [${first10Fib}]\n`);

// Paginated Data
console.log("--- 3. Generator: Pagination ---");
const pager = paginate(products, 4);
let pageNum = 1;
for (const page of pager) {
    console.log(`  Page ${pageNum++}: [${page.join(", ")}]`);
}
console.log();

// ID Generator
console.log("--- 4. Generator: ID Sequence ---");
const userIdGen  = idGenerator("USR");
const orderIdGen = idGenerator("ORD");
const userIds  = Array.from({ length: 5 }, () => userIdGen.next().value);
const orderIds = Array.from({ length: 3 }, () => orderIdGen.next().value);
console.log(`User  IDs: [${userIds}]`);
console.log(`Order IDs: [${orderIds}]\n`);

// Tree Traversal
console.log("--- 5. Generator: Tree Traversal ---");
const treeNodes = [...traverseTree(fileTree)];
console.log(`File tree nodes (DFS): [${treeNodes}]`);

