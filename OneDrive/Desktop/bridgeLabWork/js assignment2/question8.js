// Q8: Dynamic Discount Evaluator
// Calculates category-based and total cart volume discounts using loops, conditionals, and reduce().

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

console.log("=== Q8: Dynamic Discount Evaluator ===");
console.log("Original Cart Contents:");
console.table(cart);

// Step 1: Process category discounts with loop and conditionals
const processedItems = [];

for (const product of cart) {
    let categoryDiscountRate = 0;

    if (product.category === "electronics") {
        categoryDiscountRate = 0.10; // 10% discount for electronics
    } else if (product.category === "fashion") {
        categoryDiscountRate = 0.05; // 5% discount for fashion
    }

    const discountAmount = product.price * categoryDiscountRate;
    const priceAfterDiscount = product.price - discountAmount;

    processedItems.push({
        Item: product.item,
        Category: product.category,
        OriginalPrice: product.price,
        DiscountRate: `${(categoryDiscountRate * 100)}%`,
        Savings: discountAmount,
        EffectivePrice: priceAfterDiscount
    });
}

console.log("\nCart Items After Category Discount:");
console.table(processedItems);

// Step 2: Sum discounted prices using reduce()
const subtotalAfterCategoryDiscounts = processedItems.reduce((acc, curr) => acc + curr.EffectivePrice, 0);
const rawCartTotal = cart.reduce((acc, curr) => acc + curr.price, 0);

// Step 3: Check overall cart value condition (> 50,000)
let extraCartDiscount = 0;
let finalPayableAmount = subtotalAfterCategoryDiscounts;

if (rawCartTotal > 50000) {
    extraCartDiscount = subtotalAfterCategoryDiscounts * 0.05; // Extra 5% overall discount
    finalPayableAmount = subtotalAfterCategoryDiscounts - extraCartDiscount;
}

console.log("\n================ ORDER BILLING SUMMARY ================");
console.log(`Original Cart Value           : Rs. ${rawCartTotal.toFixed(2)}`);
console.log(`Subtotal (Category Discounts) : Rs. ${subtotalAfterCategoryDiscounts.toFixed(2)}`);
if (extraCartDiscount > 0) {
    console.log(`Extra 5% Overall Discount     : -Rs. ${extraCartDiscount.toFixed(2)} (Cart > 50,000)`);
} else {
    console.log(`Extra 5% Overall Discount     : Rs. 0.00 (Cart does not exceed 50,000)`);
}
console.log(`Final Payable Total           : Rs. ${finalPayableAmount.toFixed(2)}`);
console.log("=======================================================");
