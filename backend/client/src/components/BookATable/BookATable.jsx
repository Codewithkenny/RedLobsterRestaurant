import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './BookATable.css';
import { useAuth } from '../../components/Auth/AuthContext';

const BookTable = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [bookingData, setBookingData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
    });

   

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            // Redirect to the login page if not logged in
            toast.error('Please log in before booking a table.');
            navigate('/login');
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:4000/api/bookings', bookingData);
            console.log(response.data);
            toast.success('Booking successful!');
            
            navigate('/');
        } catch (error) {
            console.error('Error creating booking:', error);
            toast.error('Booking failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="book-table-container">
            <h2>Book a Table</h2>
            <form onSubmit={handleSubmit}>
                {/* Your form elements */}
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={bookingData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="name">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={bookingData.date}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="time">Time:</label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={bookingData.time}
                    onChange={handleChange}
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? 'Booking...' : 'Book Now'}
                </button>
            </form>
        </div>
    );
};

export default BookTable;
