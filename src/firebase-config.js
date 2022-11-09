import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOr1aVvUV23g9IrqUFw3h33jAHKHR5TeA",
    authDomain: "fir-tutorial-3050d.firebaseapp.com",
    projectId: "fir-tutorial-3050d",
    storageBucket: "fir-tutorial-3050d.appspot.com",
    messagingSenderId: "183121355715",
    appId: "1:183121355715:web:d70e677fe9a27d94655376",
    measurementId: "G-N70N138KJH"
  };

  const app = initializeApp(firebaseConfig)
  export const db= getFirestore(app)