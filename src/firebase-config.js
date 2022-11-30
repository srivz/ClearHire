import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACghDZdyBg3lnZ5fIpz80OvaWkVU859LE",
  authDomain: "clearhire-dd29e.firebaseapp.com",
  projectId: "clearhire-dd29e",
  storageBucket: "clearhire-dd29e.appspot.com",
  messagingSenderId: "469717688214",
  appId: "1:469717688214:web:482bb1306e9f974ac287b7",
  measurementId: "G-814TXP49NH",
};

export const fire = initializeApp(firebaseConfig);
export const storage = getStorage(fire);
export const auth = getAuth(fire);
export const database = getFirestore(fire);
