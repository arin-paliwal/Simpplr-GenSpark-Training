const createBook = (title, author) => ({
  title,
  author,
  isBorrowed: false,
  borrowedBy: null,
  borrow(user) {
    if (!this.isBorrowed) {
      this.isBorrowed = true;
      this.borrowedBy = user.name; 
    }
  },
  return() {
    if (this.isBorrowed) {
      this.isBorrowed = false;
      this.borrowedBy = null;
    }
  },
});

const library = {
  books: [],
  addBook(book) {
    this.books.push(book);
  },
  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  },
  listAvailableBooks() {
    return this.books.filter((book) => !book.isBorrowed);
  },
  listBorrowedBooks() {
    return this.books.filter((book) => book.isBorrowed);
  },
};

class User {
  constructor(name) {
    this.name = name;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    if (!book.isBorrowed) {
      book.borrow(this);
      this.borrowedBooks.push(book);
    } else {
      alert(`The book "${book.title}" is already borrowed.`);
    }
  }

  returnBook(book) {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      book.return();
      this.borrowedBooks.splice(index, 1);
    } else {
      alert(`The book "${book.title}" was not borrowed by ${this.name}.`);
    }
  }
}

const users = [];

// Mock data for initial render
const mockUsers = ["Alice", "Bob", "Charlie"];
const mockBooks = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "1984", author: "George Orwell" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
];

// Initialize mock data
mockUsers.forEach((name) => {
  const user = new User(name);
  users.push(user);
});

mockBooks.forEach((bookData) => {
  const book = createBook(bookData.title, bookData.author);
  library.addBook(book);
});

// Operations
const availableBooksList = document.getElementById("availableBooks");
const borrowedBooksList = document.getElementById("borrowedBooks");
const borrowSelect = document.getElementById("borrowSelect");
const returnSelect = document.getElementById("returnSelect");
const userSelect = document.getElementById("userSelect");
const userBorrowSelect = document.getElementById("userBorrowSelect");

function updateAvailableBooks() {
  availableBooksList.innerHTML = "";
  const availableBooks = library.listAvailableBooks();
  availableBooks.forEach((book) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td class="border px-4 py-2">${book.title}</td>
            <td class="border px-4 py-2">${book.author}</td>
            <td class="border px-4 py-2">
                <button class="bg-red-500 text-white rounded p-1" onclick="deleteBook('${book.title}')">Delete</button>
            </td>
        `;
    availableBooksList.appendChild(row);
  });
  updateSelectOptions();
  updateBorrowedBooks();
}

function updateBorrowedBooks() {
  borrowedBooksList.innerHTML = "";
  const borrowedBooks = library.listBorrowedBooks();
  borrowedBooks.forEach((book) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td class="border px-4 py-2">${book.title}</td>
            <td class="border px-4 py-2">${book.author}</td>
            <td class="border px-4 py-2">${book.borrowedBy}</td> <!-- Show who borrowed the book -->
        `;
    borrowedBooksList.appendChild(row);
  });
}

function updateSelectOptions() {
  const availableBooks = library.listAvailableBooks();
  borrowSelect.innerHTML = "";
  returnSelect.innerHTML = "";
  availableBooks.forEach((book) => {
    const borrowOption = document.createElement("option");
    borrowOption.value = book.title;
    borrowOption.textContent = book.title;
    borrowSelect.appendChild(borrowOption);
  });

  userSelect.innerHTML = "";
  users.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.name;
    option.textContent = user.name;
    userSelect.appendChild(option);
  });

  userBorrowSelect.innerHTML = "";
  users.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.name;
    option.textContent = user.name;
    userBorrowSelect.appendChild(option);
  });
}

function updateReturnDropdown() {
  const selectedUserName = userSelect.value;
  const user = users.find((u) => u.name === selectedUserName);
  returnSelect.innerHTML = "";
  if (user) {
    user.borrowedBooks.forEach((book) => {
      const returnOption = document.createElement("option");
      returnOption.value = book.title;
      returnOption.textContent = book.title;
      returnSelect.appendChild(returnOption);
    });
  }
}

function addBook() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  if (title && author) {
    const book = createBook(title, author);
    library.addBook(book);
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    updateAvailableBooks();
  } else {
    alert("Please enter both title and author.");
  }
}

function createUser() {
  const name = document.getElementById("userName").value;
  if (name) {
    const user = new User(name);
    users.push(user);
    document.getElementById("userName").value = "";
    updateSelectOptions();
  } else {
    alert("Please enter a user name.");
  }
}

function borrowBook() {
  const selectedUserName = userBorrowSelect.value;
  const selectedBookTitle = borrowSelect.value;
  const user = users.find((u) => u.name === selectedUserName);
  const book = library.books.find((b) => b.title === selectedBookTitle);
  if (user && book) {
    user.borrowBook(book);
    updateAvailableBooks();
    updateReturnDropdown();
  }
}

function returnBook() {
  const selectedUserName = userSelect.value;
  const selectedBookTitle = returnSelect.value;
  const user = users.find((u) => u.name === selectedUserName);
  const book = library.books.find((b) => b.title === selectedBookTitle);
  if (user && book) {
    user.returnBook(book);
    updateAvailableBooks();
    updateReturnDropdown();
  }
}

function deleteBook(title) {
  library.removeBook(title);
  updateAvailableBooks();
}

document.getElementById("addBookButton").onclick = addBook;
document.getElementById("createUserButton").onclick = createUser;
document.getElementById("borrowButton").onclick = borrowBook;
document.getElementById("returnButton").onclick = returnBook;

userSelect.onchange = updateReturnDropdown;
updateAvailableBooks();
