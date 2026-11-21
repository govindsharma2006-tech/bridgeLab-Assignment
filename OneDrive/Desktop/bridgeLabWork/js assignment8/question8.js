// Q8: Movie Ticket Booking System (Inheritance + Prototype Chain)

class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo    = seatNo;
    this.price     = price;
  }
}

// Prototype method added after class definition — demonstrates prototype chain
MovieTicket.prototype.printTicket = function () {
  console.log("-----------------------------");
  console.log(`🎬 Movie  : ${this.movieName}`);
  console.log(`💺 Seat   : ${this.seatNo}`);
  console.log(`💰 Price  : ₹${this.price}`);
  if (this.convenienceFee !== undefined) {
    console.log(`🛒 Conv.  : ₹${this.convenienceFee}`);
    console.log(`💳 Total  : ₹${this.getTotalAmount()}`);
  }
  console.log("-----------------------------");
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

console.log("=== Q8: Movie Ticket Booking System ===\n");

// Regular movie ticket
const ticket1 = new MovieTicket("Interstellar", "D-12", 250);
console.log("--- Regular Ticket ---");
ticket1.printTicket(); // Uses MovieTicket.prototype.printTicket

// Online ticket inherits MovieTicket AND accesses printTicket() via prototype chain
const ticket2 = new OnlineTicket("Avengers: Endgame", "B-5", 350, 30);
const ticket3 = new OnlineTicket("The Dark Knight",   "F-8", 300, 30);

console.log("\n--- Online Ticket 1 (via prototype chain) ---");
ticket2.printTicket(); // printTicket is on MovieTicket.prototype, accessed via chain

console.log("\n--- Online Ticket 2 ---");
ticket3.printTicket();

console.log("\n--- Prototype Chain Verification ---");
console.log("ticket2 instanceof OnlineTicket:", ticket2 instanceof OnlineTicket);
console.log("ticket2 instanceof MovieTicket: ", ticket2 instanceof MovieTicket);
console.log("'printTicket' in MovieTicket.prototype:", "printTicket" in MovieTicket.prototype);
