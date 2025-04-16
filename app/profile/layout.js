'use client';

import { useEffect, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase"; // Import Firebase auth

export default function ProfileLayout({ children }) {
    const [loading, setLoading] = useState(true); // State to handle loading
    const [user, setUser] = useState(null); // State to store user data
    const router = useRouter();

    useEffect(() => {
        // Listen for authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser); // User is logged in
            } else {
                redirect('/login')
            }
            setLoading(false); // Stop loading once the state is updated
        });

        return () => unsubscribe(); // Cleanup the listener on unmount
    }, [router]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-gray-600">Loading...</p>
            </div>
        );
    }

    if (!user) {
        return null; // Prevent rendering if user is not logged in
    }

    return (
        <div>
            {children} {/* Render the profile page content */}
        </div>
    );
}