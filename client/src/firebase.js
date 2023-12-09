// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-project-e0239.firebaseapp.com",
  projectId: "mern-estate-project-e0239",
  storageBucket: "mern-estate-project-e0239.appspot.com",
  messagingSenderId: "633926886922",
  appId: "1:633926886922:web:ff3bdb06565d5d79b161f3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);