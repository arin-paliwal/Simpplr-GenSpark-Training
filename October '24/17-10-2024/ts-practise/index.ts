type CarType = {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
};

interface CarInterface {
  make: string;
  model: string;
  year: number;
}

const Car: CarInterface = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

// I want to create a type Truck which contains all the properties of Car + extra property of weightCanCarry

// Option 1: Using Intersection Type
// type TruckType = CarType & {
//   weightCanCarry: number;
// };

// Option 2: Using Interface Extension
interface TruckInterface extends CarInterface {
  weightCanCarry: number;
}

// Creating a Truck object using TruckInterface
const Truck: TruckInterface = {
  make: "Ford",
  model: "F-150",
  year: 2022,
  weightCanCarry: 5000,
};


console.log(Truck);




type CarTypeA = {
    type: 'car';
    make: string;
    model: string;
    year: number;
    chargeVoltage?: number;
    arin:any
}
type TruckTypeA = CarTypeA & {
    arin:string;
    model:"corolla" | "camry";
    chargeVoltage?:2;
}

const a:TruckTypeA = {
    type: 'car',
    make: 'Toyota',
    model: 'camry',
    year: 2020,
    arin: '8',
    chargeVoltage:2
}