const books = [
  {
    id: 1,
    title: "Ikigai: The Japanese Secret to a Long and Happy Life",
    price: 10,
    image:
      "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    title: "The Psychology of Money",
    price: 15,
    image:
      "https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    price: 25,
    image:
      "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    title: "Atomic Habits",
    price: 18,
    image:
      "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 5,
    title: "Sapiens: A Brief History of Humankind",
    price: 20,
    image:
      "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 6,
    title: "The Alchemist",
    price: 14,
    image:
      "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
  },
];
let cart = [];
function renderBooks() {
  const booksContainer = document.getElementById("books-container");
  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.innerHTML = `
  <div class="flex flex-col gap-3 p-4 h-[30rem] border rounded-lg">
    <img src="${book.image}" alt="${
      book.title
    }" class="rounded-lg w-full h-[20rem] object-cover cursor-pointer hover:brightness-100 brightness-90 transform duration-300 mb-4">
    <h3 class="text-md mt-[-1.1rem]">${book.title}</h3>
    <div class="flex mt-[-0.5rem] items-center justify-between">
    <h1 class="text-md">Price
    </h1>
    <div class="flex items-center gap-2">
    <h1 class="text-md line-through">$${book.price}</h1>
    <h1 class="text-md text-green-500">$${book.price - book.price * 0.1}</h1>
    </div>
    </div>
    <div class="flex justify-between items-center gap-4">
    <button class="add-to-cart-btn bg-green-500 text-white py-2 px-4 h-[3rem] rounded w-[85%]" data-id="${
      book.id
    }">Add to Cart</button>
    <button class="bg-red-500 text-white p-2 rounded w-[15%] h-full flex justify-center items-center">
    <img src="/10-10-2024/books/assets/heart.svg" alt="heart" class="w-[1.5rem]">
    </button>
    </div>
  </div>`;

    booksContainer.appendChild(bookCard);
  });
}

function addToCart(bookId) {
  const book = books.find((b) => b.id === bookId);
  cart.push(book);
  updateCart();
}

function calculateTotal() {
  return cart.reduce(
    (total, book) => total + (book.price - book.price * 0.1),
    0
  );
}

function updateCart() {
  const cartSection = document.getElementById("cart-section");
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
      <div class="flex items-center gap-2">
  <div class="flex w-full justify-between items-center">
    <div class="flex w-[70%] justify-start">
      <h2 class="text-md line-clamp-1">${item.title}</h2>
    </div>
    <div class="flex items-center gap-2 w-[30%] justify-end">
      <h1 class="text-md">$${item.price - item.price * 0.1}</h1>
      <button class="remove-from-cart-btn  bg-red-500 text-white p-2 rounded-full" data-index="${index}" aria-label="Remove ${
      item.title
    }">
        <img src="/10-10-2024/books/assets/trash.svg" data-index="${index}" alt="Remove item" class="remove-from-cart-btn w-[1rem]">
      </button>
    </div>
  </div>
</div>

    `;
    cartItems.appendChild(cartItem);
  });

  const total = calculateTotal();
  totalPriceElement.textContent = `$${total}`;

  if (cart.length > 0) {
    cartSection.classList.remove("hidden");
  } else {
    cartSection.classList.add("hidden");
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart-btn")) {
    const bookId = parseInt(event.target.getAttribute("data-id"));
    addToCart(bookId);
  }

  if (event.target.classList.contains("remove-from-cart-btn")) {
    const itemIndex = parseInt(event.target.getAttribute("data-index"));
    removeFromCart(itemIndex);
  }
});


document.getElementById("toggle-cart-button").addEventListener("click", () => {
  const cartSection = document.getElementById("cart-section");
  cartSection.classList.toggle("hidden");
});

document.getElementById("close-cart").addEventListener("click", () => {
  const cartSection = document.getElementById("cart-section");
  cartSection.classList.add("hidden");
});
renderBooks();