// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuAjneivIgHXlUh8zNQIFlTET0RblHCII",
  authDomain: "tulivu-suites-diani-506a3.firebaseapp.com",
  projectId: "tulivu-suites-diani-506a3",
  storageBucket: "tulivu-suites-diani-506a3.firebasestorage.app",
  messagingSenderId: "651626796672",
  appId: "1:651626796672:web:ad506bc2f919b9b3a07865",
  measurementId: "G-BB07NJHET6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);