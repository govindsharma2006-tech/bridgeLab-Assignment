async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const products = await response.json();
    products.forEach((product) => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log("---");
    });
  } catch (error) {
    console.log("Failed to load products. Please try again.");
    console.log("Error:", error.message);
  }
}

console.log("=== Q6: Product Card Fetcher ===");
fetchProducts();
