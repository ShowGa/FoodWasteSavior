// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "foodwastesavior.firebaseapp.com",
  projectId: "foodwastesavior",
  storageBucket: "foodwastesavior.firebasestorage.app",
  messagingSenderId: "173845648391",
  appId: "1:173845648391:web:6128f095a7b89ace7006a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
