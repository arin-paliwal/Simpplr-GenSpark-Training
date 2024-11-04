class Person {
  public name: string; // accessible everywhere
  private age: number; // accessible only within this class
  protected address: string; // accessible within this class and subclasses

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  public getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
  }

  private getAge(): number {
    return this.age; // accessible only within this class
  }

  protected getAddress(): string {
    return this.address; // accessible within this class and subclasses
  }
}

class Employee extends Person {
  public position: string;

  constructor(name: string, age: number, address: string, position: string) {
    super(name, age, address);
    this.position = position;
  }

  public getEmployeeDetails(): string {
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
