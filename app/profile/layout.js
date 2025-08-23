'use client';

import { useEffect, useState } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase"; 

export default function ProfileLayout({ children }) {
    const [loading, setLoading] = useState(true); 
    const [user, setUser] = useState(null); 
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser); 
            } else {
                redirect('/login')
            }
            setLoading(false); 
        });

        return () => unsubscribe();
    }, [router]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-gray-600">Loading...</p>
            </div>
        );
    }

    if (!user) {
        return null
    }

    return (
        <div>
            {children} 
        </div>
    );
}