// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9xAc6R_Q_xnFdZhh_GdMsAHBLxH_l_uE",
  authDomain: "fir-auth-8794d.firebaseapp.com",
  projectId: "fir-auth-8794d",
  storageBucket: "fir-auth-8794d.firebasestorage.app",
  messagingSenderId: "750970506600",
  appId: "1:750970506600:web:7926673acd968b772d1add"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);