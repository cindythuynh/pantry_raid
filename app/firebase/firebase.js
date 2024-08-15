// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDX2fw9J_zWW-lZQY-JBUrkZZw04afZMY",
  authDomain: "pantry-7dcdf.firebaseapp.com",
  projectId: "pantry-7dcdf",
  storageBucket: "pantry-7dcdf.appspot.com",
  messagingSenderId: "730812391690",
  appId: "1:730812391690:web:26e7de58fb58938d3c5af3",
  measurementId: "G-YBBG3CX60Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { app, db, auth };

export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (response) => updateProfile(response.user, { displayName: email })
  );
}