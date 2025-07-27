// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqVJ3aWnEZtTXk4-u_qoag1zvlQQby9vw",
  authDomain: "react-context-api-practice.firebaseapp.com",
  projectId: "react-context-api-practice",
  storageBucket: "react-context-api-practice.firebasestorage.app",
  messagingSenderId: "443503146466",
  appId: "1:443503146466:web:4cdf0e128a057db1a3b5bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;