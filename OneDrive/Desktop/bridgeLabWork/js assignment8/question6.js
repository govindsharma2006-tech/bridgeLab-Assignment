// Q6: E-Commerce Inventory System (Array Methods)

const inventory = [
  { id: 1,  name: "Laptop",      category: "Electronics", price: 75000, stock: 3  },
  { id: 2,  name: "Phone",       category: "Electronics", price: 25000, stock: 12 },
  { id: 3,  name: "Shirt",       category: "Clothing",    price: 800,   stock: 50 },
  { id: 4,  name: "Jeans",       category: "Clothing",    price: 1500,  stock: 2  },
  { id: 5,  name: "Headphones",  category: "Electronics", price: 3500,  stock: 7  },
  { id: 6,  name: "Sneakers",    category: "Footwear",    price: 4000,  stock: 1  },
  { id: 7,  name: "Smartwatch",  category: "Electronics", price: 15000, stock: 4  },
  { id: 8,  name: "Jacket",      category: "Clothing",    price: 2500,  stock: 15 },
  { id: 9,  name: "Running Shoes",category:"Footwear",    price: 5500,  stock: 8  },
  { id: 10, name: "Tablet",      category: "Electronics", price: 35000, stock: 2  },
];

function getLowStockProducts(threshold = 5) {
  return inventory.filter(p => p.stock < threshold);
}

function sortProductsByPrice(order = "asc") {
  return [...inventory].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
}

function calculateTotalInventoryValue() {
  return inventory.reduce((total, p) => total + p.price * p.stock, 0);
}

function groupByCategory() {
  return inventory.reduce((groups, product) => {
    const cat = product.category;
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(product.name);
    return groups;
  }, {});
}

console.log("=== Q6: E-Commerce Inventory System ===\n");

console.log("--- Low Stock Products (stock < 5) ---");
getLowStockProducts().forEach(p => console.log(`  ${p.name}: ${p.stock} left`));

console.log("\n--- Products Sorted by Price (ascending) ---");
sortProductsByPrice("asc").forEach(p => console.log(`  ${p.name}: ₹${p.price}`));

console.log("\n--- Total Inventory Value ---");
console.log(`  ₹${calculateTotalInventoryValue().toLocaleString()}`);

console.log("\n--- Products Grouped by Category ---");
const grouped = groupByCategory();
Object.entries(grouped).forEach(([cat, products]) => {
  console.log(`  ${cat}: ${products.join(", ")}`);
});
