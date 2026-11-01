// Q2: Destructuring Data Extractor
// Demonstrates ES6 array and object destructuring with renaming,
// default values, nested destructuring, and rest patterns.

// ---------- Object Destructuring ----------
const employee = {
    id: 101,
    name: "Ananya Sharma",
    role: "Frontend Developer",
    department: "Engineering",
    salary: 72000,
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
};

// Basic object destructuring
const { name, role, salary } = employee;

// Renaming on destructure
const { department: dept, id: empId } = employee;

// Default value (property doesn't exist on object)
const { experience = "Not Specified", address: { city, state } } = employee;

// ---------- Array Destructuring ----------
const topLanguages = ["JavaScript", "Python", "TypeScript", "Rust", "Go"];

// Basic array destructuring
const [first, second, third] = topLanguages;

// Skip elements using commas
const [, , thirdLang, , fifthLang] = topLanguages;

// Rest pattern (collects remaining items)
const [primary, ...rest] = topLanguages;

// Swap two variables without a temp variable
let x = 10, y = 25;
[x, y] = [y, x];

// ---------- Function Parameter Destructuring ----------
function displayProfile({ name, role, address: { city } }) {
    return `${name} | ${role} | ${city}`;
}

// ---------- Output ----------
console.log("=== Q2: Destructuring Data Extractor ===\n");

console.log("--- Object Destructuring ---");
console.log(`Name       : ${name}`);
console.log(`Role       : ${role}`);
console.log(`Salary     : Rs. ${salary}`);
console.log(`Department : ${dept}  (renamed from 'department')`);
console.log(`Emp ID     : ${empId} (renamed from 'id')`);
console.log(`Experience : ${experience} (default value used)`);
console.log(`City       : ${city}  (nested destructure)`);
console.log(`State      : ${state} (nested destructure)\n`);

console.log("--- Array Destructuring ---");
console.log(`Languages  : [${topLanguages}]`);
console.log(`First      : ${first}`);
console.log(`Second     : ${second}`);
console.log(`Third      : ${third}`);
console.log(`Skip to 3rd: ${thirdLang}, Skip to 5th: ${fifthLang}`);
console.log(`Primary    : ${primary}`);
console.log(`Rest       : [${rest}]\n`);

console.log("--- Swap Without Temp Variable ---");
console.log(`Before swap → x: 10, y: 25`);
console.log(`After swap  → x: ${x}, y: ${y}\n`);

console.log("--- Function Parameter Destructuring ---");
console.log(`Profile: ${displayProfile(employee)}`);

