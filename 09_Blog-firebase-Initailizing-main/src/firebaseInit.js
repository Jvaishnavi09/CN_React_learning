// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZZZsThHXNJyHNCm1RqRRR1kRBCpNfTt4",
  authDomain: "mybloggingapp-e7703.firebaseapp.com",
  projectId: "mybloggingapp-e7703",
  storageBucket: "mybloggingapp-e7703.appspot.com",
  messagingSenderId: "319776960016",
  appId: "1:319776960016:web:a8a68bfaf8987cec9fa495",
  measurementId: "G-5D6LQD9N0Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
