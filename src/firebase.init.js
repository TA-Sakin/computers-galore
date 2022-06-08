// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
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
