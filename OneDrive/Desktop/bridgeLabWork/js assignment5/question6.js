// ============================================================
// Q6: 3-Level Prototype Chain — Person → Faculty → Professor
// ============================================================

console.log("=== Q6: 3-Level Prototype Chain ===\n");

// ============================================================
// LEVEL 1: Person — base constructor
// ============================================================
function Person(name) {
  this.name = name; // Person's own property
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

// ============================================================
// LEVEL 2: Faculty — inherits from Person, adds department
// ============================================================
function Faculty(name, department) {
  Person.call(this, name);         // Inherit 'name' from Person
  this.department = department;    // Faculty's own property
}

// Set up prototype chain: Faculty → Person
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
  console.log(`Department: ${this.department}`);
};

// ============================================================
// LEVEL 3: Professor — inherits from Faculty, adds subject
// ============================================================
function Professor(name, department, subject) {
  Faculty.call(this, name, department); // Inherit from Faculty (which calls Person)
  this.subject = subject;               // Professor's own property
}

// Set up prototype chain: Professor → Faculty
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function () {
  console.log(
    `Prof. ${this.name} teaches ${this.subject} in the ${this.department} department.`
  );
};

// ============================================================
// Demonstration — Professor accesses all 3 levels
// ============================================================
const professor1 = new Professor("Dr. Smith", "Computer Science", "Data Structures");

console.log("--- Professor 1 ---");
professor1.greet();          // ✅ From Person.prototype     (Level 1)
professor1.showDepartment(); // ✅ From Faculty.prototype    (Level 2)
professor1.teach();          // ✅ From Professor.prototype  (Level 3)

console.log("");

const professor2 = new Professor("Dr. Patel", "Electronics", "Digital Circuits");
console.log("--- Professor 2 ---");
professor2.greet();
professor2.showDepartment();
professor2.teach();

// ============================================================
// Verify instanceof at each level
// ============================================================
console.log("\n--- Prototype Chain Verification ---");
console.log("professor1 instanceof Professor:", professor1 instanceof Professor); // true
console.log("professor1 instanceof Faculty:  ", professor1 instanceof Faculty);   // true
console.log("professor1 instanceof Person:   ", professor1 instanceof Person);    // true

console.log("\n✅ Prototype Chain: professor1 → Professor.prototype → Faculty.prototype → Person.prototype → Object.prototype");
