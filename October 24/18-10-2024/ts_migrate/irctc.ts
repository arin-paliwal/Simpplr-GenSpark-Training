type Booking_ = {
  trainName_: string;
  destination_: string;
  classType_: string;
  availableSeats_: number;
};

interface BookingInterface {
    trainName_: string;
    destination_: string;
    classType_: string;
    availableSeats_: number;
}
const bookings_: Booking_[] = [
  {
    trainName_: "Rajdhani Express",
    destination_: "Delhi",
    classType_: "AC",
    availableSeats_: 5,
  },
  {
    trainName_: "Shatabdi Express",
    destination_: "Mumbai",
    classType_: "Sleeper",
    availableSeats_: 0,
  },
  {
    trainName_: "Duronto Express",
    destination_: "Kolkata",
    classType_: "AC",
    availableSeats_: 10,
  },
  {
    trainName_: "Garib Rath",
    destination_: "Delhi",
    classType_: "Sleeper",
    availableSeats_: 15,
  },
];

const filterBookings_ = (
  bookings_: Booking_[],
  filterCriteria_: (booking_: Booking_) => boolean
): Booking_[] => {
  return bookings_.filter(filterCriteria_);
};

const filterCriteriaUsingDestination_ = (booking_: Booking_): boolean =>
  booking_.destination_ === "Kolkata";

const filterCriteriaUsingClassType_ = (booking_: Booking_): boolean =>
  booking_.classType_ === "AC";

const filterCriteriaUsingAvailableSeats_ = (booking_: Booking_): boolean =>
  booking_.availableSeats_ > 0;

const getAllTheTrainNames_ = (bookings_: Booking_[]): string[] =>
  bookings_.map((booking_) => booking_.trainName_);

const totalAvailableSeats_ = (bookings_: Booking_[]): number =>
  bookings_.reduce((acc_, booking_) => acc_ + booking_.availableSeats_, 0);

const getTuplesBasedOnAvailableSeats_ = (
  bookings_: Booking_[]
): (string | number)[][] =>
  bookings_
    .map((booking_) => [booking_.trainName_, booking_.availableSeats_])
    .filter((tuple_) => tuple_[1] >= (10 as number | string));

console.log(getTuplesBasedOnAvailableSeats_(bookings_));

const getBookingsBasedOnAvailableTuples_ = (
  bookings_: Booking_[],
  tuples_: (string | number)[][]
): Booking_[] => {
  return tuples_.map((tuple_) => {
    let obj_: BookingInterface = {
      trainName_: "",
      destination_: "",
      classType_: "",
      availableSeats_: 0,
    };
    bookings_.forEach((booking_) => {
      if (
        booking_.trainName_ === tuple_[0] &&
        booking_.availableSeats_ === tuple_[1]
      ) {
        obj_ = booking_;
      }
    });
    return obj_;
  });
};

console.log(
  getBookingsBasedOnAvailableTuples_(
    bookings_,
    getTuplesBasedOnAvailableSeats_(bookings_)
  )
);
