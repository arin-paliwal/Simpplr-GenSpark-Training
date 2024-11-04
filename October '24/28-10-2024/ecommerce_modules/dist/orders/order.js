"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = createOrder;
exports.listOrders = listOrders;
const orders = [];
function createOrder(customer, products) {
    const orderId = orders.length + 1;
    let totalAmount = products.reduce((sum, product) => sum + product.price, 0);
    if (totalAmount > 1000) {
        totalAmount *= 0.9;
        console.log(`A 10% discount was applied. New total: ${totalAmount}`);
    }
    const order = { orderId, customer, products, totalAmount };
    orders.push(order);
}
function listOrders() {
    return orders;
}
