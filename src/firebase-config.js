// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'

import { getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiHyrY3vIJ7BpOFflp5mf56nnt4VvFvfY",
  authDomain: "chatapp-57a50.firebaseapp.com",
  projectId: "chatapp-57a50",
  storageBucket: "chatapp-57a50.appspot.com",
  messagingSenderId: "1040783974837",
  appId: "1:1040783974837:web:22720ebb12276cc644f9fc"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider  = new GoogleAuthProvider();
export const db = getFirestore(app);
