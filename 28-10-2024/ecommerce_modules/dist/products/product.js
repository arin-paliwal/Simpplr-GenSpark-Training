"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = addProduct;
exports.listProducts = listProducts;
exports.updateProductPrice = updateProductPrice;
const products = [];
function addProduct(product) {
    products.push(product);
}
function listProducts() {
    return products;
}
// update product price
function updateProductPrice(productId, newPrice) {
    const product = products.find((p) => p.id === productId);
    if (product) {
        product.price = newPrice;
    }
    else {
        console.log(`Product with ID ${productId} not found.`);
    }
}
