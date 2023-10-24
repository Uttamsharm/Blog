
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh_rZQaxKmdNxaZFOT7bka-pjGlyjtTJ8",
  authDomain: "blogproject-ad7b7.firebaseapp.com",
  projectId: "blogproject-ad7b7",
  storageBucket: "blogproject-ad7b7.appspot.com",
  messagingSenderId: "103246696618",
  appId: "1:103246696618:web:3a59b7d35f639dd62280d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider();