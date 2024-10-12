import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import { seedDatabase } from  '../seed';


const config = {
    apiKey: "AIzaSyCEjLHqLpW5Prv-5zhb33RUhz6Z1RwrhXc",
  authDomain: "instagram-3a3d7.firebaseapp.com",
  projectId: "instagram-3a3d7",
  storageBucket: "instagram-3a3d7.appspot.com",
  messagingSenderId: "132423561098",
  appId: "1:132423561098:web:aff2205b372ee915d86273"
}
const firebase = Firebase.initializeApp(config)
const {FieldValue} = Firebase.firestore;

// seedDatabase(firebase);

export {firebase, FieldValue};