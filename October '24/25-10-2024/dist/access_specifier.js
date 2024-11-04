"use strict";
class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
  }
  getAge() {
    return this.age; // accessible only within this class
  }
  getAddress() {
    return this.address; // accessible within this class and subclasses
  }
}
class Employee extends Person {
  constructor(name, age, address, position) {
    super(name, age, address);
    this.position = position;
  }
  getEmployeeDetails() {
    // Can access protected members from the base class
    return `Employee Name: ${this.name}, Position: ${
      this.position
    }, Address: ${this.getAddress()}`;
  }
}
const person = new Person("John", 30, "123 Elm Street");
console.log(person.name);
// console.log(person.age); -> Error age is private
// console.log(person.getAge()); -> Error getAge is private
const employee = new Employee("Alice", 25, "456 Oak Avenue", "Developer");
console.log(employee.name);
console.log(employee.position);
console.log(employee.getEmployeeDetails());
// console.log(employee.address);  -> Error adress is protected
// console.log(employee.getAddress()); -> Error getAddress is protected
