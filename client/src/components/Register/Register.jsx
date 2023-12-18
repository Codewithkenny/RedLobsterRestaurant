import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

const RegisterForm = ({ onSwitchForm }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, confirmPassword } = formData;

        if (password === confirmPassword) {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:4000/api/users/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                if (response.ok) {
                    // Registration successful
                    toast.success('Registration successful! Redirecting to login...');
                    setTimeout(() => {
                        navigate('/login');
                    }, 1000);
                } else {
                    // Registration failed
                    toast.error('Registration failed. Please try again.');
                }
            } catch (error) {
                console.error('Error during registration:', error.message);
                toast.error('Error during registration. Please try again.');
            } finally {
                setLoading(false);
            }
        } else {
            console.error('Passwords do not match');
            toast.error('Passwords do not match.');
        }
    };

    return (
        <div className="register-form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Register'}
                </button>
            </form>

            <p>
                Already have an account?
                <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default RegisterForm;
