const bookings = [
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
// Common function to filter flights based on a condition
function filterFlights(flights, condition) {
  return flights.filter(condition);
}

// Example usage: filter flights that have available seats
const availableFlights = filterFlights(
  bookings,
  (flight) => flight.availableSeats > 0
);
console.log("Available Flights:", availableFlights);

// 2. Sort Flights by Price
function sortFlights(flights, comparator) {
  return [...flights].sort(comparator);
}

// Example usage: sort flights by available seats
const sortedBySeats = sortFlights(
  bookings,
  (a, b) => a.availableSeats - b.availableSeats
);
console.log("Sorted Flights by Seats:", sortedBySeats);

// 3. Reduce to Calculate Total Revenue
function calculateTotalRevenue(flights) {
  return flights.reduce(
    (total, flight) => total + flight.availableSeats * flight.price,
    0
  );
}

// Example usage
const totalRevenue = calculateTotalRevenue(bookings);
console.log("Total Revenue:", totalRevenue);

// 4. Multiple Filters
function composeFilters(...conditions) {
  return (flight) => conditions.every((predicate) => predicate(flight));
}

// Example usage
const composedFilter = composeFilters(
  (flight) => flight.destination === "Delhi",
  (flight) => flight.availableSeats > 0
);
const filteredFlights = filterFlights(bookings, composedFilter);
console.log("Filtered Flights (Delhi and Available):", filteredFlights);

// 5. Find Flight by ID
function findFlightById(flights, id) {
  return flights.find((flight) => flight.flightId === id);
}

// Example usage: find flight with ID 3
const flightById = findFlightById(bookings, 3);
console.log("Flight with ID 3:", flightById);
