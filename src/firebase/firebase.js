// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ28P43kIUxcNFqEcRZeRxSHpmBFJhC-g",
  authDomain: "miniproject-bf784.firebaseapp.com",
  databaseURL: "https://miniproject-bf784-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "miniproject-bf784",
  storageBucket: "miniproject-bf784.appspot.com",
  messagingSenderId: "491200202445",
  appId: "1:491200202445:web:37b43abcf6d679ddf68b84",
  measurementId: "G-RZTFHRLMHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {app, auth};