import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdPebuGW0S2gYcoP_ZwufD8uJgoUXMvXM",
  authDomain: "clearhire-da22a.firebaseapp.com",
  projectId: "clearhire-da22a",
  storageBucket: "clearhire-da22a.appspot.com",
  messagingSenderId: "870368708557",
  appId: "1:870368708557:web:e088db33182d38a7606684",
};

export const fire = initializeApp(firebaseConfig);
export const storage = getStorage(fire);
export const auth = getAuth(fire);
export const database = getFirestore(fire);
