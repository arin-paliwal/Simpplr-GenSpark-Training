interface Flight {
  flightId: number;
  flightName: string;
  destination: string;
  classType: string;
  availableSeats: number;
  price: number;
}

interface SimpleFlight {
  flightNumber: string;
  from: string;
  to: string;
  price: number;
}

const bookings: Flight[] = [
  {
    flightId: 1,
    flightName: "Rajdhani Express",
    destination: "Delhi",
    classType: "AC",
    availableSeats: 5,
    price: 2000,
  },
  {
    flightId: 2,
    flightName: "Shatabdi Express",
    destination: "Mumbai",
    classType: "Sleeper",
    availableSeats: 0,
    price: 1500,
  },
  {
    flightId: 3,
    flightName: "Duronto Express",
    destination: "Kolkata",
    classType: "AC",
    availableSeats: 10,
    price: 1800,
  },
  {
    flightId: 4,
    flightName: "Garib Rath",
    destination: "Delhi",
    classType: "Sleeper",
    availableSeats: 15,
    price: 1200,
  },
];

// 1. Filter Available Flights
// Generic function with proper typing
function filterFlights<T>(
  flights: T[],
  condition: (flight: T) => boolean
): T[] {
  return flights.filter(condition);
}

const availableFlights = filterFlights(
  bookings,
  (flight) => flight.availableSeats > 0
);
console.log("Available Flights:", availableFlights);

// 2. Sort Flights by Price
// Generic sort function with typing
function sortFlights<T>(flights: T[], comparator: (a: T, b: T) => number): T[] {
  return [...flights].sort(comparator);
}

const sortedBySeats = sortFlights(
  bookings,
  (a, b) => a.availableSeats - b.availableSeats
);
console.log("Sorted Flights by Seats:", sortedBySeats);

function calculateTotalRevenue(flights: Flight[]): number {
  return flights.reduce(
    (total, flight) => total + flight.availableSeats * flight.price,
    0
  );
}

const totalRevenue = calculateTotalRevenue(bookings);
console.log("Total Revenue:", totalRevenue);

function composeFilters<T>(
  ...conditions: ((flight: T) => boolean)[]
): (flight: T) => boolean {
  return (flight) => conditions.every((predicate) => predicate(flight));
}

const composedFilter = composeFilters(
  (flight: Flight) => flight.destination === "Delhi",
  (flight: Flight) => flight.availableSeats > 0
);
const filteredFlights = filterFlights(bookings, composedFilter);
console.log("Filtered Flights (Delhi and Available):", filteredFlights);

function findFlightById(flights: Flight[], id: number): Flight | undefined {
  return flights.find((flight) => flight.flightId === id);
}

const flightById = findFlightById(bookings, 3);
console.log("Flight with ID 3:", flightById);

// ----------------------PART 1----------------------

// Task 1 -- Defining Array with typed structure
let availableFlightsList: SimpleFlight[] = [
  { flightNumber: "AI101", from: "New York", to: "London", price: 700 },
  { flightNumber: "AI102", from: "London", to: "Paris", price: 120 },
  { flightNumber: "AI103", from: "New York", to: "Paris", price: 650 },
  { flightNumber: "AI104", from: "London", to: "Tokyo", price: 900 },
];

// Task 2 -- Finding Flight & Booking Flight
function searchFlight(from: string, to: string): SimpleFlight[] {
  return availableFlightsList.filter(
    (flight) => flight.from === from && flight.to === to
  );
}

function bookFlight(flightNumber: string): void {
  const flight = availableFlightsList.find(
    (flight) => flight.flightNumber === flightNumber
  );
  if (flight) {
    console.log(
      `Flight ${flightNumber} from ${flight.from} to ${flight.to} booked successfully.`
    );
  } else {
    console.log(`Flight ${flightNumber} not found.`);
  }
}

// Example usage
const flights = searchFlight("New York", "London");
console.log(flights);
bookFlight("AI101");

// ----------------------PART 3----------------------
// Task 5 -- Adding Flight
function addFlight(
  flightNumber: string,
  from: string,
  to: string,
  price: number
): void {
  availableFlightsList.push({ flightNumber, from, to, price });
  console.log(`Flight ${flightNumber} added successfully.`);
}

addFlight("AI105", "Tokyo", "New York", 1200);

// ----------------------BONUS PART----------------------
// Sort and Filter functions with types

function bubbleSortFlightsByPrice(flights: SimpleFlight[]): SimpleFlight[] {
  let n = flights.length;
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (flights[i].price > flights[i + 1].price) {
        [flights[i], flights[i + 1]] = [flights[i + 1], flights[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  return flights;
}

function filterFlightsByPrice(maxPrice: number): SimpleFlight[] {
  return availableFlightsList.filter((flight) => flight.price <= maxPrice);
}

const sortedFlights = bubbleSortFlightsByPrice(availableFlightsList);
console.log(sortedFlights);

const affordableFlights = filterFlightsByPrice(700);
console.log(affordableFlights);
