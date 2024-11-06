import { Product } from "../products/product";
import { Customer } from "../customers/customer";

export interface Order {
  orderId: number;
  customer: Customer;
  products: Product[];
  totalAmount: number;
}

const orders: Order[] = [];

export function createOrder(customer: Customer, products: Product[]): void {
  const orderId = orders.length + 1;
  let totalAmount = products.reduce((sum, product) => sum + product.price, 0);
  if (totalAmount > 1000) {
    totalAmount *= 0.9;
    console.log(`A 10% discount was applied. New total: ${totalAmount}`);
  }

  const order: Order = { orderId, customer, products, totalAmount };
  orders.push(order);
}

export function listOrders(): Order[] {
  return orders;
}
