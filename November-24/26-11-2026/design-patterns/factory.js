// With the factory pattern we can use factory functions in order to create new objects. A function is a factory function when it returns a new object without the use of the new keyword!

// Simple Syntax:
// No need to use class or new, making it accessible for functional programming enthusiasts.
// Dynamic Object Creation:
// Logic inside the factory function can handle complex customizations.
// Encapsulation:
// Hide the implementation details of the object from the outside world.


// Example 1 -- Factory Function with Conditional Logic

function createShape(type, ...params) {
  if (type === "circle") {
    return {
      type: "circle",
      radius: params[0],
      draw() {
        console.log(`Drawing a Circle with radius ${this.radius}`);
      },
    };
  } else if (type === "rectangle") {
    return {
      type: "rectangle",
      width: params[0],
      height: params[1],
      draw() {
        console.log(
          `Drawing a Rectangle with width ${this.width} and height ${this.height}`
        );
      },
    };
  } else if (type === "square") {
    return {
      type: "square",
      side: params[0],
      draw() {
        console.log(`Drawing a Square with side ${this.side}`);
      },
    };
  } else {
    throw new Error(`Shape type "${type}" is not recognized.`);
  }
}

const circle = createShape("circle", 10);
const rectangle = createShape("rectangle", 20, 10);
const square = createShape("square", 15);

circle.draw();
rectangle.draw();
square.draw();


// Example 2 -- Factory Function with Object Destructuring

function createCar({ make, model, year }) {
    return {
        make,
        model,
        year,
        drive() {
            console.log(`Driving a ${year} ${make} ${model}.`);
        },
    };
}

const car = createCar({ make: 'Toyota', model: 'Corolla', year: 2020 });
car.drive();




// A factory function ----> is a regular JavaScript function that creates and returns a new object. Unlike constructor functions, factory functions don’t require the use of the new keyword to instantiate objects. They are commonly used when you want a clean, simple way to create objects without dealing with complexities like prototypes or the this keyword.