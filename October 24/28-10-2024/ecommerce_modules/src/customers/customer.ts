export interface Customer {
  id: number;
  name: string;
  email: string;
}

const customers: Customer[] = [];

export function addCustomer(customer: Customer): void {
  const existingCustomer = customers.find((c) => c.email === customer.email);
  if (existingCustomer) {
    console.log(`Customer with email ${customer.email} already exists.`);
    return;
  }
  customers.push(customer);
}

export function listCustomers(): Customer[] {
  return customers;
}
