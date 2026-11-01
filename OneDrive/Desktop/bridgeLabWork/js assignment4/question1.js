// Q1: E-Commerce Product Manager (Classes + Objects)
// Demonstrates ES6 class with methods, object arrays, and array filtering.

class Product {
    /**
     * @param {number} id       - Unique product ID
     * @param {string} name     - Product name
     * @param {number} price    - Original price in Rs.
     * @param {string} category - Product category
     */
    constructor(id, name, price, category) {
        this.id       = id;
        this.name     = name;
        this.price    = price;
        this.category = category;
    }

    /**
     * Applies a discount percentage and updates the price.
     * @param {number} percent - Discount percentage (e.g., 10 for 10%)
     */
    applyDiscount(percent) {
        const discountAmount = (this.price * percent) / 100;
        const newPrice       = this.price - discountAmount;
        console.log(`  [Discount Applied] ${this.name}: Rs. ${this.price} -${percent}% → Rs. ${newPrice.toFixed(2)}`);
        this.price = parseFloat(newPrice.toFixed(2));
    }

    /**
     * Returns a formatted string summary of the product.
     * @returns {string} Formatted product details
     */
    displayDetails() {
        return (
            `┌─────────────────────────────────────────\n` +
            `│  ID       : ${this.id}\n` +
            `│  Name     : ${this.name}\n` +
            `│  Category : ${this.category}\n` +
            `│  Price    : Rs. ${this.price.toFixed(2)}\n` +
            `└─────────────────────────────────────────`
        );
    }
}

// ── Create product catalogue ──────────────────────────────────────────────────

const products = [
    new Product(1, "Wireless Headphones",  2499,  "Electronics"),
    new Product(2, "Yoga Mat",             850,   "Fitness"),
    new Product(3, "Running Shoes",        3200,  "Footwear"),
    new Product(4, "Water Bottle",         450,   "Fitness"),
    new Product(5, "Gaming Mouse",         1799,  "Electronics"),
    new Product(6, "Notebook (Pack of 5)", 299,   "Stationery"),
    new Product(7, "Smart Watch",          5999,  "Electronics"),
    new Product(8, "Desk Lamp",            1299,  "Home Decor"),
];

// ── Display all products ──────────────────────────────────────────────────────

console.log("=== Q1: E-Commerce Product Manager ===\n");
console.log(`Total Products in Catalogue: ${products.length}\n`);

console.log("--- All Products ---");
products.forEach(p => console.log(p.displayDetails()));

// ── Apply discounts ────────────────────────────────────────────────────────────

console.log("\n--- Applying Discounts ---");
products[0].applyDiscount(10);   // Wireless Headphones → 10% off
products[2].applyDiscount(15);   // Running Shoes       → 15% off
products[4].applyDiscount(5);    // Gaming Mouse        → 5% off
products[6].applyDiscount(20);   // Smart Watch         → 20% off

// ── Filter products with price > 1000 ─────────────────────────────────────────

console.log("\n--- Products with Price > Rs. 1000 (After Discounts) ---");
const premiumProducts = products.filter(p => p.price > 1000);
console.log(`Found ${premiumProducts.length} premium product(s):\n`);
premiumProducts.forEach(p => console.log(p.displayDetails()));

// ── Summary table ─────────────────────────────────────────────────────────────

console.log("\n--- Price Summary ---");
const totalValue = products.reduce((sum, p) => sum + p.price, 0);
console.log(`Catalogue Total Value : Rs. ${totalValue.toFixed(2)}`);
console.log(`Average Product Price : Rs. ${(totalValue / products.length).toFixed(2)}`);
console.log(`Most Expensive        : ${products.reduce((a, b) => a.price > b.price ? a : b).name}`);
console.log(`Least Expensive       : ${products.reduce((a, b) => a.price < b.price ? a : b).name}`);
