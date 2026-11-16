// ============================================================
// Q3: Arrow Functions & 'this' Keyword — The Problem & Fix
// ============================================================

console.log("=== Q3: Arrow Functions & 'this' Keyword ===\n");

// ============================================================
// PART A: Arrow function inside object — 'this' is UNDEFINED / global
// ============================================================
console.log("--- PART A: Arrow function (broken 'this') ---");

const userWithArrow = {
  name: "Alice",
  // Arrow functions do NOT have their own 'this'.
  // They inherit 'this' from the LEXICAL (surrounding) scope,
  // which here is the module/global scope — NOT the object itself.
  showName: () => {
    console.log("Name (arrow):", this ? this.name : undefined);
    // In Node.js module scope, 'this' is {} (module.exports), so this.name is undefined.
    // In browser strict mode, 'this' is undefined entirely.
  },
};

userWithArrow.showName();
// Output: Name (arrow): undefined
// WHY: Arrow functions capture 'this' from where they are DEFINED (lexical scope),
//      not from where they are CALLED. The object literal does not create a new scope.

console.log("\n📌 EXPLANATION:");
console.log(
  "   Arrow functions do NOT bind their own 'this'."
);
console.log(
  "   When used as an object method, 'this' refers to the outer/global scope,"
);
console.log("   NOT the object — so 'this.name' is undefined.\n");

// ============================================================
// PART B: Regular function inside object — 'this' works correctly
// ============================================================
console.log("--- PART B: Regular function (fixed 'this') ---");

const userWithRegularFunction = {
  name: "Alice",
  // Regular functions bind 'this' to the object that CALLS them.
  showName: function () {
    console.log("Name (regular function):", this.name);
    // 'this' correctly refers to userWithRegularFunction object
  },
};

userWithRegularFunction.showName();
// Output: Name (regular function): Alice

console.log("\n✅ FIX EXPLANATION:");
console.log(
  "   Regular function methods bind 'this' to the calling object."
);
console.log(
  "   So 'this.name' correctly returns 'Alice' from the object.\n"
);

// ============================================================
// SUMMARY TABLE
// ============================================================
console.log("--- Summary ---");
console.log(
  "Arrow function   → 'this' = lexical (outer) scope → this.name = undefined"
);
console.log(
  "Regular function → 'this' = calling object         → this.name = 'Alice'"
);
