// ============================================================
// Q4: Constructor Function + Prototype Method Sharing
// ============================================================

console.log("=== Q4: Constructor Function & Prototype ===\n");

/**
 * Car - Constructor function to create Car objects
 * @param {string} brand - The brand/make of the car (e.g., "Toyota")
 * @param {string} model - The model name of the car (e.g., "Corolla")
 */
function Car(brand, model) {
  this.brand = brand; // Assign brand to the new object
  this.model = model; // Assign model to the new object
}

/**
 * getDetails - Prototype method shared by ALL Car instances
 * Adding to Car.prototype means every Car object can use this method
 * WITHOUT each object storing its own copy (memory efficient!)
 */
Car.prototype.getDetails = function () {
  console.log(`Car Brand: ${this.brand} | Model: ${this.model}`);
};

// ============================================================
// Create two Car objects using the constructor
// ============================================================
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

console.log("--- Calling getDetails() on two Car instances ---\n");

car1.getDetails(); // Toyota Corolla
car2.getDetails(); // Honda Civic

// ============================================================
// Demonstrate that getDetails is SHARED via prototype (not duplicated)
// ============================================================
console.log("\n--- Prototype sharing verification ---");
console.log(
  "car1.getDetails === car2.getDetails:",
  car1.getDetails === car2.getDetails
);
// true — both objects share the SAME method from Car.prototype

console.log("\n✅ EXPLANATION:");
console.log(
  "   When 'new Car(...)' is called, a new object is created and 'this' points to it."
);
console.log(
  "   getDetails() is defined on Car.prototype — NOT on each instance."
);
console.log(
  "   JavaScript looks up the prototype chain to find getDetails, so both cars share it."
);
console.log("   This is memory-efficient: one method definition serves all instances.");
