// firebaseConfig.js
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDz7y3sVgwZJjWwXlq47FHUBxfq4eJ1pK8",
    authDomain: "login-auth-60a1b.firebaseapp.com",
    projectId: "login-auth-60a1b",
    storageBucket: "login-auth-60a1b.firebasestorage.app",
    messagingSenderId: "459017212872",
    appId: "1:459017212872:web:7c1696a5fd91fd043b26fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDB = getStorage(app);
