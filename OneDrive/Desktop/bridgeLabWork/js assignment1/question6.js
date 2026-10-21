function calculateDiscount(purchaseAmount) {
    let discountPercentage = 0;

    if (purchaseAmount >= 10000) {
        discountPercentage = 25;
    } else if (purchaseAmount >= 5000) {
        discountPercentage = 15;
    } else if (purchaseAmount >= 2000) {
        discountPercentage = 5;
    } else {
        discountPercentage = 0;
    }

    const discountAmount = purchaseAmount * (discountPercentage / 100);
    const unroundedFinalPrice = purchaseAmount - discountAmount;
    const finalPrice = Math.round(unroundedFinalPrice);

    console.log(`Original Total            : ₹${purchaseAmount}`);
    console.log(`Discount Percentage       : ${discountPercentage}%`);
    console.log(`Discount Amount Saved     : ₹${discountAmount.toFixed(2)}`);
    console.log(`Final Price after Discount: ₹${finalPrice}`);
    console.log("--------------------------------------------------");
}

console.log("Tier 1: Purchase >= 10000 (25% Discount)");
calculateDiscount(12500);

console.log("Tier 2: Purchase >= 5000 (15% Discount)");
calculateDiscount(7499);

console.log("Tier 3: Purchase >= 2000 (5% Discount)");
calculateDiscount(3200);

console.log("Tier 4: Purchase < 2000 (No Discount)");
calculateDiscount(1450);
