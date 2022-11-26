// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOig_2EUpdaz_8YfPOmhPjZePuMbSUvzM",
    authDomain: "playing-40973.firebaseapp.com",
    projectId: "playing-40973",
    storageBucket: "playing-40973.appspot.com",
    messagingSenderId: "798779015272",
    appId: "1:798779015272:web:be38414fe90dbc30a4bbdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
// export const db = getfirestore();