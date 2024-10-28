"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./products/product");
const customer_1 = require("./customers/customer");
const order_1 = require("./orders/order");
(0, product_1.addProduct)({ id: 1, name: "Laptop", price: 1500, category: "Electronics" });
(0, product_1.addProduct)({ id: 2, name: "Smartphone", price: 800, category: "Electronics" });
(0, product_1.addProduct)({ id: 3, name: "Book", price: 20, category: "Stationery" });
// Listing products
console.log("Products List:", (0, product_1.listProducts)());
// Update product price
(0, product_1.updateProductPrice)(2, 750);
console.log("Updated Products List:", (0, product_1.listProducts)());
// Adding example customers
(0, customer_1.addCustomer)({ id: 1, name: "Alice", email: "alice@example.com" });
(0, customer_1.addCustomer)({ id: 2, name: "Bob", email: "bob@example.com" });
(0, customer_1.addCustomer)({ id: 2, name: "Bob", email: "bob@example.com" });
// Listing customers
console.log("Customers List:", (0, customer_1.listCustomers)());
// Creating an order for a customer
const customer = (0, customer_1.listCustomers)()[0]; // taken first customer
const products = (0, product_1.listProducts)().filter((p) => p.id === 1 || p.id === 3); // taken first and last product that is laptop and book
(0, order_1.createOrder)(customer, products);
console.log("Orders List:", JSON.stringify((0, order_1.listOrders)(), null, 2));
// JSON.stringify(value, replacer, space) is used to convert a JavaScript object or value to a JSON string.
// Products List: [
//   { id: 1, name: 'Laptop', price: 1500, category: 'Electronics' },
//   { id: 2, name: 'Smartphone', price: 800, category: 'Electronics' },
//   { id: 3, name: 'Book', price: 20, category: 'Stationery' }
// ]
// Updated Products List: [
//   { id: 1, name: 'Laptop', price: 1500, category: 'Electronics' },
//   { id: 2, name: 'Smartphone', price: 750, category: 'Electronics' },
//   { id: 3, name: 'Book', price: 20, category: 'Stationery' }
// ]
// Customer with email bob@example.com already exists.
// Customers List: [
//   { id: 1, name: 'Alice', email: 'alice@example.com' },
//   { id: 2, name: 'Bob', email: 'bob@example.com' }
// ]
// A 10% discount was applied. New total: 1368
// Orders List: [
//   {
//     orderId: 1,
//     customer: { id: 1, name: 'Alice', email: 'alice@example.com' },
//     products: [ [Object], [Object] ],
//     totalAmount: 1368
//   }
// ]
