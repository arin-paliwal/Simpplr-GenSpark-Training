// The Prototype Pattern is a creational design pattern that allows you to create new objects by cloning existing objects instead of creating them from scratch. This is useful when the cost of creating an object is high, or when you want to maintain certain object configurations.

// Key Features:
// Cloning: The ability to duplicate an existing object.
// Independence: Cloned objects are independent of the original but share the same structure.


class CarPrototype {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    clone() {
        return new CarPrototype(this.make, this.model, this.color);
    }
}

const prototypeCar = new CarPrototype('Tesla', 'Model S', 'Red');

const car1 = prototypeCar.clone();
car1.color = 'Blue';

const car2 = prototypeCar.clone();
car2.color = 'Green';

console.log('Prototype Car:', prototypeCar);
console.log('Car 1:', car1);
console.log('Car 2:', car2);
