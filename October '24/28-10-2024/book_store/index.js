var BookGenre;
(function (BookGenre) {
  BookGenre["FICTION"] = "FICTION";
  BookGenre["NON_FICTION"] = "NON_FICTION";
  BookGenre["MYSTERY"] = "MYSTERY";
  BookGenre["SCIENCE_FICTION"] = "SCIENCE_FICTION";
  BookGenre["BIOGRAPHY"] = "BIOGRAPHY";
  BookGenre["FANTASY"] = "FANTASY";
})(BookGenre || (BookGenre = {}));
var MemberRole;
(function (MemberRole) {
  MemberRole["ORGANIZER"] = "ORGANIZER";
  MemberRole["MODERATOR"] = "MODERATOR";
  MemberRole["MEMBER"] = "MEMBER";
  MemberRole["GUEST"] = "GUEST";
})(MemberRole || (MemberRole = {}));
var books = [
  { title: "1984", author: "George Orwell", genre: BookGenre.FICTION },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: BookGenre.NON_FICTION,
  },
  { title: "Dune", author: "Frank Herbert", genre: BookGenre.SCIENCE_FICTION },
  { title: "Harry Potter", author: "J.K. Rowling", genre: BookGenre.FANTASY },
];
var members = [
  { name: "Alice", role: MemberRole.ORGANIZER },
  { name: "Bob", role: MemberRole.MEMBER },
  { name: "Charlie", role: MemberRole.GUEST },
  { name: "Dave", role: MemberRole.MODERATOR },
];
var getBooksByGenre = function (books, genre) {
  return books.filter(function (book) {
    return book.genre === genre;
  });
};
var getMembersByRole = function (members, role) {
  return members.filter(function (member) {
    return member.role === role;
  });
};
var countBooksByGenre = function (books) {
  return books.reduce(function (count, book) {
    count[book.genre] = (count[book.genre] || 0) + 1;
    return count;
  }, {});
};
// LOGIC ENDS HERE
var updateBookCountDisplay = function () {
  var bookCount = countBooksByGenre(books);
  var genreCountsContainer = document.getElementById("genre-counts");
  genreCountsContainer.innerHTML = "";
  Object.entries(bookCount).forEach(function (_a) {
    var genre = _a[0],
      count = _a[1];
    var genreCountDiv = document.createElement("div");
    genreCountDiv.className =
      "bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm font-semibold";
    genreCountDiv.textContent = "".concat(genre, ": ").concat(count);
    genreCountsContainer.appendChild(genreCountDiv);
  });
};
var renderBooks = function (filteredBooks) {
  var booksList = document.getElementById("books-list");
  booksList.innerHTML = "";
  filteredBooks.forEach(function (book) {
    var bookDiv = document.createElement("div");
    bookDiv.className = "bg-gray-200 p-4 rounded-lg shadow";
    bookDiv.innerHTML = '<h3 class="font-semibold">'
      .concat(book.title, "</h3>\n                         <p>Author: ")
      .concat(book.author, "</p>\n                         <p>Genre: ")
      .concat(book.genre, "</p>");
    booksList.appendChild(bookDiv);
  });
};
var renderMembers = function (filteredMembers) {
  var membersList = document.getElementById("members-list");
  membersList.innerHTML = ""; // Clear existing content
  filteredMembers.forEach(function (member) {
    var memberDiv = document.createElement("div");
    memberDiv.className = "bg-gray-200 p-4 rounded-lg shadow";
    memberDiv.innerHTML = '<h3 class="font-semibold">'
      .concat(member.name, "</h3>\n                           <p>Role: ")
      .concat(member.role, "</p>");
    membersList.appendChild(memberDiv);
  });
};
document
  .getElementById("filter-books-btn")
  .addEventListener("click", function () {
    var genre = document.getElementById("genre-filter").value;
    var filteredBooks = genre ? getBooksByGenre(books, genre) : books;
    renderBooks(filteredBooks);
    updateBookCountDisplay();
  });
document
  .getElementById("filter-members-btn")
  .addEventListener("click", function () {
    var role = document.getElementById("role-filter").value;
    var filteredMembers = role ? getMembersByRole(members, role) : members;
    renderMembers(filteredMembers);
  });
renderBooks(books);
renderMembers(members);
updateBookCountDisplay();
