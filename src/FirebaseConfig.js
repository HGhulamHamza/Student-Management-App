// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxY6_BG6NfE0XNYprV8vqMlkTtnEz1XNg",
  authDomain: "studentmanagement-app-498e8.firebaseapp.com",
  projectId: "studentmanagement-app-498e8",
  storageBucket: "studentmanagement-app-498e8.appspot.com",
  messagingSenderId: "1046782131423",
  appId: "1:1046782131423:web:8821a9107053646811bd6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app)

export {db}