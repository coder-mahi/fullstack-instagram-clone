// src/lib/firebase.js
import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { seedDatabase } from '../seed'; 
// import dotenv from 'dotenv';
// dotenv.config();

// const mail = process.env.REACT_APP_FIREBASE_EMAIL;
// const pwd = process.env.REACT_APP_FIREBASE_PASSWORD;

const config = {
    apiKey: "AIzaSyCEjLHqLpW5Prv-5zhb33RUhz6Z1RwrhXc",
    authDomain: "instagram-3a3d7.firebaseapp.com",
    projectId: "instagram-3a3d7",
    storageBucket: "instagram-3a3d7.appspot.com",
    messagingSenderId: "132423561098",
    appId: "1:132423561098:web:6e4ce7ed6d4f37c1d86273"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// // Function to sign in and seed the database
// firebase.auth().signInWithEmailAndPassword(mail,pwd)
//   .then(() => {
//     console.log('Authentication successful');
//     seedDatabase(firebase);  // Seed the database
//   })
//   .catch(error => {
//     console.error("Authentication failed:", error.message);
//   });

export { firebase, FieldValue };
