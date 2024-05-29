// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,

  authDomain: "assignment-11-f266c.firebaseapp.com",
  projectId: "assignment-11-f266c",
  storageBucket: "assignment-11-f266c.appspot.com",
  messagingSenderId: "751632033149",
  appId: import.meta.env.VITE_APPID  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const Auth = getAuth(app) ;
export default Auth

