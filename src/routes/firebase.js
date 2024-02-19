// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvd_w-JmlFHiFxiBGtLMVA9WyAg9iBkEY",
  authDomain: "hardware-7a6c5.firebaseapp.com",
  projectId: "hardware-7a6c5",
  storageBucket: "hardware-7a6c5.appspot.com",
  messagingSenderId: "667356008450",
  appId: "1:667356008450:web:7c460dba6c82ee2fc7d71b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default app;