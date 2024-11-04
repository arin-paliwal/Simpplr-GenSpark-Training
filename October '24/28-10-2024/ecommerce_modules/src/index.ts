import {
  addProduct,
  listProducts,
  updateProductPrice,
} from "./products/product";
import { addCustomer, listCustomers } from "./customers/customer";
import { createOrder, listOrders } from "./orders/order";

addProduct({ id: 1, name: "Laptop", price: 1500, category: "Electronics" });
addProduct({ id: 2, name: "Smartphone", price: 800, category: "Electronics" });
addProduct({ id: 3, name: "Book", price: 20, category: "Stationery" });

// Listing products
console.log("Products List:", listProducts());

// Update product price
updateProductPrice(2, 750);
console.log("Updated Products List:", listProducts());

// Adding example customers
addCustomer({ id: 1, name: "Alice", email: "alice@example.com" });
addCustomer({ id: 2, name: "Bob", email: "bob@example.com" });
addCustomer({ id: 2, name: "Bob", email: "bob@example.com" });

// Listing customers
console.log("Customers List:", listCustomers());

// Creating an order for a customer
const customer = listCustomers()[0]; // taken first customer
const products = listProducts().filter((p) => p.id === 1 || p.id === 3); // taken first and last product that is laptop and book
createOrder(customer, products);

console.log("Orders List:", JSON.stringify(listOrders(), null, 2)); 