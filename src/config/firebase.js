// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAPhWBHDxPgtBjACbjaAn6-OQDuGD2OAdQ",
  authDomain: "movieapp-e70ea.firebaseapp.com",
  projectId: "movieapp-e70ea",
  storageBucket: "movieapp-e70ea.appspot.com",
  messagingSenderId: "1047188318038",
  appId: "1:1047188318038:web:389b56a9669c273a7918f7",
  measurementId: "G-KKXTY6TK29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);