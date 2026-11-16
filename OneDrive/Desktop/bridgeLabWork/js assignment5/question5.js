// ============================================================
// Q5: Prototype Inheritance — Person → Student
// ============================================================

console.log("=== Q5: Prototype Inheritance — Person → Student ===\n");

/**
 * Person - Base constructor function
 * @param {string} name - Person's full name
 */
function Person(name) {
  this.name = name;
}

// Add a method to Person's prototype
Person.prototype.introduce = function () {
  console.log(`Hi, I am ${this.name}.`);
};

// ============================================================
// Student constructor inherits from Person
// ============================================================

/**
 * Student - Derived constructor function that inherits Person
 * @param {string} name   - Student's full name (inherited from Person)
 * @param {string} branch - Student's academic branch (e.g., "Computer Science")
 */
function Student(name, branch) {
  // Call Person constructor to initialise the inherited 'name' property
  Person.call(this, name);
  this.branch = branch; // Add Student-specific property
}

// Set up the prototype chain: Student.prototype → Person.prototype
Student.prototype = Object.create(Person.prototype);

// Fix the constructor reference (it now points to Person after Object.create)
Student.prototype.constructor = Student;

// Add a Student-specific method on the prototype
Student.prototype.showDetails = function () {
  console.log(`Name: ${this.name} | Branch: ${this.branch}`);
};

// ============================================================
// Demonstration
// ============================================================
const student1 = new Student("Alice", "Computer Science");
const student2 = new Student("Bob", "Mechanical Engineering");

console.log("--- Student 1 ---");
student1.introduce();    // Inherited from Person.prototype
student1.showDetails(); // Own Student.prototype method

console.log("\n--- Student 2 ---");
student2.introduce();
student2.showDetails();

// ============================================================
// Verify prototype chain
// ============================================================
console.log("\n--- Prototype Chain Verification ---");
console.log("student1 instanceof Student:", student1 instanceof Student); // true
console.log("student1 instanceof Person: ", student1 instanceof Person);  // true

console.log("\n✅ EXPLANATION:");
console.log("   Student inherits from Person via Object.create(Person.prototype).");
console.log("   Person.call(this, name) copies Person's properties into the Student object.");
console.log("   The prototype chain: student1 → Student.prototype → Person.prototype → Object.prototype");
