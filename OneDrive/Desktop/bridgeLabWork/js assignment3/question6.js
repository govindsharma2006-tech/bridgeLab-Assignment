// Q6: Promise Chain & Async/Await Handler
// Simulates asynchronous operations (API calls, DB queries) using Promises,
// .then()/.catch() chains, Promise.all(), and async/await syntax.

// ─── Helper: Fake Async Delay ────────────────────────────────────────────────

/**
 * Returns a Promise that resolves after `ms` milliseconds.
 * Rejects if shouldFail is true (simulates network error).
 */
function fakeDelay(ms, value, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error(`Network error fetching: ${value}`));
            } else {
                resolve(value);
            }
        }, ms);
    });
}

// ─── Simulated API Functions ──────────────────────────────────────────────────

function fetchUserById(id) {
    const users = {
        1: { id: 1, name: "Govind Meena",  email: "govind@example.com" },
        2: { id: 2, name: "Priya Sharma",  email: "priya@example.com"  },
    };
    const user = users[id];
    return user
        ? fakeDelay(100, user)
        : Promise.reject(new Error(`User with id ${id} not found`));
}

function fetchOrdersByUser(userId) {
    const orders = {
        1: [{ orderId: "ORD-101", item: "Laptop", amount: 45000 },
            { orderId: "ORD-102", item: "Mouse",  amount: 850 }],
        2: [{ orderId: "ORD-201", item: "Keyboard", amount: 1200 }],
    };
    return fakeDelay(150, orders[userId] || []);
}

function fetchProductPrice(productName) {
    const catalogue = { Laptop: 45000, Mouse: 850, Keyboard: 1200, Monitor: 18000 };
    const price = catalogue[productName];
    return price !== undefined
        ? fakeDelay(80, { product: productName, price })
        : fakeDelay(80, null, true);   // simulate failure
}

// ─── 1. Promise Chain (.then / .catch) ───────────────────────────────────────

console.log("=== Q6: Promise Chain & Async/Await Handler ===\n");

console.log("--- 1. Promise Chain: User → Orders ---");
fetchUserById(1)
    .then(user => {
        console.log(`Fetched user  : ${user.name} (${user.email})`);
        return fetchOrdersByUser(user.id);
    })
    .then(orders => {
        console.log(`Orders found  : ${orders.length}`);
        orders.forEach(o =>
            console.log(`  ${o.orderId} | ${o.item} | Rs. ${o.amount}`)
        );
    })
    .catch(err => console.log(`[Error] ${err.message}`));

// ─── 2. Promise.all – parallel requests ──────────────────────────────────────

console.log("\n--- 2. Promise.all: Parallel Price Lookup ---");
Promise.all([
    fetchProductPrice("Laptop"),
    fetchProductPrice("Mouse"),
    fetchProductPrice("Keyboard")
])
.then(results => {
    results.forEach(r => console.log(`  ${r.product.padEnd(10)} → Rs. ${r.price}`));
    const total = results.reduce((s, r) => s + r.price, 0);
    console.log(`  Bundle Total → Rs. ${total}`);
})
.catch(err => console.log(`[Promise.all Error] ${err.message}`));

// ─── 3. Async / Await ────────────────────────────────────────────────────────

async function processUserDashboard(userId) {
    console.log(`\n--- 3. Async/Await: Dashboard for User ID ${userId} ---`);
    try {
        const user   = await fetchUserById(userId);
        console.log(`User     : ${user.name}`);

        const orders = await fetchOrdersByUser(userId);
        const total  = orders.reduce((s, o) => s + o.amount, 0);
        console.log(`Orders   : ${orders.length}`);
        console.log(`Spent    : Rs. ${total}`);

        const status = total > 5000 ? "Gold Member" : "Regular Member";
        console.log(`Status   : ${status}`);
    } catch (err) {
        console.log(`[Async Error] ${err.message}`);
    }
}

async function handleFailedFetch() {
    console.log("\n--- 4. Async/Await: Graceful Error Handling ---");
    try {
        const result = await fetchProductPrice("Tablet");   // not in catalogue
        console.log(result);
    } catch (err) {
        console.log(`[Caught Error] ${err.message}`);
        console.log("Fallback: Showing default price → Rs. 20000");
    }
}

// ─── 4. Promise.allSettled – partial failures ────────────────────────────────

async function runAllSettled() {
    console.log("\n--- 5. Promise.allSettled: Mixed Success & Failure ---");
    const results = await Promise.allSettled([
        fetchProductPrice("Laptop"),
        fetchProductPrice("Tablet"),     // will fail
        fetchProductPrice("Monitor")
    ]);
    results.forEach((result, i) => {
        if (result.status === "fulfilled") {
            console.log(`  [${i}] ✓ ${result.value.product} → Rs. ${result.value.price}`);
        } else {
            console.log(`  [${i}] ✗ ${result.reason.message}`);
        }
    });
}

// Run async functions sequentially
(async () => {
    await processUserDashboard(2);
    await handleFailedFetch();
    await runAllSettled();
})();

