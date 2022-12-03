import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwojnDB-4c9crjDgytQf5GLhDMMymLK48",
  authDomain: "clearhire-bf59c.firebaseapp.com",
  projectId: "clearhire-bf59c",
  storageBucket: "clearhire-bf59c.appspot.com",
  messagingSenderId: "1074080511722",
  appId: "1:1074080511722:web:5931c5784ea29aacdd0993",
  measurementId: "G-0GKTZE5NFP",
};

export const fire = initializeApp(firebaseConfig);
export const storage = getStorage(fire);
export const auth = getAuth(fire);
export const database = getFirestore(fire);
