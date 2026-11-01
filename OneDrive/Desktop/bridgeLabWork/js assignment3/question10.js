// Q10: ES6 Module Pattern & Comprehensive Mini-App
// Integrates all ES6+ features from Q1–Q9 into a cohesive Student Grade
// Management System using: classes, destructuring, spread/rest, Map, Set,
// arrow functions, default params, closures, and template literals.

// ─── Module: Utility Functions (simulated) ────────────────────────────────────

const Utils = (() => {
    // Private cache (closure)
    const _cache = new Map();

    const capitalize = str =>
        str.trim().split(" ").map(w => w[0].toUpperCase() + w.slice(1).toLowerCase()).join(" ");

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const memoize = fn => (...args) => {
        const key = JSON.stringify(args);
        if (_cache.has(key)) return _cache.get(key);
        const result = fn(...args);
        _cache.set(key, result);
        return result;
    };

    const gradeFromMarks = memoize(marks => {
        if (marks >= 90) return { grade: "A+", label: "Outstanding"   };
        if (marks >= 80) return { grade: "A",  label: "Excellent"     };
        if (marks >= 70) return { grade: "B",  label: "Good"          };
        if (marks >= 60) return { grade: "C",  label: "Average"       };
        if (marks >= 50) return { grade: "D",  label: "Pass"          };
        return               { grade: "F",  label: "Fail"          };
    });

    return { capitalize, clamp, gradeFromMarks };
})();

// ─── Class: Subject ────────────────────────────────────────────────────────────

class Subject {
    constructor(name, maxMarks = 100, credits = 3) {
        this.name      = Utils.capitalize(name);
        this.maxMarks  = maxMarks;
        this.credits   = credits;
    }

    toString() { return `${this.name} (${this.credits} credits)`; }
}

// ─── Class: Student ────────────────────────────────────────────────────────────

class Student {
    #grades = new Map();   // subject → marks
    static #count = 0;

    constructor(name, rollNo, branch = "Computer Science") {
        this.id     = `STU-${String(++Student.#count).padStart(3, "0")}`;
        this.name   = Utils.capitalize(name);
        this.rollNo = rollNo;
        this.branch = branch;
    }

    // Add or update a grade using Map
    addGrade(subject, marks) {
        const clamped = Utils.clamp(marks, 0, subject.maxMarks);
        this.#grades.set(subject.name, { marks: clamped, maxMarks: subject.maxMarks, credits: subject.credits });
        return this;   // fluent API
    }

    // Computed average using spread + reduce
    get average() {
        if (this.#grades.size === 0) return 0;
        const marks = [...this.#grades.values()].map(g => g.marks);
        return (marks.reduce((s, m) => s + m, 0) / marks.size || marks.length).toFixed(2);
    }

    // Weighted GPA (marks * credits / total credits)
    get gpa() {
        if (this.#grades.size === 0) return "N/A";
        let totalPoints  = 0;
        let totalCredits = 0;
        this.#grades.forEach(({ marks, maxMarks, credits }) => {
            const pct = marks / maxMarks * 100;
            totalPoints  += pct * credits;
            totalCredits += credits;
        });
        return (totalPoints / totalCredits).toFixed(2);
    }

    get overallGrade() { return Utils.gradeFromMarks(parseFloat(this.gpa)); }

    get subjectCount() { return this.#grades.size; }

    getReport() {
        const rows = [];
        this.#grades.forEach((data, subject) => {
            const { grade, label } = Utils.gradeFromMarks(data.marks / data.maxMarks * 100);
            rows.push({ Subject: subject, Marks: `${data.marks}/${data.maxMarks}`, Grade: grade, Status: label });
        });
        return rows;
    }
}

// ─── Class: GradeBook (Registry) ─────────────────────────────────────────────

class GradeBook {
    #students = new Map();
    #subjects  = new Set();

    addSubject(...subjects) {
        subjects.forEach(s => this.#subjects.add(s));
        return this;
    }

    enrollStudent(student) {
        this.#students.set(student.id, student);
        return this;
    }

    get subjectList() { return [...this.#subjects]; }
    get studentList() { return [...this.#students.values()]; }

    // Topper in a given subject
    getTopperByGPA() {
        let topper = null;
        this.#students.forEach(student => {
            if (!topper || parseFloat(student.gpa) > parseFloat(topper.gpa)) {
                topper = student;
            }
        });
        return topper;
    }

    // Students who passed (GPA >= 50)
    getPassingStudents() {
        return this.studentList.filter(s => parseFloat(s.gpa) >= 50);
    }

    printDashboard() {
        console.log("╔══════════════════════════════════════════════════════════╗");
        console.log("║          STUDENT GRADE MANAGEMENT DASHBOARD              ║");
        console.log("╚══════════════════════════════════════════════════════════╝\n");

        console.log(`Subjects Offered (${this.#subjects.size}):`);
        this.subjectList.forEach(s => console.log(`  → ${s}`));
        console.log(`\nStudents Enrolled: ${this.#students.size}\n`);
        console.log("─".repeat(60));

        this.studentList.forEach(student => {
            const { grade, label } = student.overallGrade;
            console.log(`\n  [${student.id}] ${student.name}  |  Roll: ${student.rollNo}  |  Branch: ${student.branch}`);
            console.log(`  Subjects: ${student.subjectCount}  |  GPA: ${student.gpa}%  |  Grade: ${grade} (${label})`);
            console.log("  Subject Breakdown:");
            student.getReport().forEach(row =>
                console.log(`    ${row.Subject.padEnd(22)} ${row.Marks.padEnd(10)} ${row.Grade}  (${row.Status})`)
            );
        });

        console.log("\n" + "─".repeat(60));
        const topper = this.getTopperByGPA();
        const passers = this.getPassingStudents();
        console.log(`\n  🏆 Top Performer  : ${topper?.name} (GPA: ${topper?.gpa}%)`);
        console.log(`  ✅ Passing Students: ${passers.length} / ${this.#students.size}`);
        console.log(`  ❌ At Risk         : ${this.#students.size - passers.length} student(s)\n`);
    }
}

// ─── Demo ─────────────────────────────────────────────────────────────────────

console.log("=== Q10: ES6 Mini-App — Student Grade Management System ===\n");

// Define subjects
const [maths, physics, cs, english, chemistry] = [
    new Subject("mathematics", 100, 4),
    new Subject("physics",     100, 3),
    new Subject("computer science", 100, 5),
    new Subject("english",     100, 2),
    new Subject("chemistry",   100, 3)
];

// Create gradebook and register subjects (spread)
const gradebook = new GradeBook();
gradebook.addSubject(...[maths, physics, cs, english, chemistry]);

// Create students (fluent chaining via addGrade returning this)
const students = [
    new Student("govind meena",  "CS-2021-001", "Computer Science"),
    new Student("priya sharma",  "CS-2021-002", "Computer Science"),
    new Student("arjun patel",   "EC-2021-001", "Electronics"),
    new Student("sunita verma",  "CS-2021-003", "Computer Science"),
];

// Enroll and assign grades (destructuring + chaining)
const [s1, s2, s3, s4] = students;

s1.addGrade(maths, 91).addGrade(physics, 85).addGrade(cs, 97).addGrade(english, 78).addGrade(chemistry, 88);
s2.addGrade(maths, 72).addGrade(physics, 68).addGrade(cs, 80).addGrade(english, 90).addGrade(chemistry, 65);
s3.addGrade(maths, 55).addGrade(physics, 48).addGrade(cs, 60).addGrade(english, 70).addGrade(chemistry, 52);
s4.addGrade(maths, 39).addGrade(physics, 42).addGrade(cs, 45).addGrade(english, 50).addGrade(chemistry, 38);

// Enroll all using spread
gradebook.enrollStudent(s1).enrollStudent(s2).enrollStudent(s3).enrollStudent(s4);

// Print the full dashboard
gradebook.printDashboard();

