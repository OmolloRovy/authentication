// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARWR_mJld89zUVF-W_-qjW9iYr_PweWAM",
  authDomain: "react-social-media-32f92.firebaseapp.com",
  projectId: "react-social-media-32f92",
  storageBucket: "react-social-media-32f92.appspot.com",
  messagingSenderId: "448651907677",
  appId: "1:448651907677:web:25750580c2897345b433b4",
  measurementId: "G-FDD7S8VE6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider  = new GoogleAuthProvider();