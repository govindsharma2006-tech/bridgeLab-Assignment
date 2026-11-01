// Q5: ES6 Class & Inheritance System
// Models a university enrollment system using ES6 classes,
// constructors, methods, getters/setters, static methods, and inheritance.

// ─── Base Class ───────────────────────────────────────────────────────────────

class Person {
    #id;           // private field (ES2022)

    /**
     * @param {string} name - Full name
     * @param {number} age  - Age in years
     */
    constructor(name, age) {
        this.#id   = `P-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        this.name  = name;
        this.age   = age;
    }

    // Getter: computed property
    get profileSummary() {
        return `[${this.#id}] ${this.name}, Age: ${this.age}`;
    }

    // Method
    introduce() {
        return `Hi, I am ${this.name}.`;
    }

    // Static utility
    static isAdult(age) {
        return age >= 18;
    }
}

// ─── Child Class: Student ────────────────────────────────────────────────────

class Student extends Person {
    #grades = [];

    /**
     * @param {string} name    - Full name
     * @param {number} age     - Age
     * @param {string} course  - Enrolled course
     * @param {number} year    - Year of study (1–4)
     */
    constructor(name, age, course, year = 1) {
        super(name, age);     // call parent constructor
        this.course = course;
        this.year   = year;
    }

    // Add a grade (setter-style method)
    addGrade(subject, marks) {
        this.#grades.push({ subject, marks });
    }

    // Getter: computed GPA-like percentage
    get averageGrade() {
        if (this.#grades.length === 0) return "No grades yet";
        const total = this.#grades.reduce((s, g) => s + g.marks, 0);
        return (total / this.#grades.length).toFixed(2);
    }

    // Override parent method
    introduce() {
        return `${super.introduce()} I study ${this.course} (Year ${this.year}).`;
    }

    // Static: generate enrollment ID
    static generateEnrollmentId(course) {
        const code = course.slice(0, 3).toUpperCase();
        return `${code}-${Math.floor(1000 + Math.random() * 9000)}`;
    }

    displayReport() {
        console.log(`  Name     : ${this.name}`);
        console.log(`  Course   : ${this.course} (Year ${this.year})`);
        console.log(`  Age      : ${this.age}`);
        console.log(`  Grades   : ${this.#grades.map(g => `${g.subject}:${g.marks}`).join(", ")}`);
        console.log(`  Average  : ${this.averageGrade}%`);
        console.log(`  EnrollID : ${Student.generateEnrollmentId(this.course)}`);
    }
}

// ─── Child Class: Professor ───────────────────────────────────────────────────

class Professor extends Person {
    /**
     * @param {string} name        - Full name
     * @param {number} age         - Age
     * @param {string} department  - Department name
     * @param {number} experience  - Years of experience
     */
    constructor(name, age, department, experience) {
        super(name, age);
        this.department = department;
        this.experience = experience;
    }

    introduce() {
        return `${super.introduce()} I teach in the ${this.department} dept. with ${this.experience} years of experience.`;
    }

    get rank() {
        if (this.experience >= 15) return "Senior Professor";
        if (this.experience >= 8)  return "Associate Professor";
        return "Assistant Professor";
    }
}

// ─── Demo ─────────────────────────────────────────────────────────────────────

console.log("=== Q5: ES6 Class & Inheritance System ===\n");

// Person
const person = new Person("Amir Khan", 30);
console.log("--- Base Class: Person ---");
console.log(person.introduce());
console.log(`Profile  : ${person.profileSummary}`);
console.log(`isAdult(30): ${Person.isAdult(30)}`);
console.log(`isAdult(16): ${Person.isAdult(16)}\n`);

// Students
const student1 = new Student("Govind Meena", 20, "Computer Science", 2);
student1.addGrade("Data Structures", 88);
student1.addGrade("Operating Systems", 92);
student1.addGrade("Database Management", 79);

const student2 = new Student("Priya Verma", 19, "Electronics", 1);
student2.addGrade("Circuit Theory", 75);
student2.addGrade("Digital Logic", 83);

console.log("--- Derived Class: Student ---");
console.log(student1.introduce());
student1.displayReport();
console.log();
console.log(student2.introduce());
student2.displayReport();
console.log();

// Professor
const prof = new Professor("Dr. Anil Sharma", 45, "Computer Science", 17);
console.log("--- Derived Class: Professor ---");
console.log(prof.introduce());
console.log(`Rank     : ${prof.rank}`);
console.log(`Profile  : ${prof.profileSummary}`);

