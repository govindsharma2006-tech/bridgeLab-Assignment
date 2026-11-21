// Q3: Product Discount System (Constructor + Prototype)

function Product(name, price) {
  this.name  = name;
  this.price = price;
}

// Prototype method — shared across all Product instances (abstraction)
Product.prototype.applyDiscount = function (percent) {
  if (percent < 0 || percent > 100) throw new Error("Discount must be between 0 and 100.");
  const discountAmount = (this.price * percent) / 100;
  const newPrice       = this.price - discountAmount;
  return newPrice;
};

Product.prototype.display = function (percent) {
  const newPrice = this.applyDiscount(percent);
  console.log(`${this.name}: ₹${this.price} → ${percent}% off → ₹${newPrice.toFixed(2)}`);
};

console.log("=== Q3: Product Discount System ===\n");

const laptop  = new Product("Laptop",     75000);
const phone   = new Product("Smartphone", 25000);
const headset = new Product("Headset",    3500);

laptop.display(10);
phone.display(15);
headset.display(25);

console.log("\nAbstraction benefit: applyDiscount() hides the discount");
console.log("calculation logic. Callers only provide a percentage.");
