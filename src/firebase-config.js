import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYoCl0fvWMlfmK7mlJ5_f955pR7SzIN2w",
  authDomain: "clearhire-2dc9f.firebaseapp.com",
  projectId: "clearhire-2dc9f",
  storageBucket: "clearhire-2dc9f.appspot.com",
  messagingSenderId: "809012905621",
  appId: "1:809012905621:web:f2f3221aaa67dd08c0fd9c"
};

export const fire = initializeApp(firebaseConfig);
export const storage = getStorage(fire);
export const auth = getAuth(fire);
export const database = getFirestore(fire);
