// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCReLtu93xEImpF_bwGDwhuKPgvkl_0wwQ",
  authDomain: "clone-7f059.firebaseapp.com",
  projectId: "clone-7f059",
  storageBucket: "clone-7f059.appspot.com",
  messagingSenderId: "941869945416",
  appId: "1:941869945416:web:bd8682692e94c95f6c7e7d",
  measurementId: "G-4B1TP6B41F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);