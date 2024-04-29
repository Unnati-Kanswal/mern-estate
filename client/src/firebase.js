// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-41323.firebaseapp.com",
  projectId: "mern-estate-41323",
  storageBucket: "mern-estate-41323.appspot.com",
  messagingSenderId: "500424292068",
  appId: "1:500424292068:web:f04589b3204df6f2e95ef1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
