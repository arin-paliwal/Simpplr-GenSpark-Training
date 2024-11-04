let availableFlights = [
  { id: 1, flightNumber: "AI101", from: "New York", to: "London", price: 700 },
  { id: 2, flightNumber: "AI102", from: "London", to: "Paris", price: 120 },
  { id: 3, flightNumber: "AI103", from: "New York", to: "Paris", price: 650 },
  { id: 4, flightNumber: "AI104", from: "London", to: "Tokyo", price: 900 },
];

const flightsContainer = document.getElementById("flightsContainer");
const addFlightModal = document.getElementById("addFlightModal");
const openAddFlightModalBtn = document.getElementById("openAddFlightModal");
const closeAddFlightModalBtn = document.getElementById("closeAddFlightModal");
const addFlightForm = document.getElementById("addFlightForm");
const filterDestination = document.getElementById("filterDestination");
const applyFilterBtn = document.getElementById("applyFilterBtn");
const sortAscBtn = document.getElementById("sortAsc");
const sortDescBtn = document.getElementById("sortDesc");

function renderFlights(flights = availableFlights) {
  flightsContainer.innerHTML = "";
  flights.forEach((flight) => {
    const flightCard = document.createElement("div");
    flightCard.className = "bg-white rounded-lg border-2 p-4 w-[20rem] max-h-[12rem] flex flex-col";
    flightCard.innerHTML = `
        <h3 class="text-lg font-semibold">${flight.flightNumber}</h3>
        <p class="text-gray-600">From: ${flight.from}</p>
        <p class="text-gray-600">To: ${flight.to}</p>
        <p class="text-gray-600">Price: $${flight.price}</p>
        <button onclick="deleteFlight(${flight.id})" class="flex w-fit mt-2 bg-red-500 text-white p-2 rounded hover:bg-red-600">
             <img src="assets/trash.svg" alt="sort" class="w-5 h-5">
        </button>`;
    flightsContainer.appendChild(flightCard);
  });
}

function addFlight(e) {
  e.preventDefault();
  const newFlight = {
    id: Date.now(),
    flightNumber: addFlightForm.flightNumber.value,
    from: addFlightForm.from.value,
    to: addFlightForm.to.value,
    price: parseFloat(addFlightForm.price.value),
  };
  availableFlights.push(newFlight);
  renderFlights(availableFlights);
  renderDestinationDropdown();
  addFlightModal.classList.add("hidden");
  addFlightForm.reset();
}

function deleteFlight(id) {
  availableFlights = availableFlights.filter((flight) => flight.id !== id);
  renderFlights(availableFlights);
  renderDestinationDropdown();
}

function filterByDestination() {
  const destination = filterDestination.value;
  const filteredFlights = destination
    ? availableFlights.filter((flight) => flight.to === destination)
    : availableFlights;
  renderFlights(filteredFlights);
}

function sortFlightsAsc() {
  const sortedFlights = [...availableFlights].sort((a, b) => a.price - b.price);
  renderFlights(sortedFlights);
}

function sortFlightsDesc() {
  const sortedFlights = [...availableFlights].sort((a, b) => b.price - a.price);
  renderFlights(sortedFlights);
}

openAddFlightModalBtn.addEventListener("click", () => {
  addFlightModal.classList.remove("hidden");
});

closeAddFlightModalBtn.addEventListener("click", () => {
  addFlightModal.classList.add("hidden");
});

function renderDestinationDropdown() {
  const destinations = [
    ...new Set(availableFlights.map((flight) => flight.to)),
  ];
  filterDestination.innerHTML = `<option value="">Select Destination</option>`;
  destinations.forEach((destination) => {
    const option = document.createElement("option");
    option.value = destination;
    option.textContent = destination;
    filterDestination.appendChild(option);
  });
}

renderFlights();
renderDestinationDropdown();

 addFlightForm.addEventListener("submit", addFlight);
applyFilterBtn.addEventListener("click", filterByDestination);
sortAscBtn.addEventListener("click", sortFlightsAsc);
sortDescBtn.addEventListener("click", sortFlightsDesc);
const searchFlightNumber = document.getElementById("searchFlightNumber");

function searchByFlightNumber() {
  const searchQuery = searchFlightNumber.value.trim().toUpperCase();
  if (searchQuery) {
    const searchedFlights = availableFlights.filter((flight) =>
      flight.flightNumber.toUpperCase().includes(searchQuery)
    );
    renderFlights(searchedFlights);
  } else {
    renderFlights(availableFlights);
  }
}

searchFlightNumber.addEventListener("input", searchByFlightNumber);
