
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth ,GoogleAuthProvider} from 'firebase/auth' ;
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBQ-ADPNza2S8Cbw0PTxu99N5vvTN8XVRo",
  authDomain: "fir-course-70967.firebaseapp.com",
  projectId: "fir-course-70967",
  storageBucket: "fir-course-70967.firebasestorage.app",
  messagingSenderId: "407139737228",
  appId: "1:407139737228:web:a918927c803d6863f3a5a9",
  measurementId: "G-874TLCY503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)

export const googleProvider=new GoogleAuthProvider();

export const db=getFirestore(app) ;