import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../components/Auth/AuthContext';
import "./Login.css";

const LoginForm = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormData({
            email: "",
            password: "",
        });
    };

    const handleLogin = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:4000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const userData = await response.json();
                const { token, email } = userData;
                login({ token, email });
                    navigate('/');
            } else {
                // Handle login failure
                toast.error('Login failed!', {
                    autoClose: 500,
                    onClose: resetForm,
                });
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('Error during login', {
                autoClose: 500,
                onClose: resetForm,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-form-container">
            <div className="login-form">
                <h2>Login</h2>
                <form>
                    {/* Your form elements */}
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

                    <button type="button" onClick={handleLogin} disabled={loading}>
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                </form>
                <p>
                    Don't have an account?{' '}
                    <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
