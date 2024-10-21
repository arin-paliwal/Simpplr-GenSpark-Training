var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var createBook = function (title, author) { return ({
    title: title,
    author: author,
    isBorrowed: false,
    borrow: function () {
        if (!this.isBorrowed)
            this.isBorrowed = true;
    },
    return: function () {
        if (this.isBorrowed)
            this.isBorrowed = false;
    },
}); };
var library = {
    books: [],
    addBook: function (book) {
        this.books.push(book);
    },
    listAvailableBooks: function () {
        return this.books.filter(function (book) { return !book.isBorrowed; });
    },
};
var User = /** @class */ (function () {
    function User(name) {
        this.borrowedBooks = [];
        this.name = name;
    }
    User.prototype.borrowBook = function (book) {
        if (!book.isBorrowed) {
            book.borrow();
            this.borrowedBooks.push(book);
        }
        else {
            console.log("The book \"".concat(book.title, "\" is already borrowed."));
        }
    };
    User.prototype.returnBook = function (book) {
        var index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.return();
            this.borrowedBooks.splice(index, 1);
        }
        else {
            console.log("The book \"".concat(book.title, "\" was not borrowed by ").concat(this.name, "."));
        }
    };
    return User;
}());
var LibraryMember = /** @class */ (function (_super) {
    __extends(LibraryMember, _super);
    function LibraryMember(name, membershipId) {
        var _this = _super.call(this, name) || this;
        _this.membershipId = membershipId;
        return _this;
    }
    LibraryMember.prototype.getMembershipInfo = function () {
        return "Member: ".concat(this.name, ", Membership ID: ").concat(this.membershipId);
    };
    return LibraryMember;
}(User));
var book1 = createBook("The Great Gatsby", "F. Scott Fitzgerald");
var book2 = createBook("1984", "George Orwell");
var book3 = createBook("To Kill a Mockingbird", "Harper Lee");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log("Available books:", library.listAvailableBooks().map(function (b) { return b.title; }));
var user1 = new User("Alice");
var member1 = new LibraryMember("Bob", "M123");
user1.borrowBook(book1);
console.log("".concat(user1.name, " borrowed \"").concat(book1.title, "\""));
console.log("Available books:", library.listAvailableBooks().map(function (b) { return b.title; }));
member1.borrowBook(book2);
console.log("".concat(member1.name, " borrowed \"").concat(book2.title, "\""));
console.log("Available books:", library.listAvailableBooks().map(function (b) { return b.title; }));
console.log(member1.getMembershipInfo());
user1.returnBook(book1);
console.log("".concat(user1.name, " returned \"").concat(book1.title, "\""));
console.log("Available books:", library.listAvailableBooks().map(function (b) { return b.title; }));
