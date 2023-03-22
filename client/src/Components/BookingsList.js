import React from "react";
import Booking from "./Booking.js";

const BookingsList = ({ bookings, removeBooking }) => {
    
    const allBookings = bookings.map(booking => {
        return <Booking booking={booking} key={booking._id} removeBooking={removeBooking} />
    });

    return (
        <>
            <h2>Existing Bookings</h2>
            <hr></hr>
            {allBookings}
        </>
    );
};

export default BookingsList;
