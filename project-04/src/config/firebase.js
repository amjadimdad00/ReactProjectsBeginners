// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUkC1_lzYM259v4HGCONLxzHHeUMr-tnI",
  authDomain: "firc00.firebaseapp.com",
  projectId: "firc00",
  storageBucket: "firc00.firebasestorage.app",
  messagingSenderId: "963272521943",
  appId: "1:963272521943:web:977bbd597e4094316d9892",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
