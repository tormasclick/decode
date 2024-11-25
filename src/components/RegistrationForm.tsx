"use client";

import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import close icon

interface RegistrationFormProps {
    onClose: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(''); // Reset message on submit

        try {
            const response = await fetch('https://decode.tormasclick.co.ke/wp-json/custom/v1/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message || 'Registration successful!');
            } else {
                setMessage(`Registration failed: ${data.message || 'Please try again.'}`);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
            <div className="bg-white rounded-lg p-6 w-full max-w-md relative" onClick={e => e.stopPropagation()}>
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <FaTimes size={24} />
                </button>
                <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-left">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-[#33ff00]"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-left">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-[#33ff00]"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-left">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:border-[#33ff00]"
                            required
                            autoComplete="off"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-[#33ff00] text-black p-2 rounded w-full transition-colors duration-300 hover:bg-[#2C324a] hover:text-white"
                    >
                        Register
                    </button>
                    {message && <p className={`mt-2 ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
