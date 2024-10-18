// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCkPkesdG1Afq4OsYbOwUpRW5ReltDevE",
  authDomain: "mern-book-inventory-c3510.firebaseapp.com",
  projectId: "mern-book-inventory-c3510",
  storageBucket: "mern-book-inventory-c3510.appspot.com",
  messagingSenderId: "529999682217",
  appId: "1:529999682217:web:360e29cde4981bbb7827b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;