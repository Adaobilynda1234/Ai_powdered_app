// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8wf64q5kdvfofM1hFS-c1e45tINUZCcg",
  authDomain: "ai-powered-app-a938d.firebaseapp.com",
  projectId: "ai-powered-app-a938d",
  storageBucket: "ai-powered-app-a938d.firebasestorage.app",
  messagingSenderId: "177621336489",
  appId: "1:177621336489:web:f01202cc1a8ccd3a7c44b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);

// Set persistence correctly using imported functions
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Auth persistence error:", error);
});
