// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn2ApqNRFTCdvaIshTlYk1pTX8MXR8vUI",
  authDomain: "trelloclone-app.firebaseapp.com",
  projectId: "trelloclone-app",
  storageBucket: "trelloclone-app.appspot.com",
  messagingSenderId: "997471297604",
  appId: "1:997471297604:web:82e5c34253fedaa8871c11",
  databaseURL: "https://trelloclone-app-default-rtdb.firebaseio.com"
};


//provider.setCustomParameters({ prompt: 'select_account' });

// /export const signInWithGoogle = () => auth.signInWithPopup(provider);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
