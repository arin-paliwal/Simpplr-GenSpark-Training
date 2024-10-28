export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

const products: Product[] = [];

export function addProduct(product: Product): void {
  products.push(product);
}

export function listProducts(): Product[] {
  return products;
}

// update product price
export function updateProductPrice(productId: number, newPrice: number): void {
  const product = products.find((p) => p.id === productId);
  if (product) {
    product.price = newPrice;
  } else {
    console.log(`Product with ID ${productId} not found.`);
  }
}
