// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"; // Authentication

const firebaseConfig = {
    apiKey: "AIzaSyA5I9nDrctiq6eneKViph3w2yxqysvaUtE",
    authDomain: "esomoy-b5e86.firebaseapp.com",
    projectId: "esomoy-b5e86",
    storageBucket: "esomoy-b5e86.firebasestorage.app",
    messagingSenderId: "1096521765746",
    appId: "1:1096521765746:web:aa1ab13b66de2468e183eb"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
const db = getDatabase(app); // Realtime DB

export { db };
