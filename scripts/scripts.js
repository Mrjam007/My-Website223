// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr08Fs7_buCvtx6NWZ2Ys-GMbuwPwmCuU",
  authDomain: "my-website-41938.firebaseapp.com",
  projectId: "my-website-41938",
  storageBucket: "my-website-41938.appspot.com",
  messagingSenderId: "301384550306",
  appId: "1:301384550306:web:0eda1e35205d8a80e694fb",
  measurementId: "G-1TJFL5S6DZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);