enum BookGenre {
  FICTION = "FICTION",
  NON_FICTION = "NON_FICTION",
  MYSTERY = "MYSTERY",
  SCIENCE_FICTION = "SCIENCE_FICTION",
  BIOGRAPHY = "BIOGRAPHY",
  FANTASY = "FANTASY",
}

enum MemberRole {
  ORGANIZER = "ORGANIZER",
  MODERATOR = "MODERATOR",
  MEMBER = "MEMBER",
  GUEST = "GUEST",
}

type Book = {
  title: string;
  author: string;
  genre: BookGenre;
};

type Member = {
  name: string;
  role: MemberRole;
};

const books: Book[] = [
  { title: "1984", author: "George Orwell", genre: BookGenre.FICTION },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: BookGenre.NON_FICTION,
  },
  { title: "Dune", author: "Frank Herbert", genre: BookGenre.SCIENCE_FICTION },
  { title: "Harry Potter", author: "J.K. Rowling", genre: BookGenre.FANTASY },
];

const members: Member[] = [
  { name: "Alice", role: MemberRole.ORGANIZER },
  { name: "Bob", role: MemberRole.MEMBER },
  { name: "Charlie", role: MemberRole.GUEST },
  { name: "Dave", role: MemberRole.MODERATOR },
];

const getBooksByGenre = (books: Book[], genre: BookGenre): Book[] => {
  return books.filter((book) => book.genre === genre);
};

const getMembersByRole = (members: Member[], role: MemberRole): Member[] => {
  return members.filter((member) => member.role === role);
};

// Record is a utility type that creates an object type with specified keys and value
const countBooksByGenre = (books: Book[]): Record<BookGenre, number> => {
  return books.reduce((count, book) => {
    count[book.genre] = (count[book.genre] || 0) + 1;
    return count;
  }, {} as Record<BookGenre, number>);
};


// LOGIC ENDS HERE

const updateBookCountDisplay = () => {
  const bookCount = countBooksByGenre(books);
  const genreCountsContainer = document.getElementById("genre-counts")!;
  genreCountsContainer.innerHTML = ""; 

  Object.entries(bookCount).forEach(([genre, count]) => {
    const genreCountDiv = document.createElement("div");
    genreCountDiv.className = "bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm font-semibold";
    genreCountDiv.textContent = `${genre}: ${count}`;
    genreCountsContainer.appendChild(genreCountDiv);
  });
};

const renderBooks = (filteredBooks: Book[]) => {
  const booksList = document.getElementById("books-list")!;
  booksList.innerHTML = "";
  filteredBooks.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "bg-gray-200 p-4 rounded-lg shadow";
    bookDiv.innerHTML = `<h3 class="font-semibold">${book.title}</h3>
                         <p>Author: ${book.author}</p>
                         <p>Genre: ${book.genre}</p>`;
    booksList.appendChild(bookDiv);
  });
};

const renderMembers = (filteredMembers: Member[]) => {
  const membersList = document.getElementById("members-list")!;
  membersList.innerHTML = ""; 
  filteredMembers.forEach((member) => {
    const memberDiv = document.createElement("div");
    memberDiv.className = "bg-gray-200 p-4 rounded-lg shadow";
    memberDiv.innerHTML = `<h3 class="font-semibold">${member.name}</h3>
                           <p>Role: ${member.role}</p>`;
    membersList.appendChild(memberDiv);
  });
};

document.getElementById("filter-books-btn")!.addEventListener("click", () => {
  const genre = (document.getElementById("genre-filter") as HTMLSelectElement)
    .value as BookGenre;
  const filteredBooks = genre ? getBooksByGenre(books, genre) : books;
  renderBooks(filteredBooks);
  updateBookCountDisplay();
});

document.getElementById("filter-members-btn")!.addEventListener("click", () => {
  const role = (document.getElementById("role-filter") as HTMLSelectElement)
    .value as MemberRole;
  const filteredMembers = role ? getMembersByRole(members, role) : members;
  renderMembers(filteredMembers);
});

renderBooks(books);
renderMembers(members);
updateBookCountDisplay();
