import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8csaZhrKR0kq-Ao1WIyYku_pkYlb3GdU",
  authDomain: "clearhire-d3068.firebaseapp.com",
  projectId: "clearhire-d3068",
  storageBucket: "clearhire-d3068.appspot.com",
  messagingSenderId: "41104250785",
  appId: "1:41104250785:web:86b5adbd8e1c3b9f06dde0",
  measurementId: "G-G93SJLMGY5",
};

export const fire = initializeApp(firebaseConfig);
export const storage = getStorage(fire);
export const auth = getAuth(fire);
export const database = getFirestore(fire);
