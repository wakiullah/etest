'use client';

import { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

export default function Signup() {
    const [form, setForm] = useState({ fullName: '', email: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
                <h2 className="mb-4 text-center text-2xl font-bold">Sign Up</h2>
                <p className="mb-6 text-center text-gray-600">Join us by creating a free account</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative flex items-center">
                        <AiOutlineUser className="absolute left-3 text-gray-500" />
                        <input
                            type="text"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full rounded-md border border-gray-300 p-2 pl-10 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="relative flex items-center">
                        <AiOutlineMail className="absolute left-3 text-gray-500" />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="w-full rounded-md border border-gray-300 p-2 pl-10 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="relative flex items-center">
                        <AiOutlineLock className="absolute left-3 text-gray-500" />
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full rounded-md border border-gray-300 p-2 pl-10 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" /> Remember Me
                        </label>
                        <a href="#" className="text-green-600 hover:underline">Forgot Password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-md bg-green-600 py-2 text-white hover:bg-green-700"
                    >
                        Create Account
                    </button>
                </form>
                <div className="mt-4 flex items-center justify-center space-x-4">
                    <button className="flex w-1/2 items-center justify-center rounded-md border border-gray-300 py-2 text-gray-600 hover:bg-gray-100">
                        <FaFacebook className="mr-2 text-blue-600" /> Facebook
                    </button>
                    <button className="flex w-1/2 items-center justify-center rounded-md border border-gray-300 py-2 text-gray-600 hover:bg-gray-100">
                        <FaGoogle className="mr-2 text-red-600" /> Google
                    </button>
                </div>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account? <a href="#" className="text-green-600 hover:underline">Sign In</a>
                </p>
            </div>
        </div>
    );
}
