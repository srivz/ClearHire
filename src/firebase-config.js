import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAgZcM2BiyWl2BWNyBJUYOSRlCDpfRz25g",
  authDomain: "clearhire-28c23.firebaseapp.com",
  projectId: "clearhire-28c23",
  storageBucket: "clearhire-28c23.appspot.com",
  messagingSenderId: "216245484813",
  appId: "1:216245484813:web:b8a6e10211aec06b7d4444",
  measurementId: "G-F3D6RE5NXF",
};

export const fire = initializeApp(firebaseConfig);
export const storage = getStorage(fire);
export const auth = getAuth(fire);
const fire2 = initializeApp(firebaseConfig, "secondary");
export const auth2 = getAuth(fire2);
export const database = getFirestore(fire);
