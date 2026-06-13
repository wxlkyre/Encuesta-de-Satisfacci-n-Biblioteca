import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaMwX_RXbYI1SSJ2yR1hYzhvVgT8hlYTw",
  authDomain: "encuesta-de-satisfaccion-cid.firebaseapp.com",
  projectId: "encuesta-de-satisfaccion-cid",
  storageBucket: "encuesta-de-satisfaccion-cid.firebasestorage.app",
  messagingSenderId: "72350384773",
  appId: "1:72350384773:web:1a64ce46e2ac028c241fec",
  measurementId: "G-8CR9EEN242",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
