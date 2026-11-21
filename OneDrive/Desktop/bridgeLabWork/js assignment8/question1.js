// Q1: Student Result Processing (reduce + Classes)

class Student {
  constructor(name, marks) {
    this.name  = name;
    this.marks = marks;
  }

  calculateAverage() {
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 80) return "A";
    if (avg >= 65) return "B";
    if (avg >= 50) return "C";
    return "F";
  }

  printResult() {
    const avg   = this.calculateAverage().toFixed(2);
    const grade = this.getGrade();
    console.log(`Student: ${this.name} | Marks: [${this.marks}] | Average: ${avg} | Grade: ${grade}`);
  }
}

console.log("=== Q1: Student Result Processing ===\n");

const students = [
  new Student("Alice",   [90, 85, 92, 88, 95]),
  new Student("Bob",     [60, 55, 70, 62, 58]),
  new Student("Charlie", [40, 45, 38, 50, 42]),
];

students.forEach(s => s.printResult());
