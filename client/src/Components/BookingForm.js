import React, { useState } from "react";
import { postBooking } from "./BookingService";

const BookingForm = ({ addBooking }) => {
    const defaultFormData = { checked_in: "false" };

    const [formData, setFormData] = useState(defaultFormData);

    const onChange = (e) => {
        formData[e.target.name] = e.target.value;
        setFormData(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        postBooking(formData).then(data => {
            addBooking(data);
        });

        setFormData(defaultFormData);
        e.target.reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit} id="booking-form" method="post">
                <h2>Add a new booking</h2>
                <div>
                    <label htmlFor="date">Date: </label>
                    <br></br>
                    <input type="date" id="date" name="date" onChange={onChange} value={formData.date} required />
                </div>
                <div>
                    <label htmlFor="name">Name: </label>
                    <br></br>
                    <input type="text" id="name" name="name" onChange={onChange} value={formData.name} required />
                </div>
                <div>
                    <label htmlFor="email">Email address: </label>
                    <br></br>
                    <input type="text" id="email" name="email" onChange={onChange} value={formData.email} required />
                </div>
                <div>
                    <label htmlFor="checked_in">Checked in</label>
                    <input type="radio" id="checked_in" name="checked_in" onChange={onChange} value="true" />
                </div>
                <div>
                    <label htmlFor="checked_out">Checked out</label>
                    <input type="radio" defaultChecked id="checked_out" name="checked_in" onChange={onChange} value="false" />
                </div>
                <input type="submit" value="Add booking" />
            </form>
        </>
    );
};

export default BookingForm;
