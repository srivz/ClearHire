import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmd9K0gqjhqdkyAAiKxa0oLPOoI4RKxbc",
  authDomain: "clearhire-16fa0.firebaseapp.com",
  databaseURL: "https://clearhire-16fa0-default-rtdb.firebaseio.com",
  projectId: "clearhire-16fa0",
  storageBucket: "clearhire-16fa0.appspot.com",
  messagingSenderId: "270898440669",
  appId: "1:270898440669:web:56c3e85932b7bfe39cee34",
};

export const fire = initializeApp(firebaseConfig);
export const storage = getStorage(fire);
export const auth = getAuth(fire);
export const database = getFirestore(fire);
