import React, { useState } from "react";
import { deleteBooking, updateBooking } from "./BookingService";

const Booking = ({ booking, removeBooking }) => {

    const [updateClicked, setUpdateClicked] = useState(false);
    const handleUpdate = () => {
        setUpdateClicked(!updateClicked);
    };

    const [name, setName] = useState(booking.name);
    const [email, setEmail] = useState(booking.email);
    const [date, setDate] = useState(booking.date);
    const [checkedIn, setCheckedIn] = useState(booking.checked_in);

    const handleNameChange = e => setName(e.target.value);
    const handleEmailChange = e => setEmail(e.target.value);
    const handleDateChange = e => setDate(e.target.value);
    const handleCheckedInChange = e => setCheckedIn(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const updatedBooking = {
            name,
            email,
            date,
            checkedIn
        };
        console.log(updatedBooking);
        updateBooking(updatedBooking, booking._id);
        setUpdateClicked(!updateClicked);
    };

    const handleDelete = () => {
        deleteBooking(booking._id)
            .then(() => removeBooking(booking._id));
    };

    return (
        <>
        { updateClicked
        ?
        <>
            <form onSubmit={handleSubmit} className="update-form">
                <div className="form-wrap">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" value={date} onChange={handleDateChange} />
                </div>
                <div className="form-wrap">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} required />
                </div>
                <div className="form-wrap">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div>
                    <label htmlFor="checked_in">Checked in</label>
                    <input type="radio" checked={checkedIn === true} id="checked_in" name="checked_in" onChange={handleCheckedInChange} value="true"/>
                </div>
                <div>
                    <label htmlFor="checked_in">Checked out</label>
                    <input type="radio" checked={checkedIn === false} id="checked_in" name="checked_in" onChange={handleCheckedInChange} value="false"/>
                </div>
                <input id="button" type="submit" value="Update Booking" />
            </form>
            <hr></hr>
        </>
        :
        <>
            <p className="booking-date">{booking.date}</p>
            <p className="booking-name">{booking.name}</p>
            <p className="booking-email">{booking.email}</p>
            <p className="booking-checked-in">Checked in: {booking.checked_in}</p>
            <button className="button" onClick={handleUpdate}>Edit</button>
            <button className="button" onClick={handleDelete}>Delete</button>
            <hr></hr>
        </>
        }
        </>
    );
};

export default Booking;
