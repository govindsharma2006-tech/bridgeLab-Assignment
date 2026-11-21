// Q2: Online Food Ordering (map + Error Handling)

const menu = [
  { name: "Burger",  price: 120 },
  { name: "Pizza",   price: 250 },
  { name: "Fries",   price: 60  },
  { name: "Pasta",   price: 180 },
  { name: "Shake",   price: 90  },
];

function calculateBill(orderItems) {
  const prices = orderItems.map(itemName => {
    const found = menu.find(m => m.name.toLowerCase() === itemName.toLowerCase());
    if (!found) throw new Error(`Invalid item ordered: "${itemName}" is not on the menu.`);
    return found.price;
  });

  const total = prices.reduce((sum, price) => sum + price, 0);
  return total;
}

console.log("=== Q2: Online Food Ordering ===\n");

// Valid order
try {
  const bill = calculateBill(["Burger", "Pizza", "Shake"]);
  console.log("Valid order:");
  console.log("Items: Burger, Pizza, Shake");
  console.log(`Total Bill: ₹${bill}`);
} catch (err) {
  console.log("Error:", err.message);
}

console.log("");

// Invalid order — item not on menu
try {
  const bill = calculateBill(["Burger", "Sushi", "Fries"]);
  console.log(`Total Bill: ₹${bill}`);
} catch (err) {
  console.log("Invalid order caught:");
  console.log("Error:", err.message);
}
