// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdEdwhPGy1hY488d-mTIk6CKJ0IjQBVjM",
  authDomain: "eziv-gaming.firebaseapp.com",
  projectId: "eziv-gaming",
  storageBucket: "eziv-gaming.appspot.com",
  messagingSenderId: "371390931382",
  appId: "1:371390931382:web:4ef76501938ee0b5a5e117"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
}