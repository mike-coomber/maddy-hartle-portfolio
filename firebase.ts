import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6lpO2thLQuMfwr8-OVDFBPxKMd6gzUuA",
  authDomain: "portfolio-8d3d7.firebaseapp.com",
  projectId: "portfolio-8d3d7",
  storageBucket: "portfolio-8d3d7.appspot.com",
  messagingSenderId: "11212169547",
  appId: "1:11212169547:web:9fe614be5465e2bb56c8ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
