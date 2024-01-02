// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYu_Zn4nZHJw1PmbFmz4hw5WwnKMyDTC4",
  authDomain: "auth-app-b043b.firebaseapp.com",
  projectId: "auth-app-b043b",
  storageBucket: "auth-app-b043b.appspot.com",
  messagingSenderId: "465770880587",
  appId: "1:465770880587:web:c6298af2f0ce8ff2c3f7ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;