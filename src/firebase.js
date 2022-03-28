import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr8879hFhkYyWU_FQB20qZZWPtFXB3928",
  authDomain: "react-authentication-ea366.firebaseapp.com",
  projectId: "react-authentication-ea366",
  storageBucket: "react-authentication-ea366.appspot.com",
  messagingSenderId: "143130636284",
  appId: "1:143130636284:web:25c1b7a5039d486e45cc79",
  measurementId: "G-261LMXZL8H"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;