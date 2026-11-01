// Q3: Library Management System (Classes + Objects)
// Models a library with Book class, issue/return methods, and ISBN search.

class Book {
    /**
     * @param {string} title    - Book title
     * @param {string} author   - Author name
     * @param {string} isbn     - Unique ISBN (13-digit)
     */
    constructor(title, author, isbn) {
        this.title    = title;
        this.author   = author;
        this.isbn     = isbn;
        this.isIssued = false;     // available by default
        this.issuedTo = null;      // tracks borrower name
    }

    /**
     * Issues the book to a borrower if available.
     * @param {string} borrowerName - Name of the person issuing the book
     */
    issueBook(borrowerName) {
        if (this.isIssued) {
            console.log(`  ⚠️  "${this.title}" is already issued to ${this.issuedTo}.`);
        } else {
            this.isIssued = true;
            this.issuedTo = borrowerName;
            console.log(`  ✅ "${this.title}" successfully issued to ${borrowerName}.`);
        }
    }

    /**
     * Returns the book to the library.
     */
    returnBook() {
        if (!this.isIssued) {
            console.log(`  ℹ️  "${this.title}" is already available in the library.`);
        } else {
            console.log(`  ✅ "${this.title}" returned by ${this.issuedTo}. Now available.`);
            this.isIssued = false;
            this.issuedTo = null;
        }
    }

    /**
     * Returns a formatted summary string.
     */
    displayDetails() {
        const status = this.isIssued
            ? `❌ Issued to: ${this.issuedTo}`
            : `✅ Available`;
        return (
            `  Title  : ${this.title}\n` +
            `  Author : ${this.author}\n` +
            `  ISBN   : ${this.isbn}\n` +
            `  Status : ${status}\n` +
            `  ${'─'.repeat(40)}`
        );
    }
}

// ── Library class to manage the collection ────────────────────────────────────

class Library {
    constructor(name) {
        this.name  = name;
        this.books = [];
    }

    /** Add a book to the library. */
    addBook(book) { this.books.push(book); }

    /** Display all available (not issued) books. */
    displayAvailable() {
        const available = this.books.filter(b => !b.isIssued);
        console.log(`\n📚 Available Books (${available.length}/${this.books.length}):`);
        if (available.length === 0) {
            console.log("  No books currently available.");
        } else {
            available.forEach(b => console.log(b.displayDetails()));
        }
    }

    /** Display ALL books with status. */
    displayAll() {
        console.log(`\n📖 All Books in ${this.name} (${this.books.length} total):`);
        this.books.forEach(b => console.log(b.displayDetails()));
    }

    /**
     * Find a book by ISBN and issue it to a borrower.
     * @param {string} isbn         - ISBN to search
     * @param {string} borrowerName - Name of the borrower
     */
    issueByISBN(isbn, borrowerName) {
        const book = this.books.find(b => b.isbn === isbn);
        if (!book) {
            console.log(`  🔍 No book found with ISBN: ${isbn}`);
        } else {
            book.issueBook(borrowerName);
        }
    }

    /**
     * Return a book by ISBN.
     * @param {string} isbn - ISBN of the book to return
     */
    returnByISBN(isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        if (!book) {
            console.log(`  🔍 No book found with ISBN: ${isbn}`);
        } else {
            book.returnBook();
        }
    }
}

// ── Demo ──────────────────────────────────────────────────────────────────────

console.log("=== Q3: Library Management System ===\n");

const library = new Library("BridgeLabz Central Library");

// Add books
library.addBook(new Book("Clean Code",               "Robert C. Martin",     "978-0132350884"));
library.addBook(new Book("You Don't Know JS",         "Kyle Simpson",         "978-1491924464"));
library.addBook(new Book("Eloquent JavaScript",       "Marijn Haverbeke",     "978-1593279509"));
library.addBook(new Book("JavaScript: The Good Parts","Douglas Crockford",    "978-0596517748"));
library.addBook(new Book("Design Patterns",           "Gang of Four",         "978-0201633610"));
library.addBook(new Book("The Pragmatic Programmer",  "Andrew Hunt & Thomas", "978-0135957059"));

// Show all books
library.displayAll();

// Issue some books
console.log("\n--- Issuing Books ---");
library.issueByISBN("978-0132350884", "Govind Meena");
library.issueByISBN("978-1593279509", "Priya Sharma");
library.issueByISBN("978-0132350884", "Arjun Patel");  // already issued

// Show only available
library.displayAvailable();

// Return a book
console.log("\n--- Returning a Book ---");
library.returnByISBN("978-0132350884");
library.returnByISBN("978-0201633610");   // was never issued

// Final available list
library.displayAvailable();
