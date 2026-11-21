// Q4: Employee Inheritance + Runtime Polymorphism

class Employee {
  constructor(name, department) {
    this.name       = name;
    this.department = department;
  }

  work() {
    console.log(`${this.name} (${this.department}) is doing regular employee work.`);
  }

  describe() {
    console.log(`Name: ${this.name} | Department: ${this.department} | Role: ${this.constructor.name}`);
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  // Override work() — runtime polymorphism
  work() {
    console.log(`${this.name} (${this.department}) is managing a team of ${this.teamSize} people.`);
  }
}

console.log("=== Q4: Employee Inheritance & Polymorphism ===\n");

const emp1    = new Employee("Alice", "Development");
const emp2    = new Employee("Bob",   "Design");
const manager = new Manager("Charlie", "Engineering", 8);

const staff = [emp1, emp2, manager];

console.log("--- describe() ---");
staff.forEach(s => s.describe());

console.log("\n--- work() — Runtime Polymorphism ---");
staff.forEach(s => s.work());
// Manager.work() overrides Employee.work() at runtime
