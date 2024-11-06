// Task: Build a Simple Library Management System using JavaScript OOP Concepts

// Objective:
// Create a simple library management system that tracks books and users, demonstrating your understanding of object creation, constructor properties, prototype inheritance,
// and prototype chaining. You will create a system that manages books, tracks users, and allows users to borrow and return books.

// Task Details:
// 1. Library Object (Object Literals):
// Create a Library object using object literals.
// The library should:
// Store an array of books.
// Have methods to add books to the library.
// Have a method to list all available (not borrowed) books.


// 2. Book Object (Factory Functions):
// Create a Book object using a factory function.
// Each book should have:
// A title and author as properties.
// A boolean property isBorrowed to track whether the book is borrowed or available.


// 3. User Object (Constructor Functions and Prototypes):
// Create a User object using a constructor function.
// The user should have:
// A name and an array borrowedBooks to track which books the user has borrowed.
// Add a method borrowBook to the prototype of the User that allows users to borrow a book if it's available.
// Add a method returnBook to the prototype of the User to return a borrowed book.


// 4. Prototypal Inheritance (LibraryMember):
// Create a LibraryMember object that inherits from User using prototypal inheritance.
// The LibraryMember should have an additional membershipId property to track membership.
// Add a method getMembershipInfo to LibraryMember to display the member's name and membership ID.
// Ensure that LibraryMember can use the methods borrowBook and returnBook inherited from User.

// 5. Prototype Chaining:
// Demonstrate prototype chaining by ensuring that LibraryMember instances can access methods defined in both LibraryMember and User prototypes.

// Requirements:
// Use object literals, factory functions, and constructor functions where specified.
// Implement methods for borrowing and returning books using prototypes.
// Ensure prototypal inheritance and prototype chaining work correctly, where LibraryMember can access methods from both its own prototype and the User prototype.

// Testing Criteria:
// Add several books to the Library object.
// Create both User and LibraryMember objects.
// Borrow and return books using these objects.
// Check that books are correctly marked as borrowed or available.
// Verify that LibraryMember can access both User methods and its own methods.


// -----------------------CODE STARTS-----------------------------------------


// Book Object using Factory Function -- Start

interface Book {
  title: string;
  author: string;
  isBorrowed: boolean;
  borrow(): void;
  return(): void;
}

const createBook = (title: string, author: string): Book => ({
  title,
  author,
  isBorrowed: false,
  borrow() {
    if (!this.isBorrowed) this.isBorrowed = true;
  },
  return() {
    if (this.isBorrowed) this.isBorrowed = false;
  },
});

// Book Object using Factory Function -- End

// Library Object using Literals -- Start

interface Library {
  books: Book[];
  addBook(book: Book): void;
  listAvailableBooks(): Book[];
}

const library: Library = {
  books: [],
  addBook(book: Book) {
    this.books.push(book);
  },
  listAvailableBooks() {
    return this.books.filter((book:Book) => !book.isBorrowed);
  },
};

// Library Object using Literals -- End

// User Class -- Start
class User {
  name: string;
  borrowedBooks: Book[] = [];

  constructor(name: string) {
    this.name = name;
  }

  borrowBook(book: Book): void {
    if (!book.isBorrowed) {
      book.borrow();
      this.borrowedBooks.push(book);
    } else {
      console.log(`The book "${book.title}" is already borrowed.`);
    }
  }

  returnBook(book: Book): void {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      book.return();
      this.borrowedBooks.splice(index, 1);
    } else {
      console.log(`The book "${book.title}" was not borrowed by ${this.name}.`);
    }
  }
}

// User Class -- End

// LibraryMember Inhertiing User Class -- Start

class LibraryMember extends User {
  membershipId: string;
  constructor(name: string, membershipId: string) {
    super(name);
    this.membershipId = membershipId;
  }

  getMembershipInfo(): string {
    return `Member: ${this.name}, Membership ID: ${this.membershipId}`;
  }
}

// Operation = Add Books to Library
const book1 = createBook("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = createBook("1984", "George Orwell");
const book3 = createBook("To Kill a Mockingbird", "Harper Lee");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Operation = List Available Books
console.log(
  "Available books:",
  library.listAvailableBooks().map((b) => b.title)
);

// Operation = Borrow and Return Books
const user1 = new User("Alice");
const member1 = new LibraryMember("Bob", "M123");

user1.borrowBook(book1);
console.log(`${user1.name} borrowed "${book1.title}"`);
console.log(
  "Available books:",
  library.listAvailableBooks().map((b) => b.title)
);

member1.borrowBook(book2);
console.log(`${member1.name} borrowed "${book2.title}"`);
console.log(
  "Available books:",
  library.listAvailableBooks().map((b) => b.title)
);

console.log(member1.getMembershipInfo());

user1.returnBook(book1);
console.log(`${user1.name} returned "${book1.title}"`);
console.log(
  "Available books:",
  library.listAvailableBooks().map((b) => b.title)
);
