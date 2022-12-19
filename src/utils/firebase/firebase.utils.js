// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCINeL5Og3P8WtVNVJTO7F72QM-11df7DI",
  authDomain: "crwn-clothe.firebaseapp.com",
  projectId: "crwn-clothe",
  storageBucket: "crwn-clothe.appspot.com",
  messagingSenderId: "811564860753",
  appId: "1:811564860753:web:9fb99ef609b02b492abf70",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
