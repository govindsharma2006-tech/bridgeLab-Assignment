function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? reject("Order submission failed") : resolve("Order submitted successfully");
    }, 500);
  });
}

async function processOrder() {
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success — ${result}`);
      return;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed — ${error}`);
    }
  }

  throw new Error("Order could not be processed");
}

console.log("=== Q8: Order Processing — Async Retry Mechanism ===");

processOrder().catch((error) => console.log("Final error:", error.message));
