// let age = 20;
// let _name: string = "John";
// console.log(_name + " is " + age + " years old.");
// const number: number = 10;
// const number2=20;
// console.log(number + number2);

// let arin='a' as "b"
// arin

// let a:"Parisha"
// a="b" as "Parisha"
// a=1 as "Parisha"


// let paliwal=4 as const
// paliwal=5
// paliwal=age as 4
// age=paliwal
// paliwal




let tempature: any = 19;
let humidity: number = 20;

tempature = humidity; // Valid
humidity = tempature; // Valid because tempature is any
humidity = 79; // Valid because 79 is a number
humidity = 88; // Valid because 88 is a number
humidity = 88 as 78; // Invalid, causes TypeScript error
humidity = 79 as 79; // Valid, but unusual behavior
