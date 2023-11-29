// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8p7IG7YPyNAUWOhw9_FNtabLaviy_AQs",
  authDomain: "school-7cc8e.firebaseapp.com",
  projectId: "school-7cc8e",
  storageBucket: "school-7cc8e.appspot.com",
  messagingSenderId: "205528957965",
  appId: "1:205528957965:web:0b5ec4e0c128ba31ed4144",
  measurementId: "G-XRM4GCBJZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
