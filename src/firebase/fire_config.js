

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBDay4Naf2KSbBeTsUnzwzEOX4Z14FHMQg",
  authDomain: "fir-login-245a8.firebaseapp.com",
  projectId: "fir-login-245a8",
  storageBucket: "fir-login-245a8.appspot.com",
  messagingSenderId: "126750152811",
  appId: "1:126750152811:web:4d74dda72cd1779a02f92e",
  measurementId: "G-LYCYFR8P57"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);