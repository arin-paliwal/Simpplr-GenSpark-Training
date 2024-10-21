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
