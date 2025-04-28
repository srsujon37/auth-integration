// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Danger
const firebaseConfig = {
  apiKey: "AIzaSyC8WGuURF4GAvwgV12Z4L2YzGTZm5vVaJs",
  authDomain: "auth-integration-6f71c.firebaseapp.com",
  projectId: "auth-integration-6f71c",
  storageBucket: "auth-integration-6f71c.firebasestorage.app",
  messagingSenderId: "324563569618",
  appId: "1:324563569618:web:1b24178ba333f97a37960b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);