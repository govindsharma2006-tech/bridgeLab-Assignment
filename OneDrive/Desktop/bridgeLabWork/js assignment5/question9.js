// ============================================================
// Q9: ES6 Classes — Person → Student (with extends & super)
//     Comparison with Prototype-based version from Q5
// ============================================================

console.log("=== Q9: ES6 Classes — Person → Student ===\n");

// ============================================================
// ES6 CLASS VERSION
// ============================================================

/**
 * Person - ES6 Base Class
 */
class Person {
  constructor(name) {
    this.name = name; // Set name property
  }

  // Instance method on Person
  introduce() {
    console.log(`Hi, I am ${this.name}.`);
  }
}

/**
 * Student - ES6 Derived Class that extends Person
 * 'extends' sets up the prototype chain automatically.
 */
class Student extends Person {
  constructor(name, branch) {
    super(name); // Calls Person's constructor to initialise 'name'
                 // 'super()' MUST be called before using 'this' in a derived class
    this.branch = branch; // Student-specific property
  }

  // Student's own method
  showDetails() {
    console.log(`Name: ${this.name} | Branch: ${this.branch}`);
  }
}

// ============================================================
// Demonstration — ES6 Class version
// ============================================================
console.log("--- ES6 Class Version ---");

const student1 = new Student("Alice", "Computer Science");
const student2 = new Student("Bob", "Mechanical Engineering");

console.log("Student 1:");
student1.introduce();    // Inherited from Person class
student1.showDetails(); // Own Student method

console.log("\nStudent 2:");
student2.introduce();
student2.showDetails();

// ============================================================
// Verify instanceof works with classes too
// ============================================================
console.log("\n--- instanceof Verification ---");
console.log("student1 instanceof Student:", student1 instanceof Student); // true
console.log("student1 instanceof Person: ", student1 instanceof Person);  // true

// ============================================================
// PROTOTYPE VERSION (from Q5) — for comparison
// ============================================================
console.log("\n--- Prototype Version (from Q5) for Comparison ---");

function PersonProto(name) {
  this.name = name;
}
PersonProto.prototype.introduce = function () {
  console.log(`Hi, I am ${this.name}.`);
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.showDetails = function () {
  console.log(`Name: ${this.name} | Branch: ${this.branch}`);
};

const protoStudent = new StudentProto("Alice", "Computer Science");
protoStudent.introduce();
protoStudent.showDetails();

// ============================================================
// Are they the same?
// ============================================================
console.log("\n--- Output Comparison ---");
console.log("ES6 class and prototype versions produce IDENTICAL output.");

console.log("\n✅ KEY DIFFERENCES (Syntax only — behaviour is the same):");
console.log("   ES6 class:  'class Student extends Person' + 'super(name)'");
console.log("   Prototype:  'StudentProto.prototype = Object.create(PersonProto.prototype)' + 'PersonProto.call(this, name)'");
console.log("\n   Under the hood, ES6 classes are just syntactic sugar over prototypes.");
console.log("   Both create the same prototype chain: student → Student.prototype → Person.prototype → Object.prototype");
