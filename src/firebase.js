import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9MkBJpbN0oMN9Mn_6gx9iIEP7fogHAjw",
  authDomain: "netflix-clone-ea05f.firebaseapp.com",
  projectId: "netflix-clone-ea05f",
  storageBucket: "netflix-clone-ea05f.appspot.com",
  messagingSenderId: "898818985292",
  appId: "1:898818985292:web:3ca690ecdb062c1e1b13e9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
}