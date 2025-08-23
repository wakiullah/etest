'use client';
import Link from 'next/link';
import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/firebase"; import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const notify = () => toast.success("Login Successful!", {
        position: "top-center",
    })

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (email === 'wakiullah@admin.com' && password === 'Wakiullah') {
            notify();
            router.push('/dashboard');
            setLoading(false);
            return;
        }

        try {
            // Log in the user with email and password
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            notify()
            router.push('/')
        } catch (err) {
            console.error('Error logging in:', err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setError('');
        setLoading(true);
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log('Google login successful:', result.user);
            router.push('/'); // Redirect to home page
            notify()

        } catch (err) {
            console.error('Error with Google login:', err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">

                <div className='bg-green-200 border p-3 rounded'>
                    <p>To access the /dashboard, log in with the following email and password:
                        <br />
                        Email: <span className='font-semibold select-all'>wakiullah@admin.com</span>
                        <br />
                        Password: <span className='font-semibold select-all'>Wakiullah</span></p>
                </div>
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                {error && <p className="text-sm text-center text-red-600">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full px-4 py-2 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-300 ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <div className="flex items-center justify-center mt-4">
                    <button
                        onClick={handleGoogleLogin}
                        className="flex items-center justify-center w-full px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-100"
                    >
                        <FaGoogle className="mr-2" /> <span>Login with Google</span>
                    </button>
                </div>
                <p className="text-sm text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-blue-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}