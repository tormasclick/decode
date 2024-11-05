// src/components/RegistrationForm.tsx

"use client";

import React, { useState, useEffect } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(''); // Reset message on submit

        try {
            const response = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/users/register', {
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
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="username" className="block">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="border border-gray-300 p-2 rounded w-full"
                    required
                    autoComplete="off"
                />
            </div>
            <div>
                <label htmlFor="email" className="block">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border border-gray-300 p-2 rounded w-full"
                    required
                    autoComplete="off"
                />
            </div>
            <div>
                <label htmlFor="password" className="block">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="border border-gray-300 p-2 rounded w-full"
                    required
                    autoComplete="off"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
            {message && <p className={`mt-2 ${response.ok ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
        </form>
    );
};

export default RegistrationForm;