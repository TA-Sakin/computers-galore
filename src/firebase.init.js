// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  apiKey: "AIzaSyDf1EVuFTtYyQCYFkkExkqrwA0-wapMO0o",
  authDomain: "computer-galore.firebaseapp.com",
  projectId: "computer-galore",
  storageBucket: "computer-galore.appspot.com",
  messagingSenderId: "348861423737",
  appId: "1:348861423737:web:d3cfb8e4f21c65c49bf4a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
