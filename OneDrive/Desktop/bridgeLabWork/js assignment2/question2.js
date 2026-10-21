// Q2: String Manipulation Report
// Formats e-commerce product titles using required string methods:
// trim(), split(), map(), join(), replace(), and length.

const rawProductName = " wireless headphones PRO ";

console.log("=== Q2: String Manipulation Report ===");
console.log(`Original Product Name : "${rawProductName}"`);
console.log(`Original Length       : ${rawProductName.length}`);

// Step 1: Trim extra spaces
const trimmedName = rawProductName.trim();

// Step 2: Convert to lowercase
const lowerName = trimmedName.toLowerCase();

// Step 3: Capitalize the first letter of each word using split, map, and join
const capitalizedTitle = lowerName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Step 4: Replace "pro" (or "Pro") with "Pro Edition"
const cleanedTitle = capitalizedTitle.replace("Pro", "Pro Edition");

// Step 5: Display cleaned title and its length
console.log("\n--- Formatted Output ---");
console.log(`Cleaned Title  : "${cleanedTitle}"`);
console.log(`Cleaned Length : ${cleanedTitle.length}`);
