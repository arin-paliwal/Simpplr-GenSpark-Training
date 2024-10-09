// ----------------------PART 1----------------------

// Task 1 -- Defining Array
var availableFlights = [
    { flightNumber: "AI101", from: "New York", to: "London", price: 700 },
    { flightNumber: "AI102", from: "London", to: "Paris", price: 120 },
    { flightNumber: "AI103", from: "New York", to: "Paris", price: 650 },
    { flightNumber: "AI104", from: "London", to: "Tokyo", price: 900 },
];

// Task 2 -- Finding Flight &  Booking Flight
function searchFlight(from, to) {
    return availableFlights.filter(
        (flight) => flight.from === from && flight.to === to
    );
}
function bookFlight(flightNumber) {
    var flight = availableFlights.find(
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

var flights = searchFlight("New York", "London");
console.log(flights);
bookFlight("AI101");

// // ----------------------PART 2----------------------
// // Task 3 & 4 -- Wrapping in IIFE & Envoking it
// // Immediately Invoked Function Expression (IIFE)
(function () {
    var availableFlights = [
        { flightNumber: "AI101", from: "New York", to: "London", price: 700 },
        { flightNumber: "AI102", from: "London", to: "Paris", price: 120 },
        { flightNumber: "AI103", from: "New York", to: "Paris", price: 650 },
        { flightNumber: "AI104", from: "London", to: "Tokyo", price: 900 },
    ];

    function searchFlight(from, to) {
        return availableFlights.filter(
            (flight) => flight.from === from && flight.to === to
        );
    }

    function bookFlight(flightNumber) {
        var flight = availableFlights.filter(
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

    var flights = searchFlight("New York", "London");
    console.log(flights);
    bookFlight("AI101");
})();

// // ----------------------PART 3----------------------
// // Task 5 -- Adding Flight
function addFlight(flightNumber, from, to, price) {
    availableFlights.push({ flightNumber, from, to, price });
    console.log(`Flight ${flightNumber} added successfully.`);
}

addFlight("AI105", "Tokyo", "New York", 1200);

// // Task 6 -- Removing Flight
function removeFlight(flightNumber) {
    var flight = availableFlights.filter(
        (flight) => flight.flightNumber === flightNumber
    );
    if (flight) {
        availableFlights = availableFlights.filter(
            (flight) => flight.flightNumber !== flightNumber
        );
        console.log(`Flight ${flightNumber} removed successfully.`);
    } else {
        console.log(`Flight ${flightNumber} not found.`);
    }
}
removeFlight("AI105");
// // ----------------------BONUS PART----------------------
function sortFlightsByPrice() {
    return availableFlights.slice().sort((a, b) => a.price - b.price);
}
function filterFlightsByPrice(maxPrice) {
    return availableFlights.filter((flight) => flight.price <= maxPrice);
}
var sortedFlights = sortFlightsByPrice();
console.log(sortedFlights);

var affordableFlights = filterFlightsByPrice(700);
console.log(affordableFlights);
