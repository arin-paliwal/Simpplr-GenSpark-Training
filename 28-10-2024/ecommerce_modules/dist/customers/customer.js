"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCustomer = addCustomer;
exports.listCustomers = listCustomers;
const customers = [];
function addCustomer(customer) {
    const existingCustomer = customers.find((c) => c.email === customer.email);
    if (existingCustomer) {
        console.log(`Customer with email ${customer.email} already exists.`);
        return;
    }
    customers.push(customer);
}
function listCustomers() {
    return customers;
}
