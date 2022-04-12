// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcb8zSxBK5TvvzXCgm-bXPQZzlXauOoxI",
  authDomain: "ema-john-simple-acd61.firebaseapp.com",
  projectId: "ema-john-simple-acd61",
  storageBucket: "ema-john-simple-acd61.appspot.com",
  messagingSenderId: "12391068897",
  appId: "1:12391068897:web:3e03b15798e6b30d4133a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
