// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhRAOsy9SyZv3wuou8oDXB1eBkdjx_hVE",
  authDomain: "vibe-testing-33406.firebaseapp.com",
  projectId: "vibe-testing-33406",
  storageBucket: "vibe-testing-33406.appspot.com",
  messagingSenderId: "450060672584",
  appId: "1:450060672584:web:1018c2d905eb483617c27d",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
