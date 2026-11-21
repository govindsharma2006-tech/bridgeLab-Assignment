// Q5: Ride-Sharing Application (Inheritance + Error Handling)

class User {
  constructor(name, rating) {
    this.name   = name;
    this.rating = rating;
  }

  getProfile() {
    console.log(`User: ${this.name} | Rating: ${this.rating} ⭐`);
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }

  getProfile() {
    super.getProfile();
    console.log(`Vehicle: ${this.vehicle}`);
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation   = toLocation;
    this.distance     = distance;
  }

  calculateFare() {
    if (this.distance === undefined || this.distance === null) {
      throw new Error("Distance not provided. Cannot calculate fare.");
    }
    if (this.distance < 0) {
      throw new Error("Distance cannot be negative.");
    }
    const BASE_FARE    = 30;
    const RATE_PER_KM  = 12;
    return BASE_FARE + this.distance * RATE_PER_KM;
  }
}

console.log("=== Q5: Ride-Sharing Application ===\n");

const driver = new Driver("Raj", 4.8, "Honda City (MH-12-AB-1234)");
driver.getProfile();

console.log("");

// Valid trip
try {
  const trip1 = new Trip("Pune Station", "Airport", 18);
  const fare  = trip1.calculateFare();
  console.log(`Trip: ${trip1.fromLocation} → ${trip1.toLocation}`);
  console.log(`Distance: ${trip1.distance} km | Fare: ₹${fare}`);
} catch (err) {
  console.log("Error:", err.message);
}

console.log("");

// Invalid trip — negative distance
try {
  const trip2 = new Trip("Home", "Office", -5);
  console.log(`Fare: ₹${trip2.calculateFare()}`);
} catch (err) {
  console.log("Invalid trip caught:", err.message);
}

console.log("");

// Invalid trip — no distance
try {
  const trip3 = new Trip("Mall", "Hotel");
  console.log(`Fare: ₹${trip3.calculateFare()}`);
} catch (err) {
  console.log("Invalid trip caught:", err.message);
}
