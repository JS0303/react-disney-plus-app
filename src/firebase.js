// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/aluth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxau5mKMZwTEoyjvGMlukkOXcKzbza2gE",
  authDomain: "react-disney-plus-app-5aa70.firebaseapp.com",
  projectId: "react-disney-plus-app-5aa70",
  storageBucket: "react-disney-plus-app-5aa70.appspot.com",
  messagingSenderId: "547951067484",
  appId: "1:547951067484:web:3becf833f352acf469c199",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
