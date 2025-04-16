'use client';
import React, { useEffect, useState } from 'react';
import md5 from 'md5'; // Import MD5 library
import logo from '@/public/assests/logo.png';
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from 'next/link';
import { auth } from "@/firebase/firebase"; // Import Firebase auth
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, setUser] = useState(null); // State to track the logged-in user

    useEffect(() => {
        // Handle scroll effect
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Listen for authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // Set the user if logged in, otherwise null
        });
        return () => unsubscribe(); // Cleanup the listener on unmount
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth); // Sign out the user
            setUser(null); // Clear the user state
        } catch (err) {
            console.error("Error logging out:", err.message);
        }
    };

    // Generate Gravatar URL
    const getGravatarUrl = (email) => {
        const hash = md5(email.trim().toLowerCase());
        return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
    };

    return (
        <>
            <nav className={`shadow-sm px-4 bg-white p-2 flex justify-between sticky top-0 items-center fixed top-0 w-full transition-all ${isScrolled ? "shadow-lg p-3" : "p-2"} z-[99]`}>
                <Link href={'/'} className="text-xl font-bold">
                    <Image src={logo} width={50} height={50} alt="Ekkhuny Somoy Logo" />
                </Link>
                <div className="hidden font-bold md:flex space-x-6">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/blog" className="hover:underline">Blog</Link>
                    <Link href="/courses" className="hover:underline">Courses</Link>
                    <Link href="/hireus" className="hover:underline">Hire Us</Link>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    {user ? (
                        <><Link href="/profile">
                                <img
                                    src={getGravatarUrl(user.email)}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full cursor-pointer"
                                />
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="border-[1px] border-primary px-5 hover:bg-primary hover:text-white text-primary py-[6px] rounded"
                            >
                                Logout
                            </button>
                            
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <button className="border-[1px] border-primary px-5 hover:bg-primary hover:text-white text-primary py-[6px] rounded">
                                    Login
                                </button>
                            </Link>
                            <Link href="/signup">
                                <button className="border-[1px] hover:border-[1px] border-primary px-5 bg-primary hover:bg-white hover:text-primary text-white py-[6px] rounded">
                                    Register
                                </button>
                            </Link>
                        </>
                    )}
                </div>
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xl cursor-pointer">
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-[100] transition-transform transform ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
            >
                <div className="bg-white w-3/4 h-full shadow-lg flex flex-col items-start p-6 space-y-6">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-2xl self-end mb-4"
                    >
                        <FiX />
                    </button>
                    <Link
                        href="/"
                        className="text-lg font-medium text-gray-800 hover:text-primary transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/courses"
                        className="text-lg font-medium text-gray-800 hover:text-primary transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Courses
                    </Link>
                    <Link
                        href="/blog"
                        className="text-lg font-medium text-gray-800 hover:text-primary transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/dashboard"
                        className="text-lg font-medium text-gray-800 hover:text-primary transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        Dashboard
                    </Link>
                    <div className="mt-auto w-full">
                        {user ? (
                            <>
                                <Link href="/profile" onClick={() => setMenuOpen(false)}>
                                    <img
                                        src={getGravatarUrl(user.email)}
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full mx-auto cursor-pointer"
                                    />
                                </Link>
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setMenuOpen(false);
                                    }}
                                    className="w-full border-[1px] border-primary px-5 hover:bg-primary hover:text-white text-primary py-[6px] rounded mb-4"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login" onClick={() => setMenuOpen(false)}>
                                    <button className="w-full border-[1px] border-primary px-5 hover:bg-primary hover:text-white text-primary py-[6px] rounded mb-4">
                                        Login
                                    </button>
                                </Link>
                                <Link href="/signup" onClick={() => setMenuOpen(false)}>
                                    <button className="w-full border-[1px] hover:border-[1px] border-primary px-5 bg-primary hover:bg-white hover:text-primary text-white py-[6px] rounded">
                                        Register
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
