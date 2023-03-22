import { useState, useEffect } from "react";
import BookingForm from "../Components/BookingForm";
import BookingsList from "../Components/BookingsList";
import { getBookings } from "../Components/BookingService";

const BookingsContainer = () => {

  const [hotelBookings, setHotelBookings] = useState ([]);

  useEffect(() => {
    getBookings()
      .then(allBookings => {
        setHotelBookings(allBookings);
      });
  }, []);

  const addBooking = (booking) => {
    setHotelBookings([...hotelBookings, booking]);
  };

  const removeBooking = (id) => {
    const temp = hotelBookings.map(b => b);
    const indexToRemove = temp.map(b => b._id)
      .indexOf(id);
    console.log(indexToRemove);
    temp.splice(indexToRemove, 1);
    setHotelBookings(temp);
  };

  return (
    <div>
      <BookingForm addBooking={addBooking}/>
      <BookingsList bookings={hotelBookings} removeBooking={removeBooking}/>
    </div>
  );
};

export default BookingsContainer;
