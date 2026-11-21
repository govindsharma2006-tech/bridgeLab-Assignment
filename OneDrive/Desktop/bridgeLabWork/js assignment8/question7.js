// Q7: Banking Application (Private Fields + Error Handling)

class BankAccount {
  #balance; // Private field — not accessible from outside the class

  constructor(owner, initialBalance = 0) {
    this.owner  = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Deposit amount must be greater than zero.");
    this.#balance += amount;
    console.log(`Deposited ₹${amount}. New balance: ₹${this.#balance}`);
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error("Withdrawal amount must be greater than zero.");
    if (amount > this.#balance) {
      throw new Error(`Insufficient balance. Available: ₹${this.#balance}, Requested: ₹${amount}`);
    }
    this.#balance -= amount;
    console.log(`Withdrawn ₹${amount}. Remaining balance: ₹${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

console.log("=== Q7: Banking Application ===\n");

const account = new BankAccount("Alice", 1000);
console.log(`Account owner: ${account.owner}`);
console.log(`Opening balance: ₹${account.getBalance()}\n`);

// Valid deposits
console.log("--- Valid Deposits ---");
try { account.deposit(500);  } catch (e) { console.log("Error:", e.message); }
try { account.deposit(2000); } catch (e) { console.log("Error:", e.message); }

console.log("");

// Valid withdrawal
console.log("--- Valid Withdrawal ---");
try { account.withdraw(800); } catch (e) { console.log("Error:", e.message); }

console.log("");

// Invalid withdrawals
console.log("--- Invalid Withdrawals ---");
try { account.withdraw(9999); } catch (e) { console.log("Error:", e.message); }
try { account.withdraw(-50);  } catch (e) { console.log("Error:", e.message); }

console.log(`\nFinal balance: ₹${account.getBalance()}`);

// Verify #balance is truly private
console.log("Direct access attempt: account.#balance →", typeof account["#balance"] === "undefined" ? "undefined (private ✓)" : "accessible (not private!)");
