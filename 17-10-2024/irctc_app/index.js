let trains = [
  {
    id: 1,
    trainName: "Rajdhani Express",
    destination: "Delhi",
    classType: "AC",
    availableSeats: 5,
  },
  {
    id: 2,
    trainName: "Shatabdi Express",
    destination: "Mumbai",
    classType: "Sleeper",
    availableSeats: 0,
  },
  {
    id: 3,
    trainName: "Duronto Express",
    destination: "Kolkata",
    classType: "AC",
    availableSeats: 10,
  },
  {
    id: 4,
    trainName: "Garib Rath",
    destination: "Delhi",
    classType: "Sleeper",
    availableSeats: 15,
  },
];

let bookings = [];

const trainsContainer = document.getElementById("trainsContainer");
const bookingsContainer = document.getElementById("bookingsContainer");
const addTrainModal = document.getElementById("addTrainModal");
const addBookingModal = document.getElementById("addBookingModal");
const openAddTrainModalBtn = document.getElementById("openAddTrainModal");
const closeAddTrainModalBtn = document.getElementById("closeAddTrainModal");
const openAddBookingModalBtn = document.getElementById("openAddBookingModal");
const closeAddBookingModalBtn = document.getElementById("closeAddBookingModal");
const addTrainForm = document.getElementById("addTrainForm");
const addBookingForm = document.getElementById("addBookingForm");

function renderTrains() {
  trainsContainer.innerHTML = "";
  trains.forEach((train) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-lg shadow p-4 cursor-pointer";
    card.innerHTML = `
      <h3 class="text-lg font-semibold">${train.trainName}</h3>
      <p class="text-gray-600">Destination: ${train.destination}</p>
      <p class="text-gray-600">Class Type: ${train.classType}</p>
      <p class="text-gray-600">Available Seats: ${train.availableSeats}</p>
      <button onclick="deleteTrain(${train.id})" class="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Delete Train
      </button>
    `;
    trainsContainer.appendChild(card);
  });
}

function renderBookings() {
  console.log(bookings);
  bookingsContainer.innerHTML = "";
  bookings.forEach((booking) => {
    const train = trains.find((t) => t.id === booking.trainId);
    const card = document.createElement("div");
    card.className = "bg-white rounded-lg shadow p-4";
    card.innerHTML = `
      <h3 class="text-lg font-semibold">${train.trainName} (Booking)</h3>
      <p class="text-gray-600">Destination: ${train.destination}</p>
      <p class="text-gray-600">Class Type: ${train.classType}</p>
      <p class="text-gray-600">Seats Booked: ${booking.seatsBooked}</p>
      <button onclick="deleteBooking(${booking.id})" class="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Delete Booking
      </button>
    `;
    bookingsContainer.appendChild(card);
  });
}

function addTrain(e) {
  e.preventDefault();
  const newTrain = {
    id: Date.now(),
    trainName: addTrainForm.trainName.value,
    destination: addTrainForm.destination.value,
    classType: addTrainForm.classType.value,
    availableSeats: parseInt(addTrainForm.availableSeats.value),
  };
  trains.push(newTrain);
  renderTrains();
  addTrainModal.classList.add("hidden");
}

function addBooking(e) {
  e.preventDefault();
  const trainId = parseInt(addBookingForm.trainId.value);
  const selectedTrain = trains.find((t) => t.id === trainId);

  if (selectedTrain && selectedTrain.availableSeats > 0) {
    const newBooking = {
      id: Date.now(),
      trainId: selectedTrain.id,
      seatsBooked: 1,
    };
    bookings.push(newBooking);
    selectedTrain.availableSeats -= 1; 
    renderTrains();
    renderBookings();
    addBookingModal.classList.add("hidden");
  }
}

function deleteTrain(id) {
  trains = trains.filter((train) => train.id !== id);
  bookings = bookings.filter((booking) => booking.trainId !== id);
  renderTrains();
  renderBookings();
}

function deleteBooking(id) {
  const booking = bookings.find((b) => b.id === id);
  const selectedTrain = trains.find((t) => t.id === booking.trainId);
  if (selectedTrain) {
    selectedTrain.availableSeats += booking.seatsBooked;
  }
  bookings = bookings.filter((booking) => booking.id !== id);
  renderTrains();
  renderBookings();
}

function renderAvailableTrainsInDropdown() {
  const trainSelect = addBookingForm.trainId;
  trainSelect.innerHTML = "";
  trains.forEach((train) => {
    const option = document.createElement("option");
    option.value = train.id;
    option.text = `${train.trainName} (${train.destination}) - Seats: ${train.availableSeats}`;
    if (train.availableSeats === 0) {
      option.disabled = true;
    }
    trainSelect.appendChild(option);
  });
}

openAddBookingModalBtn.addEventListener("click", () => {
  renderAvailableTrainsInDropdown(); 
  addBookingModal.classList.remove("hidden");
});

closeAddBookingModalBtn.addEventListener("click", () => {
  addBookingModal.classList.add("hidden");
});

openAddTrainModalBtn.addEventListener("click", () =>
  addTrainModal.classList.remove("hidden")
);

closeAddTrainModalBtn.addEventListener("click", () =>
  addTrainModal.classList.add("hidden")
);

addTrainForm.addEventListener("submit", addTrain);
addBookingForm.addEventListener("submit", addBooking);

renderTrains();
renderBookings();
