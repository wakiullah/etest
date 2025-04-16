'use client';
import md5 from 'md5'; // Import md5 for hashing email
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase"; // Import Firebase auth


export default function ProfilePage() {
    const [user, setUser] = useState(null); // State to store user data
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Listen for authentication state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // Extract user data
                const { displayName, email, photoURL } = currentUser;
                setUser({
                    name: displayName || 'Anonymous User', // Fallback if displayName is null
                    email: email,
                    image: photoURL || 'https://via.placeholder.com/150', // Fallback if photoURL is null
                });
            } else {
                setUser(null); // No user is logged in
            }
            setLoading(false); // Stop loading once the state is updated
        });

        return () => unsubscribe(); // Cleanup the listener on unmount
    }, []);

    const getGravatarUrl = (email) => {
        const hash = md5(email.trim().toLowerCase());
        return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-gray-600">Loading...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-gray-600">You are not logged in. Please log in to view your profile.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>
            <p className="text-gray-600 mb-4">Email: {user.email}</p>
            <img
                src={getGravatarUrl(user.email) || user.image}
                alt={`${user.name}'s profile`}
                className="rounded-full w-36 h-36 shadow-md"
            />
        </div>
    );
}