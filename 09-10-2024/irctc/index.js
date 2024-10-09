const bookings = [
  {
    trainName: "Rajdhani Express",
    destination: "Delhi",
    classType: "AC",
    availableSeats: 5,
  },
  {
    trainName: "Shatabdi Express",
    destination: "Mumbai",
    classType: "Sleeper",
    availableSeats: 0,
  },
  {
    trainName: "Duronto Express",
    destination: "Kolkata",
    classType: "AC",
    availableSeats: 10,
  },
  {
    trainName: "Garib Rath",
    destination: "Delhi",
    classType: "Sleeper",
    availableSeats: 15,
  },
];
const filterBookings = (bookings, filterCriteria) => {
  return bookings.filter(filterCriteria);
};

const filterCriteriaUsingClassType = (booking) => {
  return booking.classType === "AC"; 
};

const acBookings = filterBookings(bookings, filterCriteriaUsingClassType);

// console.log(acBookings);

function getTuplesWithMoreThan10Seats(bookings){
    return bookings.map((booking)=>[booking.trainName,booking.availableSeats])
    .filter((
        [trainNames,availableSeats]
    )=>availableSeats>=10);
}
function getBookingsByTrainTuples(bookings, trainTuples) {
  const trainNames = trainTuples.map(([trainName]) => trainName); 
  return bookings.filter((booking) => trainNames.includes(booking.trainName));
}

console.log(getTuplesWithMoreThan10Seats(bookings))
console.log(
  getBookingsByTrainTuples(
    bookings,
    getTuplesWithMoreThan10Seats(bookings)
  )
);